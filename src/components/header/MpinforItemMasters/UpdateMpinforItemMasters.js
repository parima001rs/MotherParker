import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforItemMaster = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericPaginationContext();
  debugger
  const MpinforItemMaster = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforItemMaster');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforItemMasters');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforItemMaster) {
        setValue('recid', MpinforItemMaster.recid);


      setValue('createddatetime', MpinforItemMaster.createddatetime);
      setValue('interface', MpinforItemMaster.interface);
      setValue('tableid', MpinforItemMaster.tableid);
      setValue('batchnum', MpinforItemMaster.batchnum);
      setValue('processed', MpinforItemMaster.processed);
      setValue('itemId', MpinforItemMaster.itemId);
      setValue('name', MpinforItemMaster.name)
      setValue('dataareaid', MpinforItemMaster.dataareaid)


   
      setValue('defaultDimension', MpinforItemMaster.defaultDimension);
      setValue('inventLocationIdInvent', MpinforItemMaster.inventLocationIdInvent);
      setValue('searchName', MpinforItemMaster.searchName);
      setValue('productLifecycleStateId', MpinforItemMaster.productLifecycleStateId);
      setValue('purchaseUnit', MpinforItemMaster.purchaseUnit);
      setValue('inventUnit', MpinforItemMaster.inventUnit);
      setValue('salesUnit', MpinforItemMaster.salesUnit);
      setValue('reqPotype', MpinforItemMaster.reqPotype);
      setValue('prodFlushingPrincip', MpinforItemMaster.prodFlushingPrincip);
      setValue('itemCategory', MpinforItemMaster.itemCategory);
      setValue('prodpoolId', MpinforItemMaster.prodpoolId);
      setValue('grindNum', MpinforItemMaster.grindNum);
      setValue('pdsBestBefore', MpinforItemMaster.pdsBestBefore);
      setValue('pdsShelfAdvice', MpinforItemMaster.pdsShelfAdvice);
      setValue('pdsShelfLife', MpinforItemMaster.pdsShelfLife);
      setValue('flavorGroup', MpinforItemMaster.flavorGroup);
      setValue('groupCode', MpinforItemMaster.groupCode);
      setValue('groupTechCode', MpinforItemMaster.groupTechCode);
     setValue('groupTechCodeName', MpinforItemMaster.groupTechCodeName);
setValue('batchmergeDateCalculationMethod', MpinforItemMaster.batchmergeDateCalculationMethod);
setValue('pmfProductType', MpinforItemMaster.pmfProductType);
setValue('attributeValue', MpinforItemMaster.attributeValue);
setValue('organicValue', MpinforItemMaster.organicValue);
setValue('productType', MpinforItemMaster.productType);
setValue('itemgroupId', MpinforItemMaster.itemgroupId);
setValue('pdsVendorCheckItem', MpinforItemMaster.pdsVendorCheckItem);
setValue('itemBuyerGroupId', MpinforItemMaster.itemBuyerGroupId);
setValue('itemBuyerGroupDescription', MpinforItemMaster.itemBuyerGroupDescription);
setValue('prodGroupId', MpinforItemMaster.prodGroupId);
      //setValue('tableid', MpinforItemMaster.tableid);





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforItemMaster, setValue, navigate]);

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
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Recid"
              
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
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
                name="itemId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item ID"
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
                name="defaultDimension"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Default Dimension"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="inventLocationIdInvent"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="searchName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Search Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="productLifecycleStateId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product Lifecycle State"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="purchaseUnit"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Purchase Unit"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="inventUnit"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Unit"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="salesUnit"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Unit"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="reqPotype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Request PO Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="prodFlushingPrincip"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product Flushing Principle"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="itemCategory"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Category"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="prodpoolId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product Pool ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="grindNum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Grind Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pdsBestBefore"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Best Before"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pdsShelfAdvice"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Shelf Advice"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pdsShelfLife"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Shelf Life"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="flavorGroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Flavor Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="groupCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Group Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="groupTechCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Group Tech Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="groupTechCodeName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Group Tech Code Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="batchmergeDateCalculationMethod"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Batch Merge Date Calculation Method"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pmfProductType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PMF Product Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="attributeValue"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Attribute Value"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="organicValue"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Organic Value"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="productType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="itemgroupId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Group ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pdsVendorCheckItem"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Vendor Check Item"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="itemBuyerGroupId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Buyer Group ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="itemBuyerGroupDescription"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Buyer Group Description"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="prodGroupId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product Group ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
        <Button type="submit" variant="contained" color="primary">
          Update MpinforItemMaster
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforItemMaster;
