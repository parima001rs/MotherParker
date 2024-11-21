import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21transferreceiptheaders = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const Mpi21transferreceiptheaders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('Mpi21transferreceiptheaders');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21transferreceiptheaders) {
            
            setValue('recid', Mpi21transferreceiptheaders.recid);
           setValue('createddatetime', Mpi21transferreceiptheaders.createddatetime);
            setValue('interface', Mpi21transferreceiptheaders.interface);
            setValue('tableid', Mpi21transferreceiptheaders.tableid);
            setValue('batchnum', Mpi21transferreceiptheaders.batchnum);
            setValue('processed', Mpi21transferreceiptheaders.processed);
            setValue('dataareaid', Mpi21transferreceiptheaders.dataareaid);
            setValue('actionid', Mpi21transferreceiptheaders.actionid);
            setValue('bolno', Mpi21transferreceiptheaders.bolno);
            setValue('companylocation', Mpi21transferreceiptheaders.companylocation);
            setValue('erpreceiptno', Mpi21transferreceiptheaders.erpreceiptno);
            setValue('erptransferorderno', Mpi21transferreceiptheaders.erptransferorderno);
            setValue('erptransordertype', Mpi21transferreceiptheaders.erptransordertype);
            setValue('receiptdate', Mpi21transferreceiptheaders.receiptdate);
            setValue('transferorderno', Mpi21transferreceiptheaders.transferorderno);
            setValue('vendoraccountno', Mpi21transferreceiptheaders.vendoraccountno);
            setValue('vendorrefno', Mpi21transferreceiptheaders.vendorrefno);
            setValue('warehouserefno', Mpi21transferreceiptheaders.warehouserefno);
            setValue('createdby', Mpi21transferreceiptheaders.createdby);
        }
    }, [setType, Mpi21transferreceiptheaders, setValue]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data); 
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
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
                            label="Batchnum"
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
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="actionid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Actionid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="bolno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Bolno"
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
                            label="Companylocation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="erpreceiptno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erpreceiptno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="erptransferorderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erptransferorderno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="erptransordertype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erptransordertype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="receiptdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Receiptdate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="transferorderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Transferorderno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendoraccountno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendoraccountno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendorrefno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendorrefno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="warehouserefno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Warehouserefno"
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
                            label="Createdby"
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

export default UpdateMpi21transferreceiptheaders;
