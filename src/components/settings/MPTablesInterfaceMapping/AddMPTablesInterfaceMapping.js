import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
const AddMptablesInterfaceMappings = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            //id: '',
            tableName: '', // Corrected key name to match Select field
            type: '',
            interface: '',
            createdDate: '',
            displayName: '',
            urlName: ''
        }
    });
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableIds, setTableIds] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchTableIds = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mptables');
            setTableIds(response.data);
        } catch (error) {
            console.error('Error fetching table IDs:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error('Error fetching interfaces:', error);
        }
    };

    useEffect(() => {
        setType('MptablesInterfaceMappings');
        fetchTableIds();
        fetchInterfaces();
    }, [setType]);

    const onSubmit = async (data) => {
        try {
            await addEntity(data);
            //navigate('/');
        } catch (error) {
            console.error('Error adding entity:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Display loading state
    }

    return (
        <Container>
            <BackButton />
            <h2>Add MptablesInterfaceMappings</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Controller
                    name="id"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                /> */}
                {/* <Controller
                    name="tableName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                /> */}
                <Controller
                    name="tableName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableName-label">Table Name</InputLabel>
                            <Select
                                {...field}
                                labelId="tableName-label"
                                label="Table Name"
                            >
                                {tableIds.map((entity) => (
                                    <MenuItem key={entity.tableName} value={entity.tableName}>
                                        {entity.tableName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* <Controller
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
                /> */}
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
                                    <MenuItem key={entity.interface} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="createdDate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="displayName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Display Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="urlName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="URL Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="resourceGroupName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ResourceGroupName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="factoryName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="FactoryName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="pipelineName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="PipelineName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="subscriptionId"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="SubscriptionId"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add MptablesInterfaceMappings
                </Button>
            </form>
        </Container>
    );
};

export default AddMptablesInterfaceMappings;
