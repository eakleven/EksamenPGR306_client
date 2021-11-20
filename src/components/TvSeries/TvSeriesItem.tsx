import React, { FC, useContext } from 'react';
import { Button } from 'react-bootstrap';
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
            <article>
                <Link
                    to={`/tvSeriesDetails/${id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <h1>{name}</h1>
                    <img
                        alt={image}
                        src={`https://localhost:5001/images/${image}`}
                    />
                </Link>
            </article>
            <article>
                <Button onClick={() => deleteTvSeries(id as string)}>
                    Delete me
                </Button>
            </article>
        </>
    );
};

export default TvSeriesItem;
