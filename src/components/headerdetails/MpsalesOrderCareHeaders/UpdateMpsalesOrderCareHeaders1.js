import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';

const UpdateMpsalesOrderCareHeader = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpsalesOrderCareHeader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    const [mpInterfaceEntities, setMpInterfaceEntities] = useState([]);

    useEffect(() => {
        setType('MpsalesOrderCareHeaders');
        if (MpsalesOrderCareHeader) {
            setValue('createddatetime', MpsalesOrderCareHeader.createddatetime);
            setValue('interface', MpsalesOrderCareHeader.interface);
            setValue('tableid', MpsalesOrderCareHeader.tableid);
            setValue('batchnum', MpsalesOrderCareHeader.batchnum);
            setValue('processed', MpsalesOrderCareHeader.processed);
            setValue('dataareaid', MpsalesOrderCareHeader.dataareaid);
            setValue('transActionPurpose', MpsalesOrderCareHeader.transActionPurpose);
            setValue('customerRef', MpsalesOrderCareHeader.customerRef);
            setValue('name', MpsalesOrderCareHeader.name);
            setValue('address1', MpsalesOrderCareHeader.address1);
            setValue('address2', MpsalesOrderCareHeader.address2);
            setValue('address3', MpsalesOrderCareHeader.address3);
            setValue('city', MpsalesOrderCareHeader.city);
            setValue('state', MpsalesOrderCareHeader.state);
            setValue('zip', MpsalesOrderCareHeader.zip);
            setValue('country', MpsalesOrderCareHeader.country);
            setValue('shipperRef', MpsalesOrderCareHeader.shipperRef);
            setValue('uniqueRef', MpsalesOrderCareHeader.uniqueRef);
            setValue('orderType', MpsalesOrderCareHeader.orderType);
            setValue('comments', MpsalesOrderCareHeader.comments);
            setValue('primaryContactAssignment', MpsalesOrderCareHeader.primaryContactAssignment);
            setValue('workflow', MpsalesOrderCareHeader.workflow);
            setValue('tmsplanningAbility', MpsalesOrderCareHeader.tmsplanningAbility);
            setValue('customerpo', MpsalesOrderCareHeader.customerpo);
            setValue('customer', MpsalesOrderCareHeader.customer);
            setValue('methodOfPayment', MpsalesOrderCareHeader.methodOfPayment);
            setValue('originationDate', MpsalesOrderCareHeader.originationDate);
            setValue('directionCategory', MpsalesOrderCareHeader.directionCategory);
            setValue('estAvailableStartDate', MpsalesOrderCareHeader.estAvailableStartDate);
            setValue('whsLocationRef', MpsalesOrderCareHeader.whsLocationRef);
            setValue('whsName', MpsalesOrderCareHeader.whsName);
            setValue('whsAddress1', MpsalesOrderCareHeader.whsAddress1);
            setValue('whsAddress2', MpsalesOrderCareHeader.whsAddress2);
            setValue('whsAddress3', MpsalesOrderCareHeader.whsAddress3);
            setValue('whsCity', MpsalesOrderCareHeader.whsCity);
            setValue('whsState', MpsalesOrderCareHeader.whsState);
            setValue('whsZip', MpsalesOrderCareHeader.whsZip);
            setValue('whsCountry', MpsalesOrderCareHeader.whsCountry);
            setValue('reqDeliveryStartDate', MpsalesOrderCareHeader.reqDeliveryStartDate);
            setValue('locationRef', MpsalesOrderCareHeader.locationRef);
            setValue('locName', MpsalesOrderCareHeader.locName);
            setValue('locAddress1', MpsalesOrderCareHeader.locAddress1);
            setValue('locAddress2', MpsalesOrderCareHeader.locAddress2);
            setValue('locAddress3', MpsalesOrderCareHeader.locAddress3);
            setValue('locCity', MpsalesOrderCareHeader.locCity);
            setValue('locState', MpsalesOrderCareHeader.locState);
            setValue('locZip', MpsalesOrderCareHeader.locZip);
            setValue('locCountry', MpsalesOrderCareHeader.locCountry);
            setValue('locCustomerRef', MpsalesOrderCareHeader.locCustomerRef);
            setValue('groupAssignment', MpsalesOrderCareHeader.groupAssignment);
            
            fetchMpInterfaceEntities();
        }
    }, [setType, MpsalesOrderCareHeader, setValue]);

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
            <h2>Update MpsalesOrderCareHeader</h2>
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
                            label="TransActionPurpose"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="customerRef"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="CustomerRef"
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
                    name="customerpo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Customerpo"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="customer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Customer"
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
                    name="whsZip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WhsZip"
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
                    name="locName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locAddress1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocAddress1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locAddress2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocAddress2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locAddress3"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocAddress3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locCity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocCity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locState"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocState"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locZip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocZip"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locCountry"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocCountry"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locCustomerRef"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LocCustomerRef"
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
                    Update MpsalesOrderCareHeader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpsalesOrderCareHeader;
