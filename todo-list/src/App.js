import { Container, Form, ListGroup } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CloseButton from './components/clsBtn.js'

const TodoList = () => {
    const [input, setInput] = useState('');
    const [tasksList, setTasks] = useState('')
    const [showButton, setButton] = useState(false);
    
    const addItem = event => {
        event.preventDefault();
        setTasks([...tasksList, {name: input}]);
        setInput('');
    }

    const removeTask = event => {
        let arr = tasksList;
        let index = event.target

        if(index !== -1){
            arr.splice(index, 1);
            setTasks(arr)
        }
    }

    return (
    <Container>
        <h1>todos</h1>
        <Form onSubmit={addItem} >
            <input className="form-control" value={input} onInput={e => setInput(e.target.value)} id="newtask" type="text"
                placeholder="What needs to be done?" autoComplete="off" autoFocus  />
        </Form>
            <ListGroup>
                {tasksList.length !== 0 ? tasksList.map((task, index) => 
                    <ListGroup.Item key={index} onMouseEnter={() => setButton(true)} onMouseLeave={() => setButton(false)}>
                        {showButton ? <CloseButton remove={removeTask} id={index} /> : ""}
                        {task.name}
                    </ListGroup.Item>) : ""}
                {tasksList.length === 0 ? <ListGroup.Item>"No tasks, add a task"</ListGroup.Item> : 
                    <ListGroup.Item disabled>{tasksList.length} item left</ListGroup.Item>}
            </ListGroup>
    </Container>
    )
}
export default TodoList;
