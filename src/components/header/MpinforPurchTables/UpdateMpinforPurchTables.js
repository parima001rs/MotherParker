import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforPurchTable = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericContext();
  debugger
  const MpinforPurchTable = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforPurchTable');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforPurchTables');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforPurchTable) {
        setValue('recid', MpinforPurchTable.recid);


      setValue('createddatetime', MpinforPurchTable.createddatetime);
      setValue('interface', MpinforPurchTable.interface);
      setValue('tableid', MpinforPurchTable.tableid);
      setValue('batchnum', MpinforPurchTable.batchnum);
      setValue('processed', MpinforPurchTable.processed);
      setValue('itemId', MpinforPurchTable.itemId);
      setValue('name', MpinforPurchTable.name)
      setValue('dataareaid', MpinforPurchTable.dataareaid)

      setValue('purchStatus', MpinforPurchTable.purchStatus);
setValue('documentStatus', MpinforPurchTable.documentStatus);
setValue('documentState', MpinforPurchTable.documentState);
setValue('currencyCode', MpinforPurchTable.currencyCode);
setValue('siteId', MpinforPurchTable.siteId);
setValue('inventLocationId', MpinforPurchTable.inventLocationId);
setValue('purchaseType', MpinforPurchTable.purchaseType);
setValue('purchId', MpinforPurchTable.purchId);
setValue('orderAccount', MpinforPurchTable.orderAccount);
setValue('deliveryDate', MpinforPurchTable.deliveryDate);
setValue('confirmedDlv', MpinforPurchTable.confirmedDlv);
setValue('expectedReceiptDate', MpinforPurchTable.expectedReceiptDate);
setValue('confirmedShipDate', MpinforPurchTable.confirmedShipDate);

   
      





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforPurchTable, setValue, navigate]);

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
          disabled
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
        name="routeGroupId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Route Group ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      
      {/* ... other fields ... */}

      {/* New fields from your latest data structure */}
      <Controller
        name="purchStatus"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Purchase Status"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="documentStatus"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Document Status"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="documentState"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Document State"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="currencyCode"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Currency Code"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="siteId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Site ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="inventLocationId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Inventory Location ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="purchaseType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Purchase Type"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="purchId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Purchase ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="orderAccount"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Order Account"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="deliveryDate"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Delivery Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="confirmedDlv"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Confirmed Delivery"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="expectedReceiptDate"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Expected Receipt Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="confirmedShipDate"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Confirmed Ship Date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
        <Button type="submit" variant="contained" color="primary">
          Update MpinforPurchTable
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforPurchTable;
