export interface ITvSeries {
    id?: string;
    name: string;
    startYear?: string;
    endYear?: string;
    category?: string;
    image: string;
    actors?: Array<IActors>
}

export interface IActors{
    id?: string;
    name: string;
    birthYear?: string;
    image: string;
}

