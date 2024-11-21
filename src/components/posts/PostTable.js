import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';

const columns = (navigate, deleteEntity) => [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'body', headerName: 'Body', width: 300 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/update-post/${params.row.id}`)}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteEntity(params.row.id)}
        >
          Delete
        </Button>
      </>
    ),
  },
];

const PostTable = () => {
  const { entities, setType, deleteEntity } = useGenericContext();
  const navigate = useNavigate();

  useEffect(() => {
    setType('posts');
  }, [setType]);

  return (
    <Container>
      <h2>Post Table</h2>
      <Button variant="contained" color="primary" onClick={() => navigate('/add-post')}>
        Add Post
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection />
      </div>
    </Container>
  );
};

export default PostTable;
