import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateWrkctrcapabilityresources = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Wrkctrcapabilityresources = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 


    const fetchCapability = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Wrkctrcapabilities');
            setCapability(response.data);
        } catch (error) {
            console.error('Error fetching capability data:', error);
        }
    };

    useEffect(() => {
        setType('Wrkctrcapabilityresources');
        fetchCapability();
    }, [setType]);

    useEffect(() => {
        if (Wrkctrcapabilityresources) {
            setValue('recid', Wrkctrcapabilityresources.recid);
            setValue('capability', Wrkctrcapabilityresources.capability);
            setValue('wrkctrid', Wrkctrcapabilityresources.wrkctrid);
            setValue('resourcedataareaid', Wrkctrcapabilityresources.resourcedataareaid);
            setValue('level', Wrkctrcapabilityresources.level);
            setValue('priority', Wrkctrcapabilityresources.priority);
            setValue('validfrom', Wrkctrcapabilityresources.validfrom);
            setValue('validto', Wrkctrcapabilityresources.validto);
            setValue('mpbinno', Wrkctrcapabilityresources.mpbinno);
            setValue('mprecvstation', Wrkctrcapabilityresources.mprecvstation);
            setValue('capabilityNavigation', Wrkctrcapabilityresources.capabilityNavigation);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [Wrkctrcapabilityresources, setValue, navigate]);

    const onSubmit = async (data) => {
        try {
            await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
            //navigate('/');
        } catch (error) {
            console.error('Error updating entity:', error);
        }
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
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
                    Update Wrkctrcapabilityresources
                </Button>
            </form>
        </Container>
    );
};

export default UpdateWrkctrcapabilityresources;
