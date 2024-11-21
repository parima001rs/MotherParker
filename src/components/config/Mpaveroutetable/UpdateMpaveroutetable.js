
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpaveroutetable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpaveroutetable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpaveroutetable');
        if (Mpaveroutetable) {
            setValue('recid', Mpaveroutetable.recid);
            setValue('name', Mpaveroutetable.name);
            setValue('routeid', Mpaveroutetable.routeid);
            setValue('dataareaid', Mpaveroutetable.dataareaid);
            setValue('grossweight', Mpaveroutetable.grossweight);
            setValue('createddatetime', Mpaveroutetable.createddatetime);
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpaveroutetable, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
          
<Controller
    name="name"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Name"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="routeid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Routeid"
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
<Controller
    name="grossweight"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Grossweight"
            fullWidth
            margin="normal"
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
            label="Createddatetime"
            fullWidth
            margin="normal"
        />
    )}
/>

                <Button type="submit" variant="contained" color="primary">
                    Update Mpaveroutetable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveroutetable;
