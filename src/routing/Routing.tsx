import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from '../components/shared/MainNavigation';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import TvSeries from '../pages/TvSeries';
import TvSeriesDetailedItem from '../components/TvSeries/TvSeriesDetailedItem';
import Actors from '../pages/Actors';

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <MainNavigation />
            <Container>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/tvseries'} element={<TvSeries />} />
                    <Route
                        path={`/tvSeriesDetails/:id`}
                        element={<TvSeriesDetailedItem />}
                    />
                    <Route path={'/actors'} element={<Actors />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default Routing;
