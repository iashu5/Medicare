import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    console.log(values);
    Swal.fire({
      title: "Payment Information",
      text: "Please proceed to payment",
      icon: "info",
      confirmButtonText: "Proceed to Payment",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to payment component
        navigate("/Test"); // Replace with your payment component URL
      }
    });
  };

  return (
    <Box m="20px">
      <Header title="Registration" subtitle="Enter New Patient Details" />

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
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(8, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
              }}
            >
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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sex"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sex}
                name="sex"
                error={!!touched.sex && !!errors.sex}
                helperText={touched.sex && errors.sex}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Aadhaar Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.uidai}
                name="uidai"
                error={!!touched.uidai && !!errors.uidai}
                helperText={touched.uidai && errors.uidai}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="State"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name="state"
                error={!!touched.state && !!errors.state}
                helperText={touched.state && errors.state}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="District"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.district}
                name="district"
                error={!!touched.district && !!errors.district}
                helperText={touched.district && errors.district}
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Referring Physician Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.physician}
                name="physician"
                error={!!touched.physician && !!errors.physician}
                helperText={touched.physician && errors.physician}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>

            <Box mt="20px">
              <Header subtitle="Emergency Contact" />
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(6, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 6" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Emergency Contact Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactName}
                  name="emergencyContactName"
                  error={
                    !!touched.emergencyContactName &&
                    !!errors.emergencyContactName
                  }
                  helperText={
                    touched.emergencyContactName && errors.emergencyContactName
                  }
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Emergency Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emergencyContactNumber}
                  name="emergencyContactNumber"
                  error={
                    !!touched.emergencyContactNumber &&
                    !!errors.emergencyContactNumber
                  }
                  helperText={
                    touched.emergencyContactNumber &&
                    errors.emergencyContactNumber
                  }
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Relationship"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.relationship}
                  name="relationship"
                  error={!!touched.relationship && !!errors.relationship}
                  helperText={touched.relationship && errors.relationship}
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
            </Box>
            <Box mt="20px">
              <Header subtitle="Insurance Information" />
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(6, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 6" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Insurance Provider"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.insuranceprovider}
                  name="insuranceprovider"
                  error={
                    !!touched.insuranceprovider && !!errors.insuranceprovider
                  }
                  helperText={
                    touched.insuranceprovider && errors.insuranceprovider
                  }
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Policy Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.policynumber}
                  name="policynumber"
                  error={!!touched.policynumber && !!errors.policynumber}
                  helperText={touched.policynumber && errors.policynumber}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Group Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.groupnumber}
                  name="groupnumber"
                  error={!!touched.groupnumber && !!errors.groupnumber}
                  helperText={touched.groupnumber && errors.groupnumber}
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit Details
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
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  // age: yup.string().required("required"),
  sex: yup.string().required("required"),
  // email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  state: yup.string().required("required"),
  city: yup.string().required("required"),
  address1: yup.string().required("required"),
  // address2: yup.string().required("required"),
  physician: yup.string().required("required"),
  emergencyContactName: yup.string().required("required"),
  emergencyContactNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  relationship: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
  sex: "",
  email: "",
  contact: "",
  state: "",
  city: "",
  address1: "",
  address2: "",
  physician: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  relationship: "",
  insuranceprovider: "",
  policynumber: "",
  groupnumber: "",
};

export default Registration;
