import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm="auto mt-5">
                    <h1>Welcome to Nico's "To do" list!</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm={2} className="mt-5">
                    <Link to="/list">
                        <Button variant="secondary">Click me!</Button>
                    </Link>
                </Col>
            </Row>

        </Container>
    );
};

export default Home;