import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';

import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';
const AddMPi21ServicePOOutLine = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [parentRecIdEntities, setParentRecIdEntities] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MPi21ServicePOOutLine');
        fetchParentRecIdEntities();
    }, [setType]);

    const fetchParentRecIdEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPI21SERVICEPOOUTHEADER');
        setParentRecIdEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add MPi21ServicePOOutLine</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
           
    <Controller
        name="RECID"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="RECID"
                fullWidth
                margin="normal"
            />
        )}
    />

    <Controller
        name="CREATEDDATETIME"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="CREATEDDATETIME"
                fullWidth
                margin="normal"
            />
        )}
    />

    <Controller
        name="ERPSERVICEPOLINENO"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="ERPSERVICEPOLINENO"
                fullWidth
                margin="normal"
            />
        )}
    />

    <Controller
        name="PARENTRECID"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PARENTRECID"
                fullWidth
                margin="normal"
            />
        )}
    />

    <Controller
        name="Instruction"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Instruction"
                fullWidth
                margin="normal"
            />
        )}
    />



                <Button type="submit" variant="contained" color="primary">
                    Add MPi21ServicePOOutLine
                </Button>
            </form>
        </Container>
    );
};

export default AddMPi21ServicePOOutLine;
