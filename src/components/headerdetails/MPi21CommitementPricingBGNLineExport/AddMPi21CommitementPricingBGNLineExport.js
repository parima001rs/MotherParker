import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMPi21CommitementPricingBGNLineExport = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MPi21CommitementPricingBGNLineExport');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MPi21CommitementPricingBGNLineExport</h2>
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

            <Controller
                name="createddatetime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Datetime"
                        type="datetime-local"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
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
                        label="Data Area ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="actualBlend"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Actual Blend"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpBlend"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP Blend"
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
                        label="Parent Recid"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Add MPi21CommitementPricingBGNLineExport
                </Button>
            </form>
        </Container>
    );
};

export default AddMPi21CommitementPricingBGNLineExport;
