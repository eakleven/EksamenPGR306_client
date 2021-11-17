import axios from "axios";
import { ITvSeries } from "../interfaces/interface";

export const TvSeriesService = (function(){
    const urlToTvSeriesController: string = "https://localhost:5001/tvSeries";

    const getAll = async () => {
        const res = await axios.get(urlToTvSeriesController)
        return res.data as ITvSeries[];
    }

    const postNewTvSeries = async (newTvSeries: ITvSeries) => {
        const res = await axios.post(urlToTvSeriesController, newTvSeries)
        return res.data as ITvSeries
    }

    return {
        getAll,
        postNewTvSeries
    }


}())