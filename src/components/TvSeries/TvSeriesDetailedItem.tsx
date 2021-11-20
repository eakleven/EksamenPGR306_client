import { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const TvSeriesDetailedItem: FC = () => {
    const { id } = useParams();

    const { getTvSeriesById } = useContext(
        TvSeriesContext
    ) as TvSeriesContextType;

    const [tvSeries, setTvSeries] = useState<ITvSeries>();

    useEffect(() => {
        if (id) {
            const _tvSeries = getTvSeriesById(id);
            setTvSeries(_tvSeries);
        }
    }, []);

    return (
        <div>
            <h1>{tvSeries?.name}</h1>
        </div>
    );
};

export default TvSeriesDetailedItem;
