import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import "./payment.css";
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isCash, setIsCash] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBackMessage, setShowBackMessage] = useState(false); // State to control back button message
  const navigate = useNavigate();

  const handleCardTypeChange = (event) => {
    setIsCash(event.target.value === "cash");
  };

  const handleFormSubmit = (_values) => {
    // Simulate payment processing (replace with actual payment gateway API call)
    setLoading(true);
    setShowBackMessage(true); // Show message to not press back button
    setTimeout(() => {
      // Redirect to success page
      setLoading(false);
      setShowBackMessage(false); // Hide message after loading completes
      navigate("/payment-success");
    }, 7000); // simulate 7-second payment processing time
  };

  // Example transaction data
  const transactionData = [
    { id: 1, Transctionid: '1005678789', date: '2024-06-01', amount: 34700, cardType: 'Visa', status: 'Success' },
    { id: 2, Transctionid: '100564591', date: '2024-06-02', amount: 278900, cardType: 'MasterCard', status: 'Pending' },
    { id: 3, Transctionid: '100565691', date: '2024-06-03', amount: 15850, cardType: 'Amex', status: 'Failed' },
    { id: 4, Transctionid: '100567891', date: '2024-06-07', amount: 150000, cardType: 'Credit Card', status: 'Failed' },
    // Add more transactions as needed
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Transctionid', headerName: 'Transction Id', width: 150 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { field: 'cardType', headerName: 'Card Type', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
  ];

  const initialValues = {
    cardType: "",
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: "",
    amount: "", // added missing amount field to initialValues
  };

  const checkoutSchema = yup.object().shape({
    cardType: yup.string().required("required"),
    name: yup.string().when('cardType', {
      is: (value) => value !== 'cash',
      then: yup.string().required("required"),
      otherwise: yup.string().notRequired(),
    }),
    number: yup.string().when('cardType', {
      is: (value) => value !== 'cash',
      then: yup.string().matches(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:[0-9]{3})?|(?:2131|1800|35\d{3})\d{11})$/,
        "Credit Card number is not valid"
      ).required("required"),
      otherwise: yup.string().notRequired(),
    }),
    month: yup.string().when('cardType', {
      is: (value) => value !== 'cash',
      then: yup.string().required("required"),
      otherwise: yup.string().notRequired(),
    }),
    year: yup.string().when('cardType', {
      is: (value) => value !== 'cash',
      then: yup.string().required("required"),
      otherwise: yup.string().notRequired(),
    }),
    cvv: yup.string().when('cardType', {
      is: (value) => value !== 'cash',
      then: yup.string().required("required"),
      otherwise: yup.string().notRequired(),
    }),
    amount: yup.string().required("required"),
  });

  return (
    <Box m="20px">
      <Header title="Payment" subtitle="Get instant savings by paying now" />

      {loading ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          bgcolor="rgba(255, 255, 255, 0.8)"
          zIndex={9999}
        >
          <CircularProgress />
          {showBackMessage && (
            <Typography variant="body1" mt={2} color={'black'}>
              Please do not press the back button or leave this page while your payment is processing.
            </Typography>
          )}
        </Box>
      ) : (
        <>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box display="flex" gap="20px">
                  <Box
                    flex="1"
                    display="grid"
                    gap="20px"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    sx={{
                      "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                    }}
                  >
                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ gridColumn: "span 2" }}
                    >
                      <InputLabel>Choose Card</InputLabel>
                      <Select
                        label="Choose Card"
                        name="cardType"
                        value={values.cardType}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          handleCardTypeChange(e);
                        }}
                        error={!!touched.cardType && !!errors.cardType}
                      >
                        <MenuItem value="cash">Cash</MenuItem>
                        <MenuItem value="visa">Visa</MenuItem>
                        <MenuItem value="mastercard">MasterCard</MenuItem>
                        <MenuItem value="amex">American Express</MenuItem>
                      </Select>
                      {touched.cardType && errors.cardType && (
                        <div style={{ color: "red" }}>{errors.cardType}</div>
                      )}
                    </FormControl>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Name On Card"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      sx={{ gridColumn: "span 1" }}
                      disabled={isCash}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Card Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.number}
                      name="number"
                      error={!!touched.number && !!errors.number}
                      helperText={touched.number && errors.number}
                      sx={{ gridColumn: "span 1" }}
                      disabled={isCash}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Exp Month"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.month}
                      name="month"
                      error={!!touched.month && !!errors.month}
                      helperText={touched.month && errors.month}
                      sx={{ gridColumn: "span 1" }}
                      disabled={isCash}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Exp Year"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.year}
                      name="year"
                      error={!!touched.year && !!errors.year}
                      helperText={touched.year && errors.year}
                      sx={{ gridColumn: "span 1" }}
                      disabled={isCash}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Cvv Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.cvv}
                      name="cvv"
                      error={!!touched.cvv && !!errors.cvv}
                      helperText={touched.cvv && errors.cvv}
                      sx={{ gridColumn: "span 1" }}
                      disabled={isCash}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="number"
                      label="Amount Payable"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.amount}
                      name="amount"
                      error={!!touched.amount && !!errors.amount}
                      helperText={touched.amount && errors.amount}
                      sx={{ gridColumn: "span 1" }}
                    />
                  </Box>
                  <Box
                    p="20px"
                    component={Paper}
                    elevation={3}
                    sx={{
                      width: "300px",
                      backgroundColor: "#141B2D",
                    }}
                  >
                    <Typography variant="h4" gutterBottom className="status">
                      Account Status
                    </Typography>
                    <Typography variant="body1">
                      <strong>Card Type:</strong>&nbsp;&nbsp; {values.cardType}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Name On Card:</strong>&nbsp;&nbsp; {values.name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Card Number:</strong> &nbsp;&nbsp;{values.number}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Hospital:</strong>&nbsp;&nbsp; Medicare
                    </Typography>
                    <Typography variant="body1">
                      <strong>Payable Amount:</strong> &nbsp;&nbsp;₹{values.amount}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Proceed
                  </Button>
                </Box>
                {showBackMessage && (
                  <Box mt={2} textAlign="center">
                    <Typography variant="body1" color="black">
                      Please do not press the back button or leave this page while your payment is processing.
                    </Typography>
                  </Box>
                )}
              </form>
            )}
          </Formik>

          <Box mt="40px">
            <Typography variant="h5" gutterBottom>
              Transaction History
            </Typography>
            <Box component={Paper} elevation={3} sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={transactionData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                sx={{
                  '.MuiDataGrid-columnHeaders': {
                    backgroundColor: '#141B2D',
                    color: '#fff',
                    fontSize: '16px',
                  },
                  '.MuiDataGrid-row': {
                    '&:nth-of-type(odd)': {
                      backgroundColor: '#293040',
                    },
                    '&:nth-of-type(even)': {
                      backgroundColor: '#e0e0e0',
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Payments;
