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
        if (_tvSeries) setTvSeries(_tvSeries);
    };

    const addTvSeries = (newTvSeries: ITvSeries, image: File) => {
        TvSeriesService.addTvSeries(newTvSeries, image);
        setTvSeries([...tvSeries, newTvSeries]);
    };

    const getTvSeriesById = (id: string) => {
        return tvSeries.find((tvSeries) => tvSeries.id === id) as ITvSeries;
    };

    const deleteTvSeries = (id: string) => {
        TvSeriesService.removeTvSeries(id);
        const newStateArray: ITvSeries[] = tvSeries.filter(
            (tvSeries) => tvSeries.id !== id
        );
        setTvSeries(newStateArray);
    };

    const updateTvSeries = (updatedTvSeries: ITvSeries) => {
        TvSeriesService.changeTvSeries(updatedTvSeries);
    };

    return (
        <>
            <TvSeriesContext.Provider
                value={{
                    tvSeries,
                    addTvSeries,
                    getTvSeriesById,
                    deleteTvSeries,
                    updateTvSeries,
                }}
            >
                {children}
            </TvSeriesContext.Provider>
        </>
    );
};
