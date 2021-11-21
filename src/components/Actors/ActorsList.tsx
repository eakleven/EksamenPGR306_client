import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ActorsContext } from '../../contexts/ActorsContext';
import { IActors } from '../../interfaces/interface';
import { ActorsContextType } from '../../types/ActorsContextType';
import ActorItem from './ActorItem';

const ActorsList = () => {
    const { actors } = useContext(ActorsContext) as ActorsContextType;
    const createActorsList = () => {
        return (
            <Row xs={1} md={2} lg={4}>
                {actors.map((actor: IActors, key: number) => {
                    return (
                        <Col key={key} className='mt-3'>
                            <ActorItem
                                id={actor.id}
                                name={actor.name}
                                image={actor.image}
                            />
                        </Col>
                    );
                })}
            </Row>
        );
    };
    return <div>{createActorsList()}</div>;
};

export default ActorsList;
