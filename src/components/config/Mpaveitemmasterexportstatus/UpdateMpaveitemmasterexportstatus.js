
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpaveitemmasterexportstatus = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpaveitemmasterexportstatus = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate(); 
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpaveitemmasterexportstatus');
        if (Mpaveitemmasterexportstatus) {
            setValue('recid', Mpaveitemmasterexportstatus.recid);
            setValue('itemid', Mpaveitemmasterexportstatus.itemid);
            setValue('todelete', Mpaveitemmasterexportstatus.todelete);
            setValue('toinsert', Mpaveitemmasterexportstatus.toinsert);
            setValue('toupdate', Mpaveitemmasterexportstatus.toupdate);
            setValue('modifieddatetime', Mpaveitemmasterexportstatus.modifieddatetime);
            setValue('createddatetime', Mpaveitemmasterexportstatus.createddatetime);
            setValue('dataareaid', Mpaveitemmasterexportstatus.dataareaid);
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpaveitemmasterexportstatus, setValue, navigate]);

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
                    Update Mpaveitemmasterexportstatus
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveitemmasterexportstatus;
