import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpinterfaceFfhhforecast = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceFfhhforecast = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 
    const [interfaces, setInterfaces] = useState([]);



    const fetchCapability = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceFfhhforecast');
            setCapability(response.data);
        } catch (error) {
            console.error('Error fetching capability data:', error);
        }
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };


    useEffect(() => {
        setType('MpinterfaceFfhhforecast');
        fetchCapability();
        fetchInterfaces();
        if (MpinterfaceFfhhforecast) {
            // Set values for the new keys
            setValue('recid', MpinterfaceFfhhforecast.recid);
            setValue('createddatetime', MpinterfaceFfhhforecast.createddatetime);
            setValue('interface', MpinterfaceFfhhforecast.interface);
            setValue('tableid', MpinterfaceFfhhforecast.tableid);
            setValue('batchnum', MpinterfaceFfhhforecast.batchnum);
            setValue('processed', MpinterfaceFfhhforecast.processed);
            setValue('mpads1indicator', MpinterfaceFfhhforecast.mpads1indicator);
            setValue('mpads2indicator', MpinterfaceFfhhforecast.mpads2indicator);
            setValue('mpads3indicator', MpinterfaceFfhhforecast.mpads3indicator);
            setValue('mpdatetopost', MpinterfaceFfhhforecast.mpdatetopost);
            setValue('mpitemlevel1', MpinterfaceFfhhforecast.mpitemlevel1);
            setValue('mplevel1location', MpinterfaceFfhhforecast.mplevel1location);
            setValue('mpotherattribute', MpinterfaceFfhhforecast.mpotherattribute);
            setValue('mpperiodtopost', MpinterfaceFfhhforecast.mpperiodtopost);
            setValue('mppyramid', MpinterfaceFfhhforecast.mppyramid);
            setValue('mprecordtype', MpinterfaceFfhhforecast.mprecordtype);
            setValue('mpads1iqty', MpinterfaceFfhhforecast.mpads1iqty);
            setValue('mpidemand', MpinterfaceFfhhforecast.mpidemand);
            setValue('mpinvqty', MpinterfaceFfhhforecast.mpinvqty);
            setValue('mpqty', MpinterfaceFfhhforecast.mpqty);
            setValue('dataareaid', MpinterfaceFfhhforecast.dataareaid);
        }
    }, [setType, MpinterfaceFfhhforecast, setValue]);


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
            <h2>Update {location.state?.text}</h2>
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
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <Controller
                    name="tableid"
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
                    name="mpads1indicator"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MPADS1 Indicator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpads2indicator"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MPADS2 Indicator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpads3indicator"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MPADS3 Indicator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpdatetopost"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Date to Post"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemlevel1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Level 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mplevel1location"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Level 1 Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpotherattribute"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Other Attribute"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpperiodtopost"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Period to Post"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mppyramid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Pyramid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprecordtype"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Record Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpads1iqty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP ADS1 Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpidemand"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Demand"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpinvqty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Inventory Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpqty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Quantity"
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
            

                <Button type="submit" variant="contained" color="primary">
                    Update MpinterfaceFfhhforecast
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceFfhhforecast;
