import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';

const UpdateMpaveinventoryinterfaceheaders = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpaveinventoryinterfaceheaders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('Mpaveinventoryinterfaceheaders');
        fetchInterfaces();
        fetchTableId();

        if (Mpaveinventoryinterfaceheaders) {
            setValue('recid', Mpaveinventoryinterfaceheaders.recid);
            setValue('createddatetime', Mpaveinventoryinterfaceheaders.createddatetime);
            setValue('batchnum', Mpaveinventoryinterfaceheaders.batchnum);
            setValue('date_In_Local', Mpaveinventoryinterfaceheaders.date_In_Local);
            setValue('date_In_Localtzid', Mpaveinventoryinterfaceheaders.date_In_Localtzid);
            setValue('ent_Name', Mpaveinventoryinterfaceheaders.ent_Name);
            setValue('grade_Cd', Mpaveinventoryinterfaceheaders.grade_Cd);
            setValue('item_Id', Mpaveinventoryinterfaceheaders.item_Id);
            setValue('lot_No', Mpaveinventoryinterfaceheaders.lot_No);
            setValue('qty_Left', Mpaveinventoryinterfaceheaders.qty_Left);
            setValue('status_Cd', Mpaveinventoryinterfaceheaders.status_Cd);
            setValue('uom_Id', Mpaveinventoryinterfaceheaders.uom_Id);
            setValue('processed', Mpaveinventoryinterfaceheaders.processed);
            setValue('interface', Mpaveinventoryinterfaceheaders.interface);
            setValue('tableId', Mpaveinventoryinterfaceheaders.tableid);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpaveinventoryinterfaceheaders, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
                    name="date_In_Local"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Date In Local"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="date_In_Localtzid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Date In Local TZ ID"
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
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="Table ID"
                            >
                                {tableId.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.tableId}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="ent_Name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Entity Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="grade_Cd"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Grade Code"
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
                    name="lot_No"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lot Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="qty_Left"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity Left"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="status_Cd"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="uom_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="UOM ID"
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
                <Button type="submit" variant="contained" color="primary">
                    Update Mpaveinventoryinterfaceheaders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveinventoryinterfaceheaders;
