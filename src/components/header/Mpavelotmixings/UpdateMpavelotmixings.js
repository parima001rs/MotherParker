import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpavelotmixings = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpavelotmixings = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
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
        setType('Mpavelotmixings');
        fetchInterfaces();
        fetchTableId();

        if (Mpavelotmixings) {
            setValue('recid', Mpavelotmixings.recid);
            setValue('createddatetime', Mpavelotmixings.createddatetime);
            setValue('interface', Mpavelotmixings.interface);
            setValue('tableid', Mpavelotmixings.tableid);
            setValue('batchnum', Mpavelotmixings.batchnum);
            setValue('processed', Mpavelotmixings.processed);
            setValue('dataareaid', Mpavelotmixings.dataareaid);
            setValue('item_Id', Mpavelotmixings.item_Id);
            setValue('inventjournalid', Mpavelotmixings.inventjournalid);
            setValue('inventlocationid', Mpavelotmixings.inventlocationid);
            setValue('inventsiteid', Mpavelotmixings.inventsiteid);
            setValue('linenum', Mpavelotmixings.linenum);
            setValue('location', Mpavelotmixings.location);
            setValue('lot_No', Mpavelotmixings.lot_No);
            setValue('new_Lot_No', Mpavelotmixings.new_Lot_No);
            setValue('posted', Mpavelotmixings.posted);
            setValue('posteddatetime', Mpavelotmixings.posteddatetime);
            setValue('posteddatetimetzid', Mpavelotmixings.posteddatetimetzid);
            setValue('qty', Mpavelotmixings.qty);
            setValue('sequence_Id', Mpavelotmixings.sequence_Id);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpavelotmixings, setValue]);

    const onSubmit = async (data) => {
        try {
            await updateEntity({ recid: parseInt(recid), ...data }, 'recid');
            navigate('/');
        } catch (error) {
            console.error('Error updating entity:', error);
        }
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
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Location"
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
                    name="new_Lot_No"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="New Lot Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="posted"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Posted"
                            type="number"
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
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Posted Datetime TZ ID"
                            type="number"
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
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="sequence_Id"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Sequence ID"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpavelotmixings
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpavelotmixings;
