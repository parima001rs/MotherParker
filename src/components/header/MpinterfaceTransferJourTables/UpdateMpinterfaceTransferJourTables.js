import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinterfaceTransferJourTable = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceTransferJourTable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [interfaces, setinterfaces] = useState([]);

    useEffect(() => {
        setType('MpinterfaceTransferJourTables');
        if (MpinterfaceTransferJourTable) {
            setValue('recid', MpinterfaceTransferJourTable.recid);
            setValue('createddatetime', MpinterfaceTransferJourTable.createddatetime);
            setValue('interface', MpinterfaceTransferJourTable.interface);
            setValue('batchnum', MpinterfaceTransferJourTable.batchnum);
            setValue('processed', MpinterfaceTransferJourTable.processed);
            setValue('mptransjourbatchid', MpinterfaceTransferJourTable.mptransjourbatchid);
            setValue('mptransjourdestination', MpinterfaceTransferJourTable.mptransjourdestination);
            setValue('mptransjouritem', MpinterfaceTransferJourTable.mptransjouritem);
            setValue('mptransjourmasterid', MpinterfaceTransferJourTable.mptransjourmasterid);
            setValue('mptransjourrecordingdate', MpinterfaceTransferJourTable.mptransjourrecordingdate);
            setValue('mptransjoursequenceno', MpinterfaceTransferJourTable.mptransjoursequenceno);
            setValue('mptransjoursource', MpinterfaceTransferJourTable.mptransjoursource);
            setValue('mptransjourtransferred', MpinterfaceTransferJourTable.mptransjourtransferred);
            setValue('mptransjourtranstime', MpinterfaceTransferJourTable.mptransjourtranstime);
            setValue('mptransjourweight', MpinterfaceTransferJourTable.mptransjourweight);
            setValue('mptransjourzoneid', MpinterfaceTransferJourTable.mptransjourzoneid);
            setValue('dataareaid', MpinterfaceTransferJourTable.dataareaid);
            setValue('tableId', MpinterfaceTransferJourTable.tableId);
            setValue('mptransJourFacility', MpinterfaceTransferJourTable.mptransJourFacility);

            fetchinterfaces();
        }
    }, [setType, MpinterfaceTransferJourTable, setValue, navigate]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
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
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                           
                            inputProps={{ value: true }}
                        />
                    )}
                />

                <Controller
                    name="mptransjourbatchid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Batch ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptransjourdestination"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Destination"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptransjouritem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptransjourmasterid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Master ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptransjourrecordingdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Recording Date"
                            fullWidth
                            margin="normal"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="mptransjoursequenceno"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Sequence No"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mptransjoursource"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Source"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptransjourtransferred"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Transferred"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mptransjourtranstime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Trans Time"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                        />
                    )}
                />

                <Controller
                    name="mptransjourweight"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Weight"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mptransjourzoneid"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Zone ID"
                            fullWidth
                            margin="normal"
                            type="number"
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

                <Controller
                    name="mptransJourFacility"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Jour Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Update MpinterfaceTransferJourTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceTransferJourTable;
