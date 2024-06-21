import {
    Box,
    Button,
    TextField,
    MenuItem,
    Card,
    CardContent,
    CardMedia,
    } from "@mui/material";
    import { useNavigate } from 'react-router-dom';
  import { Formik } from "formik";
  import * as yup from "yup";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import Header from "../../components/Header";
  import { useState, useEffect } from "react";
  import Swal from "sweetalert2";
  
  const AppointmentForm = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const imageUrls = [
      "/assets/surgeon1.jpg",
      "/assets/doctor.jpg",
      "/assets/surgeon.jpg",
      // Add more image URLs here
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 4000); // Change image every 4 seconds
      return () => clearInterval(interval);
    }, [imageUrls.length]);
  
    const handleFormSubmit = (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      // Save appointment data
      setAppointments([...appointments, values]);
  
      // Show Swal message
      Swal.fire({
        title: "Appointment Booked Successfully!",
        text: `Your appointment has been booked with ${values.doctorName} on ${values.appointmentDate} at ${values.appointmentTime}`,
        icon: "success",
        timer: 9000, // 7 seconds
        showConfirmButton: false,
      }).then(() => {
        // Redirect to a different page
        navigate("/appoinment");
      });
  
      resetForm();
    };
  
    // Define dropdown options
    const patientCategoryOptions = ["IPD", "OPD"];
    const modalityOptions = [
      "Oncologist",
      "Cardiologist",
      "Endocrinologist",
      "Neurologist",
      "Pediatrician",
      "Psychiatrist",
      "Dermatologist",
      "Gastroenterologist",
      "Obstetrics and gynaecology",
      "General practitioner",
    ];
    const doctorOptions = [
      "Dr. Devi Shetty",
      "Dr. Naresh Trehan",
      "Dr. Prathap C. Reddy",
      "Dr. A. G. K. Gokhale",
      "Dr. A. Lakshmanaswami Mudaliar",
      "Dr. Abraham Verghese",
      "Dr. Acacio Gabriel Viegas",
      "Dr. Aditi Gowitrikar",
    ];
  
    return (
      <Box m="20px">
        <Header title="BOOK APPOINTMENT" subtitle="Schedule a Doctor's Visit" />
  
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={appointmentSchema}
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
                display="flex"
                flexDirection={isNonMobile ? "row" : "column"}
                gap="20px"
              >
                <Card sx={{ flex: 1, height: "500px" }}>
                  {" "}
                  {/* Set a fixed height */}
                  <CardMedia
                    component="img"
                    image={imageUrls[currentImageIndex]} // Display current image
                    alt="Profile Picture"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Card>
                <Card sx={{ flex: 1, height: "500px" }}>
                  {" "}
                  {/* Set a fixed height */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                        paddingLeft: isNonMobile ? "20px" : "0",
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Patient Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.patientName}
                        name="patientName"
                        error={!!touched.patientName && !!errors.patientName}
                        helperText={touched.patientName && errors.patientName}
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
                        select
                        label="Patient Category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.patientCategory}
                        name="patientCategory"
                        error={
                          !!touched.patientCategory && !!errors.patientCategory
                        }
                        helperText={
                          touched.patientCategory && errors.patientCategory
                        }
                        sx={{ gridColumn: "span 2" }}
                      >
                        {patientCategoryOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        fullWidth
                        variant="filled"
                        select
                        label="Department"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.department}
                        name="department"
                        error={!!touched.department && !!errors.department}
                        helperText={touched.department && errors.department}
                        sx={{ gridColumn: "span 2" }}
                      >
                        {modalityOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        fullWidth
                        variant="filled"
                        select
                        label="Doctor Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.doctorName}
                        name="doctorName"
                        error={!!touched.doctorName && !!errors.doctorName}
                        helperText={touched.doctorName && errors.doctorName}
                        sx={{ gridColumn: "span 2" }}
                      >
                        {doctorOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        fullWidth
                        variant="filled"
                        type="date"
                        label="Appointment Date"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.appointmentDate}
                        name="appointmentDate"
                        error={
                          !!touched.appointmentDate && !!errors.appointmentDate
                        }
                        helperText={
                          touched.appointmentDate && errors.appointmentDate
                        }
                        sx={{ gridColumn: "span 2" }}
                        InputLabelProps={{ shrink: true }} // Fixes label issue with date type
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="time"
                        label="Appointment Time"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.appointmentTime}
                        name="appointmentTime"
                        error={
                          !!touched.appointmentTime && !!errors.appointmentTime
                        }
                        helperText={
                          touched.appointmentTime && errors.appointmentTime
                        }
                        sx={{ gridColumn: "span 2" }}
                        InputLabelProps={{ shrink: true }} // Fixes label issue with time type
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Reason for Visit"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.reasonForVisit}
                        name="reasonForVisit"
                        error={
                          !!touched.reasonForVisit && !!errors.reasonForVisit
                        }
                        helperText={
                          touched.reasonForVisit && errors.reasonForVisit
                        }
                        sx={{ gridColumn: "span 4" }}
                      />
                    </Box>
                  </CardContent>
                  <Box display="flex" justifyContent="end" mt="20px" p="16px">
                    <Button type="submit" color="secondary" variant="contained">
                      Book Appointment
                    </Button>
                  </Box>
                </Card>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  };
  
  const appointmentSchema = yup.object().shape({
    patientName: yup.string().required("Required"),
    age: yup.string().required("Required"),
    patientCategory: yup.string().required("Required"),
    department: yup.string().required("Required"),
    doctorName: yup.string().required("Required"),
    appointmentDate: yup.date().required("Required"),
    appointmentTime: yup.string().required("Required"),
    reasonForVisit: yup.string().required("Required"),
  });
  
  const initialValues = {
    patientName: "",
    age: "",
    patientCategory: "",
    department: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
    reasonForVisit: "",
  };
  
  export default AppointmentForm;
  