
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpinterfaces = () => {
    const { interfaceid } = useParams(); // Using only 'interfaceid'
    const { entities, updateEntity, setType } = useGenericContext();

    const Mpinterfaces = entities.find((u) => u.interfaceid === parseInt(interfaceid));
    
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpinterfaces');
        if (Mpinterfaces) {
            setValue('interfaceid', Mpinterfaces.interfaceid);
            setValue('interface', Mpinterfaces.interface);
            setValue('Mpinterfaces1', Mpinterfaces.Mpinterfaces1);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpinterfaces, setValue, navigate]);

    const onSubmit = async (data) => {
        try {
            console.log('Submitting data:', { interfaceid, ...data });
            await updateEntity({ interfaceid, ...data }, 'interfaceid'); // Using 'interfaceid' as key
            //navigate('/');
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="interfaceid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface ID"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
               
                <Button type="submit" variant="contained" color="primary">
                    Update Mpinterfaces
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaces;
