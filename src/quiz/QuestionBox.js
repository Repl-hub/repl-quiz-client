import React, { useEffect, useState } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import Clock from 'react-clock'

function QuestionBox({ data, sellectOption, allSavedData, SavedJs, number }) {
  const [time, setTime] = useState(new Date());

  //   const [check, setcheck] = useState({
  //     isagree: false,
  //   });

  //   const handlechange = (e) => {
  //     const target = e.target;
  //     let name = target.name;
  //     let value = target.checked;
  //     console.log("handlechange");

  //     setcheck({
  //       ...check,
  //       [name]: value,
  //     });
  //   };

  const { qno, question, answers } = data;

  let allSavedDataLength = Object.keys(allSavedData).length;
  let ans;

  function userOptionCheck() {
    let allSavedDataToArray = Object.entries(allSavedData);
    let map = new Map(allSavedDataToArray);

    ans = map.get(qno);

    // console.log(map, ans, qno, "map");
  }

  if (allSavedDataLength) {
    userOptionCheck();
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])


  return (
    <div className="qustions-box">
      {/*allSavedData ? console.log(allSavedData, "all") : null*/}
      {/*console.log(data, "data")*/}
      <Row className="ques">
        <Col sm="10">
          <h5>{number}. &nbsp;{question}</h5>
        </Col>
        <Col sm="2">
        <Clock value={time} renderNumbers={true} renderMinuteMarks={true} />
        </Col>
      </Row>

      <form className="option">
        {answers.map((option, i) => {
          return (
            <Option
              key={i}
              choosingOptionValue={allSavedDataLength > 0 ? ans : null}
              qno={qno}
              optionValue={answers[i]}
              sellectOption={sellectOption}
              allSavedData={allSavedData}
              idx={i}
              SavedJs={SavedJs}
            />
          );
        })}
      </form>
    </div>
  );
}

const Option = ({ sellectOption, optionValue, qno, allSavedData, idx, choosingOptionValue, handlechange, SavedJs }) => {
  // let ischecked = false;
  // const newAllSaveData = Object.entries(allSavedData);
  // for (let [key, value] of newAllSaveData) {

  //   if (key == qno && value == optionValue) {
  //     ischecked = true
  //     console.log('ok')
  //   } else {
  //     ischecked = false
  //     console.log('no')
  //   }
  // }

  return (
    <InputGroup className="my-2">
      <InputGroup.Radio
        onClick={(e) => {
          sellectOption(qno, e);
        }}
        // onClick={SavedJs}
        // onChange={SavedJs}
        type="radio"
        id="option2"
        name="correct"
        value={optionValue}
        checked={choosingOptionValue === optionValue ? true : null}
      />
      {/* {toString(choosingOptionValue) == toString(optionValue)} */}
      <FormControl value={optionValue} disabled />
      {/* console.log(choosingOptionValue, optionValue, "choose") */}
    </InputGroup>
  );
};

export default QuestionBox;
