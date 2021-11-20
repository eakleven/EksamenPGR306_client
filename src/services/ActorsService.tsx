import axios from 'axios';
import { IActors } from '../interfaces/interface';

export const ActorsService = (function () {
    const urlToActorsController: string = 'https://localhost:5001/actors';

    const urlToImageUploadController: string =
        'https://localhost:5001/ImageUpload/SaveImage';

    const getAll = async () => {
        const res = await axios.get(urlToActorsController);

        return res.data as IActors[];
    };

    const addActors = (newActors: IActors, image: File) => {
        let formData = new FormData();
        formData.append('file', image);

        axios.post(urlToActorsController, newActors);
        axios({
            url: urlToImageUploadController,
            method: 'POST',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    };

    const changeActor = (updatedActors: IActors) => {
        axios.put(
            urlToActorsController + '/' + updatedActors.id,
            updatedActors
        );
    };

    const removeActor = (id: string) => {
        axios.delete(urlToActorsController + '/' + id);
    };

    return {
        getAll,
        addActors,
        changeActor,
        removeActor,
    };
})();
