import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container ,FormControlLabel,Checkbox} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';



const AddMpi21Inventorymovementnotexportedheader = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21Inventorymovementnotexportedheader');
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
    name="actionid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Action ID"
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
    name="companylocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Company Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="itemno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Item No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="journalid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Journal ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="lotno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Lot No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="newstoragelocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="New Storage Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="newstorageunit"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="New Storage Unit"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="notes"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Notes"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="quantity"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Quantity"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="quantityuom"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Quantity UOM"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="reasoncode"
    control={control}
    defaultValue=""
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
    name="sourcestoragelocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Source Storage Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="sourcestorageunit"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Source Storage Unit"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="tolotno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="To Lot No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="transactiontypeid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transaction Type ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="createdby"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Created By"
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
    name="journaltransrecid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Journal Trans Recid"
            fullWidth
            margin="normal"
        />
    )}
/>


                
               




                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21Inventorymovementnotexportedheader
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21Inventorymovementnotexportedheader;
