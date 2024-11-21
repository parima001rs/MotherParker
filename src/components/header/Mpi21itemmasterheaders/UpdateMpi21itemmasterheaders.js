import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMPI21ITEMMASTERHEADER = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const MPI21ITEMMASTERHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error("Error fetching table IDs:", error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get( process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error("Error fetching interfaces:", error);
        }
    };

    useEffect(() => {
        setType('MPI21ITEMMASTERHEADER');
        fetchTableId();
        fetchInterfaces();

        if (MPI21ITEMMASTERHEADER) {
            setValue('actionid', MPI21ITEMMASTERHEADER.actionid);
            setValue('batchnum', MPI21ITEMMASTERHEADER.batchnum);
            setValue('categorycode', MPI21ITEMMASTERHEADER.categorycode);
            setValue('commoditycode', MPI21ITEMMASTERHEADER.commoditycode);
            setValue('companylocation', MPI21ITEMMASTERHEADER.companylocation);
            setValue('description', MPI21ITEMMASTERHEADER.description);
            setValue('externalgroup', MPI21ITEMMASTERHEADER.externalgroup);
            setValue('fairtradecompliance', MPI21ITEMMASTERHEADER.fairtradecompliance);
            setValue('itemid', MPI21ITEMMASTERHEADER.itemid);
            setValue('itemno', MPI21ITEMMASTERHEADER.itemno);
            setValue('lifetime', MPI21ITEMMASTERHEADER.lifetime);
            setValue('lifetimeunit', MPI21ITEMMASTERHEADER.lifetimeunit);
            setValue('locationitemno', MPI21ITEMMASTERHEADER.locationitemno);
            setValue('lottracking', MPI21ITEMMASTERHEADER.lottracking);
            setValue('organicitem', MPI21ITEMMASTERHEADER.organicitem);
            setValue('origin', MPI21ITEMMASTERHEADER.origin);
            setValue('producttype', MPI21ITEMMASTERHEADER.producttype);
            setValue('rainforestalliance', MPI21ITEMMASTERHEADER.rainforestalliance);
            setValue('shortname', MPI21ITEMMASTERHEADER.shortname);
            setValue('status', MPI21ITEMMASTERHEADER.status);
            setValue('createddatetime', MPI21ITEMMASTERHEADER.createddatetime);
            setValue('dataareaid', MPI21ITEMMASTERHEADER.dataareaid);
            setValue('recid', MPI21ITEMMASTERHEADER.recid);
            setValue('otherchargeitem', MPI21ITEMMASTERHEADER.otherchargeitem);
            setValue('interface', MPI21ITEMMASTERHEADER.interface);
            setValue('processed', MPI21ITEMMASTERHEADER.processed);
            setValue('tableId', MPI21ITEMMASTERHEADER.tableId);
        }
    }, [setType, MPI21ITEMMASTERHEADER, setValue]);

    const onSubmit = async (data) => {
        try {
            await updateEntity(data);
            navigate('/');
        } catch (error) {
            console.error("Error updating entity:", error);
        }
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
                    name="categorycode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Category Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="commoditycode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Commodity Code"
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
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="externalgroup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="External Group"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="fairtradecompliance"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Fair Trade Compliance"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemid"
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
                    name="lifetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lifetime"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lifetimeunit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lifetime Unit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locationitemno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Location Item No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lottracking"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lot Tracking"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="organicitem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Organic Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="origin"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Origin"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="producttype"
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
                    name="rainforestalliance"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rainforest Alliance"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="shortname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Short Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="status"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="otherchargeitem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Other Charge Item"
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
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21ITEMMASTERHEADER;
