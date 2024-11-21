import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMporderplanmappingtables = () => {
    const { addEntity, setType } = useGenericPaginationContext();
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
        <h2>Add {location.state?.text} </h2>
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
                        id="createddatetime"
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
                                <MenuItem key={entity.recid} value={entity.recid}>
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
                    <TextField
                        {...field}
                        label="Processed"
                        fullWidth
                        margin="normal"
                       
                    />
                )}
            />
            <Controller
                name="pieces"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pieces"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="pronumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pro Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="scac"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SCAC"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="scheduleintgkey"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Schedule Integration Key"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="shipperref"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shipper Ref"
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
                        type="number"
                    />
                )}
            />
            <Controller
                name="weight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Weight"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="weight_Uom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Weight UOM"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="companyid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Company ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="errormessage"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Error Message"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="inventtranstype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Invent Trans Type"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="shipperorderplan_Executioneventid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shipper Order Plan Execution Event ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="skipeventid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Skip Event ID"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="dlvmodeid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="DLV Mode ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="loadnumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Load Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="deliverylocationname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Location Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="deliverylocationref"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Location Ref"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="ordernumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pickupstartduedate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pickup Start Due Date"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pickupstartduedatetzid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pickup Start Due Date TZ ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pallets"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pallets"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Add Mporderplanmappingtables
            </Button>
        </form>
    </Container>
    );
};

export default AddMporderplanmappingtables;
