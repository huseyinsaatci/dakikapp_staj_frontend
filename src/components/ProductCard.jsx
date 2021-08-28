import React from 'react';
import { Card, CardImg, Button, CardHeader, CardText, Col } from 'reactstrap';

const ProductCard = ({ productId, imageUrl, productName, quantity, addToCart }) => {
    return (
        <Col key={productId} md="3">
            <Card body style={{ backgroundColor: "#242c3d" }} className="card-shadow text-center text-white">
                <CardImg className="icon-md icon-space mx-auto" top src={imageUrl} />
                <CardHeader>{productName}</CardHeader>
                <CardText className="mt-2">Stock: {quantity}</CardText>
                <Button className="bg-success" onClick={() => { addToCart(productId) }}>Add To Cart</Button>
            </Card>
        </Col>
    );
}

export default ProductCard;
