import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({product}) => {
    const {name, details, price} = product;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default Cards;