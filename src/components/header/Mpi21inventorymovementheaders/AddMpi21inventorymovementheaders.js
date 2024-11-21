import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import BackButton from '../../backButton';
const AddMpi21inventorymovementheaders = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('Mpi21inventorymovementheaders');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21inventorymovementheaders</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    name="prodid"
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
                <Controller
                    name="companylocation"
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
                    name="itemno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lotno"
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
                    name="newstoragelocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="New Storage Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="newstorageunit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="New Storage Unit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="notes"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Notes"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                    )}
                />
                <Controller
                    name="quantity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="quantityuom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="reasoncode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reason Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="sourcestoragelocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Source Storage Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="sourcestorageunit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Source Storage Unit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="transactiontypeid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Transaction Type ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="createdby"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created By"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21inventorymovementheaders
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21inventorymovementheaders;
