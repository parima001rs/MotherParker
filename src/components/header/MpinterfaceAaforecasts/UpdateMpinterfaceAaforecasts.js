import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinterfaceAaforecast = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceAaforecast = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MpinterfaceAaforecast');
        fetchTableId();
        fetchInterfaces();

        if (MpinterfaceAaforecast) {
            setValue('recid', MpinterfaceAaforecast.recid || 6000000000);
            setValue('createddatetime', MpinterfaceAaforecast.createddatetime || "2024-07-10T17:25:18");
            setValue('interface', MpinterfaceAaforecast.interface || "Logility");
            setValue('tableid', MpinterfaceAaforecast.tableid || 13);
            setValue('batchnum', MpinterfaceAaforecast.batchnum || "0072-NA-20240710-172518");
            setValue('processed', MpinterfaceAaforecast.processed || false);
            setValue('mpaaitemlvl1', MpinterfaceAaforecast.mpaaitemlvl1 || "1011128");
            setValue('mpaaotherattribute', MpinterfaceAaforecast.mpaaotherattribute || "1000101");
            setValue('mpaapyramid', MpinterfaceAaforecast.mpaapyramid || "1");
            setValue('mpalt1', MpinterfaceAaforecast.mpalt1 || null);
            setValue('mpalt2', MpinterfaceAaforecast.mpalt2 || 6);
            setValue('mpalternateabc1', MpinterfaceAaforecast.mpalternateabc1 || null);
            setValue('mpalternateabc3', MpinterfaceAaforecast.mpalternateabc3 || null);
            setValue('mpcasequantity', MpinterfaceAaforecast.mpcasequantity || null);
            setValue('mpconvfactor', MpinterfaceAaforecast.mpconvfactor || null);
            setValue('mpconvoption', MpinterfaceAaforecast.mpconvoption || null);
            setValue('mpcubeuom', MpinterfaceAaforecast.mpcubeuom || null);
            setValue('mpcustextnumber', MpinterfaceAaforecast.mpcustextnumber || null);
            setValue('mpdescription', MpinterfaceAaforecast.mpdescription || "MP CF ORIG RST 6-925G234567890123456789012345678901234567890");
            setValue('mpffactor', MpinterfaceAaforecast.mpffactor || null);
            setValue('mpffence', MpinterfaceAaforecast.mpffence || null);
            setValue('mpfield1', MpinterfaceAaforecast.mpfield1 || "Coffee");
            setValue('mpfield10', MpinterfaceAaforecast.mpfield10 || 10);
            setValue('mpfield11', MpinterfaceAaforecast.mpfield11 || null);
            setValue('mpfield12', MpinterfaceAaforecast.mpfield12 || null);
            setValue('mpfield13', MpinterfaceAaforecast.mpfield13 || null);
            setValue('mpfield14', MpinterfaceAaforecast.mpfield14 || " ");
            setValue('mpfield15', MpinterfaceAaforecast.mpfield15 || null);
            setValue('mpfield16', MpinterfaceAaforecast.mpfield16 || "1011128 ");
            setValue('mpfield17', MpinterfaceAaforecast.mpfield17 || "Tea");
            setValue('mpfield18', MpinterfaceAaforecast.mpfield18 || "MR");
            setValue('mpfield19', MpinterfaceAaforecast.mpfield19 || null);
            setValue('mpfield2', MpinterfaceAaforecast.mpfield2 || null);
            setValue('mpfield20', MpinterfaceAaforecast.mpfield20 || "Marley");
            setValue('mpfield21', MpinterfaceAaforecast.mpfield21 || "Active");
            setValue('mpfield22', MpinterfaceAaforecast.mpfield22 || "P997");
            setValue('mpfield23', MpinterfaceAaforecast.mpfield23 || "Equipment on Loan  Parent - FSMC");
            setValue('mpfield24', MpinterfaceAaforecast.mpfield24 || null);
            setValue('mpfield25', MpinterfaceAaforecast.mpfield25 || null);
            setValue('mpfield26', MpinterfaceAaforecast.mpfield26 || "NA FS");
            setValue('mpfield27', MpinterfaceAaforecast.mpfield27 || "REST IND");
            setValue('mpfield28', MpinterfaceAaforecast.mpfield28 || null);
            setValue('mpfield29', MpinterfaceAaforecast.mpfield29 || "GOLD");
            setValue('mpfield3', MpinterfaceAaforecast.mpfield3 || "029R");
            setValue('mpfield30', MpinterfaceAaforecast.mpfield30 || null);
            setValue('mpfield4', MpinterfaceAaforecast.mpfield4 || "CHEERS COUNTRY KITCHEN & MOTEL");
            setValue('mpfield5', MpinterfaceAaforecast.mpfield5 || null);
            setValue('mpfield6', MpinterfaceAaforecast.mpfield6 || "1000");
            setValue('mpfield7', MpinterfaceAaforecast.mpfield7 || 365);
            setValue('mpfield8', MpinterfaceAaforecast.mpfield8 || 255);
            setValue('mpfield9', MpinterfaceAaforecast.mpfield9 || "BRO");
            setValue('mpfiller', MpinterfaceAaforecast.mpfiller || null);
            setValue('mpfkey', MpinterfaceAaforecast.mpfkey || null);
            setValue('mpflevel', MpinterfaceAaforecast.mpflevel || null);
            setValue('mpfparam', MpinterfaceAaforecast.mpfparam || null);
            setValue('mpindicator', MpinterfaceAaforecast.mpindicator || "Y");
            setValue('mpinterfaceaalocation', MpinterfaceAaforecast.mpinterfaceaalocation || null);
            setValue('mpipabccode', MpinterfaceAaforecast.mpipabccode || null);
            setValue('mpitemlvl2', MpinterfaceAaforecast.mpitemlvl2 || "1011128");
            setValue('mpitemlvl3', MpinterfaceAaforecast.mpitemlvl3 || "1011128");
            setValue('mplocationlvl2', MpinterfaceAaforecast.mplocationlvl2 || "MD");
            setValue('mpmodeltype', MpinterfaceAaforecast.mpmodeltype || null);
            setValue('mpnextlvl', MpinterfaceAaforecast.mpnextlvl || null);
            setValue('mpofence', MpinterfaceAaforecast.mpoFence || null);
            setValue('mpplanner', MpinterfaceAaforecast.mpplanner || null);
            setValue('mpprodgroup', MpinterfaceAaforecast.mpprodgroup || null);
            setValue('mpproductgrouppyrd', MpinterfaceAaforecast.mpproductgrouppyrd || "Coffee");
            setValue('mpproductgrouppyro', MpinterfaceAaforecast.mpproductgrouppyro || null);
            setValue('mpprofile', MpinterfaceAaforecast.mpprofile || null);
            setValue('mprecalc', MpinterfaceAaforecast.mprecalc || null);
            setValue('mpseasonal', MpinterfaceAaforecast.mpseasonal || null);
            setValue('mpsecurity', MpinterfaceAaforecast.mpsecurity || null);
            setValue('mpsfence', MpinterfaceAaforecast.mpsfence || null);
            setValue('mpskey', MpinterfaceAaforecast.mpskey || null);
            setValue('mpslevel', MpinterfaceAaforecast.mpslevel || null);
            setValue('mpstockinguom', MpinterfaceAaforecast.mpstockinguom || null);
            setValue('mpsubgroup', MpinterfaceAaforecast.mpsubgroup || null);
            setValue('mpsupergroup', MpinterfaceAaforecast.mpsupergroup || "FG");
            setValue('mpswitch', MpinterfaceAaforecast.mpswitch || null);
            setValue('mptype', MpinterfaceAaforecast.mptype || "AA");
            setValue('mpunitcost', MpinterfaceAaforecast.mpunitcost || 40.77);
            setValue('mpunitcube', MpinterfaceAaforecast.mpunitcube || null);
            setValue('mpunitprice', MpinterfaceAaforecast.mpunitprice || null);
            setValue('mpunitsperpallet', MpinterfaceAaforecast.mpunitsperpallet || 49);
            setValue('mpunitweight', MpinterfaceAaforecast.mpunitweight || 12.236);
            setValue('mpupccode', MpinterfaceAaforecast.mpupccode || null);
            setValue('mpvolume', MpinterfaceAaforecast.mpvolume || null);
            setValue('mpwtuom', MpinterfaceAaforecast.mpwtuom || null);
            setValue('mppalletsperunit', MpinterfaceAaforecast.mppalletsperunit || 0.0204081632653061);
            setValue('mpprimaryabcs', MpinterfaceAaforecast.mpprimaryabcs || null);
            setValue('mpfd40itemsalesdivision', MpinterfaceAaforecast.mpfd40itemsalesdivision || null);
            setValue('mpsalesrepuserid', MpinterfaceAaforecast.mpsalesrepuserid || null);
            setValue('dataareaid', MpinterfaceAaforecast.dataareaid || "10");
        }
    }, [MpinterfaceAaforecast, setType, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/MpinterfaceAaforecast');
    };

    return (
        <Container>
            <BackButton />
            <h1>Update {location.state?.text}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rec ID"
                            fullWidth
                            margin="normal"
                            type="number"
                            disabled
                        />
                    )}
                />
                <Controller
                    name="createddatetime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Datetime"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
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
                    name="tableid"
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
                    name="mpaaitemlvl1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP AA Item Level 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpaaotherattribute"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP AA Other Attribute"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpaapyramid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP AA Pyramid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpalt1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Alt 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpalt2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Alt 2"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpalternateabc1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Alternate ABC 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpalternateabc3"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Alternate ABC 3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcasequantity"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Case Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpconvfactor"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Conv Factor"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpconvoption"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Conv Option"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcubeuom"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Cube UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcustextnumber"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Cust Ext Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpdescription"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpffactor"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP F Factor"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpffence"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP F Fence"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield10"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 10"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpfield11"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 11"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield12"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 12"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield13"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 13"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield14"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 14"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield15"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 15"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield16"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 16"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield17"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 17"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield18"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 18"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield19"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 19"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield20"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 20"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield21"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 21"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield22"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 22"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield23"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 23"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield24"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 24"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield25"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 25"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield26"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 26"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield27"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 27"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield28"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 28"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield29"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 29"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield3"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield30"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 30"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield4"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 4"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield5"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 5"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield6"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 6"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfield7"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 7"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpfield8"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 8"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="mpfield9"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Field 9"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfiller"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Filler"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfkey"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP F Key"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpflevel"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP F Level"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfparam"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP F Param"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpindicator"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Indicator"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpinterfaceaalocation"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Interface AA Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpipabccode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP IPA BCC Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemlvl2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Level 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpitemlvl3"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Level 3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mplocationlvl2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Location Level 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpmodeltype"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Model Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpnextlvl"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Next Level"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpofence"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP O Fence"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpplanner"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Planner"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprodgroup"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Prod Group"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpproductgrouppyrd"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Product Group Pyrd"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpproductgrouppyro"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Product Group Pyro"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprefnum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Ref Num"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mprefnum2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Ref Num 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpsellthru"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Sell Thru"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpsku"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP SKU"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpsku2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP SKU 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpstatus"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpthemetext"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Theme Text"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptradenum"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trade Num"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptypingerror"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Typing Error"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptypingerror2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Typing Error 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpupdateid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Update ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpunitprice"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Unit Price"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpunitsperpallet"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Units Per Pallet"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpunitweight"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Unit Weight"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpupccode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP UPC Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpvolume"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Volume"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpwtuom"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP WT UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mppalletsperunit"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Pallets Per Unit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprimaryabcs"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Primary ABCs"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpfd40itemsalesdivision"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP FD40 Item Sales Division"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpsalesrepuserid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Sales Rep User ID"
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
                <Button type="submit" variant="contained" color="primary">
                    Update MpinterfaceAaforecast
                </Button>
            </form>
        </Container>
    );
}

export default UpdateMpinterfaceAaforecast;
