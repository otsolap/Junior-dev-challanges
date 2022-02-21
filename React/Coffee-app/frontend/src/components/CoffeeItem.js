import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CoffeeItem({ name, price, weight, roastLevel }) {
    const bgStyling = []
    if (roastLevel === 5) {
        bgStyling.push('bg-danger')
    } else if (roastLevel > 2) {
        bgStyling.push('bg-warning')
    } else {
        bgStyling.push('bg-info')
    }

    return (
        <Col
            sm={2}
            md={6}
            className={`coffee-item mx-auto mb-3 justify-content-center pt-1 align-items-baseline`}
        >
            <Card className={bgStyling.join(' ')}>
                <Card.Header className="icon-container text-center">
                    <FontAwesomeIcon
                        alt="Coffee Cup"
                        icon={faCoffee}
                    />
                </Card.Header>
                <Card.Title className="text-light text-center coffee-name">{name}</Card.Title>
                <Card.Body className="numbers-container my-1">
                    <Card.Text className="text-light text-center">Price: <span>{price}  &#8364;</span></Card.Text>
                    <Card.Text className="text-light text-center">Weight: <span>{weight}<i>g</i></span></Card.Text>
                </Card.Body>
                <Card.Footer className="roast-container my-1">
                    <Card.Text className="text-light text-center"> Roast Level: {roastLevel}
                        {roastLevel === 5 ? (
                            <span className="text-light"> | Otso Approved!</span>
                        ) : (
                            ''
                        )}
                    </Card.Text>
                </Card.Footer>
            </Card>
        </Col>
    )
}