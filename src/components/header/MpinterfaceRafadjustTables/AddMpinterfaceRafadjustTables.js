import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpinterfaceRafadjustTable = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [interfaces, setInterfaces] = useState([]);

    const onSubmit = async (data) => {
        try {
            await addEntity(data);
        } catch (error) {
            console.error('Error adding entity:', error);
        }
    };

    useEffect(() => {
        setType('MpinterfaceRafadjustTables');
        fetchInterfaces();
        console.log(interfaces);

    }, [setType]);

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfacelegacyids');
            setInterfaces(response.data);
        } catch (error) {
            console.error('Error fetching interfaces data:', error);
        }
    };

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
                        />
                    )}
                />

                <Controller
                    name="mprafactivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Activity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafbatchid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Batch ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafbatchnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafbatchorder"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Batch Order"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafcreationdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Creation Date"
                            fullWidth
                            margin="normal"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="mprafcreationtime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Creation Time"
                            fullWidth
                            margin="normal"
                            type="time"
                        />
                    )}
                />

                <Controller
                    name="mprafdefaultresource"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Default Resource"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafdestname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Dest Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafdmasterid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF D Master ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafexpirydate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Expiry Date"
                            fullWidth
                            margin="normal"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="mprafexportgeneralid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Export General ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraffacility"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraffinalitem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Final Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraflicenseplate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF License Plate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraflocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraflotname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Lot Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafmobatchnumber1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF MO Batch Number 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafoperator"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Operator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafordercomplete"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Order Complete"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraforiginalitem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Original Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafprobatseqno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Probat Seq No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafproductiondate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Production Date"
                            fullWidth
                            margin="normal"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="mprafquantity"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Quantity"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mprafreasoncode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Reason Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafrecordingdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Recording Date"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                        />
                    )}
                />

                <Controller
                    name="mprafsmasterid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF S Master ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprafsourcename"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Source Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpraftransfererd"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Transfererd"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpraftranstime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP RAF Trans Time"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                        />
                    )}
                />

                <Controller
                    name="mprafzone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mprafzone"
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
                            label="Dataareaid"
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
                            label="TableId"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpinterfacelegacyid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="legacyid-label">Mpinterfacelegacyid</InputLabel>
                            <Select {...field} labelId="legacyid-label">   
                                {interfaces.map((entity, index) => (
                                    <MenuItem key={index} value={entity.value}>
                                        {entity.value}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Add MpinterfaceRafadjustTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceRafadjustTable;
