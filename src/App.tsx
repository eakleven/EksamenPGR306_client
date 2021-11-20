import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './routing/Routing';
import { TvSeriesProvider } from './contexts/TvSeriesContext';

function App() {
    return (
        <div className='App'>
            <TvSeriesProvider>
                <Routing />
            </TvSeriesProvider>
        </div>
    );
}

export default App;
