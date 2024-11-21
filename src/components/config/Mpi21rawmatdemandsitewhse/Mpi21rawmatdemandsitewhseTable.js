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
                    onClick={() => navigate(`/update-Mpi21rawmatdemandsitewhse/${params.row.recid}`, { state: { text: displayUniqueName } } )}
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
    { field: 'mpi21rawmatdemandsetup', headerName: 'Mpi21rawmatdemandsetup', width: 150 },
    { field: 'dataareaid', headerName: 'dataareaid', width: 150 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150 },
    { field: 'mpinventlocationid', headerName: 'Mpinventlocationid', width: 150 },
    { field: 'mpinventsiteid', headerName: 'Mpinventsiteid', width: 150 },
    
    
];

const Mpi21rawmatdemandsitewhseTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    // Add a loading state
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        setType('Mpi21rawmatdemandsitewhse');
        // When entities data is fully loaded, set isLoading to false
        if (entities.length > 0) {
            setIsLoading(false);
        }
    }, [setType, entities]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
      
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);


    // Don't render DataGrid until entities data is fully loaded
    return (
        <Container>
            <h2> {displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21rawmatdemandsitewhse', { state: { text: displayUniqueName } } )}
            >
                Add Mpi21rawmatdemandsitewhse
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                {!isLoading && (
                    <DataGrid rows={entities} columns={columns(navigate, deleteEntity,displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
                )}
            </div>
        </Container>
    );
};




export default Mpi21rawmatdemandsitewhseTable;
