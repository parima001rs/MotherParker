import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';





const UpdateMpinterfaceitemtables = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType , setInterfaceType} = useGenericPaginationContext();
    const Mpinterfaceitemtables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('Mpinterfaceitemtables');

        if (Mpinterfaceitemtables) {
            setValue('recid', Mpinterfaceitemtables.recid || 6000005667);
            setValue('tableId', Mpinterfaceitemtables.tableId || 2);
            setValue('interface', Mpinterfaceitemtables.interface || "Probat");
            setValue('batchnum', Mpinterfaceitemtables.batchnum || "0070-01-10-20240313-154128");
            setValue('dataareaid', Mpinterfaceitemtables.dataareaid || "101");
            setValue('processed', Mpinterfaceitemtables.processed || true);
            setValue('mpitemprobatseqno', Mpinterfaceitemtables.mpitemprobatseqno || 11585);
            setValue('relationtype', Mpinterfaceitemtables.relationtype || 0);
            setValue('createddatetime', Mpinterfaceitemtables.createddatetime || "2024-03-13T15:42:27");
            setValue('mpitemabccode', Mpinterfaceitemtables.mpitemabccode || null);
            setValue('mpitemactivity', Mpinterfaceitemtables.mpitemactivity || "I");
            setValue('mpitemclass', Mpinterfaceitemtables.mpitemclass || null);
            setValue('mpitemconditionstatuscode', Mpinterfaceitemtables.mpitemconditionstatuscode || null);
            setValue('mpitemcostingfacility', Mpinterfaceitemtables.mpitemcostingfacility || null);
            setValue('mpitemcreatedon', Mpinterfaceitemtables.mpitemcreatedon || null);
            setValue('mpitemdefaultwarehouse', Mpinterfaceitemtables.mpitemdefaultwarehouse || null);
            setValue('mpitemdesc1', Mpinterfaceitemtables.mpitemdesc1 || "FLV VANILLA HAZELNUT ART 231M64");
            setValue('mpitemfacility', Mpinterfaceitemtables.mpitemfacility || "01");
            setValue('mpitemfairtradecompliance', Mpinterfaceitemtables.mpitemfairtradecompliance || null);
            setValue('mpitemflavorgrind', Mpinterfaceitemtables.mpitemflavorgrind || null);
            setValue('mpitemgrossweight', Mpinterfaceitemtables.mpitemgrossweight || null);
            setValue('mpitemgroupcode', Mpinterfaceitemtables.mpitemgroupcode || null);
            setValue('mpitemgroupsalesanalysisfield2', Mpinterfaceitemtables.mpitemgroupsalesanalysisfield2 || null);
            setValue('mpitemitemnumber', Mpinterfaceitemtables.mpitemitemnumber || "1102021");
            setValue('mpitemlabelweightuom', Mpinterfaceitemtables.mpitemlabelweightuom || null);
            setValue('mpitemlastmaintaindate', Mpinterfaceitemtables.mpitemlastmaintaindate || null);
            setValue('mpitemlastmaintaintime', Mpinterfaceitemtables.mpitemlastmaintaintime || null);
            setValue('mpitemmajorclass', Mpinterfaceitemtables.mpitemmajorclass || null);
            setValue('mpitemmaterialcontrol', Mpinterfaceitemtables.mpitemmaterialcontrol || null);
            setValue('mpitemmonthtodateadj', Mpinterfaceitemtables.mpitemmonthtodateadj || null);
            setValue('mpitemmonthtodateissues', Mpinterfaceitemtables.mpitemmonthtodateissues || null);
            setValue('mpitemmonthtodaterec', Mpinterfaceitemtables.mpitemmonthtodaterec || null);
            setValue('mpitemnetnetweight', Mpinterfaceitemtables.mpitemnetnetweight || null);
            setValue('mpitemnetweight', Mpinterfaceitemtables.mpitemnetweight || null);
            setValue('mpitemopeningbalance', Mpinterfaceitemtables.mpitemopeningbalance || null);
            setValue('mpitemorganicitem', Mpinterfaceitemtables.mpitemorganicitem || null);
            setValue('mpitempackagespersaleableunit', Mpinterfaceitemtables.mpitempackagespersaleableunit || null);
            setValue('mpitempackagingdesccode', Mpinterfaceitemtables.mpitempackagingdesccode || null);
            setValue('mpitempacksize', Mpinterfaceitemtables.mpitempacksize || null);
            setValue('mpitempallettie', Mpinterfaceitemtables.mpitempallettie || null);
            setValue('mpitempallettier', Mpinterfaceitemtables.mpitempallettier || null);
            setValue('mpitemperpalletqty', Mpinterfaceitemtables.mpitemperpalletqty || null);
            setValue('mpitemproductfamily', Mpinterfaceitemtables.mpitemproductfamily || null);
            setValue('mpitemproductionshelflifedays', Mpinterfaceitemtables.mpitemproductionshelflifedays || null);
            setValue('mpitempurchunitofmeasure', Mpinterfaceitemtables.mpitempurchunitofmeasure || null);
            setValue('mpitemsaleableunitpercase', Mpinterfaceitemtables.mpitemsaleableunitpercase || null);
            setValue('mpitemsalesanalysis', Mpinterfaceitemtables.mpitemsalesanalysis || null);
            setValue('mpitemscccode', Mpinterfaceitemtables.mpitemscccode || null);
            setValue('mpitemshipshelflifedays', Mpinterfaceitemtables.mpitemshipshelflifedays || null);
            setValue('mpitemstdcost', Mpinterfaceitemtables.mpitemstdcost || null);
            setValue('mpitemstockinguom', Mpinterfaceitemtables.mpitemstockinguom || null);
            setValue('mpitemtransferred', Mpinterfaceitemtables.mpitemtransferred || 1);
            setValue('mpitemtype', Mpinterfaceitemtables.mpitemtype || null);
            setValue('mpitemupccode', Mpinterfaceitemtables.mpitemupccode || null);
            setValue('mpitemworkcenter', Mpinterfaceitemtables.mpitemworkcenter || null);
            setValue('mpitemzone', Mpinterfaceitemtables.mpitemzone || 3);
            setValue('mpitemnetnetweightuom', Mpinterfaceitemtables.mpitemnetnetweightuom || null);
            setValue('mpitemgrouptechcode', Mpinterfaceitemtables.mpitemgrouptechcode || null);
            setValue('mpitemitemgroupcode', Mpinterfaceitemtables.mpitemitemgroupcode || null);
            setValue('mpitemnetweightanduom', Mpinterfaceitemtables.mpitemnetweightanduom || null);
            setValue('mpitemgrossdepth', Mpinterfaceitemtables.mpitemgrossdepth || null);
            setValue('mpitemgrossheight', Mpinterfaceitemtables.mpitemgrossheight || null);
            setValue('mpitemgrosswidth', Mpinterfaceitemtables.mpitemgrosswidth || null);
        }
    }, [setType, Mpinterfaceitemtables, setValue]);

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
                    name="processed"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                           
                            inputProps={{ value: true }}
                        />
                    )}
                />
                <Controller
                    name="mpitemprobatseqno"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Probat Seq No"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="relationtype"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Relation Type"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
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
                    name="mpitemabccode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item ABC Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemactivity"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Activity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemclass"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Class"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemconditionstatuscode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Condition Status Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemcostingfacility"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Costing Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemcreatedon"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Created On"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemdefaultwarehouse"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Default Warehouse"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemdesc1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Description 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemfacility"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                {/* Add remaining fields similarly */}
                <Button type="submit" variant="contained" color="primary">
                    Update Mpinterfaceitemtables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceitemtables;
