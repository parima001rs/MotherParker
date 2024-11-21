import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';






const UpdateMpi21subwipexcludeitem = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21subwipexcludeitem = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21subwipexcludeitems');
        if (Mpi21subwipexcludeitem) {
            setValue('createddatetime', Mpi21subwipexcludeitem.createddatetime);
            setValue('itemid', Mpi21subwipexcludeitem.itemid);
            setValue('mpi21subwipconsnumseq', Mpi21subwipexcludeitem.mpi21subwipconsnumseq);
            setValue('dataareaid', Mpi21subwipexcludeitem.dataareaid);

        }
    }, [setType, Mpi21subwipexcludeitem, setValue]);

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
                    name="itemid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Itemid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpi21subwipconsnumseq"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21subwipconsnumseq"
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
                    Update Mpi21subwipexcludeitem
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21subwipexcludeitem;
