import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinterfaceNotes = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();
    const MpinterfaceNotes= entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);

    const fetchCapability = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceNotes');
            setCapability(response.data);
        } catch (error) {
            console.error('Error fetching capability data:', error);
        }
    };

    useEffect(() => {
        setType('MpinterfaceNotes');
        fetchCapability();
    }, [setType]);

    useEffect(() => {
        if (MpinterfaceNotes) {
            setValue('recid', MpinterfaceNotes.recid);
            setValue('createddatetime', MpinterfaceNotes.createddatetime);
            setValue('interface', MpinterfaceNotes.interface);
            setValue('tableId', MpinterfaceNotes.tableId);  // Updated to match model property casing
            setValue('batchnum', MpinterfaceNotes.batchnum);
            setValue('processed', MpinterfaceNotes.processed);
            setValue('dataareaid', MpinterfaceNotes.dataareaid);
            setValue('mpinterfaceerror', MpinterfaceNotes.mpinterfaceerror);
            setValue('mpinterfaceinstanceid', MpinterfaceNotes.mpinterfaceinstanceid);
            setValue('relationtype', MpinterfaceNotes.relationtype);
            setValue('mpnoteitem', MpinterfaceNotes.mpnoteitem);
            setValue('mpnotetext', MpinterfaceNotes.mpnotetext);
            setValue('siteid', MpinterfaceNotes.siteid);

            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [MpinterfaceNotes, setValue, navigate]);

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
            <BackButton />
            <h2>Update MpinterfaceNotes</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
  
            <Controller
                name="recid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Recid"
                        type="number"
                        fullWidth
                        margin="normal"
                        disabled
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
                name="mpinterfaceerror"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Interface Error"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpinterfaceinstanceid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Interface Instance ID"
                        type="number"
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
                name="relationtype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Relation Type"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpnoteitem"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Note Item"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpnotetext"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Note Text"
                        fullWidth
                        margin="normal"
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
                        label="Created DateTime"
                        type="datetime-local"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />
            <Controller
                    name="processed"
                    control={control}
                    defaultValue=""
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
                name="tableId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Table ID"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="siteid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Site ID"
                        fullWidth
                        margin="normal"
                    />   
    )}
/>

                <Button type="submit" variant="contained" color="primary">
                    Update MpinterfaceNotes
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceNotes;
