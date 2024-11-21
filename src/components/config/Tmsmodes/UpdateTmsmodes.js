import React, { useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateTmsmode = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Tmsmode = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Tmsmodes');
        if (Tmsmode) {
            setValue('recid', Tmsmode.recid);
            setValue('modecode', Tmsmode.Tmsmodecode);
            setValue('name', Tmsmode.name);
            setValue('modifieddatetime', Tmsmode.modifieddatetime);
            setValue('modifiedby', Tmsmode.modifiedby);
            setValue('createddatetime', Tmsmode.createddatetime);
            setValue('createdby', Tmsmode.createdby);
            setValue('dataareaid', Tmsmode.dataareaid);
        } else {
            console.error('Entity not found');
            // Optionally navigate away if the entity is not found
            // navigate('/your-default-path');
        }
    }, [setType, Tmsmode, setValue]);

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
                name="modecode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Tmsmode Code"
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
                name="modifieddatetime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified Datetime"
                        type="datetime-local"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />
            <Controller
                name="modifiedby"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified By"
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
                        label="Created Datetime"
                        type="datetime-local"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />
            <Controller
                name="createdby"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created By"
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
                        label="Data Area ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Update Tmsmode
            </Button>
        </form>
    </Container>
    );
};

export default UpdateTmsmode;
