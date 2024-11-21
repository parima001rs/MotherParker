import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice'; // Assuming you have this service

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpinterfaceparameter/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'key', headerName: 'Key', width: 150 },
    { field: 'mpinterfaceactive', headerName: 'Mpinterfaceactive', width: 150 },
    { field: 'modifieddatetime', headerName: 'Modifieddatetime', width: 150 },
    { field: 'modifiedby', headerName: 'Modifiedby', width: 200 },
    { field: 'recversion', headerName: 'Recversion', width: 90 },
    { field: 'partition', headerName: 'Partition', width: 150 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'mpprobatnumseqcode', headerName: 'Mpprobatnumseqcode', width: 200 },
    { field: 'mpinterfaceenabledebugging', headerName: 'Mpinterfaceenabledebugging', width: 90 },
    { field: 'mpinterfacepath', headerName: 'Mpinterfacepath', width: 150 },
    { field: 'mpprobatprodqtysetzero', headerName: 'Mpprobatprodqtysetzero', width: 150 },
    { field: 'mpskipprodbomupdateforwhscontroleditems', headerName: 'Mpskipprodbomupdateforwhscontroleditems', width: 200 },
    { field: 'mpdontignorecreditnotecorrectionforln', headerName: 'Mpdontignorecreditnotecorrectionforln', width: 90 },
    { field: 'dfologilityexportfilepath', headerName: 'Dfologilityexportfilepath', width: 150 },
    { field: 'mpecomexportfilepath', headerName: 'Mpecomexportfilepath', width: 150 },
    { field: 'mpi21batchnumseqcode', headerName: 'Mpi21batchnumseqcode', width: 200 },
    { field: 'mpi21filepath', headerName: 'Mpi21filepath', width: 90 },
    { field: 'mpi21password', headerName: 'Mpi21password', width: 150 },
    { field: 'mpi21url', headerName: 'Mpi21url', width: 150 },
    { field: 'mpi21username', headerName: 'Mpi21username', width: 200 },
    { field: 'mpwcdisableenable', headerName: 'Mpwcdisableenable', width: 90 },
    { field: 'mpwcmcconsntnumseqcode', headerName: 'Mpwcmcconsntnumseqcode', width: 150 },
    { field: 'mpwcmodificationidprefix', headerName: 'Mpwcmodificationidprefix', width: 150 },
    { field: 'mpI21blenddemandnumbersequence', headerName: 'MpI21blenddemandnumbersequence', width: 200 },
    { field: 'mpI21rawmaterialsnumbersequence', headerName: 'MpI21rawmaterialsnumbersequence', width: 90 },
    { field: 'mpi21subwipconsnumseq', headerName: 'Mpi21subwipconsnumseq', width: 150 },
    { field: 'mpi21vendorrefnumseqcode', headerName: 'Mpi21vendorrefnumseqcode', width: 150 },
    { field: 'pdsbatchattribdataarea', headerName: 'Pdsbatchattribdataarea', width: 200 },
    { field: 'pdsbatchattribid', headerName: 'Pdsbatchattribid', width: 90 },
    { field: 'mpi21activate', headerName: 'Mpi21activate', width: 150 },
    { field: 'mpi21tocomments', headerName: 'Mpi21tocomments', width: 150 },
    { field: 'mpi21tomarks', headerName: 'Mpi21tomarks', width: 200 },
    { field: 'mpWalmartaggregation', headerName: 'MpWalmartaggregation', width: 90 },
    { field: 'mpWalmartdispatchadvice', headerName: 'MpWalmartdispatchadvice', width: 150 },
    { field: 'mpWalmartobservation', headerName: 'MpWalmartobservation', width: 150 },
    { field: 'mpWalmarttraceabilitysetupdate', headerName: 'MpWalmarttraceabilitysetupdate', width: 200 },
    { field: 'mpWalmarttransformation', headerName: 'MpWalmarttransformation', width: 90 },
    { field: 'mpi21directtransferjournalnameid', headerName: 'Mpi21directtransferjournalnameid', width: 150 },
    { field: 'mpi21directtransferreasoncode', headerName: 'Mpi21directtransferreasoncode', width: 150 },
    { field: 'mpWalmarti21cooptraceinboundpath', headerName: 'MpWalmarti21cooptraceinboundpath', width: 200 },
    { field: 'mpWalmarti21cooptraceoutboundpath', headerName: 'MpWalmarti21cooptraceoutboundpath', width: 90 },
    { field: 'mpWalmarti21cooptraceprocessedpath', headerName: 'MpWalmarti21cooptraceprocessedpath', width: 150 },
    { field: 'mpWalmarti21traceinboundpath', headerName: 'MpWalmarti21traceinboundpath', width: 150 },
    { field: 'mpWalmarti21traceoutboundpath', headerName: 'MpWalmarti21traceoutboundpath', width: 200 },
    { field: 'mpWalmarti21traceprocessedpath', headerName: 'MpWalmarti21traceprocessedpath', width: 90 },
    { field: 'mpWalmartloadfacilitiesinboundpath', headerName: 'MpWalmartloadfacilitiesinboundpath', width: 150 },
    { field: 'mpWalmartloadfacilitiesprocessedpath', headerName: 'MpWalmartloadfacilitiesprocessedpath', width: 150 },
    { field: 'mpWalmartloadproductsinboundpath', headerName: 'MpWalmartloadproductsinboundpath', width: 200 },
    { field: 'mpWalmartloadproductsprocessedpath', headerName: 'MpWalmartloadproductsprocessedpath', width: 90 },
];

const MpinterfaceparameterTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Mpinterfaceparameters');
    }, [setType]);

    // Handle fetching display name based on the current route
    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpinterfaceparameter', { state: { text: displayUniqueName } })}
            >
                Add Mpinterfaceparameter
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceparameterTable;
