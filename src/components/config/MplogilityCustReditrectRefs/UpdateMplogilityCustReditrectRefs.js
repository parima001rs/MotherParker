
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMplogilityCustReditrectRefs = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MplogilityCustReditrectRefs = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('MplogilityCustReditrectRefs');
        if (MplogilityCustReditrectRefs) {
            setValue('recid', MplogilityCustReditrectRefs.recid);
            setValue('createddatetime', MplogilityCustReditrectRefs.createddatetime);
            setValue('mpcustAccount', MplogilityCustReditrectRefs.mpcustAccount);
            setValue('mpwarehouse', MplogilityCustReditrectRefs.mpwarehouse);

        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, MplogilityCustReditrectRefs, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
                    name="mpcustAccount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MpcustAccount"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpwarehouse"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpwarehouse"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Update MplogilityCustReditrectRefs
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMplogilityCustReditrectRefs;
