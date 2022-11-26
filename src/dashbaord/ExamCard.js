import React, { useState } from 'react';
import { Avatar, AvatarGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
import { styled } from '@mui/system';
import * as fiIcon from 'react-icons/fi'
import ExamList from './examList'
import ShareLink from '../components/ShareLink';
import ExamDetails from './ExamDetails';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;

    return (<IconButton {...other} color={"info"} />);
})(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto'
}));

const userAvater = (params) => {
    const { id, link } = params;
    return (
        <Avatar key={id} alt="Remy Sharp" src={link} />
    )
}

function ExamCard() {
    const [expanded, setExpanded] = useState(false);
    const [link, setLink] = useState(false)
    const [popup, setPopup] = useState(false)
    const [dailogTitle, setDailogTitle] = useState('')
    const [examDetails, setExamDetails] = useState('')

    const handleExpandClick = (event) => {
        setExpanded(!expanded);
        // console.log(event);
    };

    const shareLink = (e) => {
        setLink(!link);
        setDailogTitle(e);
    }

    const examPopup = (e) => {
        setPopup(!popup);
        setExamDetails(e);
    }
    return (
        <Row className="mt-3">
            {
                ExamList.map((params) => {
                    const { id, title, date, image, info, participent } = params
                    return (
                        <Col key={id} lg={"4"} sm={"12"}>
                            <Card className="card mb-4">
                                <CardHeader
                                    avatar={
                                        <AvatarGroup max={3} variant={"circular"}>
                                            {participent.map(userAvater)}
                                        </AvatarGroup>
                                    }
                                    title={title}
                                    subheader={date}
                                />
                                <div className="images">
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={image}
                                        alt="Paella dish"
                                    />
                                </div>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" className="sort-info">
                                        {info}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton onClick={() => examPopup({ id, title, date, info })}>
                                        <fiIcon.FiFolderPlus color="#f55777" />
                                    </IconButton>
                                    <ExamDetails
                                        open={popup}
                                        handleClose={() => setPopup(!popup)}
                                        examDetails={examDetails}

                                    />


                                    <IconButton
                                        color={"warning"}
                                        onClick={() => shareLink({ title, id })}
                                    >
                                        <fiIcon.FiShare2 />
                                    </IconButton>
                                    <ShareLink open={link} handleClose={() => setLink(false)} dailogTitle={dailogTitle} />

                                    <ExpandMore
                                        expand={expanded}
                                        onClick={() => handleExpandClick(id)}
                                        aria-expanded={expanded}
                                        aria-label="show more"

                                    >
                                        <fiIcon.FiChevronDown />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <p className="discription">
                                            <span>Details: </span>
                                            {info}
                                        </p>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ExamCard
