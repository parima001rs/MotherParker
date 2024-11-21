import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-MpinterfaceRafadjustTable/${params.row.recid}`)}
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
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'mprafactivity', headerName: 'MP RAF Activity', width: 200 },
    { field: 'mprafbatchid', headerName: 'MP RAF Batch ID', width: 200 },
    { field: 'mprafbatchnumber', headerName: 'MP RAF Batch Number', width: 200 },
    { field: 'mprafbatchorder', headerName: 'MP RAF Batch Order', width: 200 },
    { field: 'mprafcreationdate', headerName: 'MP RAF Creation Date', width: 250 },
    { field: 'mprafcreationtime', headerName: 'MP RAF Creation Time', width: 250 },
    { field: 'mprafdefaultresource', headerName: 'MP RAF Default Resource', width: 200 },
    { field: 'mprafdestname', headerName: 'MP RAF Dest Name', width: 200 },
    { field: 'mprafdmasterid', headerName: 'MP RAF D Master ID', width: 200 },
    { field: 'mprafexpirydate', headerName: 'MP RAF Expiry Date', width: 250 },
    { field: 'mprafexportgeneralid', headerName: 'MP RAF Export General ID', width: 200 },
    { field: 'mpraffacility', headerName: 'MP RAF Facility', width: 150 },
    { field: 'mpraffinalitem', headerName: 'MP RAF Final Item', width: 200 },
    { field: 'mpraflicenseplate', headerName: 'MP RAF License Plate', width: 200 },
    { field: 'mpraflocation', headerName: 'MP RAF Location', width: 200 },
    { field: 'mpraflotname', headerName: 'MP RAF Lot Name', width: 200 },
    { field: 'mprafmobatchnumber1', headerName: 'MP RAF MO Batch Number 1', width: 200 },
    { field: 'mprafoperator', headerName: 'MP RAF Operator', width: 200 },
    { field: 'mprafordercomplete', headerName: 'MP RAF Order Complete', width: 200 },
    { field: 'mpraforiginalitem', headerName: 'MP RAF Original Item', width: 200 },
    { field: 'mprafprobatseqno', headerName: 'MP RAF Probat Seq No', width: 200 },
    { field: 'mprafproductiondate', headerName: 'MP RAF Production Date', width: 250 },
    { field: 'mprafquantity', headerName: 'MP RAF Quantity', width: 200 },
    { field: 'mprafreasoncode', headerName: 'MP RAF Reason Code', width: 200 },
    { field: 'mprafrecordingdate', headerName: 'MP RAF Recording Date', width: 250 },
    { field: 'mprafsmasterid', headerName: 'MP RAF S Master ID', width: 200 },
    { field: 'mprafsourcename', headerName: 'MP RAF Source Name', width: 200 },
    { field: 'mpraftransfererd', headerName: 'MP RAF Transfererd', width: 200 },
    { field: 'mpraftranstime', headerName: 'MP RAF Trans Time', width: 250 },
    { field: 'mprafzone', headerName: 'MP RAF Zone', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 100 },
    { field: 'mpinterfacelegacyid', headerName: 'Mpinterface Legacy Id', width: 250 },
    
];

const MpinterfaceRafadjustTableTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinterfaceRafadjustTables');
    }, [setType]);

    return (
        <Container>
            <h2>MpinterfaceRafadjustTable Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceRafadjustTable')}
            >
                Add MpinterfaceRafadjustTable
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

export default MpinterfaceRafadjustTableTable;
