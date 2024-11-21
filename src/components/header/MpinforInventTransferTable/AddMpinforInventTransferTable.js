
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinforInventTransferTable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    // Fetch Table IDs from API
    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL +  '/api/MpheaderTables');
        setTableId(response.data);
    };

    // Fetch Interfaces from API
    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MpinforInventTransferTable');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    // Handle form submission
    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/'); // Redirect after submission
    };

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
           
            <Controller
                name="recid"
                control={control}
                defaultValue={6000000001}
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
                defaultValue="2024-08-29T09:34:38"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created DateTime"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="interface"
                control={control}
                defaultValue="InforAPS"
                render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="interface-label">Interface</InputLabel>
                        <Select
                            {...field}
                            labelId="interface-label"
                            label="Interface"
                        >
                            {interfaces.map((entity) => (
                                <MenuItem key={entity.recid} value={entity.interface}>
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
                defaultValue={72}
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
                name="batchnum"
                control={control}
                defaultValue="2833-01-10-20240829-093438"
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
                defaultValue={true}
                render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="processed-label">Processed</InputLabel>
                        <Select
                            {...field}
                            labelId="processed-label"
                            label="Processed"
                        >
                            <MenuItem value={true}>True</MenuItem>
                            <MenuItem value={false}>False</MenuItem>
                        </Select>
                    </FormControl>
                )}
            />

            <Controller
                name="dataareaid"
                control={control}
                defaultValue="10"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Data Area ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="transferId"
                control={control}
                defaultValue="200000"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transfer ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventLocationIdFrom"
                control={control}
                defaultValue="MM"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID From"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventLocationIdTo"
                control={control}
                defaultValue="MD"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID To"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="transferStatus"
                control={control}
                defaultValue="Created"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transfer Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
                <Button type="submit" variant="contained" color="primary">
                    Add MpinforInventTransferTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinforInventTransferTable;
