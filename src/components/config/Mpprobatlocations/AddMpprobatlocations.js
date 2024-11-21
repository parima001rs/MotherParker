import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpprobatlocations = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpprobatlocations');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />

                <Controller
                    name="mpprobatgreencoffeeloc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatgreencoffeeloc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprobatgroundcoffeeloc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatgroundcoffeeloc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprobatroastcoffeeloc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatroastcoffeeloc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatsite"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatsite"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatwarehouse"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatwarehouse"
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

                <Button type="submit" variant="contained" color="primary">
                    Add Mpprobatlocations
                </Button>
            </form>
        </Container>
    );
};

export default AddMpprobatlocations;
