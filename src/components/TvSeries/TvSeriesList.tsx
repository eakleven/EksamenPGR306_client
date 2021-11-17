import React, { FC, useContext } from 'react'
import { TvSeriesContext } from '../../contexts/TvSeriesContext'
import { ITvSeries } from '../../interfaces/interface'
import { TvSeriesContextType } from '../../types/TvSeriesContextType'

const TvSeriesList: FC = () => {

    const {tvSeries} = useContext(TvSeriesContext) as TvSeriesContextType

    const createTvSeriesList = () =>{
        return tvSeries.map((tvSeries: ITvSeries, key: number) =>{
            return(
                <article>

                <h1>{tvSeries.name}</h1>
                <img src={`https://localhost:5001/images/${tvSeries.image}`}/>
                </article>
            )
        })
    }
    return (
        <div>
            {createTvSeriesList()}
        </div>
    )
}

export default TvSeriesList
