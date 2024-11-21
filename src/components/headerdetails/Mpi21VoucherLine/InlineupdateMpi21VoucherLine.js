import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Mpi21VoucherLineTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 

    const [lineEntities, setLineEntities] = useState([]);


    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21VoucherLine/GetByParent/' + recid);
        setLineEntities(response.data);
    };


    const processRowUpdate = async (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        await updateEntity(updatedRow);
        return updatedRow;
    };

   
const columns = [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
            <>
                {/* <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21VoucherLine/${params.row.recid}`)}
                >
                    <Edit />
                </IconButton> */}
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recid)}
                >
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Recid', width: 90, editable: false },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 200, editable: true },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 200, editable: true },
    { field: 'parentrecid', headerName: 'Parent Recid', width: 200, editable: true },
    { field: 'contractNo', headerName: 'Contract No', width: 200, editable: true },
    { field: 'sequenceNo', headerName: 'Sequence No', width: 150, editable: true },
    { field: 'erpPoNumber', headerName: 'ERP PO Number', width: 200, editable: true },
    { field: 'erpPolineNo', headerName: 'ERP PO Line No', width: 200, editable: true },
    { field: 'workOrderNo', headerName: 'Work Order No', width: 200, editable: true },
    { field: 'erpShopOrderNo', headerName: 'ERP Shop Order No', width: 200, editable: true },
    { field: 'erpServicePONumber', headerName: 'ERP Service PO Number', width: 200, editable: true },
    { field: 'i21InventoryReceiptNumber', headerName: 'I21 Inventory Receipt Number', width: 250, editable: true },
    { field: 'itemNo', headerName: 'Item No', width: 200, editable: true },
    { field: 'quantity', headerName: 'Quantity', width: 150, editable: true },
    { field: 'quantityuom', headerName: 'Quantity UOM', width: 150, editable: true },
    { field: 'currency', headerName: 'Currency', width: 150, editable: true },
    { field: 'cost', headerName: 'Cost', width: 150, editable: true },
    { field: 'costUom', headerName: 'Cost UOM', width: 150, editable: true },
    { field: 'discountPercentage', headerName: 'Discount Percentage', width: 200, editable: true },
    { field: 'subTotal', headerName: 'Sub Total', width: 200, editable: true },
    { field: 'lineTotal', headerName: 'Line Total', width: 150, editable: true },
    { field: 'erpservicepolineno', headerName: 'ERP Service PO Line No', width: 200, editable: true },
    { field: 'transactionSequenceNo', headerName: 'Transaction Sequence No', width: 200, editable: true },
    { field: 'tax', headerName: 'Tax', width: 150, editable: true },
    
];


    return (
        <Container>
            <h2>Mpi21VoucherLine Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21VoucherLine')}
            >
                Add Mpi21VoucherLine
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={lineEntities}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    processRowUpdate={processRowUpdate}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
        </Container>
    );
};

export default Mpi21VoucherLineTable;

