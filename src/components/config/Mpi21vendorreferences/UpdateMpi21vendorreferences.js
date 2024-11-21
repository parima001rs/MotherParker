import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpi21vendorreference = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21vendorreference = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21vendorreferences');
        if (Mpi21vendorreference) {
            setValue('createddatetime', Mpi21vendorreference.createddatetime);
            setValue('companyid', Mpi21vendorreference.companyid);
            setValue('i21vendorref', Mpi21vendorreference.i21vendorref);
            setValue('paymmode', Mpi21vendorreference.paymmode);
            setValue('vendaccount', Mpi21vendorreference.vendaccount);
            setValue('vendname', Mpi21vendorreference.vendname);
            setValue('vendorpaymexportexclude', Mpi21vendorreference.vendorpaymexportexclude);
        }
    }, [setType, Mpi21vendorreference, setValue]);

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
                    name="companyid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Companyid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="i21vendorref"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="I21vendorref"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="paymmode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Paymmode"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendaccount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendaccount"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendname"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendorpaymexportexclude"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendorpaymexportexclude"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21vendorreference
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21vendorreference;
