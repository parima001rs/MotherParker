import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpi21_lotpropertyadjustmenttable = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [interfaces, setinterfaces] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21_lotpropertyadjustmenttable');
        fetchinterfaces();
    }, [setType]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="createdDateTime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface">Interface</InputLabel>
                            <Select {...field} labelId="interface">
                                {interfaces.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="batchNum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batch Num"
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
                    name="dataAreaId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Data Area Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="actionId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Action Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companyLocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Company Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="effectiveDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Effective Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="exchangeRateType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Exchange Rate Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="fromCurrency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="From Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="rate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="rateType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rate Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="toCurrency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="To Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="trxSequenceNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Trx Sequence No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21_lotpropertyadjustmenttable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21_lotpropertyadjustmenttable;
