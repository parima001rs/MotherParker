import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMPHaviSetupTable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MPHaviSetupTables');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                            disabled
                        />
                    )}
                />

                {/* Created Datetime */}
                <Controller
                    name="createdDatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Data Area ID */}
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

                {/* Customer */}
                <Controller
                    name="customer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Customer"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Item Brand 1 */}
                <Controller
                    name="itmBrand1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Brand 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Item Brand 2 */}
                <Controller
                    name="itmBrand2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Brand 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Sales Division 1 */}
                <Controller
                    name="slsDivision1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Sales Division 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Sales Division 2 */}
                <Controller
                    name="slsDivision2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Sales Division 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Item Status */}
                <Controller
                    name="itemStatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

           

                <Button type="submit" variant="contained" color="primary">
                    Add MPHaviSetupTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMPHaviSetupTable;
