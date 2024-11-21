import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMPI21_PURCHASEGOODSLINES = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MPI21_PURCHASEGOODSLINES');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add MPI21_PURCHASEGOODSLINES</h2>
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
                    name="cashprice"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Cashprice"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="certificate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Certificate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="destinationport"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destinationport"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="enddate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enddate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="erppolineno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erppolineno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="erpponumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Erpponumber"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="fixationdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Fixationdate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="futuresmarket"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Futuresmarket"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="futuresmonth"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Futuresmonth"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="inventlocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventlocationid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="inventsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventsiteid"
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
                    name="loadingport"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Loadingport"
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
                    name="netweightuom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Netweightuom"
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
                    name="parentrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Parentrecid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="plannedavailabilitydate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Plannedavailabilitydate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="pricecurrency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Pricecurrency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="priceuom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Priceuom"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="pricingtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Pricingtype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="purchqty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Purchqty"
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
                    name="sequenceno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Sequenceno"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="shipper"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Shipper"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="startdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Startdate"
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
                    name="updatedavailabilitydate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Updatedavailabilitydate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Add MPI21_PURCHASEGOODSLINES
                </Button>
            </form>
        </Container>
    );
};

export default AddMPI21_PURCHASEGOODSLINES;
