import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21Stockfeeditemlocation = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21Stockfeeditemlocation = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const [parentRecIdEntities, setParentRecIdEntities] = useState([]);

    useEffect(() => {
        setType('Mpi21Stockfeeditemlocations');
        if (Mpi21Stockfeeditemlocation) {
            setValue('inventlocationid', Mpi21Stockfeeditemlocation.inventlocationid);
            setValue('inventsiteid', Mpi21Stockfeeditemlocation.inventsiteid);
            setValue('parentrecid', Mpi21Stockfeeditemlocation.parentrecid);
            setValue('wmslocationid', Mpi21Stockfeeditemlocation.wmslocationid);
            setValue('dataareaid', Mpi21Stockfeeditemlocation.dataareaid);

            fetchParentRecIdEntities();
        }
    }, [setType, Mpi21Stockfeeditemlocation, setValue]);

    const fetchParentRecIdEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21Stockfeeditemwarehouses');
        setParentRecIdEntities(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    Update Mpi21Stockfeeditemlocation
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21Stockfeeditemlocation;
