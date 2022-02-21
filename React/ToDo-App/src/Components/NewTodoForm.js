import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UseInputState from '../Hooks/UseInputState';

export function NewTodoForm({ addTodo }) {
    const [value, onInputChange, reset] = UseInputState("")

    return (
        <Container className="bg-dark py-5 d-flex justify-content-center">
            <Row className="custom-w-55">
                <Form onSubmit={e => {
                    e.preventDefault();
                    addTodo(value)
                    reset();
                }}>
                    <Form.Group>
                        <Form.Label className="text-center text-light">
                            Tasks To Do
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="task"
                            id="task"
                            value={value}
                            onChange={onInputChange}
                            className="mb-1"
                        />
                        <Form.Text className="py-3 text-muted text-light">
                            Add new task
                        </Form.Text>
                    </Form.Group>
                    <Button
                        variant="success"
                        className="mt-1"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}