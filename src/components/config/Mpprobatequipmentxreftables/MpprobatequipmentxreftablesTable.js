import React, { useEffect, useState, useMemo } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
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
                    onClick={() => navigate(`/update-Mpprobatequipmentxreftables/${params.row.recid}`, { state: { text: displayUniqueName } })}>
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
    { field: 'recid', headerName: 'Rec ID', width: 150 }, // Updated key
    { field: 'createddatetime', headerName: 'Created Date', width: 200 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'facility', headerName: 'Facility', width: 100 },
    { field: 'probatEqId', headerName: 'Probation Equipment ID', width: 150 },
    { field: 'type', headerName: 'Type', width: 100 },
    { field: 'groupId', headerName: 'Group ID', width: 100 },
    { field: 'machineId', headerName: 'Machine ID', width: 150 },
    { field: 'equipmentGroupPos', headerName: 'Equipment Group Pos', width: 150 },
    { field: 'machineWholeBean', headerName: 'Whole Bean', width: 100 },
    { field: 'machineGround', headerName: 'Ground', width: 150 },
    { field: 'machineFlavor', headerName: 'Flavor', width: 100 },
];

const Mpprobatequipmentxreftable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Mpprobatequipmentxreftables');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    const memoizedColumns = useMemo(() => columns(navigate, deleteEntity, displayUniqueName), [navigate, deleteEntity, displayUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpprobatequipmentxreftables', { state: { text: displayUniqueName } })}>
                Add Mpprobatequipmentxreftables
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={memoizedColumns} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default Mpprobatequipmentxreftable;
