import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpaveParameter = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const MpaveParameter = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MpaveParameters');
        if (MpaveParameter) {
            setValue('recid', MpaveParameter.recid);
            setValue('createdatetime', MpaveParameter.createdatetime);
            setValue('inventSiteId', MpaveParameter.inventSiteId);
            setValue('journalNameIdPick', MpaveParameter.journalNameIdPick);
            setValue('journalNameIdRaf', MpaveParameter.journalNameIdRaf);
            setValue('journalNameIdReconciliation', MpaveParameter.journalNameIdReconciliation);
            setValue('journalNameIdRoute', MpaveParameter.journalNameIdRoute);
            setValue('journalNameIdTransferGc', MpaveParameter.journalNameIdTransferGc);
            setValue('journalNameIdTransferLm', MpaveParameter.journalNameIdTransferLm);
            setValue('aveActivate', MpaveParameter.aveActivate);
            setValue('aveBatchNumSeqCode', MpaveParameter.aveBatchNumSeqCode);
            setValue('aveFd60ReasonCodeForRecon', MpaveParameter.aveFd60ReasonCodeForRecon);
            setValue('aveFilePath', MpaveParameter.aveFilePath);
            setValue('aveHeaderKey', MpaveParameter.aveHeaderKey);
            setValue('aveHeaderValue', MpaveParameter.aveHeaderValue);
            setValue('aveShowDebugMsg', MpaveParameter.aveShowDebugMsg);
            setValue('aveUrl', MpaveParameter.aveUrl);
            setValue('probatDefaultSourceWarehouse', MpaveParameter.probatDefaultSourceWarehouse);
            setValue('processEndPointInbound', MpaveParameter.processEndPointInbound);
            setValue('processStagingInbound', MpaveParameter.processStagingInbound);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, MpaveParameter, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Update using the primary key 'recid'
        navigate('/path-to-redirect'); // Adjust the path as needed
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    Update MpaveParameter
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveParameter;
