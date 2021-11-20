import { FC, useContext, useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ActorsContext } from '../../contexts/ActorsContext';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { IActors, ITvSeries } from '../../interfaces/interface';
import { ActorsContextType } from '../../types/ActorsContextType';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const TvSeriesDetailedItem: FC = () => {
    const { id } = useParams();

    const { getTvSeriesById, deleteTvSeries } = useContext(
        TvSeriesContext
    ) as TvSeriesContextType;
    const { actors } = useContext(ActorsContext) as ActorsContextType;

    const [tvSeries, setTvSeries] = useState<ITvSeries>();

    const [filteredActors, setFilteredActors] = useState<IActors[]>([]);

    useEffect(() => {
        if (id) {
            const _tvSeries = getTvSeriesById(id);
            setTvSeries(_tvSeries);
        }
    }, []);

    useEffect(() => {
        filterActors();
    }, [tvSeries]);

    const onClick = () => {
        deleteTvSeries(id as string);
    };

    const filterActors = () => {
        const _filteredActors: Array<IActors> = [];
        actors.forEach((actor: IActors) => {
            if (tvSeries?.actors?.includes(actor.name)) {
                _filteredActors.push(actor);
            }
        });
        setFilteredActors(_filteredActors);
    };

    const renderActors = () => {
        return (
            <Row xs={1} md={2} lg={4}>
                {filteredActors.map((actor: IActors, key: number) => (
                    <Col className={'mt-4'}>
                        <Card style={{ width: '15rem', height: '25rem' }}>
                            <Card.Img
                                variant='top'
                                src={`https://localhost:5001/images/${actor.image}`}
                            />
                            <Card.Title>{actor.name}</Card.Title>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    };

    const renderView = () => {
        if (tvSeries) {
            return (
                <>
                    <article>
                        <h1>{tvSeries.name}</h1>
                        <h2>
                            {tvSeries.startYear} - {tvSeries.endYear}
                        </h2>
                        <h3>Category: {tvSeries.category}</h3>
                        <img
                            alt={tvSeries.image}
                            src={`https://localhost:5001/images/${tvSeries.image}`}
                        />
                    </article>
                    <article>
                        <Link to={'/tvseries'}>
                            <Button onClick={onClick}>Delete me</Button>
                        </Link>
                    </article>
                </>
            );
        }
    };

    return (
        <div>
            {renderView()}
            {renderActors()}
        </div>
    );
};

export default TvSeriesDetailedItem;
