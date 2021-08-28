import { Container, Row, Col, Table } from 'reactstrap';

const ProductRow = ({ productId, productName, productCode, quantity }) => {
    return (
        <tr key={productId}>
            <td>{productId}</td>
            <td>{productName}</td>
            <td>{productCode}</td>
            <td>{quantity}</td>
        </tr>
    )
}

export default function Order(productList) {
    return (
        <Container className="my-5">
            <Row>
                <Col md="12">
                    <div className="table-responsive text-center">
                        <Table bordered className="text-white">
                            <thead>
                                <tr >
                                    <th >Id</th>
                                    <th>Product Name</th>
                                    <th>Product Code</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map(ProductRow)}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}