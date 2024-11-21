import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom'; 
const UpdateMpadjreasoncode = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpadjreasoncode = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setType('Mpadjreasoncodes');
        if (Mpadjreasoncode) {
            setValue('createddatetime', Mpadjreasoncode.createddatetime);
            setValue('mpadjreasoncode1', Mpadjreasoncode.mpadjreasoncode1);
            setValue('mpglcode', Mpadjreasoncode.mpglcode);
            setValue('mpprobatreasoncd', Mpadjreasoncode.mpprobatreasoncd);
            setValue('mpreasondesc', Mpadjreasoncode.mpreasondesc);
            setValue('dataareaid', Mpadjreasoncode.dataareaid);
            setValue('itemgroupid', Mpadjreasoncode.itemgroupid);
        }
    }, [setType, Mpadjreasoncode, setValue]);

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
                    name="mpadjreasoncode1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpadjreasoncode1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpglcode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpglcode"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprobatreasoncd"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatreasoncd"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpreasondesc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpreasondesc"
                            fullWidth
                            margin="normal"
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
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemgroupid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Itemgroupid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpadjreasoncode
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpadjreasoncode;
