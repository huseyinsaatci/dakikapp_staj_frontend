import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import OrderTable from '../components/OrderTable';

const OrderPage = () => {
    const [orders, setOrders] = useState([[]]);
    useEffect(() => {
        getUserOrders();
    }, []);

    const id = sessionStorage.getItem('userId');
    const token = { Authorization: "Bearer " + sessionStorage.getItem("token").replaceAll("\"", "") };

    async function getUserOrders() {
        const url = "http://localhost:8080/orders/" + id;

        await axios.get(url, {
            headers: token
        }).then((response) => {
            console.log(response);
            setOrders(response.data);
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className="mb-2" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Orders</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            {orders.map(OrderTable)}
        </div>
    );
}


export default OrderPage;