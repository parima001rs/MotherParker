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
                    onClick={() => navigate(`/update-Mpcommodblenddiffss/${params.row.recid}`, { state: { text: displayUniqueName } })}>
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
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'mpblenddiffblendcode', headerName: 'Blend Code', width: 200 },
    { field: 'mpblenddiffbuygroupnum', headerName: 'Buy Group Num', width: 200 },
    { field: 'mpblenddiffcovered', headerName: 'Covered', width: 150 },
    { field: 'mpblenddiffcustom', headerName: 'Custom', width: 150 },
    { field: 'mpblenddifffreightexdoc', headerName: 'Freight Ex Doc', width: 200 },
    { field: 'mpblenddiffmarket', headerName: 'Market', width: 150 },
    { field: 'mpblenddiffreplacement', headerName: 'Replacement', width: 200 },
    { field: 'mpblenddiffshrinkpctgbasemfg', headerName: 'Shrink % Base MFG', width: 200 },
    { field: 'mpblenddiffshrinkpctgcommod', headerName: 'Shrink % Commod', width: 200 },
    { field: 'mpblenddiffvariance1', headerName: 'Variance 1', width: 150 },
    { field: 'mpblenddiffvariance2', headerName: 'Variance 2', width: 150 },
    { field: 'mpblenddiffvariance3', headerName: 'Variance 3', width: 150 },
    { field: 'mpblenddiffnotes', headerName: 'Notes', width: 200 },
    { field: 'mpblenddiffblendcodereference', headerName: 'Blend Code Reference', width: 200 },
    { field: 'mpi21_actualblend', headerName: 'Actual Blend', width: 150 },
    { field: 'mpi21_bgnstatus', headerName: 'BGN Status', width: 150 },
    { field: 'mpi21_pricingno', headerName: 'Pricing No', width: 150 },
    { field: 'mpi21commitmentpricingbgnheader', headerName: 'Commitment Pricing BGN Header', width: 250 },
    { field: 'modifieddatetime', headerName: 'Modified Datetime', width: 200 },
    { field: 'modifiedby', headerName: 'Modified By', width: 150 },
    { field: 'mpi21insertedflag', headerName: 'Inserted Flag', width: 150 },
    { field: 'mpblendadjustment', headerName: 'Blend Adjustment', width: 200 },
    { field: 'mpi21totalcostpr', headerName: 'Total Cost PR', width: 150 },
];

const Mpcommodblenddiffs = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('Mpcommodblenddiffss');
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
                onClick={() => navigate('/add-Mpcommodblenddiffss', { state: { text: displayUniqueName } })}>
                Add Mpcommodblenddiffss
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} /> 
            </div>
        </Container>
    );
};

export default Mpcommodblenddiffs;
