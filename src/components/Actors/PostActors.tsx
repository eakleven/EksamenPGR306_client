import React, { FC, useContext, useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { ActorsContext } from '../../contexts/ActorsContext';

import { IActors } from '../../interfaces/interface';
import { ActorsService } from '../../services/ActorsService';
import { ActorsContextType } from '../../types/ActorsContextType';

const PostActors: FC = () => {
    const { addActor } = useContext(ActorsContext) as ActorsContextType;

    const [image, setImage] = useState<File>();

    const [newActor, setNewActor] = useState<IActors>({
        name: '',
        birthYear: '',
        image: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const { name } = target;
        const { value } = target;
        const { type } = target;

        switch (type) {
            case 'text':
                setNewActor({ ...newActor, [name]: value });
                break;
            case 'file':
                let { files } = target;
                if (files) {
                    setNewActor({ ...newActor, [name]: files[0].name });
                    setImage(files[0]);
                }
        }
    };

    const saveSeries = (e: React.SyntheticEvent) => {
        e.preventDefault();

        addActor(newActor, image as File);
        const emptyItem: IActors = {
            name: '',
            birthYear: '',
            image: '',
        };

        setNewActor(emptyItem);
        ActorsService.getAll();
    };

    return (
        <>
            <h1>Add new actor</h1>
            <Form onSubmit={saveSeries}>
                <FormGroup className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Name'
                        value={newActor.name}
                        name='name'
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Birth year</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Adress'
                        name='startYear'
                        value={newActor.birthYear}
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

export default PostActors;
