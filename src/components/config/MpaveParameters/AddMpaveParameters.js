import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpaveParameter = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MpaveParameters');
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
                name="createdatetime"
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
                name="inventSiteId"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Site ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="journalNameIdPick"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Journal Name ID Pick"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="journalNameIdRaf"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Journal Name ID RAF"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="journalNameIdReconciliation"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Journal Name ID Reconciliation"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="journalNameIdRoute"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Journal Name ID Route"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="journalNameIdTransferGc"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Journal Name ID Transfer GC"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="journalNameIdTransferLm"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Journal Name ID Transfer LM"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveActivate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average Activate"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveBatchNumSeqCode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average Batch Number Sequence Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveFd60ReasonCodeForRecon"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average FD60 Reason Code for Recon"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveFilePath"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average File Path"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveHeaderKey"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average Header Key"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveHeaderValue"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average Header Value"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveShowDebugMsg"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average Show Debug Message"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="aveUrl"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Average URL"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="probatDefaultSourceWarehouse"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Probation Default Source Warehouse"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="processEndPointInbound"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Process End Point Inbound"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="processStagingInbound"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Process Staging Inbound"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Add MpaveParameter
            </Button>
        </form>
    </Container>
    );
};

export default AddMpaveParameter;
