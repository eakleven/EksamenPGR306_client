import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IActors } from '../../interfaces/interface';

const ActorItem: FC<IActors> = ({ id, name, image }) => {
    return (
        <article>
            <Link
                to={`/actorDetails/${id}`}
                style={{ textDecoration: 'none', color: 'black' }}
            >
                <h1>{name}</h1>
                <img
                    alt={image}
                    src={`https://localhost:5001/images/${image}`}
                />
            </Link>
        </article>
    );
};

export default ActorItem;
