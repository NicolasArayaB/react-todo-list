import React from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

const Home = () => {
    const mySubmit = (e) => {
        e.preventDefault();
        console.log(document.getElementById("userForm").textContent)
    };
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to your "To do" list!</h1>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Form>
                        <Form.Group >
                            <Form.Control id="userForm" className="mb-2 mr-sm-2" placeholder="User Name" onSubmit={() => mySubmit()} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Home;