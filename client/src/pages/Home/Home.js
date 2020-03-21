import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import "./Home.css";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col size = "md-7">
                </Col>
                <Col size = "md-5">
                    <h1>Champion's Edge</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
