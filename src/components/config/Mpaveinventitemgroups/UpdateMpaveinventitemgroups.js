import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpaveinventitemgroup = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpaveinventitemgroup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpaveinventitemgroups');
        if (Mpaveinventitemgroup) {
            setValue('recid', Mpaveinventitemgroup.recid);
            setValue('createddatetime', Mpaveinventitemgroup.createddatetime);
            setValue('itemgroup', Mpaveinventitemgroup.itemgroup);
            setValue('name', Mpaveinventitemgroup.name);
            setValue('avevaItemClass', Mpaveinventitemgroup.avevaItemClass);
            setValue('itemStatusCode', Mpaveinventitemgroup.itemStatusCode);
            setValue('adjustBomqtyPercentage', Mpaveinventitemgroup.adjustBomqtyPercentage);
            setValue('dataareaid', Mpaveinventitemgroup.dataareaid);
            setValue('orderLotNo', Mpaveinventitemgroup.orderLotNo);
            setValue('lotNo', Mpaveinventitemgroup.lotNo);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpaveinventitemgroup, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Update using the primary key 'recid'
        navigate('/path-to-redirect'); // Adjust the path as needed
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rec ID"
                            fullWidth
                            margin="normal"
                            disabled // Optionally disable this field
                        />
                    )}
                />

                <Controller
                    name="createddatetime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="itemgroup"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Group"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="avevaItemClass"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Class"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="itemStatusCode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="adjustBomqtyPercentage"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="BOM Qty %"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="orderLotNo"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Order Lot No"
                            fullWidth
                            margin="normal"
                          
                        />
                    )}
                />

                <Controller
                    name="lotNo"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lot No"
                            fullWidth
                            margin="normal"
                           
                        />
                    )}
                />

                <Controller
                    name="dataareaid"
                    control={control}
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
                    Update Mpaveinventitemgroup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveinventitemgroup;
