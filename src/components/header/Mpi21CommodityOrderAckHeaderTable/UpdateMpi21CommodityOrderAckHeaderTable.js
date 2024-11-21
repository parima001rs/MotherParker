import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMpi21CommodityOrderAckHeaderTable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21CommodityOrderAckHeaderTable = entities.find((u) => u.recid === parseInt(recid));
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
            console.error("Error fetching table IDs:", error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get( process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error("Error fetching interfaces:", error);
        }
    };

    useEffect(() => {
        setType('Mpi21CommodityOrderAckHeaderTable');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21CommodityOrderAckHeaderTable) {
            setValue('recid', Mpi21CommodityOrderAckHeaderTable.recid);
            setValue('createddatetime', Mpi21CommodityOrderAckHeaderTable.createddatetime);
            setValue('interface', Mpi21CommodityOrderAckHeaderTable.interface);
            setValue('tableid', Mpi21CommodityOrderAckHeaderTable.tableid);
            setValue('batchnum', Mpi21CommodityOrderAckHeaderTable.batchnum);
            setValue('processed', Mpi21CommodityOrderAckHeaderTable.processed);
            setValue('dataareaid', Mpi21CommodityOrderAckHeaderTable.dataareaid);
            setValue('trxSequenceNo', Mpi21CommodityOrderAckHeaderTable.trxSequenceNo);
            setValue('companyLocation', Mpi21CommodityOrderAckHeaderTable.companyLocation);
            setValue('createdDate', Mpi21CommodityOrderAckHeaderTable.createdDate);
            setValue('createdBy', Mpi21CommodityOrderAckHeaderTable.createdBy);
            setValue('contractNo', Mpi21CommodityOrderAckHeaderTable.contractNo);
            setValue('statusId', Mpi21CommodityOrderAckHeaderTable.statusId);
            setValue('statusText', Mpi21CommodityOrderAckHeaderTable.statusText);
            setValue('erpconumber', Mpi21CommodityOrderAckHeaderTable.erpconumber);            
        }
    }, [setType, Mpi21CommodityOrderAckHeaderTable, setValue]);

    const onSubmit = async (data) => {
        try {
            await updateEntity(data);
            navigate('/');
        } catch (error) {
            console.error("Error updating entity:", error);
        }
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
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21CommodityOrderAckHeaderTable;
