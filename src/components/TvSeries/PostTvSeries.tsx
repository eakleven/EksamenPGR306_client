import React, { FC, useContext, useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesService } from '../../services/TvSeriesService';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const PostTvSeries: FC = () => {
    const { addTvSeries } = useContext(TvSeriesContext) as TvSeriesContextType;

    const [image, setImage] = useState<File>();

    const [newTvSeries, setNewTvSeries] = useState<ITvSeries>({
        name: '',
        startYear: '',
        endYear: '',
        category: '',
        actors: [],
        image: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const { name } = target;
        const { value } = target;
        const { type } = target;

        switch (type) {
            case 'text':
                setNewTvSeries({ ...newTvSeries, [name]: value });
                break;
            case 'file':
                let { files } = target;
                if (files) {
                    setNewTvSeries({ ...newTvSeries, [name]: files[0].name });
                    setImage(files[0]);
                }
        }
    };

    const saveSeries = (e: React.SyntheticEvent) => {
        e.preventDefault();

        addTvSeries(newTvSeries, image as File);
        const emptyItem: ITvSeries = {
            name: '',
            startYear: '',
            endYear: '',
            category: '',
            actors: [],
            image: '',
        };
        setNewTvSeries(emptyItem);
        TvSeriesService.getAll();
    };

    return (
        <>
            <h1>Add new tv-series</h1>
            <Form onSubmit={saveSeries}>
                <FormGroup className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Name'
                        value={newTvSeries.name}
                        name='name'
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Start year</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter start year'
                        name='startYear'
                        value={newTvSeries.startYear}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Ending year</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter end year, or ongoing'
                        name='endYear'
                        value={newTvSeries.endYear}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter category'
                        name='category'
                        value={newTvSeries.category}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup className='mb-3'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type='file'
                        name='image'
                        placeholder='Enter image'
                        onChange={handleChange}
                    />
                </FormGroup>

                <Button variant='secondary' type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default PostTvSeries;
