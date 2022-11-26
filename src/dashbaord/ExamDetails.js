import React from 'react'
import { AppBar, Button, Box, Dialog, IconButton, Slide, Toolbar, Typography, Paper } from '@mui/material'
import * as fiIcon from 'react-icons/fi'
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function toggleFullScreen(elem) {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
}

function ExamDetails({ open, handleClose, examDetails }) {
    const { id, title, date, info } = examDetails;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar variant="regular">
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {title}
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <fiIcon.FiX />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        p: 3,
                        width: '100%',
                        height: '90%',
                    },
                }}>
                <Paper elevation={3}>
                    <Typography variant="h5" color="#f55777" align="justify">Exam Date: <span>{date}</span></Typography>

                    <Typography variant="caption text" align="justify">
                        {info}
                    </Typography>
                    <br />
                    <Typography variant="h6" color="#ff7961" align="center">Last Date of Registration is one day before from Exam Date ({date}).</Typography>
                    <Link to={`/${id}/${title}`}>
                        <Button
                            autoFocus
                            color="warning"
                            variant="contained"
                            style={{ clear: "both", float: "right" }}
                            size="large"
                            onClick={() => toggleFullScreen(document.body)}>
                            Register for Exam
                        </Button>
                    </Link>
                </Paper>
            </Box>

        </Dialog>
    )
}

export default ExamDetails
