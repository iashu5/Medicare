import React from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  IconButton,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Swal from "sweetalert2"; // Import SweetAlert

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);

    // Example Swal alert with a custom message
    Swal.fire({
      title: `Hello ${values.firstName} ${values.lastName}`,
      html: `Your account will be active within 24 hours.`,
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        resetForm(); // Reset form after confirmation
      }
    });
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
          setFieldValue,
          resetForm, // Formik's resetForm function
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns={isNonMobile ? "repeat(4, 1fr)" : "1fr"}
            >
              <TextField
                fullWidth
                select
                variant="filled"
                label="User Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userType}
                name="userType"
                error={!!touched.userType && !!errors.userType}
                helperText={touched.userType && errors.userType}
              >
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="nurse">Nurse</MenuItem>
                <MenuItem value="worker">Worker</MenuItem>
              </TextField>

              {values.userType === "doctor" && (
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Specialization"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.specialization}
                  name="specialization"
                  error={!!touched.specialization && !!errors.specialization}
                  helperText={touched.specialization && errors.specialization}
                />
              )}
              {values.userType === "nurse" && (
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Department"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.department}
                  name="department"
                  error={!!touched.department && !!errors.department}
                  helperText={touched.department && errors.department}
                />
              )}
              {values.userType === "worker" && (
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Role"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.role}
                  name="role"
                  error={!!touched.role && !!errors.role}
                  helperText={touched.role && errors.role}
                />
              )}

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                variant="filled"
                type="tel"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date of Birth"
                InputLabelProps={{ shrink: true }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dob}
                name="dob"
                error={!!touched.dob && !!errors.dob}
                helperText={touched.dob && errors.dob}
              />
              <FormControl variant="filled" fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.gender && !!errors.gender}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {touched.gender && errors.gender && (
                  <Typography color="error">{errors.gender}</Typography>
                )}
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="State/Province"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name="state"
                error={!!touched.state && !!errors.state}
                helperText={touched.state && errors.state}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ZIP Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zip}
                name="zip"
                error={!!touched.zip && !!errors.zip}
                helperText={touched.zip && errors.zip}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />

              <Box gridColumn={isNonMobile ? "span 4" : "span 1"}>
                <Typography variant="subtitle1" gutterBottom>
                  Profile Picture
                </Typography>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="profile-picture"
                  type="file"
                  onChange={(event) => {
                    setFieldValue(
                      "profilePicture",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                <label htmlFor="profile-picture">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{ color: "#4CCEAC" }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                {values.profilePicture && (
                  <Typography variant="body2">
                    {values.profilePicture.name}
                  </Typography>
                )}
              </Box>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Notes"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.notes}
                name="notes"
                multiline
                rows={4}
                error={!!touched.notes && !!errors.notes}
                helperText={touched.notes && errors.notes}
                gridColumn={isNonMobile ? "span 4" : "span 1"}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address: yup.string().required("Required"),

  userType: yup.string().required("Required"),
  specialization: yup.string().when("userType", {
    is: "doctor",
    then: yup.string().required("Required"),
  }),
  department: yup.string().when("userType", {
    is: "nurse",
    then: yup.string().required("Required"),
  }),
  role: yup.string().when("userType", {
    is: "worker",
    then: yup.string().required("Required"),
  }),
  dob: yup.date().required("Required"),
  gender: yup.string().required("Required"),
  country: yup.string().required("Required"),
  state: yup.string().required("Required"),
  city: yup.string().required("Required"),
  zip: yup.string().required("Required"),
  profilePicture: yup.mixed().required("Required"),
  notes: yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",

  userType: "",
  specialization: "",
  department: "",
  role: "",
  dob: "",
  gender: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  profilePicture: null,
  notes: "",
};

export default Form;
