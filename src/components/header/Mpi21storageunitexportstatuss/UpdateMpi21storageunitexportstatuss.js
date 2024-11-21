import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMPI21STORAGEUNITEXPORTSTATUS = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MPI21STORAGEUNITEXPORTSTATUS = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MPI21STORAGEUNITEXPORTSTATUS');
        fetchTableId();
        fetchInterfaces();

        if (MPI21STORAGEUNITEXPORTSTATUS) {
            setValue('recid', MPI21STORAGEUNITEXPORTSTATUS.recid);
            setValue('createddatetime', MPI21STORAGEUNITEXPORTSTATUS.createddatetime);
            setValue('interface', MPI21STORAGEUNITEXPORTSTATUS.interface);
            setValue('tableid', MPI21STORAGEUNITEXPORTSTATUS.tableid);
            setValue('batchnum', MPI21STORAGEUNITEXPORTSTATUS.batchnum);
            setValue('processed', MPI21STORAGEUNITEXPORTSTATUS.processed);
            setValue('dataareaid', MPI21STORAGEUNITEXPORTSTATUS.dataareaid);
            setValue('actionid', MPI21STORAGEUNITEXPORTSTATUS.actionid);
            setValue('active', MPI21STORAGEUNITEXPORTSTATUS.active);
            setValue('companylocation', MPI21STORAGEUNITEXPORTSTATUS.companylocation);
            setValue('erprecipeno', MPI21STORAGEUNITEXPORTSTATUS.erprecipeno);
            setValue('itemno', MPI21STORAGEUNITEXPORTSTATUS.itemno);
            setValue('processname', MPI21STORAGEUNITEXPORTSTATUS.processname);
            setValue('quantity', MPI21STORAGEUNITEXPORTSTATUS.quantity);
            setValue('storagelocation', MPI21STORAGEUNITEXPORTSTATUS.storagelocation);
            setValue('uom', MPI21STORAGEUNITEXPORTSTATUS.uom);
            setValue('validfrom', MPI21STORAGEUNITEXPORTSTATUS.validfrom);
            setValue('validto', MPI21STORAGEUNITEXPORTSTATUS.validto);
            setValue('version', MPI21STORAGEUNITEXPORTSTATUS.version);
        }
    }, [setType, MPI21STORAGEUNITEXPORTSTATUS, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/'); // Adjust the path as needed
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
                    name="actionid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Action ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="active"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Active"
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
                    name="erprecipeno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ERP Recipe Number"
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
                    name="processname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Process Name"
                            fullWidth
                            margin="normal"
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
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="storagelocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Storage Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="uom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="validfrom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Valid From"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="validto"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Valid To"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="version"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Version"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update MPI21STORAGEUNITEXPORTSTATUS
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21STORAGEUNITEXPORTSTATUS;
