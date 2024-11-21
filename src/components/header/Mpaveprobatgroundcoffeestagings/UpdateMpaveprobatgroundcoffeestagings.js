import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpaveprobatgroundcoffeestagings = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpaveprobatgroundcoffeestagings = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpaveprobatgroundcoffeestagings');
        fetchInterfaces();
        fetchTableId();

        if (Mpaveprobatgroundcoffeestagings) {
            setValue('recid', Mpaveprobatgroundcoffeestagings.recid);
            setValue('createddatetime', Mpaveprobatgroundcoffeestagings.createddatetime);
            setValue('interface', Mpaveprobatgroundcoffeestagings.interface);
            setValue('tableid', Mpaveprobatgroundcoffeestagings.tableid);
            setValue('batchnum', Mpaveprobatgroundcoffeestagings.batchnum);
            setValue('batch_Id', Mpaveprobatgroundcoffeestagings.batch_Id);
            setValue('processed', Mpaveprobatgroundcoffeestagings.processed);
            setValue('destination', Mpaveprobatgroundcoffeestagings.destination);
            setValue('destinationinventlocationid', Mpaveprobatgroundcoffeestagings.destinationinventlocationid);
            setValue('destinationinventsiteid', Mpaveprobatgroundcoffeestagings.destinationinventsiteid);
            setValue('destinationwmslocationid', Mpaveprobatgroundcoffeestagings.destinationwmslocationid);
            setValue('error', Mpaveprobatgroundcoffeestagings.error);
            setValue('exportedbatchnum', Mpaveprobatgroundcoffeestagings.exportedbatchnum);
            setValue('exportedtoaveva', Mpaveprobatgroundcoffeestagings.exportedtoaveva);
            setValue('inventjournalid', Mpaveprobatgroundcoffeestagings.inventjournalid);
            setValue('inventlocationid', Mpaveprobatgroundcoffeestagings.inventlocationid);
            setValue('inventsiteid', Mpaveprobatgroundcoffeestagings.inventsiteid);
            setValue('itemid', Mpaveprobatgroundcoffeestagings.itemid);
            setValue('linenum', Mpaveprobatgroundcoffeestagings.linenum);
            setValue('messageshort', Mpaveprobatgroundcoffeestagings.messageshort);
            setValue('posted', Mpaveprobatgroundcoffeestagings.posted);
            setValue('posteddatetime', Mpaveprobatgroundcoffeestagings.posteddatetime);
            setValue('posteddatetimetzid', Mpaveprobatgroundcoffeestagings.posteddatetimetzid);
            setValue('probatequipmentid', Mpaveprobatgroundcoffeestagings.probatequipmentid);
            setValue('probatexportid', Mpaveprobatgroundcoffeestagings.probatexportid);
            setValue('probatorder', Mpaveprobatgroundcoffeestagings.probatorder);
            setValue('qty', Mpaveprobatgroundcoffeestagings.qty);
            setValue('receiveddatetime', Mpaveprobatgroundcoffeestagings.receiveddatetime);
            setValue('receiveddatetimetzid', Mpaveprobatgroundcoffeestagings.receiveddatetimetzid);
            setValue('sourcebatchid', Mpaveprobatgroundcoffeestagings.sourcebatchid);
            setValue('wmslocationid', Mpaveprobatgroundcoffeestagings.wmslocationid);
            setValue('dataareaid', Mpaveprobatgroundcoffeestagings.dataareaid);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpaveprobatgroundcoffeestagings, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableid-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableid-label"
                                label="Table ID"
                            >
                                {tableId.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.tableId}>
                                        {entity.tableId}
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
                    name="batch_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batch ID"
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
                    name="destination"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="destinationinventlocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination Invent Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="destinationinventsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination Invent Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="destinationwmslocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination WMS Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="error"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Error"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="exportedbatchnum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Exported Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="exportedtoaveva"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Exported to Aveva"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="inventjournalid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Journal ID"
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
                    name="inventsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemid"
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
                    name="linenum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Line Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="messageshort"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Message Short"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="posted"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Posted"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="posteddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Posted Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="posteddatetimetzid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Posted Datetime TZ ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="probatequipmentid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Probat Equipment ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="probatexportid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Probat Export ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="probatorder"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Probat Order"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="qty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="receiveddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Received Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="receiveddatetimetzid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Received Datetime TZ ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="sourcebatchid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Source Batch ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="wmslocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WMS Location ID"
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
                <Button type="submit" variant="contained" color="primary">
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveprobatgroundcoffeestagings;
