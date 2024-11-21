import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import axios from 'axios';

const UpdateUserInterfaceMapping = () => {
    const [interfaces, setInterfaces] = useState([]);
    const [users, setUsers] = useState([]);
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const user = entities.find((u) => u.id === parseInt(recid));
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/UserLogins');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users IDs:', error);
        } finally {

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
        setType('UserInterfaceMappings');
        if (user) {
            setValue('id', user.id);
            setValue('interfaceName', user.interfaceName);
            setValue('userEmail', user.userEmail);
            setValue('recid', user.recid);
            setValue('userId', user.userId);
            setValue('interfaceId', user.interfaceId);
        }

        fetchUsers();
        fetchInterfaces();

    }, [setType, user, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ id: parseInt(recid), ...data });
        // Uncomment the line below if you want to navigate after successful update
        // navigate('/'); 
    };

    return (
        <Container>
            <BackButton />
            <h2>Update User Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Id"
                            fullWidth
                            margin="normal"
                            InputProps={{ readOnly: true }} // Make it read-only
                        />
                    )}
                />
                {/* <Controller
                    name="userId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'User Id is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="User Id"
                            fullWidth
                            margin="normal"
                            error={!!errors.userId}
                            helperText={errors.userId ? errors.userId.message : ''}
                        />
                    )}
                /> */}
                <Controller
                    name="userId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'userId Id is required' }}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="userId-label">User</InputLabel>
                            <Select
                                {...field}
                                labelId="User"
                                label="User"
                            >
                                {users.map((entity) => (
                                    <MenuItem key={entity.id} value={entity.id}>
                                        {entity.email}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                {/* <Controller
                    name="interfaceId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Interface Id is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface Id"
                            fullWidth
                            margin="normal"
                            error={!!errors.interfaceId}
                            helperText={errors.interfaceId ? errors.interfaceId.message : ''}
                        />
                    )}
                /> */}

                <Controller
                    name="interfaceId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Interface Id is required' }}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="Interface"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.interfaceid} value={entity.interfaceid}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update User Login
                </Button>
            </form>
        </Container>
    );
};

export default UpdateUserInterfaceMapping;
