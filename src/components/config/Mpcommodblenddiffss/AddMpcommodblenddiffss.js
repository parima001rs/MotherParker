import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpcommodblenddiffs = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpcommodblenddiffss');
    }, [setType]);

    return (
        <Container>
        <BackButton />
        <h2>Add {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="recid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Rec ID"
                        fullWidth
                        margin="normal"
                        disabled // Optionally disable this field
                    />
                )}
            />
            <Controller
                name="createddatetime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Date"
                        fullWidth
                        margin="normal"
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
                name="mpblenddiffblendcode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Blend Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffbuygroupnum"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Group Num"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffcovered"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Covered"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffcustom"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Custom"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddifffreightexdoc"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Freight Ex Doc"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffmarket"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Market"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffreplacement"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Replacement"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffshrinkpctgbasemfg"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shrink % Base MFG"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffshrinkpctgcommod"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shrink % Commod"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffvariance1"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Variance 1"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffvariance2"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Variance 2"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffvariance3"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Variance 3"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblenddiffnotes"
                control={control}
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
                name="mpblenddiffblendcodereference"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Blend Code Reference"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21_actualblend"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Actual Blend"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21_bgnstatus"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="BGN Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21_pricingno"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pricing No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21commitmentpricingbgnheader"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commitment Pricing BGN Header"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="modifieddatetime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified Datetime"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="modifiedby"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified By"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21insertedflag"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inserted Flag"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpblendadjustment"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Blend Adjustment"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21totalcostpr"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Total Cost PR"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Mpcommodblenddiffs
            </Button>
        </form>
    </Container>
    );
};

export default AddMpcommodblenddiffs;
