import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const AddMpinterfaceMatConsTables = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableIds] = useState([]);
    const location = useLocation(); 


    const fetchTableIds = async () => {
        try {
            const response = await axios.get( process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableIds(response.data);
        } catch (error) {
            console.error('Error fetching table IDs:', error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get( process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error('Error fetching interfaces:', error);
        }
    };

    useEffect(() => {
        setType('MpinterfaceMatConsTables');
        fetchTableIds();
        fetchInterfaces();
    }, [setType]);

    const onSubmit = async (data) => {
        try {
            await addEntity(data);
            navigate('/');
        } catch (error) {
            console.error('Error adding entity:', error);
        }
    };

    return (
        <Container>
            <BackButton/>
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
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
                            id="createddatetime"
                            label="Created Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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
                    name="mpmatconsbatchid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Batch ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsbatchorderno"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Batch Order No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconscustomercode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Customer Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsdestination"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Destination"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsendflag"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons End Flag"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconslocation"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsmasterid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Master ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsnumberseq"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Number Seq"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsordertype"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Order Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconspalletid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Pallet ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsrecordingdate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Recording Date"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="mpmatconsscustomercode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Customer Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconssempty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Empty"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsslotname"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Lot Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconssource"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Source"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconssproductid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Product ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsstartflag"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Start Flag"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsstypecell"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Type Cell"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconstransfered"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Transfered"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconstranstime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Trans Time"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="mpmatconsweight"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Weight"
                            fullWidth
                            margin="normal"
                            type="number"
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
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatConsFacility"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpinterfacelegacyid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Interface Legacy ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">Update MpinterfaceMatConsTable</Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceMatConsTables;
