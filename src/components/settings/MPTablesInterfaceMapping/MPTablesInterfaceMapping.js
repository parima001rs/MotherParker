import React, { useEffect, useState } from 'react';
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
                    onClick={() => navigate(`/update-MPTablesInterfaceMapping/${params.row.recid}`)}
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
    { field: 'id', headerName: 'Id', width: 70 },
    // { field: 'recid', headerName: 'RecId', width: 70 },
    { field: 'tableName', headerName: 'TableName', width: 250 },
    { field: 'displayName', headerName: 'DisplayName', width: 250 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'urlName', headerName: 'UrlName', width: 150 },
    { field: 'resourceGroupName', headerName: 'ResourceGroupName', width: 150 },
    { field: 'factoryName', headerName: 'FactoryName', width: 150 },
    { field: 'pipelineName', headerName: 'PipelineName', width: 150 },
    { field: 'subscriptionId', headerName: 'SubscriptionId', width: 150 },
    { field: 'createdDate', headerName: 'CreatedDate', width: 90 },
];

const MPTablesInterfaceMappings = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    //const [modifiedEntities, setModifiedEntities] = useState([]);

    useEffect(() => {
        setType('MPTablesInterfaceMappings');
    }, [setType]);

    // useEffect(() => {
    //     if (entities && entities.length > 0) {
    //         const newEntities = entities.map(entity => ({
    //             ...entity,
    //             recid: entity.id,  
    //         }));
    //         setModifiedEntities(newEntities);
    //     }
    // }, [entities]);  

    // if (!modifiedEntities || modifiedEntities.length === 0) {
    //     return <div>Loading...</div>;  
    // }

    return (
        <Container>
            <h2>MPTablesInterfaceMapping Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPTablesInterfaceMapping')}
            >
                Add MPTablesInterfaceMapping
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

export default MPTablesInterfaceMappings;
