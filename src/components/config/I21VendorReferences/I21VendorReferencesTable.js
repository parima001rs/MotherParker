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
                    onClick={() => navigate(`/update-I21VendorReference/${params.row.recid}`, { state: { text: displayUniqueName } })}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recid)}
                >
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'companyCode', headerName: 'Company Code', width: 150 },
    { field: 'i21VendorReferenceId', headerName: 'Vendor Ref ID', width: 150 },
    { field: 'i21EntityType', headerName: 'Entity Type', width: 150 },
    { field: 'i21MethodPayment', headerName: 'Method of Payment', width: 150 },
    { field: 'd365vendorNumber', headerName: 'D365 Vendor Number', width: 150 },
    { field: 'subgroup', headerName: 'Subgroup', width: 150 },
];

const I21VendorReferences = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('I21VendorReferences');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
       
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName)
                .then(setTableDisplayName)
                .catch(console.error);
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
                onClick={() => navigate('/add-I21VendorReference', { state: { text: displayUniqueName } })}
            >
                Add I21VendorReferences
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

export default I21VendorReferences;
