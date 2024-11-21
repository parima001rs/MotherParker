import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add, RemoveRedEyeSharp } from '@mui/icons-material';

const columns = (navigate, deleteEntity) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/view-MptransferOrderOutboundHeader/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MptransferOrderOutboundHeader/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 120 },
    { field: 'tableid', headerName: 'Tableid', width: 90 },
    { field: 'processed', headerName: 'Processed', width: 100 },
    { field: 'batchnum', headerName: 'Batchnum', width: 130 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 120 },
    { field: 'transActionPurpose', headerName: 'TransactionPurpose', width: 180 },
    { field: 'shipperRef', headerName: 'ShipperRef', width: 160 },
    { field: 'uniqueRef', headerName: 'UniqueRef', width: 150 },
    { field: 'orderType', headerName: 'OrderType', width: 120 },
    { field: 'comments', headerName: 'Comments', width: 100 },
    { field: 'primaryContactAssignment', headerName: 'PrimaryContactAssignment', width: 220 },
    { field: 'workflow', headerName: 'Workflow', width: 120 },
    { field: 'tmsplanningAbility', headerName: 'TmsplanningAbility', width: 180 },
    { field: 'type', headerName: 'Type', width: 90 },
    { field: 'methodOfPayment', headerName: 'MethodOfPayment', width: 160 },
    { field: 'originationDate', headerName: 'OriginationDate', width: 150 },
    { field: 'directionCategory', headerName: 'DirectionCategory', width: 160 },
    { field: 'scheduleNum', headerName: 'ScheduleNum', width: 140 },
    { field: 'estAvailableStartDate', headerName: 'EstAvailableStartDate', width: 220 },
    { field: 'locationRef', headerName: 'LocationRef', width: 160 },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'address1', headerName: 'Address1', width: 150 },
    { field: 'address2', headerName: 'Address2', width: 150 },
    { field: 'address3', headerName: 'Address3', width: 150 },
    { field: 'city', headerName: 'City', width: 120 },
    { field: 'state', headerName: 'State', width: 120 },
    { field: 'zip', headerName: 'Zip', width: 120 },
    { field: 'country', headerName: 'Country', width: 120 },
    { field: 'reqDeliveryStartDate', headerName: 'ReqDeliveryStartDate', width: 220 },
    { field: 'whsLocationRef', headerName: 'WhsLocationRef', width: 220 },
    { field: 'whsName', headerName: 'WhsName', width: 150 },
    { field: 'whsAddress1', headerName: 'WhsAddress1', width: 180 },
    { field: 'whsAddress2', headerName: 'WhsAddress2', width: 180 },
    { field: 'whsAddress3', headerName: 'WhsAddress3', width: 180 },
    { field: 'whsCity', headerName: 'WhsCity', width: 150 },
    { field: 'whsState', headerName: 'WhsState', width: 150 },
    { field: 'whsZip', headerName: 'WhsZip', width: 150 },
    { field: 'whsCountry', headerName: 'WhsCountry', width: 150 },
    { field: 'groupAssignment', headerName: 'GroupAssignment', width: 180 },
    
];

const MptransferOrderOutboundHeaderTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MptransferOrderOutboundHeaders');
    }, [setType]);

    return (
        <Container>
            <h2>MptransferOrderOutboundHeader Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MptransferOrderOutboundHeader')}
            >
                Add MptransferOrderOutboundHeader
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default MptransferOrderOutboundHeaderTable;
