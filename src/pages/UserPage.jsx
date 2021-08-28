import { Route, Switch } from 'react-router-dom';
import { Row, Container } from 'reactstrap';
import useToken from '../service/UseToken'
import LogInForm from "../components/LogInForm";
import UserMenuCard from '../components/UserMenuCard';
import ProductsPage from '../pages/ProductsPage';
import CartPage from './CartPage';
import OrderPage from './OrdersPage';
import product_icon from '../assets/icons/product.svg';
import cart_icon from '../assets/icons/cart.svg';
import order_icon from '../assets/icons/order.svg';
import { BrowserRouter } from 'react-router-dom';

const UserPages = () => {
    return (
        <div>
            <Container className="spacer">
                <Row>
                    <UserMenuCard img={product_icon} buttonMsg="Go To Product List" link="/products" colMd={4} />
                    <UserMenuCard img={cart_icon} buttonMsg="Go To Your Cart" link="/cart" colMd={4} />
                    <UserMenuCard img={order_icon} buttonMsg="Go To Your Orders" link="/orders" colMd={4} />
                </Row>
            </Container>
        </div>
    );
}

export default function UserPage() {
    const { token, setToken } = useToken();

    if (!token) {
        return <LogInForm setToken={setToken} />
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/user" component={UserPages} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/orders" component={OrderPage} />
            </Switch>
        </BrowserRouter>
    );
}