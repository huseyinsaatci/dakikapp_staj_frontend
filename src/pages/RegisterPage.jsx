import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    async function register() {
        if (password != confirmPassword) return;

        const url = "http://localhost:8080/users/register";
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }

        await axios.post(url, data)
            .then((response) => {
                console.log(response)
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
                            <h1 className="title font-bold">Register</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Form className="row mx-auto">
                            <FormGroup className="col-md-6">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input type="firstName" className="form-control" id="firstName"
                                    onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input type="lastName" className="form-control" id="lastName"
                                    onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Input type="phoneNumber" className="form-control" id="phoneNumber"
                                    onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="email">Email Address</Label>
                                <Input type="email" className="form-control" id="email"
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" className="form-control" id="password"
                                    onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="confirmpwd">Confirm Password</Label>
                                <Input type="password" className="form-control" id="confirmpwd"
                                    onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                            </FormGroup>
                            <Col md="12" className="text-center pt-3">
                                <Button type="button" className="btn btn-success waves-effect waves-light m-r-10"
                                    onClick={() => { register() }}>Register</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}