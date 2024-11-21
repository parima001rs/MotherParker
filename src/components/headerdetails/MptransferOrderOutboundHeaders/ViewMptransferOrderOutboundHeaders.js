import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MpsalesOrderCareLinesTable from '../MpsalesOrderCareLines/InlineupdateMpsalesOrderCareLines';
import BackButton from '../../backButton';

const ViewMptransferOrderOutboundHeader = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MptransferOrderOutboundHeader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MptransferOrderOutboundHeaders');
        if (MptransferOrderOutboundHeader) {
            setValue('recid', MptransferOrderOutboundHeader.recid);
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
        }
    }, [setType, MptransferOrderOutboundHeader, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MptransferOrderOutboundHeader</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Controller
                            name="recid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Recid"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                        )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="recid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Recid"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="createddatetime"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Created Date Time"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="tableid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Table ID"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="transActionPurpose"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Transaction Purpose"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="shipperRef"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Shipper Reference"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="uniqueRef"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Unique Reference"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="orderType"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Order Type"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="primaryContactAssignment"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Primary Contact Assignment"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="tmsplanningAbility"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="TMS Planning Ability"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="methodOfPayment"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Method of Payment"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="originationDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Origination Date"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="directionCategory"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Direction Category"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="scheduleNum"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Schedule Number"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="estAvailableStartDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Estimated Available Start Date"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="locationRef"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Location Reference"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="address1"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Address 1"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="address2"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Address 2"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="address3"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Address 3"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="zip"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="ZIP"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="reqDeliveryStartDate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Requested Delivery Start Date"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="whsLocationRef"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Warehouse Location Reference"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="whsName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Warehouse Name"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="whsAddress1"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Warehouse Address 1"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="whsAddress2"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Warehouse Address 2"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="whsAddress3"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Warehouse Address 3"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                </Grid>
            </form>
                    <MpsalesOrderCareLinesTable  parentid={recid} />
                    
        </Container>
        
    );
};


export default ViewMptransferOrderOutboundHeader;