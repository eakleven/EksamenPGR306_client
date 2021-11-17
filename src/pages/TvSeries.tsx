import React from 'react'
import TvSeriesList from '../components/TvSeries/TvSeriesList'
import { TvSeriesProvider } from '../contexts/TvSeriesContext'

const TvSeries = () => {
    return (
        <TvSeriesProvider>
            <TvSeriesList/>
        </TvSeriesProvider>
    )
}

export default TvSeries
