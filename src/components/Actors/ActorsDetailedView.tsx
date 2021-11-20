import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ActorsContext } from '../../contexts/ActorsContext';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { IActors } from '../../interfaces/interface';
import { ActorsContextType } from '../../types/ActorsContextType';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';
import GiveRole from './GiveRole';

const ActorsDetailedView = () => {
    const { id } = useParams();

    const { getActorById, deleteActor } = useContext(
        ActorsContext
    ) as ActorsContextType;

    const [actor, setActor] = useState<IActors>();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (id) {
            const _actor = getActorById(id);
            setActor(_actor);
        }
    }, []);

    const deleteA = () => {
        console.log('hei');
        deleteActor(id as string);
    };

    const renderView = () => {
        if (actor) {
            return (
                <>
                    <article>
                        <h1>{actor.name}</h1>
                        <img
                            alt={actor.image}
                            src={`https://localhost:5001/images/${actor.image}`}
                        />
                    </article>
                    <article>
                        <Link to={'/actors'}>
                            <Button variant='danger' onClick={deleteA}>
                                Delete me
                            </Button>
                        </Link>
                    </article>
                    <article>
                        <div className={'col-md-12 text-center'}>
                            <Button
                                onClick={() => setOpen(!open)}
                                variant={'primary'}
                                size={'lg'}
                                aria-controls='addRole'
                                aria-expanded={open}
                            >
                                Add new role
                            </Button>
                            <Collapse in={open}>
                                <div id={'addRole'}>
                                    <GiveRole name={actor.name} />
                                </div>
                            </Collapse>
                        </div>
                    </article>
                </>
            );
        }
    };

    return <>{renderView()}</>;
};

export default ActorsDetailedView;
