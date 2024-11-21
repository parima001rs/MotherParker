import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MPInforBOMLinesTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 


    const [lineEntities, setLineEntities] = useState([]);


    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentRecId)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPInforBOMLines/GetByParent/' + recid);
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
                    onClick={() => navigate(`/update-MPInforBOMLines/${params.row.recid}`)}
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
{ field: 'createdDateTime', headerName: 'Created DateTime', width: 200, editable: false },
{ field: 'dataAreaId', headerName: 'Data Area ID', width: 150, editable: true },
{ field: 'bomConsump', headerName: 'BOM Consumption', width: 150, editable: true },
{ field: 'bomId', headerName: 'BOM ID', width: 150, editable: true },
{ field: 'bomQty', headerName: 'BOM Quantity', width: 150, editable: true },
{ field: 'bomQtySerie', headerName: 'BOM Quantity Series', width: 150, editable: true },
{ field: 'bomType', headerName: 'BOM Type', width: 150, editable: true },
{ field: 'configGroupId', headerName: 'Config Group ID', width: 150, editable: true },
{ field: 'formula', headerName: 'Formula', width: 150, editable: true },
{ field: 'fromDate', headerName: 'From Date', width: 150, editable: false },
{ field: 'inventDimId', headerName: 'Invent Dim ID', width: 150, editable: true },
{ field: 'itemId', headerName: 'Item ID', width: 150, editable: true },
{ field: 'itemRouteId', headerName: 'Item Route ID', width: 150, editable: true },
{ field: 'lineNum', headerName: 'Line Number', width: 150, editable: true },
{ field: 'oprNum', headerName: 'Operation Number', width: 150, editable: true },
{ field: 'pmfFormulaPct', headerName: 'PMF Formula Percentage', width: 150, editable: true },
{ field: 'pmfPctEnable', headerName: 'PMF Percentage Enable', width: 150, editable: true },
{ field: 'pmfScalable', headerName: 'PMF Scalable', width: 150, editable: true },
{ field: 'prodFlushingPrincip', headerName: 'Production Flushing Principle', width: 200, editable: true },
{ field: 'parentRecId', headerName: 'Parent Rec ID', width: 150, editable: false },
{ field: 'scrapConst', headerName: 'Scrap Constant', width: 150, editable: true },
{ field: 'scrapVar', headerName: 'Scrap Variable', width: 150, editable: true },
{ field: 'site', headerName: 'Site', width: 150, editable: true },
{ field: 'toDate', headerName: 'To Date', width: 150, editable: false },
{ field: 'unitId', headerName: 'Unit ID', width: 150, editable: true },
{ field: 'warehouse', headerName: 'Warehouse', width: 150, editable: true },
{ field: 'wrkCtrConsumption', headerName: 'Work Center Consumption', width: 200, editable: true }

];


    return (
        <Container>
            <h2>MPInforBOMLines Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPInforBOMLines')}
            >
                Add MPInforBOMLines
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

export default MPInforBOMLinesTable;

