import React, { useRef } from 'react';
import { Levels } from '../util/defaultOptions';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function NewCoffeeForm({ AddCoffee }) {
    const nameRef = useRef()
    const priceRef = useRef()
    const weightRef = useRef()
    const roastRef = useRef()
    const formRef = useRef()

    const roastOptions = Levels.map((level) => {
        return (
            <option key={level} value={level}>
                {level}
            </option>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: nameRef.current.value,
            price: parseFloat(priceRef.current.value),
            weight: parseFloat(weightRef.current.value),
            roastLevel: parseFloat(roastRef.current.value),
        }
        let errors = AddCoffee(data)
        errors.then(data => {
            if (data) {
                console.log(data.response.data);
            } else {
                console.log('no errors.')
            }
            formRef.current.reset()
        })
    }

    return (
        <Container className="bg-dark py-5 d-flex justify-content-center">
            <Row>
                <Form
                    role="form"
                    id="coffee-form"
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <h4 className="text-center text-light mb-3">Add New Coffee to the list:</h4>
                    <Form.Group controlId="name">
                        <Form.Label className="text-center text-light">
                            Name
                        </Form.Label>
                        <Form.Control
                            required
                            name="name"
                            ref={nameRef}
                            className="mb-1"
                            type="text"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label className="text-center text-light">
                            Price (in euros)
                        </Form.Label>
                        <Form.Control
                            required
                            name="price"
                            ref={priceRef}
                            min={0}
                            step={0.01}
                            type="number"
                            className="mb-1"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="weight">
                        <Form.Label className="text-center text-light">
                            Weight (in grams)
                        </Form.Label>
                        <Form.Control
                            required
                            name="weight"
                            ref={weightRef}
                            placeholder="Enter weight in grams"
                            min={0}
                            step={0.01}
                            type="number"
                            className="mb-1"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="roastLevel">
                        <Form.Label className="text-center text-light">
                            Level
                        </Form.Label>
                        <Form.Select
                            required
                            name="roastLevel"
                            ref={roastRef}
                            className="mb-1"
                        >
                            <option hidden>Choose roast level</option>
                            {roastOptions}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Button
                            form="coffee-form"
                            variant="outline-success"
                            className="mx-auto my-3 form-button"
                            type="submit"
                        >
                            Add Coffee
                        </Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}