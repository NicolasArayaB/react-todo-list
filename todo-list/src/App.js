import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import MyList from './components/listGroup'
import { Container, Form, Button } from 'react-bootstrap';

const TodoList = () => {
    const [input, setInput] = useState('');
    const [tasksList, setTasksList] = useState([])

    // Add Items using Input    
    const addItem = event => {
        event.preventDefault();
        console.log(tasksList, "pre") 
            setTasksList([...tasksList, {label: input, done: false}]);
            setInput('');
            updateTaskUser()
            console.log(tasksList, "post")
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
    const createUser =  async()=>{
        const request = await fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas',
        {
            method:"POST",
            body: JSON.stringify([]),
            headers:{"Content-Type": "application/json"}
        })
        
        const json = await request.json();
        const data = json;
        console.log('New user response',data)
    }

    // Fetch existing data
    const fetchData = async() => {
        const settings = {
            method:"GET",
            headers:{ "Content-Type":"aplication/json" }
        }

        const request = await fetch(`https://assets.breatheco.de/apis/fake/todos/user/nicolas`, settings);
        const json = await request.json();
        const data = json;

        setTasksList(data)
    }

    // Update tasksList    
    const updateTaskUser = async() => {
        const settings = {
            method:"PUT",
            body: JSON.stringify(tasksList),
            headers:{ "Content-Type": "application/json" }
        }

        const request = await fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas', settings);
        const json = await request.json();
        const data = json;
        console.log("update response",data);
    }

    // Delete all Tasks and user
    const deleteAll = async () => {
        const request = await fetch('https://assets.breatheco.de/apis/fake/todos/user/nicolas', {method:"DELETE"})
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
            <h1>todos</h1>
            <span>{JSON.stringify(tasksList)}</span>
            <Form onSubmit={addItem} >
                <input className="form-control" value={input} onInput={e => setInput(e.target.value)} type="text"
                    placeholder="What needs to be done?" autoComplete="off" autoFocus  />
            </Form>
            <MyList tasksList={tasksList} setTasksList={setTasksList} removeTask={removeTask} />
            <Button className="deleteAll" variant="secondary" onClick={() => deleteAll()}>Remove All</Button>
        </Container>
    )
}
export default TodoList;
