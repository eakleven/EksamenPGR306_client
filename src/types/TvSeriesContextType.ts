import { ITvSeries } from "../interfaces/interface";

export type TvSeriesContextType = {
    tvSeries: ITvSeries[]
    addTvSeries: (newTvSeries: ITvSeries, image: File) => void
}