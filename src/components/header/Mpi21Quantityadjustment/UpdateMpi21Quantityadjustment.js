import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21_QUANTITYADJUSTMENT = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21_QUANTITYADJUSTMENT = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21_QUANTITYADJUSTMENT');
        fetchTableId();
        fetchInterfaces();

        if (MPI21_QUANTITYADJUSTMENT) {
            
            
            setValue('recid', MPI21_QUANTITYADJUSTMENT.recid);
            setValue('createddatetime', MPI21_QUANTITYADJUSTMENT.createddatetime);
            setValue('interface', MPI21_QUANTITYADJUSTMENT.interface);
            setValue('tableid', MPI21_QUANTITYADJUSTMENT.tableid);
            setValue('batchnum', MPI21_QUANTITYADJUSTMENT.batchnum);
            setValue('processed', MPI21_QUANTITYADJUSTMENT.processed);
            setValue('dataareaid', MPI21_QUANTITYADJUSTMENT.dataareaid);
            setValue('actionid', MPI21_QUANTITYADJUSTMENT.actionid);
            setValue('companylocation', MPI21_QUANTITYADJUSTMENT.companylocation);
            setValue('itemno', MPI21_QUANTITYADJUSTMENT.itemno);
            setValue('lotno', MPI21_QUANTITYADJUSTMENT.lotno);
            setValue('motherlotno', MPI21_QUANTITYADJUSTMENT.motherlotno);
            setValue('notes', MPI21_QUANTITYADJUSTMENT.notes);
            setValue('quantity', MPI21_QUANTITYADJUSTMENT.quantity);
            setValue('quantityuom', MPI21_QUANTITYADJUSTMENT.quantityuom);
            setValue('reasoncode', MPI21_QUANTITYADJUSTMENT.reasoncode);
            setValue('storagelocation', MPI21_QUANTITYADJUSTMENT.storagelocation);
            setValue('storageunit', MPI21_QUANTITYADJUSTMENT.storageunit);
            setValue('transactiontypeid', MPI21_QUANTITYADJUSTMENT.transactiontypeid);
            setValue('trxsequenceno', MPI21_QUANTITYADJUSTMENT.trxsequenceno);
            setValue('journalid', MPI21_QUANTITYADJUSTMENT.journalid);
            setValue('createdby', MPI21_QUANTITYADJUSTMENT.createdby);
            setValue('journaltransrecid', MPI21_QUANTITYADJUSTMENT.journaltransrecid);
            
            

            
        }
    }, [setType, MPI21_QUANTITYADJUSTMENT, setValue]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data); 
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
            disabled
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
    defaultValue=""
    render={({ field }) => (
        <FormControl fullWidth margin="normal">
            <InputLabel id="tableId-label">Table ID</InputLabel>
            <Select
                {...field}
                labelId="tableId-label"
                label="Table ID"
            >
                {tableId.map((entity) => (
                    <MenuItem key={entity.recid} value={entity.recid}>
                        {entity.tableId}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
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
            label="Data Area ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="actionid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Action ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="companylocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Company Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="itemno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Item Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="lotno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Lot Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="motherlotno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Mother Lot Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="notes"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Notes"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="quantity"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Quantity"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="quantityuom"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Quantity UOM"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="reasoncode"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Reason Code"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="storagelocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Storage Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="storageunit"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Storage Unit"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="transactiontypeid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transaction Type ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="trxsequenceno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transaction Sequence Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="journalid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Journal ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="createdby"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Created By"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="journaltransrecid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Journal Transaction Rec ID"
            fullWidth
            margin="normal"
        />
    )}
/>

                <Button type="submit" variant="contained" color="primary">
                    Update MPI21_QUANTITYADJUSTMENT
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21_QUANTITYADJUSTMENT;
