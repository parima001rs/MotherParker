
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21_PURCHASEGOODSTABLE = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21_PURCHASEGOODSTABLE = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21_PURCHASEGOODSTABLE');
        fetchTableId();
        fetchInterfaces();

        if (MPI21_PURCHASEGOODSTABLE) {

            setValue('recid', MPI21_PURCHASEGOODSTABLE.recid);
            setValue('createddatetime', MPI21_PURCHASEGOODSTABLE.createddatetime);
            setValue('interface', MPI21_PURCHASEGOODSTABLE.interface);
            setValue('tableid', MPI21_PURCHASEGOODSTABLE.tableid);
            setValue('batchnum', MPI21_PURCHASEGOODSTABLE.batchnum);
            setValue('processed', MPI21_PURCHASEGOODSTABLE.processed);
            setValue('dataareaid', MPI21_PURCHASEGOODSTABLE.dataareaid);
            setValue('actionid', MPI21_PURCHASEGOODSTABLE.actionid);
            setValue('bolno', MPI21_PURCHASEGOODSTABLE.bolno);
            setValue('companylocation', MPI21_PURCHASEGOODSTABLE.companylocation);
            setValue('erptransferorderno', MPI21_PURCHASEGOODSTABLE.erptransferorderno);
            setValue('receiptdate', MPI21_PURCHASEGOODSTABLE.receiptdate);
            setValue('receiptno', MPI21_PURCHASEGOODSTABLE.receiptno);
            setValue('transferorderno', MPI21_PURCHASEGOODSTABLE.transferorderno);
            setValue('vendoraccountno', MPI21_PURCHASEGOODSTABLE.vendoraccountno);
            setValue('vendorrefno', MPI21_PURCHASEGOODSTABLE.vendorrefno);
            setValue('warehouserefno', MPI21_PURCHASEGOODSTABLE.warehouserefno);
            

        }
    }, [setType, MPI21_PURCHASEGOODSTABLE, setValue]);

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
    name="bolno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOL Number"
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
    name="erptransferorderno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="ERP Transfer Order Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="receiptdate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Receipt Date"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="receiptno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Receipt Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="transferorderno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transfer Order Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="vendoraccountno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Vendor Account Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="vendorrefno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Vendor Reference Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="warehouserefno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Warehouse Reference Number"
            fullWidth
            margin="normal"
        />
    )}
/>

                <Button type="submit" variant="contained" color="primary">
                    Update MPI21_PURCHASEGOODSTABLE
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21_PURCHASEGOODSTABLE;
