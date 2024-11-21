import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';


const UpdateMpavebommasterheaders = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpavebommasterheaders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
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

    const location = useLocation(); 

    useEffect(() => {
        setType('Mpavebommasterheaders');
        fetchInterfaces();
        fetchTableId();

        if (Mpavebommasterheaders) {
            setValue('recid', Mpavebommasterheaders.recid);
            setValue('batchnum', Mpavebommasterheaders.batchnum);
            setValue('parent_Item_Id', Mpavebommasterheaders.parent_Item_Id);
            setValue('ver_Comments', Mpavebommasterheaders.ver_Comments);
            setValue('ver_Date', Mpavebommasterheaders.ver_Date);
            setValue('ver_Id', Mpavebommasterheaders.ver_Id);
            setValue('createddatetime', Mpavebommasterheaders.createddatetime);
            setValue('dataareaid', Mpavebommasterheaders.dataareaid);
            setValue('tableId', Mpavebommasterheaders.tableId);
            setValue('interface', Mpavebommasterheaders.interface);
            setValue('processed', Mpavebommasterheaders.processed);
            setValue('mpbomactivity', Mpavebommasterheaders.mpbomactivity);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpavebommasterheaders, setValue]);

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
                    name="parent_Item_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Parent_Item_Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="ver_Comments"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ver_Comments"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="ver_Date"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ver_Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="ver_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ver_Id"
                            fullWidth
                            margin="normal"
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
                    name="dataareaid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
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
                    name="tableId"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">TableId</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="TableId"
                                value={field.value || Mpavebommasterheaders?.tableId || ""}
                                onChange={(e) => field.onChange(e.target.value)}
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
                    name="interface"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                                value={field.value || Mpavebommasterheaders?.interface || ""}
                                onChange={(e) => field.onChange(e.target.value)}
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
                    name="mpbomactivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpbomactivity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Mpavebommasterheaders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpavebommasterheaders;
