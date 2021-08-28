import { Container, Row } from 'reactstrap';
import UserMenuCard from '../components/UserMenuCard';
import login_icon from '../assets/icons/login.svg';
import register_icon from '../assets/icons/register.svg';

export default function MainPage() {
    return (
        <div>
            <Container className="spacer">
                <Row>
                    <UserMenuCard img={register_icon} buttonMsg="Register" link="/register" colMd={6} />
                    <UserMenuCard img={login_icon} buttonMsg="Log In" link="/user" colMd={6} />
                </Row>
            </Container>
        </div>
    );
}