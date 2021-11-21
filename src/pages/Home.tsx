import { FC } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home: FC = () => {
    return (
        <Container>
            <article>
                <Card className='mt-5'>
                    <Card.Header>Information</Card.Header>
                    <Card.Text>
                        Here you can add your own favourite actors and
                        tv-series. to get more information about either one,
                        simply press the image. A few examples are already put
                        in.
                    </Card.Text>
                </Card>
            </article>

            <article className='mt-4'>
                <Link
                    to={`/tvseries`}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <Button size='lg'>Go to Tv-series</Button>
                </Link>
            </article>
            <article className='mt-4'>
                <Link
                    to={`/actors`}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <Button variant='success' size='lg'>
                        Go to actors
                    </Button>
                </Link>
            </article>
        </Container>
    );
};

export default Home;
