import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21Itemchanges = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21Itemchanges = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21Itemchanges');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21Itemchanges) {
            setValue('recid', Mpi21Itemchanges.recid);
            setValue('createddatetime', Mpi21Itemchanges.createddatetime);
            setValue('interface', Mpi21Itemchanges.interface);
            setValue('tableid', Mpi21Itemchanges.tableid);
            setValue('batchnum', Mpi21Itemchanges.batchnum);
            setValue('processed', Mpi21Itemchanges.processed);
            setValue('dataareaid', Mpi21Itemchanges.dataareaid);
            setValue('actionid', Mpi21Itemchanges.actionid);
            setValue('adjustmentno', Mpi21Itemchanges.adjustmentno);
            setValue('companylocation', Mpi21Itemchanges.companylocation);
            setValue('lotno', Mpi21Itemchanges.lotno);
            setValue('motherlotno', Mpi21Itemchanges.motherlotno);
            setValue('newitemno', Mpi21Itemchanges.newitemno);
            setValue('notes', Mpi21Itemchanges.notes);
            setValue('olditemno', Mpi21Itemchanges.olditemno);
            setValue('reasoncode', Mpi21Itemchanges.reasoncode);
            setValue('storagelocation', Mpi21Itemchanges.storagelocation);
            setValue('storageunit', Mpi21Itemchanges.storageunit);
            setValue('transactiontypeid', Mpi21Itemchanges.transactiontypeid);
            setValue('trxsequenceno', Mpi21Itemchanges.trxsequenceno);
            setValue('journalid', Mpi21Itemchanges.journalid);
            setValue('lotstatus', Mpi21Itemchanges.lotstatus);
        }        
        
    }, [setType, Mpi21Itemchanges, setValue]);

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
                        label="Created Datetime"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            fullWidth
                            margin="normal"
                            type="number"
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
                name="adjustmentno"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Adjustment Number"
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
                name="newitemno"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="New Item Number"
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
                name="olditemno"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Old Item Number"
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
                name="lotstatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Lot Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Update Mpi21Itemchanges
            </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21Itemchanges;
