import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container ,FormControlLabel,Checkbox} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';


const AddMpinterfacerafadjbatchorders = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpinterfacerafadjbatchorders');
    }, [setType]);

    return (
        <Container>
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
        
<Controller
    name="createddatetime"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Created DateTime"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="interface"
    control={control}
    defaultValue=""
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
    defaultValue=""
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
    defaultValue={false}
    render={({ field }) => (
        <FormControlLabel
            control={<Checkbox {...field} />}
            label="Processed"
            margin="normal"
        />
    )}
/>
<Controller
    name="mprafadjbatchadjqty"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Adjustment Quantity"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mprafadjbatchcurrentopr"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Current Operation"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mprafadjbatchduedate"
    control={control}
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Item DID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mprafadjbatchlicensenum"
    control={control}
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="RAF Reason Code"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mprafadjbatchreleasedate"
    control={control}
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Run Time"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mprafadjbatchstarttime"
    control={control}
    defaultValue=""
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
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transaction Date"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="mprafadjbatchwarehouse"
    control={control}
    defaultValue=""
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
    defaultValue=""
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
    defaultValue=""
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
    name="tableid"
    control={control}
    defaultValue=""
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
                    Add Mpinterfacerafadjbatchorders
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfacerafadjbatchorders;
