import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice'; // Ensure this service is available

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Wrkctrcapabilityresources/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'capability', headerName: 'Capability', width: 150 },
    { field: 'wrkctrid', headerName: 'Wrkctr ID', width: 150 },
    { field: 'resourcedataareaid', headerName: 'Resource Data Area ID', width: 150 },
    { field: 'level', headerName: 'Level', width: 150 },
    { field: 'priority', headerName: 'Priority', width: 150 },
    { field: 'validfrom', headerName: 'Valid From', width: 150 },
    { field: 'validto', headerName: 'Valid To', width: 150 },
    { field: 'mpbinno', headerName: 'MP Bin No', width: 150 },
    { field: 'mprecvstation', headerName: 'MP Receive Station', width: 150 },
    { field: 'capabilityNavigation', headerName: 'Capability Navigation', width: 150 },
];

const Wrkctrcapabilityresources = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Wrkctrcapabilityresources');
    }, [setType]);

    // Fetch display name based on the current route
    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
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
                onClick={() => navigate('/add-Wrkctrcapabilityresources', { state: { text: displayUniqueName } })}
            >
                Add Wrkctrcapabilityresources
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

export default Wrkctrcapabilityresources;
