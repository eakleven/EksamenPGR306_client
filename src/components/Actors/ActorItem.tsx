import React, { FC, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ActorsContext } from '../../contexts/ActorsContext';
import { IActors } from '../../interfaces/interface';
import { ActorsContextType } from '../../types/ActorsContextType';

const ActorItem: FC<IActors> = ({ id, name, image }) => {
    const { deleteActor } = useContext(ActorsContext) as ActorsContextType;
    return (
        <Card>
            <Link
                to={`/actorDetails/${id}`}
                style={{ textDecoration: 'none', color: 'black' }}
            >
                <Card.Title>{name}</Card.Title>
                <Card.Img
                    alt={image}
                    src={`https://localhost:5001/images/${image}`}
                />
            </Link>

            <Button variant='danger' onClick={() => deleteActor(id as string)}>
                Delete me
            </Button>
        </Card>
    );
};

export default ActorItem;
