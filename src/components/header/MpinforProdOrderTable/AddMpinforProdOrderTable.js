
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinforProdOrderTable = () => {
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
        setType('Mporderplanmappingtables');
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
                        label="Created DateTime"
                        fullWidth
                        margin="normal"
                        disabled
                    />
                )}
            />

            <Controller
                name="interface"
                control={control}
                defaultValue=""
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
                name="batchnum"
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
                defaultValue=""
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

            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemId"
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
                name="siteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Site ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="orderQty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Quantity"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="remainInventPhysical"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Remaining Inventory"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="reportedFinishedGood"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Reported Finished Good"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="startDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Start Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="startTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Start Time"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="endDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="End Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="endTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="End Time"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="prodId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
                <Button type="submit" variant="contained" color="primary">
                    Add MpinforProdOrderTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinforProdOrderTable;
