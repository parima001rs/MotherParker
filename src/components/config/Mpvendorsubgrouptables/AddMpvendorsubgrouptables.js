import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpvendorsubgrouptables = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpvendorsubgrouptables');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text} </h2>

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
                    name="mpimakevendor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpimakevendor"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Controller
                    name="mpvendorsubgroup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpvendorsubgroup"
                            fullWidth
                            margin="normal"
                        />


                    )}
                />

                <Controller
                    name="mpvendorsubgroupdesc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpvendorsubgroupdesc"
                            fullWidth
                            margin="normal"
                        />


                    )}
                />


                <Controller
                    name="mpirelyvendor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpirelyvendor"
                            fullWidth
                            margin="normal"
                        />


                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Add Mpvendorsubgrouptables
                </Button>
            </form>
        </Container>
    );
};

export default AddMpvendorsubgrouptables;
