import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-Mpinterfaceprodtables/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 150 }, // Note the camelCase here
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'mpprodenddate', headerName: 'End Date', width: 150 },
    { field: 'mpprodendtime', headerName: 'End Time', width: 150 },
    { field: 'mpprodfacility', headerName: 'Facility', width: 150 },
    { field: 'mpprodfinishedqty', headerName: 'Finished Qty', width: 150 },
    { field: 'mpprodflavoredcoffee', headerName: 'Flavored Coffee', width: 150 },
    { field: 'mpproditemnumber', headerName: 'Item Number', width: 150 },
    { field: 'mpprodlinecontrol', headerName: 'Line Control', width: 150 },
    { field: 'mpprodlineno', headerName: 'Line Number', width: 150 },
    { field: 'mpprodordername', headerName: 'Order Name', width: 150 },
    { field: 'mpprodorderqty', headerName: 'Order Qty', width: 150 },
    { field: 'mpprodordertype', headerName: 'Order Type', width: 150 },
    { field: 'mpprodpkgrate', headerName: 'Pkg Rate', width: 150 },
    { field: 'mpprodprobatseqno', headerName: 'Probat Seq No', width: 150 },
    { field: 'mpprodquantity1', headerName: 'Quantity 1', width: 150 },
    // Add other quantity fields if needed
    { field: 'mpprodresourceid', headerName: 'Resource ID', width: 150 },
    { field: 'mpprodshoporder', headerName: 'Shop Order', width: 150 },
    { field: 'mpprodstartdate', headerName: 'Start Date', width: 150 },
    { field: 'mpprodstarttime', headerName: 'Start Time', width: 150 },
    { field: 'mpprodtargetgroup', headerName: 'Target Group', width: 150 },
    { field: 'mpprodtransferred', headerName: 'Transferred', width: 150 },
    
];

const MpinterfaceprodtablesTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('Mpinterfaceprodtables');
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
                onClick={() => navigate('/add-Mpinterfaceprodtables', { state: { text: displayUniqueName } })}
            >
                Add Mpinterfaceprodtables
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity,displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceprodtablesTable;
