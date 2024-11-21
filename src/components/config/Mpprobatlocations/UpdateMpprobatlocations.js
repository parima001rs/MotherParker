import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMpprobatlocations = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpprobatlocations = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpprobatlocations');
        if (Mpprobatlocations) {

            setValue('createddatetime', Mpprobatlocations.createddatetime);
            setValue('mpprobatgreencoffeeloc', Mpprobatlocations.mpprobatgreencoffeeloc);
            setValue('mpprobatgroundcoffeeloc', Mpprobatlocations.mpprobatgroundcoffeeloc);
            setValue('mpprobatroastcoffeeloc', Mpprobatlocations.mpprobatroastcoffeeloc);
            setValue('mpprobatsite', Mpprobatlocations.mpprobatsite);
            setValue('mpprobatwarehouse', Mpprobatlocations.mpprobatwarehouse);
            setValue('dataareaid', Mpprobatlocations.dataareaid);
        }
    }, [setType, Mpprobatlocations, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    Update Mpprobatlocations
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpprobatlocations;
