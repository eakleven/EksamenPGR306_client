import React, { FC, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const TvSeriesItem: FC<ITvSeries> = ({ id, name, image }) => {
    const { deleteTvSeries } = useContext(
        TvSeriesContext
    ) as TvSeriesContextType;

    return (
        <>
            <Card>
                <Link
                    to={`/tvSeriesDetails/${id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <Card.Title>{name}</Card.Title>
                    <Card.Img
                        alt={image}
                        src={`https://localhost:5001/images/${image}`}
                    />
                </Link>
                <Button
                    variant='danger'
                    onClick={() => deleteTvSeries(id as string)}
                >
                    Delete me
                </Button>
            </Card>
        </>
    );
};

export default TvSeriesItem;
