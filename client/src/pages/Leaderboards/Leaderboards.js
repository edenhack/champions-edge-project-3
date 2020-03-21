import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Form from "../../components/Form/Form";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./Leaderboards.css";

const Leaderboards = () => {
    return (
        <Container fluid>
            <Row>
                <Col size = "md-4">
                </Col>
                <Col className="brandTitle" size="md-4">
                    <center>
                        <h3>Champion's Edge</h3>
                    </center>
                </Col>
            </Row>
            <Row>
                <Col size = "md-4">
                </Col>
                <Col size = "md-4">
                    <br></br>
                    <Form/>
                    <br></br>
                </Col>
            </Row>
            <Row>
            <Container fluid>
                <Row>
                    <Col size = "md-2">
                    </Col>
                    <Col size = "md-8">
                        <Jumbotron>
                        </Jumbotron>
                    </Col>
                    <Col size = "md-2">
                    </Col>
                </Row>
            </Container>
            </Row>
        </Container>
    );
}

export default Leaderboards;
