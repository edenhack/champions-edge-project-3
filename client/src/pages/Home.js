import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
//import Nav from "../components/NavBar";

const Home = () => {
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
                    <h3>Search your summoner</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
