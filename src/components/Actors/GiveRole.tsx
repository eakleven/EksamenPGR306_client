import React, { useContext, useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { TvSeriesContext } from '../../contexts/TvSeriesContext';
import { ITvSeries } from '../../interfaces/interface';
import { TvSeriesContextType } from '../../types/TvSeriesContextType';

const GiveRole = () => {
    const { tvSeries } = useContext(TvSeriesContext) as TvSeriesContextType;
    const [role, setRole] = useState('');

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (role !== 'default') {
        }
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Form.Select
                        aria-label='Default select example'
                        onChange={handleSelect}
                    >
                        <option value='default'>Select Tv-series</option>
                        {tvSeries.map((tvSeries: ITvSeries, key: number) => {
                            return (
                                <option key={key} value={tvSeries.id}>
                                    {tvSeries.name}
                                </option>
                            );
                        })}
                    </Form.Select>
                </FormGroup>
                <Button variant='secondary' type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default GiveRole;
