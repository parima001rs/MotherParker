import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21_STOCKFEED = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21_STOCKFEED = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21_STOCKFEED');
        fetchTableId();
        fetchInterfaces();

        if (MPI21_STOCKFEED) {
            
            
            setValue('recid', MPI21_STOCKFEED.recid);
            setValue('createddatetime', MPI21_STOCKFEED.createddatetime);
            setValue('interface', MPI21_STOCKFEED.interface);
            setValue('tableid', MPI21_STOCKFEED.tableid);
            setValue('batchnum', MPI21_STOCKFEED.batchnum);
            setValue('processed', MPI21_STOCKFEED.processed);
           setValue('companylocation', MPI21_STOCKFEED.companylocation);
            setValue('itemno', MPI21_STOCKFEED.itemno);
            setValue('lotno', MPI21_STOCKFEED.lotno);
            setValue('quantity', MPI21_STOCKFEED.quantity);
            setValue('quantityuom', MPI21_STOCKFEED.quantityuom);
            setValue('storagelocation', MPI21_STOCKFEED.storagelocation);
            setValue('storageunit', MPI21_STOCKFEED.storageunit);           
            setValue('dataareaid', MPI21_STOCKFEED.dataareaid);
            

            
        }
    }, [setType, MPI21_STOCKFEED, setValue]);

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
                            <InputLabel id="tableid-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableid-label"
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
            label="Item No"
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
            label="Lot No"
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
    name="processed"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Processed By"
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

                <Button type="submit" variant="contained" color="primary">
                    Update MPI21_STOCKFEED
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21_STOCKFEED;
