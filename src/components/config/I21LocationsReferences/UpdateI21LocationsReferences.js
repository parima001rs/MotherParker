import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateI21LocationsReference = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const I21LocationsReference = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('I21LocationsReferences');
        if (I21LocationsReference) {
            setValue('recid', I21LocationsReference.recid);
            setValue('createddatetime', I21LocationsReference.createddatetime);
            setValue('site', I21LocationsReference.site); // Set the site
            setValue('warehouse', I21LocationsReference.warehouse); // Set the warehouse
            setValue('location', I21LocationsReference.location); // Set the location
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, I21LocationsReference, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        // navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                    name="recid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                

                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Datetime"
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
                    name="site"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Site"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="warehouse"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Warehouse"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update I21LocationsReference
                </Button>
            </form>
        </Container>
    );
};

export default UpdateI21LocationsReference;
