import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import axios from 'axios';

const UpdateMptablesInterfaceMapping = () => {
    const [interfaces, setInterfaces] = useState([]);
    const [tableIds, setTableIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MptablesInterfaceMapping = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue, reset } = useForm({
        defaultValues: {
            recid: '',
            tableId: '',
            type: '',
            interface: '',
            createdDate: '',
            displayName: '',
            urlName: ''
        }
    });
    const navigate = useNavigate();

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
        if (MptablesInterfaceMapping) {
            setValue('id', MptablesInterfaceMapping.id);
            setValue('recid', MptablesInterfaceMapping.recid);
            setValue('tableName', MptablesInterfaceMapping.tableName);
            setValue('type', MptablesInterfaceMapping.type);
            setValue('interface', MptablesInterfaceMapping.interface);
            setValue('createdDate', MptablesInterfaceMapping.createdDate);
            setValue('displayName', MptablesInterfaceMapping.displayName);
            setValue('urlName', MptablesInterfaceMapping.urlName);
            setValue('resourceGroupName', MptablesInterfaceMapping.resourceGroupName);
            setValue('factoryName', MptablesInterfaceMapping.factoryName);
            setValue('pipelineName', MptablesInterfaceMapping.pipelineName);
            setValue('subscriptionId', MptablesInterfaceMapping.subscriptionId);
        }
        fetchTableIds();
        fetchInterfaces();
        return () => {
            if (!MptablesInterfaceMapping) {
                reset();
            }
        };
    }, [MptablesInterfaceMapping, setValue, setType, reset]);

    const onSubmit = async (data) => {
        try {
            await updateEntity({ recid: parseInt(data.recid), ...data });
            //navigate('/'); // Navigate to home or appropriate route after submission
        } catch (error) {
            console.error('Error updating entity:', error);
        }
    };

    return (
        <Container>
            <BackButton />
            <h2>Update MptablesInterfaceMappings</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Controller
                    name="id"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Id"
                            fullWidth
                            margin="normal"
                            type="number"
                            InputProps={{ readOnly: true }} // Make it read-only if it's not meant to be edited
                        />
                    )}
                /> */}
                  {/* <Controller
                    name="tableId"
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
                    Update MptablesInterfaceMappings
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMptablesInterfaceMapping;
