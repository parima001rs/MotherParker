import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MPI21PURCHASEORDERLINETable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPI21PURCHASEORDERLINE/GetByParent/' + recid);
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
                    onClick={() => navigate(`/update-MPI21PURCHASEORDERLINE/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150, editable: true },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 120, editable: true },
    { field: 'actionid', headerName: 'Actionid', width: 100, editable: true },
    { field: 'cashprice', headerName: 'Cashprice', width: 120, editable: true },
    { field: 'certificate', headerName: 'Certificate', width: 150, editable: true },
    { field: 'destinationport', headerName: 'Destinationport', width: 180, editable: true },
    { field: 'enddate', headerName: 'Enddate', width: 120, editable: true },
    { field: 'erppolineno', headerName: 'Erppolineno', width: 140, editable: true  },
    { field: 'erpponumber', headerName: 'Erpponumber', width: 140, editable: true  },
    { field: 'fixationdate', headerName: 'Fixationdate', width: 150, editable: true  },
    { field: 'futuresmarket', headerName: 'Futuresmarket', width: 160, editable: true  },
    { field: 'futuresmonth', headerName: 'Futuresmonth', width: 150, editable: true  },
    { field: 'inventlocationid', headerName: 'Inventlocationid', width: 170, editable: true  },
    { field: 'inventsiteid', headerName: 'Inventsiteid', width: 150, editable: true  },
    { field: 'itemno', headerName: 'Itemno', width: 100, editable: true  },
    { field: 'loadingport', headerName: 'Loadingport', width: 150, editable: true  },
    { field: 'netweight', headerName: 'Netweight', width: 120, editable: true  },
    { field: 'netweightuom', headerName: 'Netweightuom', width: 150, editable: true  },
    { field: 'origin', headerName: 'Origin', width: 100, editable: true  },
    { field: 'parentrecid', headerName: 'Parentrecid', width: 150, editable: false  },
    { field: 'plannedavailabilitydate', headerName: 'Plannedavailabilitydate', width: 200, editable: true  },
    { field: 'pricecurrency', headerName: 'Pricecurrency', width: 150, editable: true  },
    { field: 'priceuom', headerName: 'Priceuom', width: 120, editable: true  },
    { field: 'pricingtype', headerName: 'Pricingtype', width: 150, editable: true  },
    { field: 'purchqty', headerName: 'Purchqty', width: 120, editable: true  },
    { field: 'quantity', headerName: 'Quantity', width: 120, editable: true  },
    { field: 'quantityuom', headerName: 'Quantityuom', width: 150, editable: true  },
    { field: 'sequenceno', headerName: 'Sequenceno', width: 150, editable: true  },
    { field: 'shipper', headerName: 'Shipper', width: 120, editable: true  },
    { field: 'startdate', headerName: 'Startdate', width: 120, editable: true  },
    { field: 'status', headerName: 'Status', width: 100, editable: true  },
    { field: 'storagelocation', headerName: 'Storagelocation', width: 170, editable: true  },
    { field: 'storageunit', headerName: 'Storageunit', width: 150, editable: true  },
    { field: 'trxsequenceno', headerName: 'Trxsequenceno', width: 150, editable: true  },
    { field: 'updatedavailabilitydate', headerName: 'Updatedavailabilitydate', width: 200, editable: true  },
    
];


    return (
        <Container>
            <h2>MPI21PURCHASEORDERLINE Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPI21PURCHASEORDERLINE')}
            >
                Add MPI21PURCHASEORDERLINE
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

export default MPI21PURCHASEORDERLINETable;

