import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpi21CommodityOrderAckHeaderTable = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
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
        setType('Mpi21CommodityOrderAckHeaderTable');
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
                    name="trxSequenceNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Transaction Sequence No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companyLocation"
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
                    name="createdDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="createdBy"
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
                <Controller
                    name="contractNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Contract No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="statusId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="statusText"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status Text"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="erpconumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ERP Co Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21CommodityOrderAckHeaderTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21CommodityOrderAckHeaderTable;
