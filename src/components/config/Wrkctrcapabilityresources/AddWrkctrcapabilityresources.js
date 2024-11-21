
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';






const AddWrkctrcapabilityresources = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    const fetchCapability = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Wrkctrcapabilities');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('Wrkctrcapabilityresources');
        fetchCapability();
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text} </h2>
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
                        />
                    )}
                />
                <Controller
                    name="capability"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="capability-label">Capability</InputLabel>
                            <Select
                                {...field}
                                labelId="capability-label"
                                label="Capability"
                            >
                                {capability.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.recid}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="wrkctrid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Wrkctrid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="resourcedataareaid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Resourcedataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="level"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Level"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="priority"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Priority"
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
                            label="Validfrom"
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
                            label="Validto"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbinno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpbinno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprecvstation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mprecvstation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="capabilityNavigation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="CapabilityNavigation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Wrkctrcapabilityresources
                </Button>
            </form>
        </Container>
    );
};

export default AddWrkctrcapabilityresources;
