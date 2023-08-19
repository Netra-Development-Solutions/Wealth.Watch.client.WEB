import * as React from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import Button from '@mui/material/Button';

export default function CreditCardForm({ bankAccount }) {

    const yupValidationSchema = yup.object({
        accountNumber: yup.string().matches(/^\d{12}$/, 'Must be a valid account number'),
        accountName: yup.string().required('Required'),
        accountHolderName: yup.string(),
        bankName: yup.string(),
        ifscCode: yup.string().matches(/^[A-Za-z]{4}\d{7}$/, 'Must be a valid IFSC code'),
        balance: yup.number().positive().integer(),
    });

    const formik = useFormik({
        initialValues: {
            accountNumber: bankAccount?.accountNumber || '',
            accountName: bankAccount?.accountName || '',
            accountHolderName: bankAccount?.accountHolderName || '',
            bankName: bankAccount?.bankName || '',
            ifscCode: bankAccount?.ifscCode || '',
            balance: bankAccount?.balance || 0,
        },
        validationSchema: yupValidationSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
        }
    });

    const { handleSubmit, handleChange, values, errors, touched, isSubmitting } = formik;

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.accountNumber && !!errors.accountNumber}
                            fullWidth
                            helperText={errors.accountNumber}
                            id="accountNumber"
                            label="Account Number"
                            name="accountNumber"
                            onChange={handleChange}
                            value={values.accountNumber}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.accountName && !!errors.accountName}
                            fullWidth
                            helperText={errors.accountName}
                            id="accountName"
                            label="Account Name"
                            name="accountName"
                            onChange={handleChange}
                            required
                            value={values.accountName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.accountHolderName && !!errors.accountHolderName}
                            fullWidth
                            helperText={errors.accountHolderName}
                            id="accountHolderName"
                            label="Account Holder Name"
                            name="accountHolderName"
                            onChange={handleChange}
                            value={values.accountHolderName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.bankName && !!errors.bankName}
                            fullWidth
                            helperText={errors.bankName}
                            id="bankName"
                            label="Bank Name"
                            name="bankName"
                            onChange={handleChange}
                            value={values.bankName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.ifscCode && !!errors.ifscCode}
                            fullWidth
                            helperText={errors.ifscCode}
                            id="ifscCode"
                            label="IFSC Code"
                            name="ifscCode"
                            onChange={handleChange}
                            value={values.ifscCode}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={touched.balance && !!errors.balance}
                            fullWidth
                            helperText={errors.balance}
                            id="balance"
                            label="Balance"
                            name="balance"
                            onChange={handleChange}
                            required
                            value={values.balance}
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
};
