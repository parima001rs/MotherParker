import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpi21Stockfeeditemlocation = () => {
    const { entities, addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const [parentRecIdEntities, setParentRecIdEntities] = useState([]);


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    // useEffect(() => {
    //     setType('Mpi21Stockfeeditemlocations');
    // }, [setType]);

    useEffect(() => {
        setType('Mpi21Stockfeeditemlocations');
        // Fetch the entities for parentrecid as recid in Mpi21Stockfeeditemwarehouse here
        fetchParentRecIdEntities();
    }, [setType]);

    const fetchParentRecIdEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21Stockfeeditemwarehouses');
        setParentRecIdEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <Controller
                    name="inventlocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventlocationid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventsiteid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="parentrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="parentrecid-label">Parentrecid</InputLabel>
                            <Select {...field} labelId="parentrecid-label">
                                {parentRecIdEntities.map((entity, index) => (
                                    <MenuItem key={index} value={entity.recid}>
                                        {entity.recid}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                
                {/* <Controller
                    name="parentrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Parentrecid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                /> */}
                <Controller
                    name="wmslocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Wmslocationid"
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
               

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21Stockfeeditemlocation
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21Stockfeeditemlocation;
