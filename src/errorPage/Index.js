import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './error.css'

function Index() {
    return (
        <Container className="page_404">
            <Row className="row">
                <Col sm={"12"}>
                    <div className="four_zero_four_bg"></div>

                    <div className="contant_box_404">
                        <h2 className="text-capitalize">
                            Look like you're lost
                        </h2>
                        <p className="text-capitalize">the page you are looking for is under constraction!</p>

                        <Link to="/" className="link_404 btn">Go to Home</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Index
