import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinterfaceitemtabless = () => {
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { addEntity, setType } = useGenericPaginationContext();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpinterfaceitemtables');
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
        <h2>Update {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="recid"
                control={control}
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
                name="tableId"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Table ID"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="interface"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Interface"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="batchnum"
                control={control}
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
                name="dataareaid"
                control={control}
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
                name="mpitemprobatseqno"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Probat Seq No"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="relationtype"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Relation Type"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="createddatetime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Date Time"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemabccode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item ABC Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemactivity"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Activity"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemclass"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Class"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemconditionstatuscode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Condition Status Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemcostingfacility"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Costing Facility"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemcreatedon"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Created On"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemdefaultwarehouse"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Default Warehouse"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemdesc1"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Description 1"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemfacility"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Facility"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            {/* Add remaining fields similarly */}
            <Button type="submit" variant="contained" color="primary">
                Update Mpinterfaceitemtables
            </Button>
        </form>
    </Container>
    );
};

export default AddMpinterfaceitemtabless;
