import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const columns = (navigate, deleteEntity) => [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => (
      <>
        <IconButton
          color="primary"
          onClick={() => navigate(`/update-user/${params.row.id}`)}
        >
          <Edit />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() => deleteEntity(params.row.id)}
        >
          <Delete />
        </IconButton>
      </>
    ),
  },
];

const UserTable = () => {
  const { entities, setType, deleteEntity } = useGenericContext();
  const navigate = useNavigate();

  useEffect(() => {
    setType('users');
  }, [setType]);

  return (
    <Container>
      <h2>User Table</h2>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => navigate('/add-user')}
      >
        Add User
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection />
      </div>
    </Container>
  );
};

export default UserTable;
