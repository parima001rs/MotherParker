import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';  


const UpdateMPi21ChargeCodeSetup = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MPi21ChargeCodeSetup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('MPi21ChargeCodeSetups');
        if (MPi21ChargeCodeSetup) {
            setValue('recId', MPi21ChargeCodeSetup.recId);
            setValue('createdDateTime', MPi21ChargeCodeSetup.createdDateTime);
            setValue('dataAreaId', MPi21ChargeCodeSetup.dataAreaId);
            setValue('type', MPi21ChargeCodeSetup.type);
            setValue('chargeCode', MPi21ChargeCodeSetup.chargeCode);
            setValue('description', MPi21ChargeCodeSetup.description);
            setValue('glAccount', MPi21ChargeCodeSetup.glAccount);
        }
    }, [setType, MPi21ChargeCodeSetup, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        navigate('/'); // Uncomment to navigate after updating
    };

    return (
        <Container>
            <BackButton />
            <h2>Update  {location.state?.text}</h2>
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
                    Update MPi21ChargeCodeSetup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPi21ChargeCodeSetup;
