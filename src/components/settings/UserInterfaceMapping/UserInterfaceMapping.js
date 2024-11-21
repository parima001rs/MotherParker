import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';



   
const UserInterfaceMappingTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('UserInterfaceMappings');
    }, [setType]);

    const columns = useMemo(() => [
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton
                        color="primary"
                        onClick={() => navigate(`/update-UserInterfaceMapping/${params.row.recid}`)}
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
        { field: 'id', headerName: 'Id', width: 100 },
        { field: 'interfaceName', headerName: 'Interface', width: 150 },
        { field: 'userEmail', headerName: 'Email', width: 250 },
        { field: 'interfaceId', headerName: 'interface Id', width: 150 },
        { field: 'userId', headerName: 'User Id', width: 150 },
    ], [navigate, deleteEntity]);

    return (
        <Container>
            <h2>UserInterfaceMapping Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-UserInterfaceMapping')}
            >
                Add UserInterfaceMapping
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}  // Adjust this line based on your unique identifier
                />
            </div>
        </Container>
    );
};
export default UserInterfaceMappingTable;