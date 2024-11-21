import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPInterfaceBOMLineTable from '../MPInterfaceBOMLineTable/InlineupdateMPInterfaceBOMLineTable';
import BackButton from '../../backButton';
const ViewMpinterfaceBomheaderTables = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MpinterfaceBomheaderTables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinterfaceBomheaderTables');
        if (MpinterfaceBomheaderTables) {
            setValue('recid', MpinterfaceBomheaderTables.recid );
            setValue('tableId', MpinterfaceBomheaderTables.tableId);
            setValue('interface', MpinterfaceBomheaderTables.interface );
            setValue('batchnum', MpinterfaceBomheaderTables.batchnum );
            setValue('dataareaid', MpinterfaceBomheaderTables.dataareaid );
            setValue('mpbomactivity', MpinterfaceBomheaderTables.mpbomactivity );
            setValue('mpbomcreatedby', MpinterfaceBomheaderTables.mpbomcreatedby );
            setValue('mpbomcreatedon', MpinterfaceBomheaderTables.mpbomcreatedon );
            setValue('mpbomsiteid', MpinterfaceBomheaderTables.mpbomsiteid );
            setValue('mpbomitem', MpinterfaceBomheaderTables.mpbomitem );
            setValue('mpbomitemdesc', MpinterfaceBomheaderTables.mpbomitemdesc );
            setValue('mpbomitemname', MpinterfaceBomheaderTables.mpbomitemname );
            setValue('mpbomprobatseqno', MpinterfaceBomheaderTables.mpbomprobatseqno);
            setValue('mpbomquantity1', MpinterfaceBomheaderTables.mpbomquantity1 );
            setValue('mpbomquantity2', MpinterfaceBomheaderTables.mpbomquantity2 );
            setValue('mpbomquantity3', MpinterfaceBomheaderTables.mpbomquantity3 );
            setValue('mpbomquantity4', MpinterfaceBomheaderTables.mpbomquantity4 );
            setValue('mpbomquantity5', MpinterfaceBomheaderTables.mpbomquantity5 );
            setValue('mpbomquantity6', MpinterfaceBomheaderTables.mpbomquantity6 );
            setValue('mpbomquantity7', MpinterfaceBomheaderTables.mpbomquantity7 );
            setValue('mpbomquantity8', MpinterfaceBomheaderTables.mpbomquantity8 );
            setValue('mpbomquantity9', MpinterfaceBomheaderTables.mpbomquantity9 );
            setValue('mpbomquantity10', MpinterfaceBomheaderTables.mpbomquantity10 );
            setValue('mpbomquantity11', MpinterfaceBomheaderTables.mpbomquantity11 );
            setValue('mpbomquantity12', MpinterfaceBomheaderTables.mpbomquantity12 );
            setValue('mpbomquantity13', MpinterfaceBomheaderTables.mpbomquantity13 );
            setValue('mpbomquantity14', MpinterfaceBomheaderTables.mpbomquantity14 );
            setValue('mpbomtransferred', MpinterfaceBomheaderTables.mpbomtransferred );
            setValue('mpbomzone', MpinterfaceBomheaderTables.mpbomzone );
            setValue('mpcomponentitem1', MpinterfaceBomheaderTables.mpcomponentitem1 );
            setValue('mpcomponentitem2', MpinterfaceBomheaderTables.mpcomponentitem2 );
            setValue('mpcomponentitem3', MpinterfaceBomheaderTables.mpcomponentitem3 );
            setValue('mpcomponentitem4', MpinterfaceBomheaderTables.mpcomponentitem4 );
            setValue('mpcomponentitem5', MpinterfaceBomheaderTables.mpcomponentitem5 );
            setValue('mpcomponentitem6', MpinterfaceBomheaderTables.mpcomponentitem6 );
            setValue('mpcomponentitem7', MpinterfaceBomheaderTables.mpcomponentitem7 );
            setValue('mpcomponentitem8', MpinterfaceBomheaderTables.mpcomponentitem8 );
            setValue('mpcomponentitem9', MpinterfaceBomheaderTables.mpcomponentitem9 );
            setValue('mpcomponentitem10', MpinterfaceBomheaderTables.mpcomponentitem10 );
            setValue('mpcomponentitem11', MpinterfaceBomheaderTables.mpcomponentitem11 );
            setValue('mpcomponentitem12', MpinterfaceBomheaderTables.mpcomponentitem12 );
            setValue('mpcomponentitem13', MpinterfaceBomheaderTables.mpcomponentitem13 );
            setValue('mpcomponentitem14', MpinterfaceBomheaderTables.mpcomponentitem14 );
            setValue('createddatetime', MpinterfaceBomheaderTables.createddatetime );
            setValue('processed', MpinterfaceBomheaderTables.processed );
            setValue('bomrecid', MpinterfaceBomheaderTables.bomrecid );
            setValue('mpqty', MpinterfaceBomheaderTables.mpqty );
        }
    }, [setType, MpinterfaceBomheaderTables, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MpinterfaceBomheaderTables</h2>
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
                InputProps={{
                    readOnly: true,
                }}
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="tableId"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Table ID"
                fullWidth
                margin="normal"
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
                label="Batchnum"
                fullWidth
                margin="normal"
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
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomactivity"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomActivity"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomcreatedby"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomCreatedBy"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomcreatedon"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomCreatedOn"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomsiteid"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomSiteID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomitem"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomItem"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomitemdesc"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomItemDesc"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomitemname"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomItemName"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomprobatseqno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomProbatSeqNo"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity1"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity1"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity2"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity2"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity3"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity3"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity4"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity4"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity5"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity5"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity6"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity6"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity7"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity7"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity8"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity8"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity9"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity9"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity10"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity10"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity11"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity11"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity12"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity12"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity13"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity13"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomquantity14"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomQuantity14"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpbomtransferred"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomTransferred"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>

<Grid item xs={6}>
    <Controller
        name="mpbomzone"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPBomZone"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>


<Grid item xs={6}>
    <Controller
        name="mpcomponentitem1"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem1"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem2"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem2"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem3"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem3"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem4"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem4"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem5"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem5"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem6"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem6"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem7"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem7"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem8"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem8"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem9"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem9"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem10"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem10"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem11"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem11"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem12"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem12"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem13"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem13"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpcomponentitem14"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPComponentItem14"
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
                label="Createddatetime"
                type="datetime-local"
                fullWidth
                margin="normal"
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
                type="checkbox"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="bomrecid"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="BomRecid"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="mpqty"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="MPQty"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>


                 
                </Grid>
            </form>
                    <MPInterfaceBOMLineTable parentid={recid} />
                
            
                    
        </Container>
        
    );
};


export default ViewMpinterfaceBomheaderTables;