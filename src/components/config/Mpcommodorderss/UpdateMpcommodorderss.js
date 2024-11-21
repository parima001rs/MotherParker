import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpcommodorders = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpcommodorders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpcommodorderss');
        if (Mpcommodorders) {
            setValue('recid', Mpcommodorders.recid);
            setValue('createddatetime',Mpcommodorders.createddatetime);
            setValue('dataareaid', Mpcommodorders.dataareaid);
            setValue('mpcommfxMpcommodordersfilldate', Mpcommodorders.mpcommfxMpcommodordersfilldate);
            setValue('mpcommordactuallotlbs', Mpcommodorders.mpcommordactuallotlbs);
            setValue('mpcommordblenddiffnotes', Mpcommodorders.mpcommordblenddiffnotes);
            setValue('mpcommordbuyconfirmnum', Mpcommodorders.mpcommordbuyconfirmnum);
            setValue('mpcommordbuygroupcode', Mpcommodorders.mpcommordbuygroupcode);
            setValue('mpcommordbuygroupnum', Mpcommodorders.mpcommordbuygroupnum);
            setValue('mpcommordbuygrppriceseq', Mpcommodorders.mpcommordbuygrppriceseq);
            setValue('mpcommordbuypostatus', Mpcommodorders.mpcommordbuypostatus);
            setValue('mpcommordbuypurchdate', Mpcommodorders.mpcommordbuypurchdate);
            setValue('mpcommordcalclotslbs', Mpcommodorders.mpcommordcalclotslbs);
            setValue('mpcommordcoffeemarketcode', Mpcommodorders.mpcommordcoffeemarketcode);
            setValue('mpcommordcommitco', Mpcommodorders.mpcommordcommitco);
            setValue('mpcommordcommitlinetype', Mpcommodorders.mpcommordcommitlinetype);
            setValue('mpcommordcommitroastedlbs', Mpcommodorders.mpcommordcommitroastedlbs);
            setValue('mpcommordcommitroastedlbsint', Mpcommodorders.mpcommordcommitroastedlbsint);
            setValue('mpcommordcommodcustcurrency', Mpcommodorders.mpcommordcommodcustcurrency);
            setValue('mpcommordcommodnotes', Mpcommodorders.mpcommordcommodnotes);
            setValue('mpcommordcpricefilled', Mpcommodorders.mpcommordcpricefilled);
            setValue('mpcommordcpricetotalcommit', Mpcommodorders.mpcommordcpricetotalcommit);
            setValue('mpcommordcpricevar1', Mpcommodorders.mpcommordcpricevar1);
            setValue('mpcommordcpricevar2', Mpcommodorders.mpcommordcpricevar2);
            setValue('mpcommordcpricevar3', Mpcommodorders.mpcommordcpricevar3);
            setValue('mpcommordcustconsledgerdimension', Mpcommodorders.mpcommordcustconsledgerdimension);
            setValue('mpcommordcusttargetprice', Mpcommodorders.mpcommordcusttargetprice);
            setValue('mpcommorddeliveryfromperiod', Mpcommodorders.mpcommorddeliveryfromperiod);
            setValue('mpcommorddeliverytoperiod', Mpcommodorders.mpcommorddeliverytoperiod);
            setValue('mpcommordfuturesbasiscode', Mpcommodorders.mpcommordfuturesbasiscode);
            setValue('mpcommordfxbankpremium', Mpcommodorders.mpcommordfxbankpremium);
            setValue('mpcommordfxbankspotrate', Mpcommodorders.mpcommordfxbankspotrate);
            setValue('mpcommordfxbanktotalrate', Mpcommodorders.mpcommordfxbanktotalrate);
            setValue('mpcommordfxbuystatus', Mpcommodorders.mpcommordfxbuystatus);
            setValue('mpcommordfxlockinpremium', Mpcommodorders.mpcommordfxlockinpremium);
            setValue('mpcommordfxohpremium', Mpcommodorders.mpcommordfxohpremium);
            setValue('mpcommordfxriskpremium', Mpcommodorders.mpcommordfxriskpremium);
            setValue('mpcommordfxtotal2bconfirmed', Mpcommodorders.mpcommordfxtotal2bconfirmed);
            setValue('mpcommordfxtotalpremium', Mpcommodorders.mpcommordfxtotalpremium);
            setValue('mpcommordlineentrytype', Mpcommodorders.mpcommordlineentrytype);
            setValue('mpcommordlotsize', Mpcommodorders.mpcommordlotsize);
            setValue('mpcommordnumoflots', Mpcommodorders.mpcommordnumoflots);
            setValue('mpcommordMpcommodordersprice', Mpcommodorders.mpcommordMpcommodordersprice);
            setValue('mpcommordplaceddate', Mpcommodorders.mpcommordplaceddate);
            setValue('mpcommordplacedtime', Mpcommodorders.mpcommordplacedtime);
            setValue('mpcommordpricetermscode', Mpcommodorders.mpcommordpricetermscode);
            setValue('mpcommordprodlinecode', Mpcommodorders.mpcommordprodlinecode);
            setValue('mpcommordtargetfxrateprovided', Mpcommodorders.mpcommordtargetfxrateprovided);
            setValue('mpcommordtotalrequiredusd', Mpcommodorders.mpcommordtotalrequiredusd);
            setValue('mpcommordtpmagreementnum', Mpcommodorders.mpcommordtpmagreementnum);
            setValue('mpvendaccount', Mpcommodorders.mpvendaccount);
            setValue('mpcommordconfirmedwithcustomer', Mpcommodorders.mpcommordconfirmedwithcustomer);
            setValue('mpcommordgroupingkey', Mpcommodorders.mpcommordgroupingkey);
            setValue('mpcommordldnprice', Mpcommodorders.mpcommordldnprice);
            setValue('modifieddatetime', Mpcommodorders.modifieddatetime);
            setValue('modifiedby', Mpcommodorders.modifiedby);
            setValue('mpcommMpcommodorderspurpose', Mpcommodorders.mpcommMpcommodorderspurpose);
            setValue('mpi21_bgnstatus', Mpcommodorders.mpi21_bgnstatus);
            setValue('mpi21_book', Mpcommodorders.mpi21_book);
            setValue('mpi21_contractno', Mpcommodorders.mpi21_contractno);
            setValue('mpi21_pricingno', Mpcommodorders.mpi21_pricingno);
            setValue('mpi21_subbook', Mpcommodorders.mpi21_subbook);
            setValue('mpcommordcancelled', Mpcommodorders.mpcommordcancelled);
        } else {
            console.error('Mpcommodorders not found');
        }
    }, [setType, Mpcommodorders, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid');
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
                    name="mpcommfxMpcommodordersfilldate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpcommodorders Fill Date"
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
                    name="mpcommordMpcommodordersprice"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpcommodorders Price"
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
                    name="mpcommMpcommodorderspurpose"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpcommodorders Purpose"
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
                    Update Mpcommodorders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpcommodorders;
