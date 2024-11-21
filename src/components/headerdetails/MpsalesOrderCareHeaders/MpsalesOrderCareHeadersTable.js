import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add, RemoveRedEyeSharp } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns = (navigate, deleteEntity, displayUniqueName) => [
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
                    onClick={() => navigate(`/update-MpsalesOrderCareHeader/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'sbRecid', headerName: 'SB Recid', width: 150 },
    { field: 'sb_Interface', headerName: 'SB Interface', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batchnum', width: 150 },
    { field: 'sbCreateddatetime', headerName: 'SB Created Date Time', width: 150 },
    { field: 'sbProcessingstatus', headerName: 'SB Processing Status', width: 150 },
    { field: 'sbError', headerName: 'SB Error', width: 90, renderCell: (params) => (
        params.value === true ? (
            <Button
                color="primary"
                onClick={() => navigate(`/Mpblujayerrorlog/${params.row.sbRecid}`)}
                style={{ textTransform: 'none', padding: 0, minWidth: 0}}
            >
                True
            </Button>
        ) : (
            "False"
        )
        ),
    },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Data Area ID', width: 150 },
    { field: 'trxsequenceno', headerName: 'Transaction Sequence No', width: 150 },
    { field: 'interfacenum', headerName: 'Interface Number', width: 100 },
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
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity } = useGenericPaginationContext();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState([]);
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 100,
        page: 0,
    });

    useEffect(() => {
        setPaginationData(paginationModel.page, paginationModel.pageSize);
        fetchEntitiesWithPagination(paginationModel.page, paginationModel.pageSize);
    }, [paginationModel]);

    const handlePaginationModelChange = (model) => {
        // Reset page to 0 if page size changes
        if (model.pageSize !== paginationModel.pageSize) {
            setPaginationModel({ page: 1, pageSize: model.pageSize });
        } else {
            setPaginationModel(model);
        }
    };

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpsalesOrderCareHeaders');
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
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpsalesOrderCareHeader')}
            >
                Add MpsalesOrderCareHeader
            </Button> */}
            <Button //RESET
                style={{ marginBottom: 10, marginRight: 10 }}
                variant="outlined"
                color="primary"
                onClick={() => resetEntity(selectedItems)}
            >
                Reset Error
            </Button>
            <Button //PENDING
                style={{ marginBottom: 10, marginRight: 10 }}
                variant="contained"
                color="secondary"
                onClick={() => pendingEntity(selectedItems)}
            >
                Reprocess
            </Button>
            <Button //PROCESSED
                style={{ marginBottom: 10 }}
                variant="contained"
                color="success"
                onClick={() => processEntity(selectedItems)}
            >
                Hold
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    onRowSelectionModelChange={handleRowSelection}

                    pagination
                    paginationMode="server" // Enable server-side pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                />
            </div>
            <ToastContainer />

        </Container>
    );
};

export default MpsalesOrderCareHeaderTable;
