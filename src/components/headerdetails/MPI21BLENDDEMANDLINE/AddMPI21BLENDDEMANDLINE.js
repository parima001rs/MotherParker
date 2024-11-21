import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMPI21BLENDDEMANDLINE = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MPI21BLENDDEMANDLINE');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MPI21BLENDDEMANDLINE</h2>
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
                        name="demandtype"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Demandtype"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                
                    <Controller
                        name="duedate"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Duedate"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                
                    <Controller
                        name="inventlocationid"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Inventlocationid"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                
                    <Controller
                        name="inventsiteid"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Inventsiteid"
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
                        name="machine"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Machine"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                
                    <Controller
                        name="orderno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Orderno"
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
                

                
                    <Controller
                        name="storagelocation"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Storagelocation"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                
                    <Controller
                        name="workcenter"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Workcenter"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                

                

                


                <Button type="submit" variant="contained" color="primary">
                    Add MPI21BLENDDEMANDLINE
                </Button>
            </form>
        </Container>
    );
};

export default AddMPI21BLENDDEMANDLINE;
