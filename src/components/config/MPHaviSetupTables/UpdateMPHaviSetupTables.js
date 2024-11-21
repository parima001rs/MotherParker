import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMPHaviSetupTable = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const MPHaviSetupTable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MPHaviSetupTables');
        if (MPHaviSetupTable) {
            setValue('recid', MPHaviSetupTable.recid);
            setValue('createdDatetime', MPHaviSetupTable.createdDatetime);
            setValue('dataAreaId', MPHaviSetupTable.dataAreaId);
            setValue('customer', MPHaviSetupTable.customer);
            setValue('itmBrand1', MPHaviSetupTable.itmBrand1);
            setValue('itmBrand2', MPHaviSetupTable.itmBrand2);
            setValue('slsDivision1', MPHaviSetupTable.slsDivision1);
            setValue('slsDivision2', MPHaviSetupTable.slsDivision2);
            setValue('itemStatus', MPHaviSetupTable.itemStatus);

        } else {
            console.error('Entity not found');
        }
    }, [setType, MPHaviSetupTable, setValue]);

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
                    name="createdDatetime"
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
                    name="dataAreaId"
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
                <Controller
                    name="customer"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Customer"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itmBrand1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ItmBrand1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itmBrand2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ItmBrand2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="slsDivision1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="SlsDivision1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="slsDivision2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="SlsDivision2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemStatus"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ItemStatus"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
              
                <Button type="submit" variant="contained" color="primary">
                    Update MPHaviSetupTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPHaviSetupTable;
