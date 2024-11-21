
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateProcessingstatus = () => {
    const { processingstatus1 } = useParams(); // Using 'processingstatus1'
    const { entities, updateEntity, setType } = useGenericContext();
    const Processingstatus = entities.find((u) => u.processingstatus1 === processingstatus1);
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Processingstatus');
        if (Processingstatus) {
            setValue('processingstatus1', Processingstatus.processingstatus1);
            setValue('id', Processingstatus.id);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Processingstatus, setValue, navigate]);

    const onSubmit = async (data) => {
        try {
            console.log('Submitting data:', { processingstatus1, ...data });
            await updateEntity({ processingstatus1, ...data }, 'processingstatus1'); // Using 'processingstatus1' as key
            //navigate('/');
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              
               
                <Controller
                    name="id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                
                <Button type="submit" variant="contained" color="primary">
                    Update Processingstatus
                </Button>
            </form>
        </Container>
    );
};

export default UpdateProcessingstatus;
