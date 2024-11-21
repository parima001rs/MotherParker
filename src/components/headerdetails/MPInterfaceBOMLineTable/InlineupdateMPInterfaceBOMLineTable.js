import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MPInterfaceBOMLineTableTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 

    const [lineEntities, setLineEntities] = useState([]);

    // useEffect(() => {
    //     setType('MPInterfaceBOMLineTable');
    // }, [setType]);

    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPInterfaceBOMLineTable/GetByParent/' + recid);
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
        width: 100,
        renderCell: (params) => (
            <>
                {/* <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MPInterfaceBOMLineTable/${params.row.recid}`)}
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
    { field: 'recid', headerName: 'Recid', width: 150, editable: false },
{ field: 'createdDateTime', headerName: 'Createddatetime', width: 250, editable: true },
{ field: 'refTableID', headerName: 'RefTableID', width: 150, editable: true },
{ field: 'batchNum', headerName: 'Batchnum', width: 300, editable: true },
{ field: 'refRecid', headerName: 'RefRecid', width: 150, editable: true },
{ field: 'mpBomBlend', headerName: 'MPBomBlend', width: 150, editable: true },
{ field: 'mpBomComponentItem', headerName: 'MPBomComponentItem', width: 200, editable: true },
{ field: 'mpBomComponentQty', headerName: 'MPBomComponentQty', width: 200, editable: true },
{ field: 'mpBomFromDate', headerName: 'MPBomFromDate', width: 200, editable: true },
{ field: 'mpBomGrind', headerName: 'MPBomGrind', width: 150, editable: true },
{ field: 'mpBomItemShrinkage', headerName: 'MPBomItemShrinkage', width: 200, editable: true },
{ field: 'mpBomLineCreatedBy', headerName: 'MPBomLineCreatedBy', width: 200, editable: true },
{ field: 'mpBomLineCreatedOn', headerName: 'MPBomLineCreatedOn', width: 200, editable: true },
{ field: 'mpBomLineFacility', headerName: 'MPBomLineFacility', width: 150, editable: true },
{ field: 'mpBomLineItem', headerName: 'MPBomLineItem', width: 200, editable: true },
{ field: 'mpBomLineNo', headerName: 'MPBomLineNo', width: 150, editable: true },
{ field: 'mpBomLineScrap', headerName: 'MPBomLineScrap', width: 150, editable: true },
{ field: 'mpBomLineUOM', headerName: 'MPBomLineUOM', width: 150, editable: true },
{ field: 'mpBomMaintDate', headerName: 'MPBomMaintDate', width: 200, editable: true },
{ field: 'mpBomMaintTime', headerName: 'MPBomMaintTime', width: 150, editable: true },
{ field: 'mpBomMustIssueOverride', headerName: 'MPBomMustIssueOverride', width: 200, editable: true },
{ field: 'mpBomShopOrder', headerName: 'MPBomShopOrder', width: 150, editable: true },
{ field: 'mpBomToDate', headerName: 'MPBomToDate', width: 200, editable: true },
{ field: 'mpBomLineNum', headerName: 'MPBomLineNum', width: 150, editable: true },
{ field: 'mpBomActivity', headerName: 'MPBomActivity', width: 150, editable: true },
{ field: 'bomRecid', headerName: 'BomRecid', width: 150, editable: true },
{ field: 'formulaLineQuantity', headerName: 'FormulaLineQuantity', width: 200, editable: true },
{ field: 'formulaLineQuantityDenominator', headerName: 'FormulaLineQuantityDenominator', width: 250, editable: true }

    
    
];


    return (
        <Container>
            <h2>MPInterfaceBOMLineTable Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPInterfaceBOMLineTable')}
            >
                Add MPInterfaceBOMLineTable
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

export default MPInterfaceBOMLineTableTable;

