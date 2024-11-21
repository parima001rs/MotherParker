import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom'; 

const AddMptables = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpadjreasoncodes');
    }, [setType]);

    return (
        <Container>
            <BackButton/>
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>



            <Controller
                    name="id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

<Controller
                    name="tableName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="TableName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="type"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Type"
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
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />

           
          
              
              
             


                <Button type="submit" variant="contained" color="primary">
                    Add Mptables
                </Button>
            </form>
        </Container>
    );
};

export default AddMptables;
