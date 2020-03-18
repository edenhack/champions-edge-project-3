import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import "./Fourzerofour.css";

const Fourzerofour = () => {
    return (
        <Container fluid>
            <Row>
                <Col size = "md-4">
                </Col>
                <Col size = "md-4">
                    <h1>404 error page not found </h1>
                </Col>
                <Col size = "md-4">
                </Col>
            </Row>
            <Row>
            <Col size = "md-4">
            </Col>
            <Col size = "md-4">
                <h3>Due to unknown problems, we cannot find the route you are requesting</h3>
            </Col>
            </Row>
        </Container>
    );
}

export default Fourzerofour;
