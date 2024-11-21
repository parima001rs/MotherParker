import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMpi21cpbalqtyline = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21cpbalqtyline');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21cpbalqtyline</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="createdDateTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created DateTime"
                        type="datetime-local"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />

            <Controller
                name="balanceQty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Balance Quantity"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erPrefNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ER Pref No"
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="parentRecid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Parent Recid"
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pricingNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pricing No"
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="trxSequenceNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transaction Sequence No"
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21cpbalqtyline
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21cpbalqtyline;
