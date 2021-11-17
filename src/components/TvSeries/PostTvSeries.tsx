import React, { ChangeEventHandler, FC, useContext, useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const PostTvSeries: FC = () => {
    const { tvSeries, addTvSeries } = useContext(
        TvSeriesContext
    ) as TvSeriesContextType;

    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phoneNymber, setPhoneNumber] = useState<string>('');
    const [salary, setSalary] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [newTvSeries, setNewTvSeries] = useState<ITvSeries>()


    const handleChange = (e: React.ChangeEventHandler<FormControlElement>) =>{
        const target = e.target     
        const name = target.name
        const value = target.value

        setNewTvSeries({[e.target.name]: e.target.value})

    }

    const saveSeries = () =>{
        tvSeries
    }



    return (
        <>
            <h1>{name}</h1>
            <Form onSubmit={saveSeries}>
                <FormGroup className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Name'
                        value={name}
                        name="name"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Adress'
                        name="startYear"
                        value={address}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter Phone Number'
                        name="enYear"
                        value={phoneNymber}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <Form.Label>Lønn</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter Salary'
                        name="category"
                        value={salary}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup className='mb-3'>
                    <Form.Label>Kjønn</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter gender'
                        value={gender}
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup>

                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FormGroup>

                <Button variant='secondary' type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default AddEmployee;