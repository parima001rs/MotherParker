import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container ,FormControlLabel,Checkbox} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpi21storageunitheader = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21storageunitheader');
    }, [setType]);

    return (
        <Container>
            
            <BackButton />
            <h2>Add {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
           
        <Controller
            name="createddatetime"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Created DateTime"
                    type="datetime-local"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
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
            name="actionid"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Action ID"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="companylocation"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Company Location"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="storagelocation"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Storage Location"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="storageunit"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Storage Unit"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="storageunittype"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Storage Unit Type"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="createdby"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Created By"
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
                    label="Data Area ID"
                    fullWidth
                    margin="normal"
                />
                
                    )}
                />
                
               




                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21storageunitheader
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21storageunitheader;
