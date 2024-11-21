import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
const AddMpaveordercompleteheaders = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);

    const fetchTableId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error('Error fetching tableId data:', error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error('Error fetching interfaces data:', error);
        }
    };

    useEffect(() => {
        setType('Mpaveordercompleteheaders');
        fetchInterfaces();
        fetchTableId();
    }, [setType]);

    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/'); // Uncomment if you want to redirect after submission
    };

    return (
        <Container>
            <BackButton />
            <h2>Add Mpaveordercompleteheaders</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    defaultValue={6000000006}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Record ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue="2024-06-24T18:32:42.76"
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
                    name="interface"
                    control={control}
                    defaultValue="Aveva"
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
                    name="batchnum"
                    control={control}
                    defaultValue="-NA-10-20240624-183242"
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
                        />
                    )}
                />
                <Controller
                    name="inventlocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="item_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="journalid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="wo_Id"
                    control={control}
                    defaultValue="00000176"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Order ID"
                            fullWidth
                            margin="normal"
                        />
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
                    name="tableId"
                    control={control}
                    render={({ field }) => (
                        <TextField
                        {...field}
                        label="TableId"
                        fullWidth
                        margin="normal"
                        disabled
                    />
                      
                    )}
                />
                <Controller
                    name="mpendStatus"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP End Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Mpaveordercompleteheaders
                </Button>
            </form>
        </Container>
    );
};

export default AddMpaveordercompleteheaders;
