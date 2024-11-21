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
                    onClick={() => navigate(`/view-MpsalesOrderCareHeader/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpsalesOrderCareHeader/${params.row.recid}`)}
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
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Tableid', width: 200 },
    { field: 'batchnum', headerName: 'Batchnum', width: 90 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    { field: 'transActionPurpose', headerName: 'TransActionPurpose', width: 150 },
    { field: 'customerRef', headerName: 'CustomerRef', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'address1', headerName: 'Address1', width: 150 },
    { field: 'address2', headerName: 'Address2', width: 150 },
    { field: 'address3', headerName: 'Address3', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'zip', headerName: 'Zip', width: 150 },
    { field: 'country', headerName: 'Country', width: 150 },
    { field: 'shipperRef', headerName: 'ShipperRef', width: 150 },
    { field: 'uniqueRef', headerName: 'UniqueRef', width: 150 },
    { field: 'orderType', headerName: 'OrderType', width: 150 },
    { field: 'comments', headerName: 'Comments', width: 150 },
    { field: 'primaryContactAssignment', headerName: 'PrimaryContactAssignment', width: 150 },
    { field: 'workflow', headerName: 'Workflow', width: 150 },
    { field: 'tmsplanningAbility', headerName: 'TmsplanningAbility', width: 150 },
    { field: 'customerpo', headerName: 'Customerpo', width: 150 },
    { field: 'customer', headerName: 'Customer', width: 150 },
    { field: 'methodOfPayment', headerName: 'MethodOfPayment', width: 150 },
    { field: 'originationDate', headerName: 'OriginationDate', width: 150 },
    { field: 'directionCategory', headerName: 'DirectionCategory', width: 150 },
    { field: 'estAvailableStartDate', headerName: 'EstAvailableStartDate', width: 150 },
    { field: 'whsLocationRef', headerName: 'WhsLocationRef', width: 150 },
    { field: 'whsName', headerName: 'WhsName', width: 150 },
    { field: 'whsAddress1', headerName: 'WhsAddress1', width: 150 },
    { field: 'whsAddress2', headerName: 'WhsAddress2', width: 150 },
    { field: 'whsAddress3', headerName: 'WhsAddress3', width: 150 },
    { field: 'whsCity', headerName: 'WhsCity', width: 150 },
    { field: 'whsState', headerName: 'WhsState', width: 150 },
    { field: 'whsZip', headerName: 'WhsZip', width: 150 },
    { field: 'whsCountry', headerName: 'WhsCountry', width: 150 },
    { field: 'reqDeliveryStartDate', headerName: 'ReqDeliveryStartDate', width: 150 },
    { field: 'locationRef', headerName: 'LocationRef', width: 150 },
    { field: 'locName', headerName: 'LocName', width: 150 },
    { field: 'locAddress1', headerName: 'LocAddress1', width: 150 },
    { field: 'locAddress2', headerName: 'LocAddress2', width: 150 },
    { field: 'locAddress3', headerName: 'LocAddress3', width: 150 },
    { field: 'locCity', headerName: 'LocCity', width: 150 },
    { field: 'locState', headerName: 'LocState', width: 150 },
    { field: 'locZip', headerName: 'LocZip', width: 150 },
    { field: 'locCountry', headerName: 'LocCountry', width: 150 },
    { field: 'locCustomerRef', headerName: 'LocCustomerRef', width: 150 },
    { field: 'groupAssignment', headerName: 'GroupAssignment', width: 150 },
    
];

const MpsalesOrderCareHeaderTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpsalesOrderCareHeaders');
    }, [setType]);

    return (
        <Container>
            <h2>MpsalesOrderCareHeader Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpsalesOrderCareHeader')}
            >
                Add MpsalesOrderCareHeader
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default MpsalesOrderCareHeaderTable;
