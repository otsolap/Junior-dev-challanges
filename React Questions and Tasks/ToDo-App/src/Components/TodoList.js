import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { TodoItem } from './TodoItem';

export default function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
        <Container className="py-3 bg-dark d-flex justify-content-center flex-column">
            <Row className="flex-column margin-x-max">
                {todos.map(todo => (
                    <TodoItem
                        task={todo.task}
                        key={todo.id}
                        id={todo.id}
                        complete={todo.complete}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </Row>
        </Container>
    );
}

