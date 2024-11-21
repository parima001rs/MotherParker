import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMPI21RAWMATDEMANDLINE = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MPI21RAWMATDEMANDLINE');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MPI21RAWMATDEMANDLINE</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                        name="companylocation"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Companylocation"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="demanddate"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Demanddate"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="ireply"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Ireply"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="itemno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Itemno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="parentrecid"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Parentrecid"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="productname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Productname"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="quantity"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Quantity"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="quantityuom"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Quantityuom"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                <Button type="submit" variant="contained" color="primary">
                    Add MPI21RAWMATDEMANDLINE
                </Button>
            </form>
        </Container>
    );
};

export default AddMPI21RAWMATDEMANDLINE;
