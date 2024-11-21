import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpi21_lotpropertyadjustmenttable = () => {
    const { recId } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpi21_lotpropertyadjustmenttable = entities.find((u) => u.recId === parseInt(recId));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [interfaces, setinterfaces] = useState([]);

    useEffect(() => {
        setType('Mpi21_lotpropertyadjustmenttable');
        if (Mpi21_lotpropertyadjustmenttable) {
            setValue('recid', Mpi21_lotpropertyadjustmenttable.recid);
            setValue('createddatetime', Mpi21_lotpropertyadjustmenttable.createddatetime);
            setValue('interface', Mpi21_lotpropertyadjustmenttable.interface);
            setValue('batchnum', Mpi21_lotpropertyadjustmenttable.batchnum);
            setValue('processed', Mpi21_lotpropertyadjustmenttable.processed);
            setValue('mptransjourbatchid', Mpi21_lotpropertyadjustmenttable.mptransjourbatchid);
            setValue('mptransjourdestination', Mpi21_lotpropertyadjustmenttable.mptransjourdestination);
            setValue('mptransjouritem', Mpi21_lotpropertyadjustmenttable.mptransjouritem);
            setValue('mptransjourmasterid', Mpi21_lotpropertyadjustmenttable.mptransjourmasterid);
            setValue('mptransjourrecordingdate', Mpi21_lotpropertyadjustmenttable.mptransjourrecordingdate);
            setValue('mptransjoursequenceno', Mpi21_lotpropertyadjustmenttable.mptransjoursequenceno);
            setValue('mptransjoursource', Mpi21_lotpropertyadjustmenttable.mptransjoursource);
            setValue('mptransjourtransferred', Mpi21_lotpropertyadjustmenttable.mptransjourtransferred);
            setValue('mptransjourtranstime', Mpi21_lotpropertyadjustmenttable.mptransjourtranstime);
            setValue('mptransjourweight', Mpi21_lotpropertyadjustmenttable.mptransjourweight);
            setValue('mptransjourzoneid', Mpi21_lotpropertyadjustmenttable.mptransjourzoneid);
            setValue('dataareaid', Mpi21_lotpropertyadjustmenttable.dataareaid);
            setValue('tableId', Mpi21_lotpropertyadjustmenttable.tableId);
            setValue('mptransJourFacility', Mpi21_lotpropertyadjustmenttable.mptransJourFacility);

            fetchinterfaces();
        }
    }, [setType, Mpi21_lotpropertyadjustmenttable, setValue, navigate]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity({ recId: parseInt(recId), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                    defaultValue={false}
                    render={({ field }) => (
                        <FormControlLabel
                            control={<Checkbox {...field} />}
                            label="Processed"
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
                    Update Mpi21_lotpropertyadjustmenttable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21_lotpropertyadjustmenttable;
