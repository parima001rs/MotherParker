import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinforPlanProdOnDemandConfig = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforPlanProdOnDemandConfig = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MpinforPlanProdOnDemandConfigs');
        if (MpinforPlanProdOnDemandConfig) {
            setValue('recid', MpinforPlanProdOnDemandConfig.recid);
            setValue('createddatetime', MpinforPlanProdOnDemandConfig.createddatetime);
          
            setValue('dataareaid', MpinforPlanProdOnDemandConfig.dataareaid); // Set the site
            setValue('interface', MpinforPlanProdOnDemandConfig.interface);

            setValue('site', MpinforPlanProdOnDemandConfig.site);
          
            setValue('lastRun', MpinforPlanProdOnDemandConfig.lastRun); // Set the site
            setValue('readyForTransfer', MpinforPlanProdOnDemandConfig.readyForTransfer);
             // Set the warehouse
             // Set the warehouse
        


          
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, MpinforPlanProdOnDemandConfig, setValue, navigate]);

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
                    name="lastRun"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="LastRun"
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
                    name="readyForTransfer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ReadyForTransfer"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update MpinforPlanProdOnDemandConfig
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforPlanProdOnDemandConfig;
