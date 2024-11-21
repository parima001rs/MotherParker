import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-MpinterfaceRouteTable/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'actionId', headerName: 'Action ID', width: 100 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'tableId', headerName: 'Table ID', width: 100 },
    { field: 'createddatetime', headerName: 'Created Date Time', width: 250 },
    { field: 'mproutebasiscode', headerName: 'MP Route Basis Code', width: 200 },
    { field: 'mproutefacility', headerName: 'MP Route Facility', width: 150 },
    { field: 'mprouteitem', headerName: 'MP Route Item', width: 200 },
    { field: 'mproutemachinehours', headerName: 'MP Route Machine Hours', width: 200 },
    { field: 'mproutemachineid', headerName: 'MP Route Machine ID', width: 200 },
    { field: 'mproutenoofoperators', headerName: 'MP Route No of Operators', width: 200 },
    { field: 'mprouteoperation', headerName: 'MP Route Operation', width: 200 },
    { field: 'mprouteoperationdesc', headerName: 'MP Route Operation Desc', width: 200 },
    { field: 'mproutestdefficiency', headerName: 'MP Route Std Efficiency', width: 200 },
    { field: 'mprouteworkcentre', headerName: 'MP Route Work Centre', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'dataAreaId', headerName: 'Data Area ID', width: 150 },
    { field: 'routeId', headerName: 'Route ID', width: 150 },

    
];

const MpinterfaceRouteTableTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceRouteTables');
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
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceRouteTable')}
            >
                Add MpinterfaceRouteTable
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
                slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceRouteTableTable;
