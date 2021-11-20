import { createContext, FC, useEffect, useState } from 'react';
import { ITvSeries } from '../interfaces/interface';
import { TvSeriesService } from '../services/TvSeriesService';
import { TvSeriesContextType } from '../types/TvSeriesContextType';

export const TvSeriesContext = createContext<TvSeriesContextType | null>(null);

export const TvSeriesProvider: FC = ({ children }) => {
    const [tvSeries, setTvSeries] = useState<ITvSeries[]>([]);

    useEffect(() => {
        getTvSeries();
    }, []);

    const getTvSeries = async () => {
        const _tvSeries = await TvSeriesService.getAll();
        setTvSeries(_tvSeries);
    };

    const addTvSeries = (newTvSeries: ITvSeries, image: File) => {
        TvSeriesService.addTvSeries(newTvSeries, image);
        setTvSeries([...tvSeries, newTvSeries]);
    };

    const getTvSeriesById = (id: string) => {
        return tvSeries.find((tvSeries) => tvSeries.id === id) as ITvSeries;
    };

    return (
        <>
            <TvSeriesContext.Provider
                value={{ tvSeries, addTvSeries, getTvSeriesById }}
            >
                {children}
            </TvSeriesContext.Provider>
        </>
    );
};
