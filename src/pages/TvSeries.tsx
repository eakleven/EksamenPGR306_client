import React, { useState } from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import PostTvSeries from '../components/TvSeries/PostTvSeries';
import TvSeriesList from '../components/TvSeries/TvSeriesList';

const TvSeries = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <div className={'col-md-12 text-center'}>
                <Button
                    onClick={() => setOpen(!open)}
                    variant={'primary'}
                    size={'lg'}
                    aria-controls='addTvSeriesForm'
                    aria-expanded={open}
                >
                    Add Tv-series
                </Button>
                <Collapse in={open}>
                    <div id={'addTvSeriesForm'}>
                        <PostTvSeries />
                    </div>
                </Collapse>
                <TvSeriesList />
            </div>
        </Container>
    );
};

export default TvSeries;
