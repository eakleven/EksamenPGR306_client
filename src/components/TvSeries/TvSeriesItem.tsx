import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ITvSeries } from '../../interfaces/interface';

const TvSeriesItem: FC<ITvSeries> = ({ id, name, image }) => {
    return (
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
    );
};

export default TvSeriesItem;
