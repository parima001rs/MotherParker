import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpaveroutetable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpaveroutetable');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                    Add Mpaveroutetable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpaveroutetable;
