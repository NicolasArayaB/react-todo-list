import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import CloseButton from './components/clsBtn.js'
import { Container, Form, ListGroup, Button, Row, Col } from 'react-bootstrap';

const TodoList = () => {
    const [input, setInput] = useState('');
    const [tasksList, setTasksList] = useState([])
    const [showButton, setShowButton] = useState(false);

    // Add Items using Input    
    const addItem = event => {
        event.preventDefault();
        setTasksList([...tasksList, {label: input, done: false}]);
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
    const createUser = ()=>{
        fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas',{
            method:"POST",
            body: JSON.stringify([]),
            headers:{
                "Content-Type": "application/json"
            }
        }).then( (response)=>{
                console.log('New user response',response)
        })
    }

    // Fetch existing data
    const fetchData = async () => {
        const settings = {
            method:"GET",
            headers:{ "Content-Type":"aplication/json" }
        }

        const request = await fetch(
            `https://assets.breatheco.de/apis/fake/todos/user/nicolas`, settings
            );

        const json = await request.json();
        const data = json;

        setTasksList(data)

    }

    // Update tasksList    
    const updateTaskUser = () => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas',{
            method:"PUT",
            body: JSON.stringify(tasksList),
            headers:{
                "Content-Type": "application/json"
            }
        }).then( (response) => {
                console.log("update response",response)
        })
    }

    const deleteAll = () => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas',{
            method:"DELETE",
        }).then( (response)=>{
                console.log("delete response",response)
        })
    }
    const deleteUser = () => {
        deleteAll();
        createUser();
    }

    useEffect(() => {
        createUser()
        fetchData()
     }, []);

    return (
        <Container>
            <h1>todos</h1>
            <Form onSubmit={addItem} >
                <input className="form-control" value={input} onInput={e => setInput(e.target.value)} type="text"
                    placeholder="What needs to be done?" autoComplete="off" autoFocus  />
            </Form>
            <ListGroup>
                {tasksList.length !== 0 ? tasksList.map((task, index) =>
                    <ListGroup.Item key={index} value={task.label} onMouseEnter={() => setShowButton(() =>
                        [index, true])} onMouseLeave={() =>
                            setShowButton(() => [index, false])}>
                    {showButton[1] && showButton[0] === index ? <CloseButton remove={removeTask} id={index} /> : ""}
                    {task.label}
                    </ListGroup.Item>) : ""}
                {tasksList.length === 0 ? <ListGroup.Item>"No tasks, add a task"</ListGroup.Item> :
                    <ListGroup.Item disabled>{tasksList.length} item left</ListGroup.Item>}
                <ListGroup.Item className="decor1" />
                <ListGroup.Item className="decor2" />
            </ListGroup>
            <Row>
                <Col>
                    <Button className="deleteAll" variant="secondary" onClick={() => deleteUser()}>Remove All</Button>
                </Col>
            </Row>
            
        </Container>
    )
}
export default TodoList;
