import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ActorsContext } from '../../contexts/ActorsContext';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { IActors, ITvSeries } from '../../interfaces/interface';
import { ActorsContextType } from '../../types/ActorsContextType';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';
import GiveRole from './GiveRole';

const ActorsDetailedView = () => {
    const { id } = useParams();

    const { getActorById } = useContext(ActorsContext) as ActorsContextType;
    const { tvSeries } = useContext(TvSeriesContext) as TvSeriesContextType;

    const [actor, setActor] = useState<IActors>();
    const [open, setOpen] = useState(false);
    const [roles, setRoles] = useState<string[]>([]);

    useEffect(() => {
        if (id) {
            const _actor = getActorById(id);
            setActor(_actor);
        }
    }, []);

    useEffect(() => {
        if (actor) {
            rolesPlayed();
        }
    }, [actor]);

    const rolesPlayed = () => {
        setRoles([]);
        tvSeries.forEach((tvSeries: ITvSeries) => {
            if (tvSeries.actors?.includes(actor!.name)) {
                setRoles((roles) => [...roles, tvSeries.name]);
            }
        });
    };

    const renderRoles = () => {
        return (
            <div>
                <h2>Have played in the following series:</h2>
                {roles.map((role: string, key: number) => {
                    return <h3 key={key}>{role}</h3>;
                })}
            </div>
        );
    };

    const renderView = () => {
        if (actor) {
            return (
                <>
                    <article>
                        <h1>{actor.name}</h1>
                        <h2>Born in {actor.birthYear}</h2>

                        {renderRoles()}

                        <img
                            alt={actor.image}
                            src={`https://localhost:5001/images/${actor.image}`}
                        />
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
                                    <GiveRole
                                        rolesPlayed={rolesPlayed}
                                        name={actor.name}
                                    />
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
