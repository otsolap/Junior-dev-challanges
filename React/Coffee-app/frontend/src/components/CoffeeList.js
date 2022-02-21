import React from 'react'
import { CoffeeItem } from './CoffeeItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function CoffeeList({ coffees }) {
    return (
        <Container className="py-3 bg-dark d-flex justify-content-center flex-column">
            <Row className="flex-column ">
                <h3 className="text-center text-light mb-3">Greatest coffees of all time:</h3>
                {coffees.length > 0 ? coffees.map(coffee => (
                    <CoffeeItem
                        name={coffee.name}
                        price={coffee.price}
                        weight={coffee.weight}
                        roastLevel={coffee.roastLevel}
                        key={coffee._id}
                    />
                )) : (
                    <Card className="bg-dark">
                        <Card.Title className="text-light text-center">No Coffees.</Card.Title>
                    </Card>
                )}
            </Row>
        </Container>
    )
}