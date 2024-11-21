import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpi21exchangerate = () => {
    const { recId } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    debugger;
    const Mpi21exchangerate = entities.find((u) => u.recId === parseInt(recId));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [interfaces, setinterfaces] = useState([]);

    useEffect(() => {
        setType('Mpi21exchangerate');
        if (Mpi21exchangerate) {
            setValue('recid', Mpi21exchangerate.recId);
            setValue('createdDateTime', Mpi21exchangerate.createdDateTime);
            setValue('interface', Mpi21exchangerate.interface);
            setValue('tableId', Mpi21exchangerate.tableId);
            setValue('batchNum', Mpi21exchangerate.batchNum);
            setValue('processed', Mpi21exchangerate.processed);
            setValue('dataAreaId', Mpi21exchangerate.dataAreaId);
            setValue('actionId', Mpi21exchangerate.actionId);
            setValue('companyLocation', Mpi21exchangerate.companyLocation);
            setValue('effectiveDate', Mpi21exchangerate.effectiveDate);
            setValue('exchangeRateType', Mpi21exchangerate.exchangeRateType);
            setValue('fromCurrency', Mpi21exchangerate.fromCurrency);
            setValue('rate', Mpi21exchangerate.rate);
            setValue('rateType', Mpi21exchangerate.rateType);
            setValue('toCurrency', Mpi21exchangerate.toCurrency);
            setValue('trxSequenceNo', Mpi21exchangerate.trxSequenceNo);
            
            fetchinterfaces();
        }
    }, [setType, Mpi21exchangerate, setValue, navigate]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity({ recId: parseInt(recId), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    margin="normal"
                />

                <Controller
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
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
                            label="Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="processed"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                           
                            inputProps={{ value: true }}
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
                            label="dataAreaId"
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
                            label="actionId"
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
                            label="companyLocation"
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
                            label="effectiveDate"
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
                            label="exchangeRateType"
                            fullWidth
                            margin="normal"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="fromCurrency"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="fromCurrency"
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
                            label="rate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="rateType"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="rateType"
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
                            label="toCurrency"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                        />
                    )}
                />

                <Controller
                    name="trxSequenceNo"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="trxSequenceNo"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21exchangerate
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21exchangerate;
