import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpi21storageunitexportstatuss = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingTableId, setLoadingTableId] = useState(true);
    const [loadingInterfaces, setLoadingInterfaces] = useState(true);
    const location = useLocation(); 

    const fetchTableId = async () => {
        setLoadingTableId(true);
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error("Error fetching table IDs:", error);
        } finally {
            setLoadingTableId(false);
        }
    };

    const fetchInterfaces = async () => {
        setLoadingInterfaces(true);
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error("Error fetching interfaces:", error);
        } finally {
            setLoadingInterfaces(false);
        }
    };

    useEffect(() => {
        setType('Mpi21storageunitexportstatuss');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await addEntity(data);
            navigate('/');
        } catch (error) {
            console.error("Error adding entity:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                                disabled={loadingInterfaces}
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
                    name="tableid"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="Table ID"
                                disabled={loadingTableId}
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
                            error={!!errors.batchnum}
                            helperText={errors.batchnum ? errors.batchnum.message : ""}
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
                {/* Include other fields here */}
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
                            error={!!errors.dataareaid}
                            helperText={errors.dataareaid ? errors.dataareaid.message : ""}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Add Mpi21storageunitexportstatuss"}
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21storageunitexportstatuss;
