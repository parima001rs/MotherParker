import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';  



const AddMPi21ChargeCodeSetup = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MPi21ChargeCodeSetups');
    }, [setType]);

    return (
        <Container>
        <BackButton />
        <h2>Add  {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="recId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Record ID"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

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
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Controller
                name="dataAreaId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Data Area ID"
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
                name="chargeCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Charge Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Description"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="glAccount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="GL Account"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Add MPi21ChargeCodeSetup
            </Button>
        </form>
    </Container>
    );
};

export default AddMPi21ChargeCodeSetup;
