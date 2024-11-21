
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpaveitemmasternotetypes = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpaveitemmasternotetypes = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpaveitemmasternotetypes');
        if (Mpaveitemmasternotetypes) {
            setValue('recid', Mpaveitemmasternotetypes.recid);
            setValue('interfacenum', Mpaveitemmasternotetypes.interfacenum);
            setValue('typeid', Mpaveitemmasternotetypes.typeid);
            setValue('dataareaid', Mpaveitemmasternotetypes.dataareaid);
            setValue('createddatetime', Mpaveitemmasternotetypes.createddatetime);
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpaveitemmasternotetypes, setValue, navigate]);

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
    name="interfacenum"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Interfacenum"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="typeid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Typeid"
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
                    Update Mpaveitemmasternotetypes
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveitemmasternotetypes;
