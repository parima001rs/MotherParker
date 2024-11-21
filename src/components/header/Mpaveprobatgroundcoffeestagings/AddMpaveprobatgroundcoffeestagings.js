import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpaveprobatgroundcoffeestagings = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 

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
        setType('Mpaveprobatgroundcoffeestagings');
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
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    defaultValue="6000000423"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue="2024-07-17T14:10:57"
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
                    name="tableid"
                    control={control}
                    defaultValue={21}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableid-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableid-label"
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
                    name="batchnum"
                    control={control}
                    defaultValue="0118-09-10-20240717-140736"
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
                    name="batch_Id"
                    control={control}
                    defaultValue={4250533}
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
                    defaultValue="09-7022"
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
                    defaultValue="XM"
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
                    defaultValue="04"
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
                    defaultValue="13610"
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
                    defaultValue={0}
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
                            label="Exported Batchnum"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="exportedtoaveva"
                    control={control}
                    defaultValue={1}
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
                    defaultValue="INV002071014"
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
                    defaultValue="SM"
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
                    defaultValue="09"
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
                    defaultValue="1106877"
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
                    defaultValue={1}
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
                    defaultValue={1}
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
                    defaultValue="2024-07-18T14:05:27"
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
                    defaultValue={null}
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
                    defaultValue="09-7022"
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
                    defaultValue={10338699}
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
                    defaultValue="TestExtraction"
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
                    defaultValue={215300}
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
                    defaultValue="2024-07-17T14:10:40.423"
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
                    defaultValue={37001}
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
                    defaultValue="3223131"
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
                    defaultValue="GROUND"
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

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Add Record
                </Button>
            </form>
        </Container>
    );
};

export default AddMpaveprobatgroundcoffeestagings;
