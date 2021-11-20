import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavigation: FC = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>Project</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to={'/'}>
                        Hjem
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/tvseries'}>
                        Tv-series
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MainNavigation;
