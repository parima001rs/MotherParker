import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpcommodorders = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpcommodorderss');
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
                        disabled
                    />
                )}
            />
            <Controller
                name="createddatetime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Datetime"
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
                name="mpcommfxorderfilldate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Fill Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordactuallotlbs"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Actual Lot Lbs"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordblenddiffnotes"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Blend Diff Notes"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordbuyconfirmnum"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Confirm Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordbuygroupcode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Group Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordbuygroupnum"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Group Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordbuygrppriceseq"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Group Price Seq"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordbuypostatus"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordbuypurchdate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buy Purchase Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcalclotslbs"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Calc Lot Lbs"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcoffeemarketcode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Coffee Market Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcommitco"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commit CO"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcommitlinetype"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commit Line Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcommitroastedlbs"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commit Roasted Lbs"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcommitroastedlbsint"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commit Roasted Lbs (Int)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcommodcustcurrency"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commodity Customer Currency"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcommodnotes"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commodity Notes"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcpricefilled"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Price Filled"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcpricetotalcommit"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Total Commit Price"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcpricevar1"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Price Var 1"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcpricevar2"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Price Var 2"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcpricevar3"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Price Var 3"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcustconsledgerdimension"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Ledger Dimension"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcusttargetprice"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Target Price"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommorddeliveryfromperiod"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery From Period"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommorddeliverytoperiod"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery To Period"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfuturesbasiscode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Futures Basis Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxbankpremium"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX Bank Premium"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxbankspotrate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX Bank Spot Rate"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxbanktotalrate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX Bank Total Rate"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxbuystatus"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX Buy Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxlockinpremium"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX Lock In Premium"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxohpremium"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX OH Premium"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxriskpremium"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="FX Risk Premium"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxtotal2bconfirmed"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Total 2B Confirmed"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordfxtotalpremium"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Total Premium"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordlineentrytype"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Line Entry Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordlotsize"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Lot Size"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordnumoflots"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Number of Lots"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordorderprice"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Price"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordplaceddate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Placed Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordplacedtime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Placed Time"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordpricetermscode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Price Terms Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordprodlinecode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product Line Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordtargetfxrateprovided"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Target FX Rate Provided"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordtotalrequiredusd"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Total Required USD"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordtpmagreementnum"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TPM Agreement Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpvendaccount"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Vendor Account"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordconfirmedwithcustomer"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Confirmed with Customer"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordgroupingkey"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Grouping Key"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordldnprice"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="LDN Price"
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
                name="mpcommorderpurpose"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Purpose"
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
                name="mpi21_book"
                control={control}
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
                name="mpi21_contractno"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Contract Number"
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
                        label="Pricing Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpi21_subbook"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Subbook"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpcommordcancelled"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cancelled"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Mpcommodorders
            </Button>
        </form>
    </Container>
    );
};

export default AddMpcommodorders;
