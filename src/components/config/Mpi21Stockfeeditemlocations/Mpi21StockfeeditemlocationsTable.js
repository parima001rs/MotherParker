import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity,displayUniqueName) => [
    
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21Stockfeeditemlocation/${params.row.recid}`,{ state: { text: displayUniqueName } } )}
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
    { field: 'inventlocationid', headerName: 'Inventlocationid', width: 150 },
    { field: 'inventsiteid', headerName: 'Inventsiteid', width: 150 },
    { field: 'parentrecid', headerName: 'Parentrecid', width: 200 },
    { field: 'wmslocationid', headerName: 'Wmslocationid', width: 90 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    
];

const Mpi21StockfeeditemlocationTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
      //new display change
      const [displayUniqueName, setTableDisplayName] = useState([]);
      const [tableUniqueName, setTableName] = useState('');
  
      //new display change
      const location = useLocation();

    useEffect(() => {
        setType('Mpi21Stockfeeditemlocations');
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
       
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);


    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21Stockfeeditemlocation',{ state: { text: displayUniqueName } } )}
            >
                Add Mpi21Stockfeeditemlocation
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity,displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default Mpi21StockfeeditemlocationTable;
