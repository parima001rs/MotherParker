import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
const UpdateMpi21inventorymovementexporteds = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21inventorymovementexporteds = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);

    useEffect(() => {
        setType('Mpi21inventorymovementexporteds');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21inventorymovementexporteds) {
            setValue('recid', Mpi21inventorymovementexporteds.recid);
            setValue('createddatetime', Mpi21inventorymovementexporteds.createddatetime);
            setValue('exported', Mpi21inventorymovementexporteds.exported);
            setValue('journaltransrecid', Mpi21inventorymovementexporteds.journaltransrecid);
            setValue('journalnumber', Mpi21inventorymovementexporteds.journalnumber);
            setValue('dataareaid', Mpi21inventorymovementexporteds.dataareaid);
        }
    }, [setType, Mpi21inventorymovementexporteds, setValue]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/'); // Adjust the path as needed
    };

    return (
        <Container>
            <BackButton />
            <h2>Update Mpi21inventorymovementexporteds</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                            disabled
                        />
                    )}
                />
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
                    Update Mpi21inventorymovementexporteds
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21inventorymovementexporteds;
