import React, { useEffect, useState } from 'react'
import { Col, Container, Row, ProgressBar } from 'react-bootstrap'
import { Button, ButtonGroup, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import './Quiz.css'
import Question from './Question';
import QuesTionButton from './QuesTionButton'
import QuestionBox from './QuestionBox'
import * as fiIcon from 'react-icons/fi';
import 'react-clock/dist/Clock.css';
import Webcam from 'react-webcam'


function Quiz() {

    const { title } = useParams()
    const [now, setNow] = useState(90);
    let [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(1)
    const [incCount, setIncCount] = useState(0);
    const [userChoosingOption, setUserChoosingOption] = useState(null);
    const [keyboard, setKeyboard] = useState()
    // const [isRadioBtnActive, setIsRadioBtnActive] = useState(null);
    const [allSavedData, setallSavedData] = useState([]);
    const [question_state, setQuestion_state] = useState({
        lef_question: "",
        completed_question: "",
    });
    let score = 0;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        questions = Question.map((question) => {
            return {
                ...question,
                answers: [question.correct_answer, ...question.incorrect_answer].sort(
                    () => Math.random() * -0.5
                ),
            };
        }).sort(() => Math.random() - 0.5);


        setQuestions(questions);

    }, []);
    // console.log(questions[incCount]);

    const NextQs = (e) => {
        let nextCount = incCount + 1;
        if (nextCount === questions.length) {
            // setallSavedData({
            //     ...allSavedData,
            //     ...userChoosingOption,
            // });
            setIncCount(questions.length - 1);
            setUserChoosingOption(null);
        } else {
            // setallSavedData({
            //     ...allSavedData,
            //     ...userChoosingOption,
            // });
            setIncCount(incCount + 1);
            setUserChoosingOption(null);
        }
    };
    const SavedJs = (e) => {
        let nextCount = incCount + 1;
        if (nextCount === questions.length) {
            setallSavedData({
                ...allSavedData,
                ...userChoosingOption,
            });
            setIncCount(questions.length - 1);
            setUserChoosingOption(null);
        } else {
            setallSavedData({
                ...allSavedData,
                ...userChoosingOption,
            });
            // setIncCount(incCount );
            setUserChoosingOption(null);
        }
    };

    const PrevQs = (e) => {
        if (incCount === 0) {
            setIncCount(0);
        } else {
            setIncCount(incCount - 1);
        }
    };

    const quesTionTab = (param) => {
        let index = questions.findIndex((elm) => {
            return elm.qno === param;
        });
        setIncCount(index);
        setNumber(index + 1);
    };
    // console.log(number);

    const sellectOption = (Qno, e) => {
        console.log('sellect')
        setUserChoosingOption({
            [Qno]: e.target.value,
        });
    };

    const submitData = (e) => {
        setQuestion_state({
            ...question_state,
            completed_question: Object.keys(allSavedData).length,
            lef_question: questions.length - Object.keys(allSavedData).length,
        });
        e.preventDefault();
        const map = new Map();
        for (let i = 0; i < questions.length; i++) {
            map.set(questions[i].qno, questions[i].correct_answer);
        }

        Object.keys(allSavedData).forEach((elm) => {
            const expectedAns = map.get(elm);
            const userAns = allSavedData[elm];
            if (expectedAns === userAns) {
                score += 5;
            } else {
                score -= 1;
            }
        });
        console.log(`TOTAL SCORE : ${score}`);
    };

    const clearRadioBtn = (qno) => {
        delete allSavedData[+qno];
    };
    useEffect(() => {
        window.addEventListener("keypress", (event) => {
            console.log(event);
        })
    }, [])
    return (
        <Container fluid className="quiz-body py-3">
            {/*console.log('count')*/}
            <Row className="align-items-center">
                <Col md="6">
                    <Typography variant="h4" color="#f55777">{title} <span className="fs-5">By REPL</span></Typography>
                </Col>
                <Col md="6" className="d-flex justify-content-end">
                    <Paper elevation={0} variant="outlined">
                        <Webcam width="150px" height="100%" />
                    </Paper>
                </Col>
            </Row>

            <ProgressBar animated now={now} variant={now > 30 ? now > 60 ? now > 90 ? "danger" : "warning" : "info" : "success"} className="my-2" />
            {/* Question Blocks */}
            <Row>
                <Col sm="3"> {/* left Side Question */}
                    <Paper elevation={3} className="px-1 py-3 questions">
                        {questions.map((data, idx) => {
                            // console.log(idx+1);
                            return (
                                <QuesTionButton
                                    key={idx}
                                    quesTionTab={quesTionTab}
                                    qno={data.qno}
                                    idx={idx + 1}
                                    number={number}
                                    allSavedData={allSavedData}
                                    keys={idx}
                                />

                            );

                        })}

                    </Paper>
                </Col>

                {/* Right Side question */}
                <Col sm="9">
                    <Paper elevation={3} className="answer">
                        {
                            questions.length > 0
                                ?
                                <QuestionBox
                                    sellectOption={sellectOption}
                                    data={questions[incCount]}
                                    allSavedData={allSavedData}
                                    SavedJs={SavedJs}
                                    number={number}

                                />
                                : null

                        }
                        <Row className="justify-content-center align-items-end">
                            <Col sm="6">
                                <ButtonGroup className="question_box_btn" variant="text" color="warning">
                                    <Button
                                        onClick={SavedJs}>save</Button>
                                    <Button
                                        onClick={() => {
                                            clearRadioBtn(questions[incCount].qno);
                                        }}
                                    >
                                        clear
                                    </Button>
                                </ButtonGroup>
                            </Col>

                            <Col sm="6">
                                <ButtonGroup variant="outlined" className="button">
                                    <Button
                                        onClick={PrevQs}
                                        startIcon={<fiIcon.FiChevronsLeft />}
                                    >
                                        prev
                                    </Button>
                                    {questions.length === incCount + 1 ? (
                                        <Button
                                            onClick={submitData} color="error"
                                            endIcon={<fiIcon.FiUploadCloud />}
                                        >
                                            submit
                                        </Button>
                                    ) : <Button
                                        onClick={NextQs}
                                        endIcon={<fiIcon.FiChevronsRight />}
                                    >
                                        next
                                    </Button>}
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        </Container>
    )
}

export default Quiz
