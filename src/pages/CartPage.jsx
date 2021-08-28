import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import axios from 'axios';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        getUserCartDB();
    }, []);
    const id = sessionStorage.getItem('userId');
    const token = { Authorization: "Bearer " + sessionStorage.getItem("token").replaceAll("\"", "") };

    async function orderCartDB() {
        if (cart == []) return;

        const url = "http://localhost:8080/orders/" + id;

        await axios.post(url, {}, {
            headers: token
        }).then(() => {
            deleteAllFromCart();
        }, (error) => {
            console.log(error);
        });
    }

    async function getUserCartDB() {
        const url = "http://localhost:8080/carts/" + id;

        await axios.get(url, {
            headers: token
        }).then((response) => {
            setCart(response.data);
        }, (error) => {
            console.log(error);
        });
    }

    async function deleteFromCartDB(productId) {
        const url = "http://localhost:8080/carts";

        await axios.delete(url, {
            headers: token,
            data: {
                userId: id,
                productId: productId
            }
        }
        ).then(() => {
            deleteFromCart(productId);
        }, (error) => {
            console.log(error);
        });
    }

    async function submitQuantityDB(productId, quantity) {
        const url = "http://localhost:8080/carts";

        await axios.post(url, {
            userId: id,
            productId: productId,
            quantity: quantity
        }, {
            headers: token
        }).catch((error => {
            console.log(error);
        }));
    }

    const increaseQuantity = (productId) => {
        setCart(
            cart.map((product) => {
                if (product.productId == productId) product.quantity += 1
                return product
            })
        )
    }

    const decreaseQuantity = (productId) => {
        setCart(
            cart.map((product) => {
                if (product.productId == productId && product.quantity > 1) product.quantity -= 1
                return product
            })
        )
    }

    const deleteFromCart = (productId) => {
        setCart(
            cart.filter((product) => {
                return product.productId != productId
            })
        );
    }

    const deleteAllFromCart = () => { setCart([]); }

    const ProductRow = ({ productId, productName, productCode, quantity }) => {
        return (
            <tr key={productId}>
                <td>{productId}</td>
                <td>{productName}</td>
                <td>{productCode}</td>
                <td>{quantity}</td>
                <td>
                    <Button size="sm" className="bg-success mr-2 px-3"
                        onClick={() => { increaseQuantity(productId) }}>+</Button>
                    <Button size="sm" className="bg-danger px-3 mr-3"
                        onClick={() => { decreaseQuantity(productId) }}>-</Button>
                    <Button size="sm" className="bg-info px-3 mr-3"
                        onClick={() => { submitQuantityDB(productId, quantity) }}>Submit</Button>
                    <Button size="sm" className="bg-danger px-3"
                        onClick={() => { deleteFromCartDB(productId) }}>Delete</Button>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <div className="mb-2" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Cart</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive text-center">
                            <Table className="text-white">
                                <thead>
                                    <tr>
                                        <th >Id</th>
                                        <th>Product Name</th>
                                        <th>Product Code</th>
                                        <th>Quantity</th>
                                        <th>Set Quantity/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(ProductRow)}
                                </tbody>
                            </Table>
                            <Button size="lg" className="bg-success mt-3"
                                onClick={() => { orderCartDB() }}>Order</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CartPage;