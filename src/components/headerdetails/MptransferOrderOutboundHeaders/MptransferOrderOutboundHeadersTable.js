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
                    onClick={() => navigate(`/view-MptransferOrderOutboundHeader/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MptransferOrderOutboundHeader/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
        setType('MptransferOrderOutboundHeaders');
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
                onClick={() => navigate('/add-MptransferOrderOutboundHeader')}
            >
                Add MptransferOrderOutboundHeader
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

export default MptransferOrderOutboundHeaderTable;
