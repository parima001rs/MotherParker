
import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinterfacerafadjbatchorders = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();
    const Mpinterfacerafadjbatchorders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);

    useEffect(() => {
        setType('Mpinterfacerafadjbatchorders');
        if (Mpinterfacerafadjbatchorders) {
            setValue('recid', Mpinterfacerafadjbatchorders.recid);
            setValue('createddatetime', Mpinterfacerafadjbatchorders.createddatetime);
            setValue('interface', Mpinterfacerafadjbatchorders.interface);
            setValue('batchnum', Mpinterfacerafadjbatchorders.batchnum);
            setValue('processed', Mpinterfacerafadjbatchorders.processed);
            setValue('mprafadjbatchadjqty', Mpinterfacerafadjbatchorders.mprafadjbatchadjqty);
            setValue('mprafadjbatchcurrentopr', Mpinterfacerafadjbatchorders.mprafadjbatchcurrentopr);
            setValue('mprafadjbatchduedate', Mpinterfacerafadjbatchorders.mprafadjbatchduedate);
            setValue('mprafadjbatchendtime', Mpinterfacerafadjbatchorders.mprafadjbatchendtime);
            setValue('mprafadjbatchfacility', Mpinterfacerafadjbatchorders.mprafadjbatchfacility);
            setValue('mprafadjbatchhourremrun', Mpinterfacerafadjbatchorders.mprafadjbatchhourremrun);
            setValue('mprafadjbatchhourremsetup', Mpinterfacerafadjbatchorders.mprafadjbatchhourremsetup);
            setValue('mprafadjbatchitemdid', Mpinterfacerafadjbatchorders.mprafadjbatchitemdid);
            setValue('mprafadjbatchlicensenum', Mpinterfacerafadjbatchorders.mprafadjbatchlicensenum);
            setValue('mprafadjbatchlotnum', Mpinterfacerafadjbatchorders.mprafadjbatchlotnum);
            setValue('mprafadjbatchoperator', Mpinterfacerafadjbatchorders.mprafadjbatchoperator);
            setValue('mprafadjbatchordernum', Mpinterfacerafadjbatchorders.mprafadjbatchordernum);
            setValue('mprafadjbatchorderstatus', Mpinterfacerafadjbatchorders.mprafadjbatchorderstatus);
            setValue('mprafadjbatchordertype', Mpinterfacerafadjbatchorders.mprafadjbatchordertype);
            setValue('mprafadjbatchplannercode', Mpinterfacerafadjbatchorders.mprafadjbatchplannercode);
            setValue('mprafadjbatchprioritycode', Mpinterfacerafadjbatchorders.mprafadjbatchprioritycode);
            setValue('mprafadjbatchqtyfinished', Mpinterfacerafadjbatchorders.mprafadjbatchqtyfinished);
            setValue('mprafadjbatchqtyrequired', Mpinterfacerafadjbatchorders.mprafadjbatchqtyrequired);
            setValue('mprafadjbatchrafreasoncode', Mpinterfacerafadjbatchorders.mprafadjbatchrafreasoncode);
            setValue('mprafadjbatchreleasedate', Mpinterfacerafadjbatchorders.mprafadjbatchreleasedate);
            setValue('mprafadjbatchresourceid', Mpinterfacerafadjbatchorders.mprafadjbatchresourceid);
            setValue('mprafadjbatchruntime', Mpinterfacerafadjbatchorders.mprafadjbatchruntime);
            setValue('mprafadjbatchstarttime', Mpinterfacerafadjbatchorders.mprafadjbatchstarttime);
            setValue('mprafadjbatchtransdate', Mpinterfacerafadjbatchorders.mprafadjbatchtransdate);
            setValue('mprafadjbatchwarehouse', Mpinterfacerafadjbatchorders.mprafadjbatchwarehouse);
            setValue('mprafadjbatchworkctr', Mpinterfacerafadjbatchorders.mprafadjbatchworkctr);
            setValue('mprafadjbatchrefnum', Mpinterfacerafadjbatchorders.mprafadjbatchrefnum);
            setValue('dataareaid', Mpinterfacerafadjbatchorders.dataareaid);
            setValue('tableId', Mpinterfacerafadjbatchorders.tableId);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpinterfacerafadjbatchorders, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid');
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
                            disabled
                        />
                    )}
                />
                <Controller
                    name="createddatetime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Datetime"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="batchnum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="processed"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchadjqty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Adjusted Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchcurrentopr"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Current Operator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchduedate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Due Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchendtime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="End Time"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchfacility"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchhourremrun"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Hours Remaining Run"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchhourremsetup"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Hours Remaining Setup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchitemdid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchlicensenum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="License Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchlotnum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lot Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchoperator"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Operator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchordernum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Order Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchorderstatus"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Order Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchordertype"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Order Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchplannercode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Planner Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchprioritycode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Priority Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchqtyfinished"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity Finished"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchqtyrequired"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity Required"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchrafreasoncode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reason Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchreleasedate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Release Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchresourceid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Resource ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchruntime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Runtime"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchstarttime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Start Time"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchtransdate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Transaction Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchwarehouse"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Warehouse"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchworkctr"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Center"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprafadjbatchrefnum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reference Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="dataareaid"
                    control={control}
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
                    name="tableId"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Batch Adjustment
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfacerafadjbatchorders;
