import React from 'react'
import PostTvSeries from '../components/TvSeries/PostTvSeries'
import TvSeriesList from '../components/TvSeries/TvSeriesList'
import { TvSeriesProvider } from '../contexts/TvSeriesContext'

const TvSeries = () => {
    return (
        <>
        <TvSeriesProvider>
        <PostTvSeries/>
            <TvSeriesList/>
        </TvSeriesProvider>
        </>
    )
}

export default TvSeries
