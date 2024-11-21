import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useGenericContext } from '../../../context/GenericContext';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
const AddMpi21inventorymovementexporteds = () => {
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { addEntity, setType } = useGenericContext();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);

    useEffect(() => {
        setType('Mpi21inventorymovementexporteds');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/'); // Adjust the path as needed
    };

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21inventorymovementexporteds</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="exported"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Exported"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="journaltransrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal Trans Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="journalnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="dataareaid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Data Area ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* Add more fields as needed */}
                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21inventorymovementexporteds
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21inventorymovementexporteds;
