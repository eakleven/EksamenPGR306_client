import axios from 'axios';
import { ITvSeries } from '../interfaces/interface';

export const TvSeriesService = (function () {
    const urlToTvSeriesController: string = 'https://localhost:5001/tvSeries';

    const urlToImageUploadController: string =
        'https://localhost:5001/ImageUpload/SaveImage';

    const getAll = async () => {
        const res = await axios.get(urlToTvSeriesController);
        if (res.status.toString() === '200') {
            return res.data as ITvSeries[];
        } else {
            alert(`An error has occured: ${res.status.toString()}`);
        }
    };

    const addTvSeries = (newTvSeries: ITvSeries, image: File) => {
        let formData = new FormData();
        formData.append('file', image);

        axios.post(urlToTvSeriesController, newTvSeries);
        axios({
            url: urlToImageUploadController,
            method: 'POST',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    };

    const changeTvSeries = (updatedTvSeries: ITvSeries) => {
        axios.put(
            urlToTvSeriesController + '/' + updatedTvSeries.id,
            updatedTvSeries
        );
    };

    const removeTvSeries = (id: string) => {
        axios.delete(urlToTvSeriesController + '/' + id);
    };

    return {
        getAll,
        addTvSeries,
        changeTvSeries,
        removeTvSeries,
    };
})();
