import { createContext, FC, useEffect, useState } from 'react';
import { IActors, ITvSeries } from '../interfaces/interface';
import { ActorsService } from '../services/ActorsService';
import { TvSeriesService } from '../services/TvSeriesService';
import { ActorsContextType } from '../types/ActorsContextType';
import { TvSeriesContextType } from '../types/TvSeriesContextType';

export const ActorsContext = createContext<ActorsContextType | null>(null);

export const ActorsProvider: FC = ({ children }) => {
    const [actors, setActors] = useState<IActors[]>([]);

    useEffect(() => {
        getActors();
    }, []);

    const getActors = async () => {
        const _actors = await ActorsService.getAll();
        setActors(_actors);
    };

    const addActor = (newActor: IActors, image: File) => {
        ActorsService.addActors(newActor, image);
        setActors([...actors, newActor]);
    };

    const getActorById = (id: string) => {
        return actors.find((actor) => actor.id === id) as IActors;
    };

    const deleteActor = (id: string) => {
        ActorsService.removeActor(id);
        const newStateArray: IActors[] = actors.filter(
            (actors) => actors.id != id
        );
        setActors(newStateArray);
    };

    const updateActor = (updatedActor: IActors) => {
        ActorsService.changeActor(updatedActor);
    };

    return (
        <>
            <ActorsContext.Provider
                value={{
                    actors,
                    addActor,
                    getActorById,
                    deleteActor,
                    updateActor,
                }}
            >
                {children}
            </ActorsContext.Provider>
        </>
    );
};
