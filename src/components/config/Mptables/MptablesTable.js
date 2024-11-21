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
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mptables/${params.row.id}`, { state: { text: displayUniqueName } })}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.id)}
                >
                    <Delete/>
                </IconButton>
            </>
        ),
    },
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'tableName', headerName: 'TableName', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'createdDate', headerName: 'createdDate', width: 200 },
];

const MptablesTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation();

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
       
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);
    
    useEffect(() => {
        setType('Mptables');
    }, [setType]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mptables', { state: { text: displayUniqueName } })}
            >
                Add Mpadjreasoncode
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.id} />
            </div>
        </Container>
    );
};

export default MptablesTable;
