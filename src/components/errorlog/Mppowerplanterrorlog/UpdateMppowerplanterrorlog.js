import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMppowerplanterrorlog = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mppowerplanterrorlog = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


   

    useEffect(() => {
        setType('Mppowerplanterrorlog');
      
    }, [setType]);

    useEffect(() => {
        if (Mppowerplanterrorlog) {
            setValue('recid', Mppowerplanterrorlog.recid);
            setValue('baserecid', Mppowerplanterrorlog.baserecid);
            setValue('messagelong', Mppowerplanterrorlog.messagelong);
            setValue('messageshort', Mppowerplanterrorlog.messageshort);
            setValue('dataareaid', Mppowerplanterrorlog.dataareaid);
            setValue('createddatetime', Mppowerplanterrorlog.createddatetime);
            setValue('batchnum', Mppowerplanterrorlog.batchnum);
            setValue('interfacenum', Mppowerplanterrorlog.interfacenum);
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [Mppowerplanterrorlog, setValue, navigate]);

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
                    Update Mppowerplanterrorlog
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMppowerplanterrorlog;
