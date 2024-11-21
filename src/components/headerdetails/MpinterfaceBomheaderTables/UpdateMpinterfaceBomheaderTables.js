import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinterfaceBomheaderTables = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MpinterfaceBomheaderTables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MpinterfaceBomheaderTables');
        fetchTableId();
        fetchInterfaces();

        if (MpinterfaceBomheaderTables) {
            
            setValue('recid', MpinterfaceBomheaderTables.recid );
            setValue('tableId', MpinterfaceBomheaderTables.tableId);
            setValue('interface', MpinterfaceBomheaderTables.interface );
            setValue('batchnum', MpinterfaceBomheaderTables.batchnum );
            setValue('dataareaid', MpinterfaceBomheaderTables.dataareaid );
            setValue('mpbomactivity', MpinterfaceBomheaderTables.mpbomactivity );
            setValue('mpbomcreatedby', MpinterfaceBomheaderTables.mpbomcreatedby );
            setValue('mpbomcreatedon', MpinterfaceBomheaderTables.mpbomcreatedon );
            setValue('mpbomsiteid', MpinterfaceBomheaderTables.mpbomsiteid );
            setValue('mpbomitem', MpinterfaceBomheaderTables.mpbomitem );
            setValue('mpbomitemdesc', MpinterfaceBomheaderTables.mpbomitemdesc );
            setValue('mpbomitemname', MpinterfaceBomheaderTables.mpbomitemname );
            setValue('mpbomprobatseqno', MpinterfaceBomheaderTables.mpbomprobatseqno);
            setValue('mpbomquantity1', MpinterfaceBomheaderTables.mpbomquantity1 );
            setValue('mpbomquantity2', MpinterfaceBomheaderTables.mpbomquantity2 );
            setValue('mpbomquantity3', MpinterfaceBomheaderTables.mpbomquantity3 );
            setValue('mpbomquantity4', MpinterfaceBomheaderTables.mpbomquantity4 );
            setValue('mpbomquantity5', MpinterfaceBomheaderTables.mpbomquantity5 );
            setValue('mpbomquantity6', MpinterfaceBomheaderTables.mpbomquantity6 );
            setValue('mpbomquantity7', MpinterfaceBomheaderTables.mpbomquantity7 );
            setValue('mpbomquantity8', MpinterfaceBomheaderTables.mpbomquantity8 );
            setValue('mpbomquantity9', MpinterfaceBomheaderTables.mpbomquantity9 );
            setValue('mpbomquantity10', MpinterfaceBomheaderTables.mpbomquantity10 );
            setValue('mpbomquantity11', MpinterfaceBomheaderTables.mpbomquantity11 );
            setValue('mpbomquantity12', MpinterfaceBomheaderTables.mpbomquantity12 );
            setValue('mpbomquantity13', MpinterfaceBomheaderTables.mpbomquantity13 );
            setValue('mpbomquantity14', MpinterfaceBomheaderTables.mpbomquantity14 );
            setValue('mpbomtransferred', MpinterfaceBomheaderTables.mpbomtransferred );
            setValue('mpbomzone', MpinterfaceBomheaderTables.mpbomzone );
            setValue('mpcomponentitem1', MpinterfaceBomheaderTables.mpcomponentitem1 );
            setValue('mpcomponentitem2', MpinterfaceBomheaderTables.mpcomponentitem2 );
            setValue('mpcomponentitem3', MpinterfaceBomheaderTables.mpcomponentitem3 );
            setValue('mpcomponentitem4', MpinterfaceBomheaderTables.mpcomponentitem4 );
            setValue('mpcomponentitem5', MpinterfaceBomheaderTables.mpcomponentitem5 );
            setValue('mpcomponentitem6', MpinterfaceBomheaderTables.mpcomponentitem6 );
            setValue('mpcomponentitem7', MpinterfaceBomheaderTables.mpcomponentitem7 );
            setValue('mpcomponentitem8', MpinterfaceBomheaderTables.mpcomponentitem8 );
            setValue('mpcomponentitem9', MpinterfaceBomheaderTables.mpcomponentitem9 );
            setValue('mpcomponentitem10', MpinterfaceBomheaderTables.mpcomponentitem10 );
            setValue('mpcomponentitem11', MpinterfaceBomheaderTables.mpcomponentitem11 );
            setValue('mpcomponentitem12', MpinterfaceBomheaderTables.mpcomponentitem12 );
            setValue('mpcomponentitem13', MpinterfaceBomheaderTables.mpcomponentitem13 );
            setValue('mpcomponentitem14', MpinterfaceBomheaderTables.mpcomponentitem14 );
            setValue('createddatetime', MpinterfaceBomheaderTables.createddatetime );
            setValue('processed', MpinterfaceBomheaderTables.processed );
            setValue('bomrecid', MpinterfaceBomheaderTables.bomrecid );
            setValue('mpqty', MpinterfaceBomheaderTables.mpqty );
        }
    }, [setType, MpinterfaceBomheaderTables, setValue]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data); 
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                 
                <Controller
                    name="recid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                            disabled
                        />
                    )}
                />
               <Controller
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="Table ID"
                            >
                                {tableId.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.tableId}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
               
                <Controller
                    name="batchnum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="dataareaid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Data Area ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomactivity"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Activity"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpbomcreatedby"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Created By"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomcreatedon"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Created On"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomsiteid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomitem"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomitemdesc"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Item Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomitemname"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Item Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomprobatseqno"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Probat Seq No"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                {/* Quantity Fields */}
                {Array.from({ length: 14 }, (_, index) => (
                    <Controller
                        key={`mpbomquantity${index + 1}`}
                        name={`mpbomquantity${index + 1}`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={`MP BOM Quantity ${index + 1}`}
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                ))}
                <Controller
                    name="mpbomtransferred"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Transferred"
                            fullWidth
                            margin="normal"
                            type="text"  // Adjust this based on the expected type
                        />
                    )}
                />

                <Controller
                    name="mpbomzone"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Zone"
                            fullWidth
                            margin="normal"
                            type="text"  // Adjust this based on the expected type
                        />
                    )}
                />
                {/* Component Item Fields */}
                {Array.from({ length: 14 }, (_, index) => (
                    <Controller
                        key={`mpcomponentitem${index + 1}`}
                        name={`mpcomponentitem${index + 1}`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={`MP Component Item ${index + 1}`}
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                ))}
                <Controller
                    name="createddatetime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date Time"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="processed"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="bomrecid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="BOM Rec ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpqty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update 
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceBomheaderTables;
