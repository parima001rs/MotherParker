import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinterfaceBomheaderTables = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();
    const MpinterfaceBomheaderTables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MpinterfaceBomheaderTables');

        if (MpinterfaceBomheaderTables) {
            setValue('recid', MpinterfaceBomheaderTables.recid || 9167414906);
            setValue('tableId', MpinterfaceBomheaderTables.tableId || 6);
            setValue('interface', MpinterfaceBomheaderTables.interface || "PowerPlant");
            setValue('batchnum', MpinterfaceBomheaderTables.batchnum || "2722-01-10-20240426-172159");
            setValue('dataareaid', MpinterfaceBomheaderTables.dataareaid || "10");
            setValue('mpbomactivity', MpinterfaceBomheaderTables.mpbomactivity || "1");
            setValue('mpbomcreatedby', MpinterfaceBomheaderTables.mpbomcreatedby || null);
            setValue('mpbomcreatedon', MpinterfaceBomheaderTables.mpbomcreatedon || null);
            setValue('mpbomsiteid', MpinterfaceBomheaderTables.mpbomsiteid || "01");
            setValue('mpbomitem', MpinterfaceBomheaderTables.mpbomitem || "00000014");
            setValue('mpbomitemdesc', MpinterfaceBomheaderTables.mpbomitemdesc || null);
            setValue('mpbomitemname', MpinterfaceBomheaderTables.mpbomitemname || null);
            setValue('mpbomprobatseqno', MpinterfaceBomheaderTables.mpbomprobatseqno || 125691);
            setValue('mpbomquantity1', MpinterfaceBomheaderTables.mpbomquantity1 || null);
            setValue('mpbomquantity2', MpinterfaceBomheaderTables.mpbomquantity2 || null);
            setValue('mpbomquantity3', MpinterfaceBomheaderTables.mpbomquantity3 || null);
            setValue('mpbomquantity4', MpinterfaceBomheaderTables.mpbomquantity4 || null);
            setValue('mpbomquantity5', MpinterfaceBomheaderTables.mpbomquantity5 || null);
            setValue('mpbomquantity6', MpinterfaceBomheaderTables.mpbomquantity6 || null);
            setValue('mpbomquantity7', MpinterfaceBomheaderTables.mpbomquantity7 || null);
            setValue('mpbomquantity8', MpinterfaceBomheaderTables.mpbomquantity8 || null);
            setValue('mpbomquantity9', MpinterfaceBomheaderTables.mpbomquantity9 || null);
            setValue('mpbomquantity10', MpinterfaceBomheaderTables.mpbomquantity10 || null);
            setValue('mpbomquantity11', MpinterfaceBomheaderTables.mpbomquantity11 || null);
            setValue('mpbomquantity12', MpinterfaceBomheaderTables.mpbomquantity12 || null);
            setValue('mpbomquantity13', MpinterfaceBomheaderTables.mpbomquantity13 || null);
            setValue('mpbomquantity14', MpinterfaceBomheaderTables.mpbomquantity14 || null);
            setValue('mpbomtransferred', MpinterfaceBomheaderTables.mpbomtransferred || null);
            setValue('mpbomzone', MpinterfaceBomheaderTables.mpbomzone || null);
            setValue('mpcomponentitem1', MpinterfaceBomheaderTables.mpcomponentitem1 || null);
            setValue('mpcomponentitem2', MpinterfaceBomheaderTables.mpcomponentitem2 || null);
            setValue('mpcomponentitem3', MpinterfaceBomheaderTables.mpcomponentitem3 || null);
            setValue('mpcomponentitem4', MpinterfaceBomheaderTables.mpcomponentitem4 || null);
            setValue('mpcomponentitem5', MpinterfaceBomheaderTables.mpcomponentitem5 || null);
            setValue('mpcomponentitem6', MpinterfaceBomheaderTables.mpcomponentitem6 || null);
            setValue('mpcomponentitem7', MpinterfaceBomheaderTables.mpcomponentitem7 || null);
            setValue('mpcomponentitem8', MpinterfaceBomheaderTables.mpcomponentitem8 || null);
            setValue('mpcomponentitem9', MpinterfaceBomheaderTables.mpcomponentitem9 || null);
            setValue('mpcomponentitem10', MpinterfaceBomheaderTables.mpcomponentitem10 || null);
            setValue('mpcomponentitem11', MpinterfaceBomheaderTables.mpcomponentitem11 || null);
            setValue('mpcomponentitem12', MpinterfaceBomheaderTables.mpcomponentitem12 || null);
            setValue('mpcomponentitem13', MpinterfaceBomheaderTables.mpcomponentitem13 || null);
            setValue('mpcomponentitem14', MpinterfaceBomheaderTables.mpcomponentitem14 || null);
            setValue('createddatetime', MpinterfaceBomheaderTables.createddatetime || "2024-04-26T17:21:59");
            setValue('processed', MpinterfaceBomheaderTables.processed || true);
            setValue('bomrecid', MpinterfaceBomheaderTables.bomrecid || 5637147579);
            setValue('mpqty', MpinterfaceBomheaderTables.mpqty || null);
        }
    }, [setType, MpinterfaceBomheaderTables, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface"
                            fullWidth
                            margin="normal"
                        />
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
                    Update MpinterfaceBomheaderTables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceBomheaderTables;
