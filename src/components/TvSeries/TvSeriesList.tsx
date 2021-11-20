import React, { FC, useContext } from 'react';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';
import TvSeriesItem from './TvSeriesItem';

const TvSeriesList: FC = () => {
    const { tvSeries } = useContext(TvSeriesContext) as TvSeriesContextType;

    const createTvSeriesList = () => {
        return tvSeries.map((tvSeries: ITvSeries, key: number) => {
            return (
                <article key={key}>
                    <TvSeriesItem
                        id={tvSeries.id}
                        name={tvSeries.name}
                        image={tvSeries.image}
                    />
                </article>
            );
        });
    };
    return <div>{createTvSeriesList()}</div>;
};

export default TvSeriesList;
