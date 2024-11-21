import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpcommodblenddiffs = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpcommodblenddiffs = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpcommodblenddiffss');
        if (Mpcommodblenddiffs) {
            setValue('recid', Mpcommodblenddiffs.recid);
            setValue('createddatetime', Mpcommodblenddiffs.createddatetime);
            setValue('dataareaid', Mpcommodblenddiffs.dataareaid);
            setValue('mpblenddiffblendcode', Mpcommodblenddiffs.mpblenddiffblendcode);
            setValue('mpblenddiffbuygroupnum', Mpcommodblenddiffs.mpblenddiffbuygroupnum);
            setValue('mpblenddiffcovered', Mpcommodblenddiffs.mpblenddiffcovered);
            setValue('mpblenddiffcustom', Mpcommodblenddiffs.mpblenddiffcustom);
            setValue('mpblenddifffreightexdoc', Mpcommodblenddiffs.mpblenddifffreightexdoc);
            setValue('mpblenddiffmarket', Mpcommodblenddiffs.mpblenddiffmarket);
            setValue('mpblenddiffreplacement', Mpcommodblenddiffs.mpblenddiffreplacement);
            setValue('mpblenddiffshrinkpctgbasemfg', Mpcommodblenddiffs.mpblenddiffshrinkpctgbasemfg);
            setValue('mpblenddiffshrinkpctgcommod', Mpcommodblenddiffs.mpblenddiffshrinkpctgcommod);
            setValue('mpblenddiffvariance1', Mpcommodblenddiffs.mpblenddiffvariance1);
            setValue('mpblenddiffvariance2', Mpcommodblenddiffs.mpblenddiffvariance2);
            setValue('mpblenddiffvariance3', Mpcommodblenddiffs.mpblenddiffvariance3);
            setValue('mpblenddiffnotes', Mpcommodblenddiffs.mpblenddiffnotes);
            setValue('mpblenddiffblendcodereference', Mpcommodblenddiffs.mpblenddiffblendcodereference);
            setValue('mpi21_actualblend', Mpcommodblenddiffs.mpi21_actualblend);
            setValue('mpi21_bgnstatus', Mpcommodblenddiffs.mpi21_bgnstatus);
            setValue('mpi21_pricingno', Mpcommodblenddiffs.mpi21_pricingno);
            setValue('mpi21commitmentpricingbgnheader', Mpcommodblenddiffs.mpi21commitmentpricingbgnheader);
            setValue('modifieddatetime', Mpcommodblenddiffs.modifieddatetime);
            setValue('modifiedby', Mpcommodblenddiffs.modifiedby);
            setValue('mpi21insertedflag', Mpcommodblenddiffs.mpi21insertedflag);
            setValue('mpblendadjustment', Mpcommodblenddiffs.mpblendadjustment);
            setValue('mpi21totalcostpr', Mpcommodblenddiffs.mpi21totalcostpr);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpcommodblenddiffs, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Update using the primary key 'recid'
        navigate('/path-to-redirect'); // Adjust the path as needed
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
                    Update Mpcommodblenddiffs
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpcommodblenddiffs;
