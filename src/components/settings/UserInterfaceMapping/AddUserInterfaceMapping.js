import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import axios from 'axios';

const AddUserInterfaceMapping = () => {
    const [interfaces, setInterfaces] = useState([]);
    const [users, setUsers] = useState([]);
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
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

    const onSubmit = async (data) => {

        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('UserInterfaceMappings');
        fetchUsers();
        fetchInterfaces();
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add UserInterfaceMapping</h2>
            <form onSubmit={handleSubmit(onSubmit)}>




                {/* <Controller
                    name="id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                /> */}
                {/* <Controller
                    name="userId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="User Id"
                            fullWidth
                            margin="normal"
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="interface Id"
                            fullWidth
                            margin="normal"
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
                    Add UserInterfaceMapping
                </Button>
            </form>
        </Container>
    );
};

export default AddUserInterfaceMapping;
