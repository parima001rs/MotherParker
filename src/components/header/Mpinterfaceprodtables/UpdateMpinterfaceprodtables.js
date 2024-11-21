import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinterfaceprodtables = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();
    const Mpinterfaceprodtables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('Mpinterfaceprodtables');
        fetchTableId();
        fetchInterfaces();

        if (Mpinterfaceprodtables) {
            setValue('recid', Mpinterfaceprodtables.recid);
            setValue('createddatetime', Mpinterfaceprodtables.createddatetime);
            setValue('interface', Mpinterfaceprodtables.interface);
            setValue('tableId', Mpinterfaceprodtables.tableId);
            setValue('batchnum', Mpinterfaceprodtables.batchnum);
            setValue('dataareaid', Mpinterfaceprodtables.dataareaid);
            setValue('journalid', Mpinterfaceprodtables.journalid);
            setValue('linenum', Mpinterfaceprodtables.linenum);
            setValue('prodid', Mpinterfaceprodtables.prodid);
            setValue('mpzone', Mpinterfaceprodtables.mpzone);
            setValue('relationtype', Mpinterfaceprodtables.relationtype);
            setValue('mpprodactivity', Mpinterfaceprodtables.mpprodactivity);
            setValue('mpprodcaselabelnotes', Mpinterfaceprodtables.mpprodcaselabelnotes);
            setValue('mpprodcomponentitem1', Mpinterfaceprodtables.mpprodcomponentitem1);
            setValue('mpprodcomponentitem2', Mpinterfaceprodtables.mpprodcomponentitem2);
            // Continue setting other component items up to mpprodcomponentitem14
            setValue('mpprodenddate', Mpinterfaceprodtables.mpprodenddate);
            setValue('mpprodendtime', Mpinterfaceprodtables.mpprodendtime);
            setValue('mpprodfacility', Mpinterfaceprodtables.mpprodfacility);
            setValue('mpprodfinishedqty', Mpinterfaceprodtables.mpprodfinishedqty);
            setValue('mpprodflavoredcoffee', Mpinterfaceprodtables.mpprodflavoredcoffee);
            setValue('mpproditemnumber', Mpinterfaceprodtables.mpproditemnumber);
            setValue('mpprodlinecontrol', Mpinterfaceprodtables.mpprodlinecontrol);
            setValue('mpprodlineno', Mpinterfaceprodtables.mpprodlineno);
            setValue('mpprodordername', Mpinterfaceprodtables.mpprodordername);
            setValue('mpprodorderqty', Mpinterfaceprodtables.mpprodorderqty);
            setValue('mpprodordertype', Mpinterfaceprodtables.mpprodordertype);
            setValue('mpprodordertypepp', Mpinterfaceprodtables.mpprodordertypepp);
            setValue('mpprodpkgrate', Mpinterfaceprodtables.mpprodpkgrate);
            setValue('mpprodprobatdate', Mpinterfaceprodtables.mpprodprobatdate);
            setValue('mpprodprobatseqno', Mpinterfaceprodtables.mpprodprobatseqno);
            setValue('mpprodquantity1', Mpinterfaceprodtables.mpprodquantity1);
            // Continue setting other quantities up to mpprodquantity14
            setValue('mpprodresourceid', Mpinterfaceprodtables.mpprodresourceid);
            setValue('mpprodshoporder', Mpinterfaceprodtables.mpprodshoporder);
            setValue('mpprodstartdate', Mpinterfaceprodtables.mpprodstartdate);
            setValue('mpprodstarttime', Mpinterfaceprodtables.mpprodstarttime);
            setValue('mpprodtargetgroup', Mpinterfaceprodtables.mpprodtargetgroup);
            setValue('mpprodtransferred', Mpinterfaceprodtables.mpprodtransferred);
            setValue('processed', Mpinterfaceprodtables.processed);
        }
    }, [setType, Mpinterfaceprodtables, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/'); // Navigate after successful update
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
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface">Interface</InputLabel>
                            <Select {...field} labelId="interface">
                                {interfaces.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="tableId"
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
                    name="linenum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Line Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="prodid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Product ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpzone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Zone"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="relationtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Relation Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodactivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Activity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodcaselabelnotes"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Case Label Notes"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* Repeat similar blocks for mpprodcomponentitem1 to mpprodcomponentitem14 */}
                <Controller
                    name="mpprodenddate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod End Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodendtime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod End Time"
                            type="time"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodfacility"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodfinishedqty"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Finished Quantity"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodflavoredcoffee"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Flavored Coffee"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpproditemnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Item Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodlinecontrol"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Line Control"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodlineno"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Line No"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodordername"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Order Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodorderqty"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Order Quantity"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodordertype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Order Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodordertypepp"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Order Type PP"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodpkgrate"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod PKG Rate"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodprobatdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Probat Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodprobatseqno"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Probat Seq No"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodquantity1"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Quantity 1"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* Repeat similar blocks for mpprodquantity2 to mpprodquantity14 */}
                <Controller
                    name="mpprodresourceid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Resource ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodshoporder"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Shop Order"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodstartdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Start Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodstarttime"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Start Time"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodtargetgroup"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Target Group"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodtransferred"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Transferred"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Mpinterfaceprodtables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceprodtables;
