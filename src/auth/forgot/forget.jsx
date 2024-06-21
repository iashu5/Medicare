import React from 'react';
import { Button, CssBaseline, TextField,Typography, Container, Card, CardContent, createTheme, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'; // Add this import

const defaultTheme = createTheme();

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Your API call or password reset logic here
        Swal.fire({
          title: 'Success!',
          text: 'Password reset email sent successfully.',
          icon: 'success',
          timer: 8000, // 8 seconds
        });
        setTimeout(() => {
          window.location.href = '/'; // Redirect to home page
        }, 4000);
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send password reset email.',
          icon: 'error',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={centerStyle}>
        <CssBaseline />
        <Card sx={{ width: '400px', height: '230px' }} className="card">
          <CardContent>
            <Typography component="h1" variant="h6">
              Forgot Password
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                size="small"
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error-headline">{formik.errors.email}</div>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: '5px',
                  backgroundColor: '#04537C',
                  '&:hover': {
                    backgroundColor: '#1f618d',
                  },
                }}
              >
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;