import { Container, Form, ListGroup } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const TodoList = () => {
    const [input, setInput] = useState('');
    let tasksArr = ["t1", "t2"];
    
    const handleTask = newTask => tasksArr.push(newTask);

    return (
    <Container>
        <h1>Todos</h1>
        <Form action="#" onSubmit={() => handleTask(document.getElementById("newtask").value) }>
            <input className="form-control" value={input} onInput={e => setInput(e.target.value)} id="newtask" type="text" placeholder="What needs to be done?" autoComplete="off" />
        </Form>
        <ListGroup as="ul">
            {tasksArr.map((task) => <li>{task}</li>)}
        </ListGroup>
    </Container>
    )
}
export default TodoList;
