import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TodoItem({ task, id, complete, removeTodo, toggleComplete }) {
    return (
        <Col
            md={12}
            className={`todo-item d-flex justify-content-start pt-1 align-items-baseline ${complete ? 'bg-success' : 'bg-secondary'}`}
        >
            <p
                style={
                    { textDecoration: complete ? "line-through" : "" }
                }
                className="text-light task-name">{task}</p>
            <div className="btn-container">
                <Button
                    variant={complete ? "success" : "secondary"}
                    onClick={() => toggleComplete(id)}>
                    <FontAwesomeIcon aria-label={complete ? "Task completed" : "Work in Progress"} icon={faCheckCircle} />
                </Button>
                <Button
                    variant="danger"
                    onClick={() =>
                        removeTodo(id)
                    }>
                    <FontAwesomeIcon
                        aria-label="Delete Task"
                        icon={faTrashAlt} />
                </Button>
            </div>
        </Col >
    );
}