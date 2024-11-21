import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateInforApsitemCoverageConfig = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const InforApsitemCoverageConfig = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('InforApsitemCoverageConfigs');
        if (InforApsitemCoverageConfig) {
            setValue('recid', InforApsitemCoverageConfig.recid);
            setValue('createddatetime', InforApsitemCoverageConfig.createddatetime);
            setValue('dataareaid', InforApsitemCoverageConfig.dataareaid); // Set the site
            setValue('inventorySiteId', InforApsitemCoverageConfig.inventorySiteId); // Set the warehouse
        


          
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, InforApsitemCoverageConfig, setValue, navigate]);

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
                    name="inventorySiteId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="InventorySiteId"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

              Y

                <Button type="submit" variant="contained" color="primary">
                    Update InforApsitemCoverageConfig
                </Button>
            </form>
        </Container>
    );
};

export default UpdateInforApsitemCoverageConfig;
