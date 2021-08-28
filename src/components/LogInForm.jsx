import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LogInForm({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function logIn() {
        const url = "http://localhost:8080/login";

        await axios.post(url, {
            "email": email,
            "password": password
        })
            .then((response) => {
                sessionStorage.setItem('userId', JSON.stringify(response.data.userId));
                setToken(response.data.jwtToken);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Log In</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Form className="col-md-5 mx-auto">
                            <FormGroup className="row-md-6">
                                <Label htmlFor="email">Email Address</Label>
                                <Input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup className="row-md-6">
                                <Label htmlFor="password">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />
                            </FormGroup>
                            <Link to="user" >
                                <Col md="12" className="text-center pt-3">
                                    <Button onClick={() => logIn()} type="submit" className="btn btn-success waves-effect waves-light m-r-10">Login</Button>
                                </Col>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}