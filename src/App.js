import React, { Fragment } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import Dashboard from './dashbaord/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from './quiz/Quiz'
import ErrorPage from './errorPage/Index'

function App() {
  return (
    <Router>
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg={1}>
              <Sidebar />
            </Col>
            <Col lg={11}>
            <Routes>
                <Route exact path="/:id/:title" element={<Quiz />} />
                <Route exact path="/" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
                </Routes>
              </Col>
          </Row>
        </Container>
        {/* Notification */}
        <ToastContainer theme={"colored"} position={"bottom-right"} pauseOnFocusLoss={false} />
      </Fragment>
    </Router>
  )
}

export default App
