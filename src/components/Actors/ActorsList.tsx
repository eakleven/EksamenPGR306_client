import React, { useContext } from 'react';
import { ActorsContext } from '../../contexts/ActorsContext';
import { IActors } from '../../interfaces/interface';
import { ActorsContextType } from '../../types/ActorsContextType';
import ActorItem from './ActorItem';

const ActorsList = () => {
    const { actors } = useContext(ActorsContext) as ActorsContextType;
    const createActorsList = () => {
        return actors.map((actor: IActors, key: number) => {
            return (
                <article key={key}>
                    <ActorItem
                        id={actor.id}
                        name={actor.name}
                        image={actor.image}
                    />
                </article>
            );
        });
    };
    return <div>{createActorsList()}</div>;
};

export default ActorsList;
