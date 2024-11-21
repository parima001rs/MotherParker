import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';
const AddMpi21transferreceiptline = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [parentRecIdEntities, setParentRecIdEntities] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('Mpi21transferreceiptlines');
        fetchParentRecIdEntities();
    }, [setType]);

    const fetchParentRecIdEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21transferreceiptheaders');
        setParentRecIdEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21transferreceiptline</h2>
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
                            label="Batchnum"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="containerno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Containerno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="cost"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Cost"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="currency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="grossweight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Grossweight"
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
                            label="Itemno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="netweight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Netweight"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="parentrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="parentrecid-label">Parentrecid</InputLabel>
                            <Select {...field} labelId="parentrecid-label">
                                {parentRecIdEntities.map((entity, index) => (
                                    <MenuItem key={index} value={entity.recid}>
                                        {entity.recid}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="receiptqty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Receiptqty"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="receiptqtyuom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Receiptqtyuom"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="siteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Siteid"
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
                            label="Storagelocation"
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
                            label="Storageunit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="tareweight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tareweight"
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
                            label="Trxsequenceno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="warehouseid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Warehouseid"
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
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21transferreceiptline
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21transferreceiptline;
