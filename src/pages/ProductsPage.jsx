import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Row, Col, Container } from 'reactstrap';

async function getAllProducts(setProducts) {
    const url = "http://localhost:8080/products";

    await axios.get(url, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token").replaceAll("\"", "")
        }
    }).then((response) => {
        let products = response.data
        products.map((obj) => { obj.addToCart = addProductToCart });
        setProducts(products);
    }, (error) => {
        console.log(error);
    });
}

function addProductToCart(productId) {
    const url = "http://localhost:8080/carts";
    axios.post(url, {
        userId: sessionStorage.getItem('userId'),
        productId: productId,
        quantity: 1
    }, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token").replaceAll("\"", "")
        }
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts(setProducts);
    }, []);
    return (
        <div id="card-component">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col md="7" className="text-center">
                        <h1 className="title font-bold">Products</h1>
                    </Col>
                </Row>
                <Row>
                    {products.map(ProductCard)}
                </Row>
            </Container>
        </div>
    )
}

export default ProductsPage;