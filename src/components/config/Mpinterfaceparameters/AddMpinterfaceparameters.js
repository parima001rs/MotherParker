import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpinterfaceparameter = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpinterfaceparameters');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <Controller
                name="key"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Key"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpinterfaceactive"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpinterfaceactive"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="modifieddatetime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modifieddatetime"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="modifiedby"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modifiedby"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="recversion"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Recversion"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="partition"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Partition"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
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
                    />
                )}
            />

            <Controller
                name="mpprobatnumseqcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpprobatnumseqcode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpinterfaceenabledebugging"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpinterfaceenabledebugging"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpinterfacepath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpinterfacepath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpprobatprodqtysetzero"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpprobatprodqtysetzero"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpskipprodbomupdateforwhscontroleditems"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpskipprodbomupdateforwhscontroleditems"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpdontignorecreditnotecorrectionforln"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpdontignorecreditnotecorrectionforln"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="dfologilityexportfilepath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Dfologilityexportfilepath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpecomexportfilepath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpecomexportfilepath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21batchnumseqcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21batchnumseqcode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21filepath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21filepath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21password"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21url"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21url"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21username"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpwcdisableenable"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpwcdisableenable"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpwcmcconsntnumseqcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpwcmcconsntnumseqcode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpwcmodificationidprefix"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpwcmodificationidprefix"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpI21blenddemandnumbersequence"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpI21blenddemandnumbersequence"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpI21rawmaterialsnumbersequence"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpI21rawmaterialsnumbersequence"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21subwipconsnumseq"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21subwipconsnumseq"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21vendorrefnumseqcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21vendorrefnumseqcode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pdsbatchattribdataarea"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pdsbatchattribdataarea"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pdsbatchattribid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pdsbatchattribid"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21activate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21activate"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21tocomments"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21tocomments"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21tomarks"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21tomarks"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartaggregation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartaggregation"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartdispatchadvice"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartdispatchadvice"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartobservation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartobservation"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpWalmarttraceabilitysetupdate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarttraceabilitysetupdate"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarttransformation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarttransformation"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21directtransferjournalnameid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21directtransferjournalnameid"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21directtransferreasoncode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mpi21directtransferreasoncode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarti21cooptraceinboundpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarti21cooptraceinboundpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarti21cooptraceoutboundpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarti21cooptraceoutboundpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarti21cooptraceprocessedpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarti21cooptraceprocessedpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarti21traceinboundpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarti21traceinboundpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarti21traceoutboundpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarti21traceoutboundpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmarti21traceprocessedpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmarti21traceprocessedpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartloadfacilitiesinboundpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartloadfacilitiesinboundpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartloadfacilitiesprocessedpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartloadfacilitiesprocessedpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartloadproductsinboundpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartloadproductsinboundpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpWalmartloadproductsprocessedpath"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MpWalmartloadproductsprocessedpath"
                        fullWidth
                        margin="normal"
                    />
                )}
            />




                <Button type="submit" variant="contained" color="primary">
                    Add Mpinterfaceparameter
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceparameter;
