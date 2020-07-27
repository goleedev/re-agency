import React from 'react'
import {CardGroup, Card,CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function ProductCard() {
    return (
        <CardGroup className="product__container">
            <Card className="product__item">
                <CardImg className="product__img" top src={require("../../images/8074.jpg")} alt="house" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card className="product__item">
                <CardImg className="product__img" top src={require("../../images/8074.jpg")} alt="house" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card  className="product__item">
                <CardImg className="product__img" top src={require("../../images/8074.jpg")} alt="house" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </CardGroup>
    )
}

export default ProductCard
