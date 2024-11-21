import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';

const AddMPI21PURCHASEORDERHEADER = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [mpInterfaceEntities, setMpInterfaceEntities] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MPI21PURCHASEORDERHEADER');
        fetchMpInterfaceEntities();
    }, [setType]);

    const fetchMpInterfaceEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setMpInterfaceEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add MPI21PURCHASEORDERHEADER</h2>
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
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select {...field} labelId="interface-label">
                                {mpInterfaceEntities.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
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
                        <TextField
                            {...field}
                            label="Tableid"
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
                            label="Dataareaid"
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
                            label="Actionid"
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
                            label="Companylocation"
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
                    name="erpserviceponumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erpserviceponumber"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="erpshoporderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erpshoporderno"
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
                    name="locationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Locationid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpi21exportedtoi21"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21exportedtoi21"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="processname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processname"
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
                            label="Quantityuom"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="servicecontractno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Servicecontractno"
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
                    name="vendoraccountno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendoraccountno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="workorderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Workorderno"
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
                            label="Createdby"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="book"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Book"
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
                    name="vendaccount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendaccount"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                


                <Button type="submit" variant="contained" color="primary">
                    Add MPI21PURCHASEORDERHEADER
                </Button>
            </form>
        </Container>
    );
};

export default AddMPI21PURCHASEORDERHEADER;
