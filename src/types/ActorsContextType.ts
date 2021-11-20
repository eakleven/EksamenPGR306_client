import { IActors } from "../interfaces/interface";

export type ActorsContextType = {
    actors: IActors[]
    addActor: (newActor: IActors, image: File) => void
    getActorById: (id: string) => IActors
    deleteActor: (id:string) => void
    updateActor: (updatedActor: IActors) => void
}