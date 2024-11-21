import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddTmsparameters = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Tmsparameters');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
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
                    name="parameterskey"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Parameters Key"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="drivercheckoutinterval"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Driver Checkout Interval"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendjournalname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vend Journal Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendoffacct"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vend Off Acct"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="porthubtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Port Hub Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="writeinvoicejournal"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Write Invoice Journal"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="loadnotetype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Load Note Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="defaultnotetype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Default Note Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="defaultnotename"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Default Note Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="workflowuser"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Workflow User"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="enableinvoiceworkflow"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enable Invoice Workflow"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="postjournal"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Post Journal"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="matchinterval"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Match Interval"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="matchandpay"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Match and Pay"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="planbyshipment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Plan by Shipment"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="autocreateloadso"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Auto Create Load SO"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="autocreateloadpo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Auto Create Load PO"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="autocreateloadto"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Auto Create Load TO"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="fbgljourlinetranstxt"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="FBGL Jourline Transtxt"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="overrideshipconfirmdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Override Ship Confirm Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="intransitplanning"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Intransit Planning"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="bolcarrierrolerecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="BOL Carrier Role Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="defaultduration"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Default Duration"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="directdeliverycustomercharge"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Direct Delivery Customer Charge"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="enablefreightreconcile"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enable Freight Reconcile"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="createmasterbol"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Create Master BOL"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="separateshipconfirmationformixedloads"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Separate Ship Confirmation for Mixed Loads"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilenamenumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration Filename Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepath"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathloadplan"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Load Plan"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathloadplanprocessed"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Load Plan Processed"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathwebsettlement"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Web Settlement"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathwebsettlementpro"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Web Settlement Processed"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpchargecodeimportfilepath"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Charge Code Import File Path"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathpayment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Payment"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptmsimportvalidate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP TMS Import Validate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcoleediinbound"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Cole EDI Inbound"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcoleediinboundprocessed"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Cole EDI Inbound Processed"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcoleedioutbound"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Cole EDI Outbound"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcoleedioutboundprocessed"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Cole EDI Outbound Processed"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathtransferrec"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Transfer Rec"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathtransferrecproc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Transfer Rec Proc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathpackingslip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Packing Slip"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpintegrationfilepathpackingslipproc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Integration File Path Packing Slip Proc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpenablebjchange"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Enable BJ Change"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Add Tmsparameters
                </Button>
            </form>
        </Container>
    );
};

export default AddTmsparameters;
