import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, Button, Col } from 'reactstrap';

const UserMenuCard = ({ img, buttonMsg, link, colMd }) => {
    return (
        <Col md={colMd}>
            <Card body style={{ backgroundColor: "#cfd7e8" }} className="card-shadow text-center">
                <CardImg className="icon-md icon-space mx-auto" top src={img} />
                <Link to={link}>
                    <Button>{buttonMsg}</Button>
                </Link>
            </Card>
        </Col>
    );
}

export default UserMenuCard;
