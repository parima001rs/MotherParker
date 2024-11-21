import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpinterfaceMatConstables = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceMatConsTabletables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MpinterfaceMatConsTables');
        fetchTableId();
        fetchInterfaces();

        if (MpinterfaceMatConsTabletables) {
            setValue('recid', MpinterfaceMatConsTabletables.recid || 6000000010);
            setValue('createddatetime', MpinterfaceMatConsTabletables.createddatetime || "2024-06-19T01:53:31");
            setValue('interface', MpinterfaceMatConsTabletables.interface || "Probat");
            setValue('batchnum', MpinterfaceMatConsTabletables.batchnum || "0074-01-10-20240619-015220");
            setValue('processed', MpinterfaceMatConsTabletables.processed || true);
            setValue('mpmatconsbatchid', MpinterfaceMatConsTabletables.mpmatconsbatchid || 2619182);
            setValue('mpmatconsbatchorderno', MpinterfaceMatConsTabletables.mpmatconsbatchorderno || "10148216");
            setValue('mpmatconscustomercode', MpinterfaceMatConsTabletables.mpmatconscustomercode || "1100759");
            setValue('mpmatconsdestination', MpinterfaceMatConsTabletables.mpmatconsdestination || "GC-284");
            setValue('mpmatconsendflag', MpinterfaceMatConsTabletables.mpmatconsendflag || 0);
            setValue('mpmatconslocation', MpinterfaceMatConsTabletables.mpmatconslocation || null);
            setValue('mpmatconsmasterid', MpinterfaceMatConsTabletables.mpmatconsmasterid || 2968151);
            setValue('mpmatconsnumberseq', MpinterfaceMatConsTabletables.mpmatconsnumberseq || 11691057);
            setValue('mpmatconsordertype', MpinterfaceMatConsTabletables.mpmatconsordertype || null);
            setValue('mpmatconspalletid', MpinterfaceMatConsTabletables.mpmatconspalletid || null);
            setValue('mpmatconsrecordingdate', MpinterfaceMatConsTabletables.mpmatconsrecordingdate || "2017-10-27T07:42:54.457");
            setValue('mpmatconsscustomercode', MpinterfaceMatConsTabletables.mpmatconsscustomercode || "C15094G03");
            setValue('mpmatconssempty', MpinterfaceMatConsTabletables.mpmatconssempty || 0);
            setValue('mpmatconsslotname', MpinterfaceMatConsTabletables.mpmatconsslotname || "");
            setValue('mpmatconssource', MpinterfaceMatConsTabletables.mpmatconssource || "6023");
            setValue('mpmatconssproductid', MpinterfaceMatConsTabletables.mpmatconssproductid || 2967498);
            setValue('mpmatconsstartflag', MpinterfaceMatConsTabletables.mpmatconsstartflag || 1);
            setValue('mpmatconsstypecell', MpinterfaceMatConsTabletables.mpmatconsstypecell || "123123123");
            setValue('mpmatconstransfered', MpinterfaceMatConsTabletables.mpmatconstransfered || 0);
            setValue('mpmatconstranstime', MpinterfaceMatConsTabletables.mpmatconstranstime || "2017-10-27T07:43:03.127");
            setValue('mpmatconsweight', MpinterfaceMatConsTabletables.mpmatconsweight || 299990);
            setValue('dataareaid', MpinterfaceMatConsTabletables.dataareaid || "10");
            setValue('tableId', MpinterfaceMatConsTabletables.tableId || 35);
            setValue('mpmatConsFacility', MpinterfaceMatConsTabletables.mpmatConsFacility || "01");
            setValue('mpinterfacelegacyid', MpinterfaceMatConsTabletables.mpinterfacelegacyid || "TRANSF");
        }
    }, [setType, MpinterfaceMatConsTabletables, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton/>
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="createddatetime"
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
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="batchnum"
                    control={control}
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
                    name="mpmatconsbatchid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Batch ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsbatchorderno"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Batch Order No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconscustomercode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Customer Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsdestination"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Destination"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsendflag"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons End Flag"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconslocation"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsmasterid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Master ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsnumberseq"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Number Seq"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsordertype"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Order Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconspalletid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Pallet ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsrecordingdate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Recording Date"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="mpmatconsscustomercode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Customer Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconssempty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Empty"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsslotname"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Lot Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconssource"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Source"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconssproductid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons S Product ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsstartflag"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Start Flag"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconsstypecell"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Type Cell"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmatconstransfered"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Transfered"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpmatconstranstime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Trans Time"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="mpmatconsweight"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Weight"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="dataareaid"
                    control={control}
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
                    name="tableId"
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
                    name="mpmatConsFacility"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Mat Cons Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpinterfacelegacyid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Interface Legacy ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">Update MpinterfaceMatConsTable</Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceMatConstables;
