import { Container, Form, ListGroup } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const TodoList = () => {
    let tasksArr = ["1", "2", "3"];

    const [input, setInput] = useState('');
    const [tasksList, setTasks] = useState(tasksArr)
    
    const handleTask = newTask => {
        setTasks(tasksArr.push(newTask));
        console.log(tasksList);
        setInput("");
    }

    return (
    <Container>
        <h1>Todos</h1>
        <Form onSubmit={() => handleTask(document.getElementById("newtask").value) }>
            <input className="form-control" value={input} onInput={e => setInput(e.target.value)} id="newtask" type="text" 
                placeholder="What needs to be done?" autoComplete="off" />
        </Form>
        <ListGroup as="ul">
            {tasksArr ? tasksArr.map((task) => <li>{task}</li>) : <li>"No tasks, add a task"</li>}
        </ListGroup>
    </Container>
    )
}
export default TodoList;
