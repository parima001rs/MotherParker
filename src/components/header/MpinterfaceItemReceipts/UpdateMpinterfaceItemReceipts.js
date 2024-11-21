import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinterfaceItemReceipt = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceItemReceipt = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceItemReceipts');
        if (MpinterfaceItemReceipt) {
            setValue('createddatetime', MpinterfaceItemReceipt.createddatetime);
            setValue('interface', MpinterfaceItemReceipt.interface);
            setValue('tableid', MpinterfaceItemReceipt.tableid);
            setValue('batchnum', MpinterfaceItemReceipt.batchnum);
            setValue('processed', MpinterfaceItemReceipt.processed);
            setValue('siteId', MpinterfaceItemReceipt.siteId);
            setValue('mptobagmarks', MpinterfaceItemReceipt.mptobagmarks);
            setValue('mptobatchnumber', MpinterfaceItemReceipt.mptobatchnumber);
            setValue('mptocontainerno', MpinterfaceItemReceipt.mptocontainerno);
            setValue('mptocontractno', MpinterfaceItemReceipt.mptocontractno);
            setValue('mptodata13', MpinterfaceItemReceipt.mptodata13);
            setValue('mptodata2', MpinterfaceItemReceipt.mptodata2);
            setValue('mptodata3', MpinterfaceItemReceipt.mptodata3);
            setValue('mptodestination', MpinterfaceItemReceipt.mptodestination);
            setValue('mptoitemnumber', MpinterfaceItemReceipt.mptoitemnumber);
            setValue('mptoproexportid', MpinterfaceItemReceipt.mptoproexportid);
            setValue('mptopurchnumber', MpinterfaceItemReceipt.mptopurchnumber);
            setValue('mptoquantity', MpinterfaceItemReceipt.mptoquantity);
            setValue('mptorecorddate', MpinterfaceItemReceipt.mptorecorddate);
            setValue('mptotransferorderno', MpinterfaceItemReceipt.mptotransferorderno);
            setValue('mptotransferred', MpinterfaceItemReceipt.mptotransferred);
            setValue('mptozone', MpinterfaceItemReceipt.mptozone);
            setValue('dataareaid', MpinterfaceItemReceipt.dataareaid);


        }
    }, [setType, MpinterfaceItemReceipt, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />

                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
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
                    name="tableid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="batchnum"
                    control={control}
                    defaultValue=""
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
                    defaultValue={false}
                    render={({ field }) => (
                        <FormControlLabel
                            control={<Checkbox {...field} />}
                            label="Processed"
                        />
                    )}
                />

                <Controller
                    name="siteId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptobagmarks"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Bag Marks"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptobatchnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptocontainerno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Container No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptocontractno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Contract No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptodata13"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Data 13"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptodata2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Data 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptodata3"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Data 3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptodestination"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Destination"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptoitemnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Item Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptoproexportid"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Pro Export ID"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mptopurchnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Purch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptoquantity"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Quantity"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mptorecorddate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Record Date"
                            fullWidth
                            margin="normal"
                            type="date"
                        />
                    )}
                />

                <Controller
                    name="mptotransferorderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Transfer Order No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mptotransferred"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Transferred"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mptozone"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP To Zone"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="dataareaid"
                    control={control}
                    defaultValue=""
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
                    Update MpinterfaceItemReceipt
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceItemReceipt;
