import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpprobatdmslocation = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpprobatdmslocation = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpprobatdmslocations');
        if (Mpprobatdmslocation) {
            setValue('createddatetime', Mpprobatdmslocation.createddatetime);
            setValue('createddatetime', Mpprobatdmslocation.createddatetime);
            setValue('mpprobatdmscoffeeloc', Mpprobatdmslocation.mpprobatdmscoffeeloc);
            setValue('mpprobatprodpoolid', Mpprobatdmslocation.mpprobatprodpoolid);
            setValue('mpprobatsite', Mpprobatdmslocation.mpprobatsite);
            setValue('mpprobatwarehouse', Mpprobatdmslocation.mpprobatwarehouse);
            setValue('dataareaid', Mpprobatdmslocation.dataareaid);
        }
    }, [setType, Mpprobatdmslocation, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>



                {/* <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            fullWidth
                            margin="normal"
                        />
                    )}
                /> */}

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
                    name="mpprobatdmscoffeeloc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatdmscoffeeloc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprobatprodpoolid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatprodpoolid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpprobatsite"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatsite"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatwarehouse"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpprobatwarehouse"
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
                <Button type="submit" variant="contained" color="primary">
                    Update Mpprobatdmslocation
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpprobatdmslocation;
