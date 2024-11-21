import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';

const UpdateMptransferOrderOutboundHeader = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MptransferOrderOutboundHeader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    const [mpInterfaceEntities, setMpInterfaceEntities] = useState([]);

    useEffect(() => {
        setType('MptransferOrderOutboundHeaders');
        if (MptransferOrderOutboundHeader) {
            setValue('createddatetime', MptransferOrderOutboundHeader.createddatetime);
            setValue('interface', MptransferOrderOutboundHeader.interface);
            setValue('tableid', MptransferOrderOutboundHeader.tableid);
            setValue('processed', MptransferOrderOutboundHeader.processed);
            setValue('batchnum', MptransferOrderOutboundHeader.batchnum);
            setValue('dataareaid', MptransferOrderOutboundHeader.dataareaid);
            setValue('transActionPurpose', MptransferOrderOutboundHeader.transActionPurpose);
            setValue('shipperRef', MptransferOrderOutboundHeader.shipperRef);
            setValue('uniqueRef', MptransferOrderOutboundHeader.uniqueRef);
            setValue('orderType', MptransferOrderOutboundHeader.orderType);
            setValue('comments', MptransferOrderOutboundHeader.comments);
            setValue('primaryContactAssignment', MptransferOrderOutboundHeader.primaryContactAssignment);
            setValue('workflow', MptransferOrderOutboundHeader.workflow);
            setValue('tmsplanningAbility', MptransferOrderOutboundHeader.tmsplanningAbility);
            setValue('type', MptransferOrderOutboundHeader.type);
            setValue('methodOfPayment', MptransferOrderOutboundHeader.methodOfPayment);
            setValue('originationDate', MptransferOrderOutboundHeader.originationDate);
            setValue('directionCategory', MptransferOrderOutboundHeader.directionCategory);
            setValue('scheduleNum', MptransferOrderOutboundHeader.scheduleNum);
            setValue('estAvailableStartDate', MptransferOrderOutboundHeader.estAvailableStartDate);
            setValue('locationRef', MptransferOrderOutboundHeader.locationRef);
            setValue('name', MptransferOrderOutboundHeader.name);
            setValue('address1', MptransferOrderOutboundHeader.address1);
            setValue('address2', MptransferOrderOutboundHeader.address2);
            setValue('address3', MptransferOrderOutboundHeader.address3);
            setValue('city', MptransferOrderOutboundHeader.city);
            setValue('state', MptransferOrderOutboundHeader.state);
            setValue('zip', MptransferOrderOutboundHeader.zip);
            setValue('country', MptransferOrderOutboundHeader.country);
            setValue('reqDeliveryStartDate', MptransferOrderOutboundHeader.reqDeliveryStartDate);
            setValue('whsLocationRef', MptransferOrderOutboundHeader.whsLocationRef);
            setValue('whsName', MptransferOrderOutboundHeader.whsName);
            setValue('whsAddress1', MptransferOrderOutboundHeader.whsAddress1);
            setValue('whsAddress2', MptransferOrderOutboundHeader.whsAddress2);
            setValue('whsAddress3', MptransferOrderOutboundHeader.whsAddress3);
            setValue('whsCity', MptransferOrderOutboundHeader.whsCity);
            setValue('whsState', MptransferOrderOutboundHeader.whsState);
            setValue('whsZip', MptransferOrderOutboundHeader.whsZip);
            setValue('whsCountry', MptransferOrderOutboundHeader.whsCountry);
            setValue('groupAssignment', MptransferOrderOutboundHeader.groupAssignment);

            fetchMpInterfaceEntities();
        }
    }, [setType, MptransferOrderOutboundHeader, setValue]);

    const fetchMpInterfaceEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setMpInterfaceEntities(response.data);
    };


    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update MptransferOrderOutboundHeader</h2>
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
                        />
                    )}
                />
                
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select {...field} labelId="interface-label">
                                {mpInterfaceEntities.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
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
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tableid"
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
                    name="batchnum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batchnum"
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
                    name="transActionPurpose"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="TransactionPurpose"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="shipperRef"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ShipperRef"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="uniqueRef"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="UniqueRef"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="orderType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="OrderType"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="comments"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Comments"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="primaryContactAssignment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="PrimaryContactAssignment"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="workflow"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Workflow"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="tmsplanningAbility"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="TmsplanningAbility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="type"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="methodOfPayment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MethodOfPayment"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="originationDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="OriginationDate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="directionCategory"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="DirectionCategory"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="scheduleNum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ScheduleNum"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="estAvailableStartDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="EstAvailableStartDate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locationRef"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocationRef"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="address1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Address1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="address2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Address2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="address3"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Address3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="City"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="state"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="State"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="zip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Zip"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Country"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="reqDeliveryStartDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ReqDeliveryStartDate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsLocationRef"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsLocationRef"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsAddress1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsAddress1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsAddress2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsAddress2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsAddress3"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsAddress3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsCity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsCity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsState"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsState"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsCountry"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsCountry"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="groupAssignment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="GroupAssignment"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update MptransferOrderOutboundHeader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMptransferOrderOutboundHeader;
