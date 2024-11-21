import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpaveitemmasterexportstatus = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpaveitemmasterexportstatus');
    }, [setType]);

    return (
        <Container>
        <BackButton />
        <h2>Add {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="recid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Rec ID"
                        fullWidth
                        margin="normal"
                        disabled // Optionally disable this field
                    />
                )}
            />

            <Controller
                name="createddatetime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemgroup"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="name"
                control={control}
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
                name="avevaItemClass"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Class"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemStatusCode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Status Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="adjustBomqtyPercentage"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="BOM Qty %"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="orderLotNo"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Lot No"
                        fullWidth
                        margin="normal"
                      
                    />
                )}
            />

            <Controller
                name="lotNo"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Lot No"
                        fullWidth
                        margin="normal"
                       
                    />
                )}
            />

            <Controller
                name="dataareaid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Data Area ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Add Mpaveinventitemgroup
            </Button>
        </form>
    </Container>
     
    );
};

export default AddMpaveitemmasterexportstatus;
