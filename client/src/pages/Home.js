import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
//import Nav from "../components/NavBar";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size = "md-6">
                    <h1>Champion's Edge</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;