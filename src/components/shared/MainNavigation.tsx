import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavigation: FC = () => {
    return (
        <Navbar bg='light' variant='light'>
            <Container>
                <Navbar.Brand>Tv-series hub</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to={'/'}>
                        Hjem
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/tvseries'}>
                        Tv-series
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/actors'}>
                        Actors
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MainNavigation;
