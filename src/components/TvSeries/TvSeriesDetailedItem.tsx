import { FC, useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const TvSeriesDetailedItem: FC = () => {
    const { id } = useParams();

    const { getTvSeriesById, deleteTvSeries } = useContext(
        TvSeriesContext
    ) as TvSeriesContextType;

    const [tvSeries, setTvSeries] = useState<ITvSeries>();

    useEffect(() => {
        if (id) {
            const _tvSeries = getTvSeriesById(id);
            setTvSeries(_tvSeries);
        }
    }, []);

    const onClick = () => {
        console.log(id);
        deleteTvSeries(id as string);
    };

    return (
        <div>
            <h1>{tvSeries?.name}</h1>
            <Link to={'/tvseries'}>
                <Button onClick={onClick}>Slett meg</Button>
            </Link>
        </div>
    );
};

export default TvSeriesDetailedItem;
