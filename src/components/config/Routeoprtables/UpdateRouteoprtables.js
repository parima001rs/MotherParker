
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateRouteoprtables = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Routeoprtables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Routeoprtables');
        if (Routeoprtables) {
            setValue('recid', Routeoprtables.recid);
            setValue('oprid', Routeoprtables.oprid);
            setValue('name', Routeoprtables.name);
            setValue('dataareaid', Routeoprtables.dataareaid);
            setValue('mpprobatordertype', Routeoprtables.mpprobatordertype);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Routeoprtables, setValue, navigate]);

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
                    name="oprid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Oprid"
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
                    name="mpprobatordertype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatordertype"
                            fullWidth
                            margin="normal"
                        />

                        
                    )}
                />
                sa
                <Button type="submit" variant="contained" color="primary">
                    Update Routeoprtables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateRouteoprtables;
