import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMptransferOrderOutboundLine = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MptransferOrderOutboundLines');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MptransferOrderOutboundLine</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="refrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Refrecid"
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
                        />
                    )}
                />
                <Controller
                    name="scheduleNum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ScheduleNum"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="productId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ProductId"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lineNumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LineNumber"
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
                    name="packageQuantity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="PackageQuantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="packageType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="PackageType"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="weight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Weight"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="netWeight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="NetWeight"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="commodity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Commodity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="ladingQuantity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LadingQuantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="ladingType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LadingType"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Add MptransferOrderOutboundLine
                </Button>
            </form>
        </Container>
    );
};

export default AddMptransferOrderOutboundLine;
