import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpaveitemmasterexportstatus = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpaveitemmasterexportstatus');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
          
<Controller
    name="itemid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Itemid"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="todelete"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Todelete"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="toinsert"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Toinsert"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="toupdate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Toupdate"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="modifieddatetime"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Modifieddatetime"
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
                    Add Mpaveitemmasterexportstatus
                </Button>
            </form>
        </Container>
    );
};

export default AddMpaveitemmasterexportstatus;
