

import { createContext, FC, useEffect, useState } from "react"
import { ITvSeries } from "../interfaces/interface";
import { TvSeriesService } from "../services/TvSeriesService";
import { TvSeriesContextType } from "../types/TvSeriesContextType"

export const TvSeriesContext = createContext<TvSeriesContextType | null>(null);

export const TvSeriesProvider: FC = ({children}) =>{

    const [tvSeries, setTvSeries] = useState<ITvSeries[]>([
        {id: "test", name: "suits", startYear: "2012", endYear: "2017", category: "hei", image: "null"}
    ]);

    useEffect(() => {
        getTvSeries()
    }, [])

    const getTvSeries = async () =>{
        const _tvSeries = await TvSeriesService.getAll()
        setTvSeries(_tvSeries)
    }

    return(
        <>
        <TvSeriesContext.Provider value={{tvSeries}}>
            {children}
        </TvSeriesContext.Provider>
        </>
    )




}