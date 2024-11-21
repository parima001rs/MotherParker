import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpaveworkorderheaders = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpaveworkorderheaders = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpaveworkorderheaders');
        fetchInterfaces();
        fetchTableId();

        if (Mpaveworkorderheaders) {
            setValue('recid', Mpaveworkorderheaders.recid);
            setValue('createddatetime', Mpaveworkorderheaders.createddatetime);
            setValue('interface', Mpaveworkorderheaders.interface);
            setValue('tableid', Mpaveworkorderheaders.tableid);
            setValue('batchnum', Mpaveworkorderheaders.batchnum);
            setValue('est_Prod_Rate', Mpaveworkorderheaders.est_Prod_Rate);
            setValue('item_Id', Mpaveworkorderheaders.item_Id);
            setValue('notes', Mpaveworkorderheaders.notes);
            setValue('process_Id', Mpaveworkorderheaders.process_Id);
            setValue('release_Time', Mpaveworkorderheaders.release_Time);
            setValue('release_Timetzid', Mpaveworkorderheaders.release_Timetzid);
            setValue('req_Finish_Time', Mpaveworkorderheaders.req_Finish_Time);
            setValue('req_Finish_Timetzid', Mpaveworkorderheaders.req_Finish_Timetzid);
            setValue('req_Quantity', Mpaveworkorderheaders.req_Quantity);
            setValue('start_Quantity', Mpaveworkorderheaders.start_Quantity);
            setValue('wo_Desc', Mpaveworkorderheaders.wo_Desc);
            setValue('wo_Id', Mpaveworkorderheaders.wo_Id);
            setValue('dataareaid', Mpaveworkorderheaders.dataareaid);
            setValue('processed', Mpaveworkorderheaders.processed);
            setValue('modifiedAt', Mpaveworkorderheaders.modifiedAt);
            setValue('prodStatus', Mpaveworkorderheaders.prodStatus);
            setValue('prodActivity', Mpaveworkorderheaders.prodActivity);
            setValue('error', Mpaveworkorderheaders.error);
            setValue('error_Message', Mpaveworkorderheaders.error_Message);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpaveworkorderheaders, setValue]);

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
                            label="Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="est_Prod_Rate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Estimated Production Rate"
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
                    name="notes"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Notes"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="process_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Process ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="release_Time"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="release_Time"
                            label="Release Time"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="release_Timetzid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Release Time TZID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="req_Finish_Time"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="req_Finish_Time"
                            label="Required Finish Time"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="req_Finish_Timetzid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Required Finish Time TZID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="req_Quantity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Required Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="start_Quantity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Start Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="wo_Desc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Order Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="wo_Id"
                    control={control}
                    defaultValue=""
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
                    name="modifiedAt"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="modifiedAt"
                            label="Modified At"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="prodStatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Production Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="prodActivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Production Activity"
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
                    name="error_Message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Error_Message"
                            fullWidth
                            margin="normal"
                        />
                    )}
                
                    />
                     <Button type="submit" variant="contained" color="primary">
                    Update Mpaveworkorderheaders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveworkorderheaders;
