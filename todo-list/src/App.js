import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MyList from './components/listGroup';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
    const [input, setInput] = useState('');
    const [tasksList, setTasksList] = useState([])

    // Add Items using Input    
    const addItem = event => {
        event.preventDefault();
        let newTaskList = [...tasksList, { label: input, done: false }]
        setTasksList(() => newTaskList);
        setInput('');
        updateTaskUser()
    }

    // Remove task from TasksList
    const removeTask = event => {
        let obj = tasksList
        let target = event.target
        let targetValue = document.getElementById(target.id).parentElement.parentElement.parentElement.getAttribute("value")

        setTasksList(obj.filter((o) => {
            return o.label !== targetValue
        }))

        updateTaskUser()
    }

    // Create user
    const createUser = async () => {
        const request = await fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas',
            {
                method: "POST",
                body: JSON.stringify([]),
                headers: { "Content-Type": "application/json" }
            })

        const json = await request.json();
        const data = json;
        console.log('New user response', data)
    }

    // Fetch existing data
    const fetchData = async () => {
        const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        const request = await fetch(`https://assets.breatheco.de/apis/fake/todos/user/nicolas`, settings);
        const json = await request.json();
        const data = json;

        setTasksList(data)
    }

    // Update tasksList    
    const updateTaskUser = async () => {
        const settings = {
            method: "PUT",
            body: JSON.stringify(tasksList),
            headers: { "Content-Type": "application/json" }
        }

        const request = await fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas', settings);
        const json = await request.json();
        const data = json;
        console.log("update response", data);
    }

    // Delete all Tasks and user
    const deleteAll = async () => {
        const request = await fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas', { method: "DELETE" })
        const json = await request.json();
        const data = json
        createUser()
        fetchData()
        console.log("delete response", data)
    }

    useEffect(() => {
        createUser()
        fetchData()
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <Link to="/">
                        <h1>todos</h1>
                    </Link>
                </Col>
            </Row>
            <Form onSubmit={addItem} >
                <input className="form-control" value={input} onInput={e => setInput(e.target.value)} type="text"
                    placeholder="What needs to be done?" autoComplete="off" autoFocus />
            </Form>
            <MyList tasksList={tasksList} setTasksList={setTasksList} removeTask={removeTask} />
            <Row>
                <Col>
                    <Button className="float-left m-5" variant="secondary" onClick={() => updateTaskUser()}>Save</Button>
                    <Button className="float-right m-5" variant="secondary" onClick={() => deleteAll()}>Remove All</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default TodoList;
