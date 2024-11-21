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
                    onClick={() => navigate(`/update-MpinterfaceItemReceipt/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Created Date Time', width: 250 },
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'tableid', headerName: 'Table ID', width: 100 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'siteId', headerName: 'Site ID', width: 150 },
    { field: 'mptobagmarks', headerName: 'MP To Bag Marks', width: 200 },
    { field: 'mptobatchnumber', headerName: 'MP To Batch Number', width: 200 },
    { field: 'mptocontainerno', headerName: 'MP To Container No', width: 200 },
    { field: 'mptocontractno', headerName: 'MP To Contract No', width: 200 },
    { field: 'mptodata13', headerName: 'MP To Data 13', width: 200 },
    { field: 'mptodata2', headerName: 'MP To Data 2', width: 200 },
    { field: 'mptodata3', headerName: 'MP To Data 3', width: 200 },
    { field: 'mptodestination', headerName: 'MP To Destination', width: 200 },
    { field: 'mptoitemnumber', headerName: 'MP To Item Number', width: 200 },
    { field: 'mptoproexportid', headerName: 'MP To Pro Export ID', width: 200 },
    { field: 'mptopurchnumber', headerName: 'MP To Purch Number', width: 200 },
    { field: 'mptoquantity', headerName: 'MP To Quantity', width: 200 },
    { field: 'mptorecorddate', headerName: 'MP To Record Date', width: 250 },
    { field: 'mptotransferorderno', headerName: 'MP To Transfer Order No', width: 200 },
    { field: 'mptotransferred', headerName: 'MP To Transferred', width: 200 },
    { field: 'mptozone', headerName: 'MP To Zone', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },

    
];

const MpinterfaceItemReceiptTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinterfaceItemReceipts');
    }, [setType]);

    return (
        <Container>
            <h2>MpinterfaceItemReceipt Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceItemReceipt')}
            >
                Add MpinterfaceItemReceipt
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                rows={entities} 
                columns={columns(navigate, deleteEntity)} 
                pageSize={5} 
                checkboxSelection 
                getRowId={(row) => row.recid} 

                slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceItemReceiptTable;
