import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import Form from "../../components/Form/Form";
import "./Home.css";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size = "md-2">
                </Col>
                <Col size = "md-8">
                  <center>
                    <h1>Welcome to Champion's Edge</h1>
                  </center>
                </Col>
                <Col size = "md-2">
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
