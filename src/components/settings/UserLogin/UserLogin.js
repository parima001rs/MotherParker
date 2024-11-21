import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const columns = (navigate, deleteEntity) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-UserLogin/${params.row.recid}`)}
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
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'createdOn', headerName: 'Created On', width: 200 },
    { field: 'isActive', headerName: 'Active', width: 100, type: 'boolean' },
];

const UserLoginTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('UserLogins');
    }, [setType]);

    return (
        <Container>
            <h2>UserLogin Table</h2>
            <Button 
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-UserLogin')}
            >
                Add UserLogin
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={entities} 
                    columns={columns(navigate, deleteEntity)} 
                    pageSize={5} 
                    checkboxSelection 
                    getRowId={(row) => row.recid} 
                />
            </div>
        </Container>
    );
};

export default UserLoginTable;
