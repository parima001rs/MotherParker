import React, { useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinforPayloadParameter = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforPayloadParameter = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MpinforPayloadParameters');
        if (MpinforPayloadParameter) {
            setValue('recid', MpinforPayloadParameter.recid);
            setValue('createddatetime', MpinforPayloadParameter.createddatetime);
            setValue('dataareaid', MpinforPayloadParameter.dataareaid);
            setValue('pastDays', MpinforPayloadParameter.pastDays);
            setValue('futureDays', MpinforPayloadParameter.futureDays);
            // Set additional fields
            setValue('fromLogicalId', MpinforPayloadParameter.fromLogicalId);
            setValue('toLogicalId', MpinforPayloadParameter.toLogicalId);
            setValue('documentName', MpinforPayloadParameter.documentName);
            setValue('messageId', MpinforPayloadParameter.messageId);
            setValue('tenantId', MpinforPayloadParameter.tenantId);
            setValue('instances', MpinforPayloadParameter.instances);
            setValue('encoding', MpinforPayloadParameter.encoding);
            setValue('characterSet', MpinforPayloadParameter.characterSet);
            setValue('accountingEntity', MpinforPayloadParameter.accountingEntity);
            setValue('location', MpinforPayloadParameter.location);
            setValue('documentId', MpinforPayloadParameter.documentId);
            setValue('source', MpinforPayloadParameter.source);
        } else {
            console.error('Entity not found');
            // navigate('/'); // Uncomment if you want to redirect when the entity is not found
        }
    }, [setType, MpinforPayloadParameter, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid');
        // navigate('/'); // Uncomment if you want to navigate after update
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                            disabled // Assuming recid shouldn't be edited
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
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                    name="pastDays"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="PastDays"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="futureDays"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="FutureDays"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* Add additional fields to the form */}
                <Controller
                    name="fromLogicalId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="From Logical ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="toLogicalId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="To Logical ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="documentName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Document Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="messageId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Message ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="tenantId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tenant ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="instances"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Instances"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="encoding"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Encoding"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="characterSet"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Character Set"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="accountingEntity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Accounting Entity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="documentId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Document ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="source"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Source"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update MpinforPayloadParameter
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforPayloadParameter;
