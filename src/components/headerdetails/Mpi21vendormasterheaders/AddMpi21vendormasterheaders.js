import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';

const AddMpi21vendormasterheader = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [mpInterfaceEntities, setMpInterfaceEntities] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21vendormasterheaders');
        fetchMpInterfaceEntities();
    }, [setType]);

    const fetchMpInterfaceEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setMpInterfaceEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21vendormasterheader</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select {...field} labelId="interface-label">
                                {mpInterfaceEntities.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="tableid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tableid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="batchnum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batchnum"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="processed"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
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
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="actionid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Actionid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companylocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Companylocation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="contactname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Contactname"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="currency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="defaultlocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Defaultlocation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="entitytype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Entitytype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locationvendornumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Locationvendornumber"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="status"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="taxno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Taxno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="termscode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Termscode"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendoraccountnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendoraccountnumber"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendorname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendorname"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21vendormasterheader
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21vendormasterheader;
