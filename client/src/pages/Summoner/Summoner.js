import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Form from "../../components/Form/Form";
import "./Summoner.css";

const Summoner = () => {
    return (
        <Container fluid>
            <Row>
                <Col size = "md-4">
                </Col>
                <Col size = "md-4">
                    <h1>Champion's Edge </h1>
                </Col>
                <Col size = "md-4">
                </Col>
            </Row>
            <Row>
                <Col size = "md-4">
                </Col>
                <Col size = "md-4">
                    <br></br>
                    <Form/>
                </Col>
            </Row>
        </Container>
    );
}

export default Summoner;
