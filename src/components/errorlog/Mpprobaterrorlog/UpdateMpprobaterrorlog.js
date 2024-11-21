import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpprobaterrorlog = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpprobaterrorlog = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


   

    useEffect(() => {
        setType('Mpprobaterrorlog');
      
    }, [setType]);

    useEffect(() => {
        if (Mpprobaterrorlog) {
            setValue('recid', Mpprobaterrorlog.recid);
            setValue('baserecid', Mpprobaterrorlog.baserecid);
            setValue('messagelong', Mpprobaterrorlog.messagelong);
            setValue('messageshort', Mpprobaterrorlog.messageshort);
            setValue('dataareaid', Mpprobaterrorlog.dataareaid);
            setValue('createddatetime', Mpprobaterrorlog.createddatetime);
            setValue('batchnum', Mpprobaterrorlog.batchnum);
            setValue('interfacenum', Mpprobaterrorlog.interfacenum);
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [Mpprobaterrorlog, setValue, navigate]);

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
                name="baserecid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Baserecid"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="messagelong"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Messagelong"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="messageshort"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Messageshort"
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
            <Controller
                name="batchnum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Batchnum"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
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


                <Button type="submit" variant="contained" color="primary">
                    Update Mpprobaterrorlog
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpprobaterrorlog;
