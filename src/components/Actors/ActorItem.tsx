import React, { FC } from 'react';
import { IActors } from '../../interfaces/interface';

const ActorItem: FC<IActors> = ({ name, image }) => {
    return (
        <article>
            <h1>{name}</h1>
            <img alt={image} src={`https://localhost:5001/images/${image}`} />
        </article>
    );
};

export default ActorItem;
