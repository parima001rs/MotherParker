import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdatePowerplantcustomtable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Powerplantcustomtable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
 

   

    useEffect(() => {
        setType('PowerplantcustomtableS');
      
    }, [setType]);

    useEffect(() => {
        if (Powerplantcustomtable) {
            setValue('recid', Powerplantcustomtable.recid);
            setValue('operations', Powerplantcustomtable.operations);
            setValue('name', Powerplantcustomtable.name);
            setValue('probatOrderType', Powerplantcustomtable.probatOrderType);
         
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [Powerplantcustomtable, setValue, navigate]);

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
            <h2>Update {location.state?.text} </h2>
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
    name="operations"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Operations"
            fullWidth
            margin="normal"
        />
    )}
/>

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
    name="probatOrderType"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="ProbatOrderType"
            fullWidth
            margin="normal"
        />
    )}
/>



                <Button type="submit" variant="contained" color="primary">
                    Update Powerplantcustomtable
                </Button>
            </form>
        </Container>
    );
};

export default UpdatePowerplantcustomtable;
