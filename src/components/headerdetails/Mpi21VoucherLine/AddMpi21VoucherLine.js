import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMpi21VoucherLine = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21VoucherLine');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21VoucherLine</h2>
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

            <Controller
                name="parentrecid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Parent Recid"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="contractNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Contract No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sequenceNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sequence No"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpPoNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP PO Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpPolineNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP PO Line No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="workOrderNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Work Order No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpShopOrderNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP Shop Order No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpServicePONumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP Service PO Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="i21InventoryReceiptNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="I21 Inventory Receipt Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="quantity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Quantity"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="quantityuom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Quantity UOM"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="currency"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Currency"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="cost"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cost"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="costUom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cost UOM"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="discountPercentage"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Discount Percentage"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="subTotal"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sub Total"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="lineTotal"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Line Total"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpservicepolineno"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP Service PO Line No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="transactionSequenceNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transaction Sequence No"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="tax"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Tax"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21VoucherLine
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21VoucherLine;
