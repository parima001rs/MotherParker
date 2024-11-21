
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinterfaceFfhhforecast = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 
    const [interfaces, setInterfaces] = useState([]);

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    const fetchCapability = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceFfhhforecast');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('MpinterfaceFfhhforecast');
        fetchCapability();
        fetchInterfaces();
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text} </h2>
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
                    Add MpinterfaceFfhhforecast
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceFfhhforecast;
