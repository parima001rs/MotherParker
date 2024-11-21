import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    { field: 'recid', headerName: 'Recid', width: 90 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150 },
    { field: 'mperrormessageshort', headerName: 'Error Message Short', width: 200 },
    { field: 'mpinterfaceackref', headerName: 'Interface Ack Ref', width: 150 },
    { field: 'mpinterfaceackstatus', headerName: 'Interface Ack Status', width: 150 },
    { field: 'mperrormessagelong', headerName: 'Error Message Long', width: 250 },
    { field: 'refrecid', headerName: 'Ref Recid', width: 150 },
    { field: 'reftableid', headerName: 'Ref Table ID', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'notes', headerName: 'Notes', width: 150 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-mpinterfaceacktable/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
];

const Mpinterfaceacktable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Mpinterfaceacktable');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');

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
                onClick={() => navigate('/add-mpinterfaceacktable', { state: { text: displayUniqueName } })}
            >
                Add Mpinterfaceacktable
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

export default Mpinterfaceacktable;
