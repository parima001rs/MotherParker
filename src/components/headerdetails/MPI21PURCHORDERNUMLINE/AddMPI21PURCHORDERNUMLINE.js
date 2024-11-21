import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMPI21PURCHORDERNUMLINE = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MPI21PURCHORDERNUMLINE');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MPI21PURCHORDERNUMLINE</h2>
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
                        name="erppolineno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Erppolineno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                
                    <Controller
                        name="erpponumber"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Erpponumber"
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
                        name="sequenceno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Sequenceno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                <Button type="submit" variant="contained" color="primary">
                    Add MPI21PURCHORDERNUMLINE
                </Button>
            </form>
        </Container>
    );
};

export default AddMPI21PURCHORDERNUMLINE;
