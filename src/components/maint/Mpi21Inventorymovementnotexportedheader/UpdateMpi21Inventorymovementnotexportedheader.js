import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const UpdateMpi21Inventorymovementnotexportedheader = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21Inventorymovementnotexportedheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

   

 

    useEffect(() => {
        setType('Mpi21Inventorymovementnotexportedheader');
      
    }, [setType]);

    useEffect(() => {
        if (Mpi21Inventorymovementnotexportedheader) {
            
            setValue('createddatetime', Mpi21Inventorymovementnotexportedheader.createddatetime);
            setValue('actionid', Mpi21Inventorymovementnotexportedheader.actionid);
            setValue('batchnum', Mpi21Inventorymovementnotexportedheader.batchnum);
            setValue('companylocation', Mpi21Inventorymovementnotexportedheader.companylocation);
            setValue('itemno', Mpi21Inventorymovementnotexportedheader.itemno);
            setValue('journalid', Mpi21Inventorymovementnotexportedheader.journalid);
            setValue('lotno', Mpi21Inventorymovementnotexportedheader.lotno);
            setValue('newstoragelocation', Mpi21Inventorymovementnotexportedheader.newstoragelocation);
            setValue('newstorageunit', Mpi21Inventorymovementnotexportedheader.newstorageunit);
            setValue('notes', Mpi21Inventorymovementnotexportedheader.notes);
            setValue('quantity', Mpi21Inventorymovementnotexportedheader.quantity);
            setValue('quantityuom', Mpi21Inventorymovementnotexportedheader.quantityuom);
            setValue('reasoncode', Mpi21Inventorymovementnotexportedheader.reasoncode);
            setValue('sourcestoragelocation', Mpi21Inventorymovementnotexportedheader.sourcestoragelocation);
            setValue('sourcestorageunit', Mpi21Inventorymovementnotexportedheader.sourcestorageunit);
            setValue('tolotno', Mpi21Inventorymovementnotexportedheader.tolotno);
            setValue('transactiontypeid', Mpi21Inventorymovementnotexportedheader.transactiontypeid);
            setValue('createdby', Mpi21Inventorymovementnotexportedheader.createdby);
            setValue('dataareaid', Mpi21Inventorymovementnotexportedheader.dataareaid);
            setValue('journaltransrecid', Mpi21Inventorymovementnotexportedheader.journaltransrecid);
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [Mpi21Inventorymovementnotexportedheader, setValue, navigate]);

    const onSubmit = async (data) => {
        try {
            await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
            //navigate('/');
        } catch (error) {
            console.error('Error updating entity:', error);
        }
    };

    return (
        <Container>
            <h2>Update {location.state?.text}</h2>
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
                    Update Mpi21Inventorymovementnotexportedheader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21Inventorymovementnotexportedheader;
