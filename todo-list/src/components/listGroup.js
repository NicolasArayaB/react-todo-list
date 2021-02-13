import CloseButton from './clsBtn.js';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';

const MyList = (props) => {
    const [showButton, setShowButton] = useState(false);

    return <ListGroup>
            {Array.isArray(props.tasksList) ? props.tasksList.map((task, index) =>
                <ListGroup.Item key={index} value={task.label} onMouseEnter={() => setShowButton(() =>
                    [index, true])} onMouseLeave={() =>
                        setShowButton(() => [index, false])}>
                {showButton[1] && showButton[0] === index ? <CloseButton remove={props.removeTask} id={index} /> : ""}
                {task.label}
                </ListGroup.Item>) : props.setTasksList([])}
            {props.tasksList.length === 0 ? <ListGroup.Item>"No tasks, add a task"</ListGroup.Item> :
                <ListGroup.Item disabled>{props.tasksList.length} item left</ListGroup.Item>}
            <ListGroup.Item className="decor1" />
            <ListGroup.Item className="decor2" />
        </ListGroup>
}

export default MyList;