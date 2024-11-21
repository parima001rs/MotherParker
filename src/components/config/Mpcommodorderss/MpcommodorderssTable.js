import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom'; 
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpcommodorders/${params.row.recid}`, { state: { text: displayUniqueName } })}>
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recid)}>
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Rec ID', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'mpcommfxorderfilldate', headerName: 'Order Fill Date', width: 200 },
    { field: 'mpcommordactuallotlbs', headerName: 'Actual Lot Lbs', width: 200 },
    { field: 'mpcommordblenddiffnotes', headerName: 'Blend Diff Notes', width: 200 },
    { field: 'mpcommordbuyconfirmnum', headerName: 'Buy Confirm Number', width: 200 },
    { field: 'mpcommordbuygroupcode', headerName: 'Buy Group Code', width: 200 },
    { field: 'mpcommordbuygroupnum', headerName: 'Buy Group Num', width: 200 },
    { field: 'mpcommordbuygrppriceseq', headerName: 'Buy Group Price Seq', width: 200 },
    { field: 'mpcommordbuypostatus', headerName: 'Buy PO Status', width: 200 },
    { field: 'mpcommordbuypurchdate', headerName: 'Buy Purchase Date', width: 200 },
    { field: 'mpcommordcalclotslbs', headerName: 'Calc Lot Lbs', width: 200 },
    { field: 'mpcommordcoffeemarketcode', headerName: 'Coffee Market Code', width: 200 },
    { field: 'mpcommordcommitco', headerName: 'Commit CO', width: 200 },
    { field: 'mpcommordcommitlinetype', headerName: 'Commit Line Type', width: 200 },
    { field: 'mpcommordcommitroastedlbs', headerName: 'Commit Roasted Lbs', width: 200 },
    { field: 'mpcommordcommitroastedlbsint', headerName: 'Commit Roasted Lbs Int', width: 200 },
    { field: 'mpcommordcommodcustcurrency', headerName: 'Cust Currency', width: 200 },
    { field: 'mpcommordcommodnotes', headerName: 'Commod Notes', width: 200 },
    { field: 'mpcommordcpricefilled', headerName: 'Price Filled', width: 200 },
    { field: 'mpcommordcpricetotalcommit', headerName: 'Price Total Commit', width: 200 },
    { field: 'mpcommordcpricevar1', headerName: 'Price Var 1', width: 200 },
    { field: 'mpcommordcpricevar2', headerName: 'Price Var 2', width: 200 },
    { field: 'mpcommordcpricevar3', headerName: 'Price Var 3', width: 200 },
    { field: 'mpcommordcustconsledgerdimension', headerName: 'Cust Ledger Dimension', width: 200 },
    { field: 'mpcommordcusttargetprice', headerName: 'Cust Target Price', width: 200 },
    { field: 'mpcommorddeliveryfromperiod', headerName: 'Delivery From Period', width: 200 },
    { field: 'mpcommorddeliverytoperiod', headerName: 'Delivery To Period', width: 200 },
    { field: 'mpcommordfuturesbasiscode', headerName: 'Futures Basis Code', width: 200 },
    { field: 'mpcommordfxbankpremium', headerName: 'FX Bank Premium', width: 200 },
    { field: 'mpcommordfxbankspotrate', headerName: 'FX Bank Spot Rate', width: 200 },
    { field: 'mpcommordfxbanktotalrate', headerName: 'FX Bank Total Rate', width: 200 },
    { field: 'mpcommordfxbuystatus', headerName: 'FX Buy Status', width: 200 },
    { field: 'mpcommordfxlockinpremium', headerName: 'FX Lock-in Premium', width: 200 },
    { field: 'mpcommordfxohpremium', headerName: 'FX OH Premium', width: 200 },
    { field: 'mpcommordfxriskpremium', headerName: 'FX Risk Premium', width: 200 },
    { field: 'mpcommordfxtotal2bconfirmed', headerName: 'FX Total Confirmed', width: 200 },
    { field: 'mpcommordfxtotalpremium', headerName: 'FX Total Premium', width: 200 },
    { field: 'mpcommordlineentrytype', headerName: 'Line Entry Type', width: 200 },
    { field: 'mpcommordlotsize', headerName: 'Lot Size', width: 200 },
    { field: 'mpcommordnumoflots', headerName: 'Number of Lots', width: 200 },
    { field: 'mpcommordorderprice', headerName: 'Order Price', width: 200 },
    { field: 'mpcommordplaceddate', headerName: 'Placed Date', width: 200 },
    { field: 'mpcommordplacedtime', headerName: 'Placed Time', width: 200 },
    { field: 'mpcommordpricetermscode', headerName: 'Price Terms Code', width: 200 },
    { field: 'mpcommordprodlinecode', headerName: 'Product Line Code', width: 200 },
    { field: 'mpcommordtargetfxrateprovided', headerName: 'Target FX Rate', width: 200 },
    { field: 'mpcommordtotalrequiredusd', headerName: 'Total Required USD', width: 200 },
    { field: 'mpcommordtpmagreementnum', headerName: 'TPM Agreement Num', width: 200 },
    { field: 'mpvendaccount', headerName: 'Vendor Account', width: 200 },
    { field: 'mpcommordconfirmedwithcustomer', headerName: 'Confirmed with Customer', width: 200 },
    { field: 'mpcommordgroupingkey', headerName: 'Grouping Key', width: 200 },
    { field: 'mpcommordldnprice', headerName: 'LDN Price', width: 200 },
    { field: 'modifieddatetime', headerName: 'Modified Datetime', width: 150 },
    { field: 'modifiedby', headerName: 'Modified By', width: 150 },
    { field: 'mpcommorderpurpose', headerName: 'Order Purpose', width: 200 },
    { field: 'mpi21_bgnstatus', headerName: 'BGN Status', width: 150 },
    { field: 'mpi21_book', headerName: 'Book', width: 150 },
    { field: 'mpi21_contractno', headerName: 'Contract No', width: 200 },
    { field: 'mpi21_pricingno', headerName: 'Pricing No', width: 150 },
    { field: 'mpi21_subbook', headerName: 'Sub Book', width: 150 },
    { field: 'mpcommordcancelled', headerName: 'Cancelled', width: 150 },
];

const Mpcommodorders = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('Mpcommodorderss');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');
       
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpcommodorderss', { state: { text: displayUniqueName } })}>
                Add Batch Adjustment
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={entities} 
                    columns={columns(navigate, deleteEntity, displayUniqueName)} 
                    pageSize={5} 
                    checkboxSelection 
                    getRowId={(row) => row.recid} 
                /> 
            </div>
        </Container>
    );
};

export default Mpcommodorders;
