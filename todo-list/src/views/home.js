import { Container, Row, Col, Form } from "react-bootstrap"

export const Home = () => {
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
                            <Form.Control id="userForm" className="mb-2 mr-sm-2" placeholder="User Name" onSubmit={() => console.log(document.getElementById("userForm").textContent)} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    )
}