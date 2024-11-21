import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
const MpinterfaceNotes = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    const fetchCapability = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceNotes');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('MpinterfaceNotes');
        fetchCapability();
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MpinterfaceNotes</h2>
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
                    Add MpinterfaceNotes
                </Button>
            </form>
        </Container>
    );
};

export default MpinterfaceNotes;
