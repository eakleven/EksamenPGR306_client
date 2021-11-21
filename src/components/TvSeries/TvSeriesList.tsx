import React, { FC, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';
import TvSeriesItem from './TvSeriesItem';

const TvSeriesList: FC = () => {
    const { tvSeries } = useContext(TvSeriesContext) as TvSeriesContextType;

    const createTvSeriesList = () => {
        return (
            <Row xs={1} md={2} lg={4} className='mt-4'>
                {tvSeries.map((tvSeries: ITvSeries, key: number) => {
                    return (
                        <Col key={key}>
                            <TvSeriesItem
                                id={tvSeries.id}
                                name={tvSeries.name}
                                image={tvSeries.image}
                            />
                        </Col>
                    );
                })}
            </Row>
        );
    };
    return <div>{createTvSeriesList()}</div>;
};

export default TvSeriesList;

{
    /* <Row xs={1} md={2} lg={4}>
{actors.map((actor: IActors, key: number) => {
    return (
        <Col key={key}>
            <ActorItem
                id={actor.id}
                name={actor.name}
                image={actor.image}
            />
        </Col>
    );
})}
</Row> */
}
