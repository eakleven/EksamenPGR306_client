import React, { useState } from 'react';
import { Button, Collapse, Container } from 'react-bootstrap';
import ActorsList from '../components/Actors/ActorsList';
import PostActors from '../components/Actors/PostActors';

const Actors = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <div className={'col-md-12 text-center'}>
                <Button
                    onClick={() => setOpen(!open)}
                    variant={'primary'}
                    size={'lg'}
                    aria-controls='addActorForm'
                    aria-expanded={open}
                >
                    Add new actor
                </Button>
                <Collapse in={open}>
                    <div id={'addActorForm'}>
                        <PostActors />
                    </div>
                </Collapse>
                <ActorsList />
            </div>
        </Container>
    );
};

export default Actors;
