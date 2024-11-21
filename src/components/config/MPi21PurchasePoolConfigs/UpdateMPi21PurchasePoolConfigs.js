import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const MPi21PurchasePoolConfig = () => {
    const { addEntity, setType, entities } = useGenericContext();
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MPi21PurchasePoolConfigs');
        if (location.state?.entity) {
            const { entity } = location.state;
            setValue('recId', entity.recId);
            setValue('createdDateTime', entity.createdDateTime);
            setValue('purchasePool', entity.purchasePool);
            setValue('chargeCode_I21', entity.chargeCode_I21);
            setValue('chargeCode_D365', entity.chargeCode_D365);
            setValue('description', entity.description);
            setValue('glAccount', entity.glAccount);
        }
    }, [setType, location.state, setValue]);

    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/'); // Redirect after submission
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recId"
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
                    name="createdDateTime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />

                <Controller
                    name="purchasePool"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Purchase Pool"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="chargeCode_I21"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Charge Code I21"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="chargeCode_D365"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Charge Code D365"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="description"
                    control={control}
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
                    Update MPi21PurchasePoolConfig
                </Button>
            </form>
        </Container>
    );
};

export default MPi21PurchasePoolConfig;
