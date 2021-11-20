import { ITvSeries } from "../interfaces/interface";

export type TvSeriesContextType = {
    tvSeries: ITvSeries[]
    addTvSeries: (newTvSeries: ITvSeries, image: File) => void
    getTvSeriesById: (id: string) => ITvSeries
    deleteTvSeries: (id:string) => void
    updateTvSeries: (updatedTvSeries: ITvSeries) => void
}