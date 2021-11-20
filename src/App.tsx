import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routing/Routing';
import { TvSeriesProvider } from './contexts/TvSeriesContext';
import { ActorsProvider } from './contexts/ActorsContext';

function App() {
    return (
        <div className='App'>
            <ActorsProvider>
                <TvSeriesProvider>
                    <Routing />
                </TvSeriesProvider>
            </ActorsProvider>
        </div>
    );
}

export default App;
