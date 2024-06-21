import {
  Box,
  Button,
  MenuItem,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const testPrices = {
  "Complete Blood Count": 500,
  "Lipid Panel": 450,
  "Thyroid Panel": 600,
  "Basic Metabolic Panel": 445,
  "Comprehensive Metabolic Panel": 760,
  "Liver Function Test": 545,
  "Kidney Function Test": 570,
  "Glucose Test": 395,
  "Urinalysis": 300,
  "Stool Test": 430,
};

const cityNames = [
  "Jamshedpur",
  "Pune",
  "Chinchwad",
  "Pimpri",
  "Sasaram",
  "Samastipur",
  "Ranchi",
  "Kolkata",
  "Patna",
  "Dhanbad",
  "Noida",
  "Delhi",
  "Varanasi",
  "Banglore",
  "Chandigarh",
  "Rohtak",
  "Lucknow",
  "Faridabad",
  "Ghaziabad",
  "Panvel",
];

const Medical = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [price, setPrice] = useState("");
  const [testData, setTestData] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [prescriptionFileName, setPrescriptionFileName] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate(); // Create navigate object

  const handleFormSubmit = (values, { resetForm }) => {
    setTestData([...testData, values]);
    resetForm();
  };

  const handleTestNameChange = (event, setFieldValue) => {
    const testName = event.target.value;
    setFieldValue("testName", testName);
    setPrice(testPrices[testName]);
    setFieldValue("testPrice", testPrices[testName]);
  };

  const handleDelete = (index) => {
    const newData = [...testData];
    newData.splice(index, 1);
    setTestData(newData);
  };

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setPrescriptionFileName(file.name);
      setFieldValue("prescription", file);
    }
  };

  const handleProceed = () => {
    setLoading(true); // Set loading to true
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
      navigate("/payment"); // Navigate to payment page
    }, 3000); // 3 seconds delay
  };

  return (
    <Box m="20px">
      <Header title="Laboratory Tests" subtitle="Choose your own test" />

      {loading ? ( // Conditionally render loading screen
        <Box
          display="flex"
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
              setFieldValue,
              resetForm,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                  }}
                >
                  <FormControl
                    variant="filled"
                    fullWidth
                    sx={{ gridColumn: "span 1" }}
                  >
                    <InputLabel id="test-name-label">Test Name</InputLabel>
                    <Select
                      labelId="test-name-label"
                      id="testName"
                      name="testName"
                      value={values.testName}
                      onChange={(e) => handleTestNameChange(e, setFieldValue)}
                      error={!!touched.testName && !!errors.testName}
                    >
                      {Object.keys(testPrices).map((test) => (
                        <MenuItem key={test} value={test}>
                          {test}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="filled"
                    fullWidth
                    sx={{ gridColumn: "span 1" }}
                  >
                    <InputLabel id="test-center-label">Test Center</InputLabel>
                    <Select
                      labelId="test-center-label"
                      id="testCenter"
                      name="testCenter"
                      value={values.testCenter}
                      onChange={handleChange}
                      error={!!touched.testCenter && !!errors.testCenter}
                    >
                      {cityNames.map((city) => (
                        <MenuItem key={city} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    label="Test Date"
                    InputLabelProps={{ shrink: true }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.testDate}
                    name="testDate"
                    error={!!touched.testDate && !!errors.testDate}
                    helperText={touched.testDate && errors.testDate}
                    sx={{ gridColumn: "span 1" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Test Price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={price}
                    name="testPrice"
                    error={!!touched.testPrice && !!errors.testPrice}
                    helperText={touched.testPrice && errors.testPrice}
                    sx={{ gridColumn: "span 1" }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Doctor Reference"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.doctorReference}
                    name="doctorReference"
                    error={!!touched.doctorReference && !!errors.doctorReference}
                    helperText={touched.doctorReference && errors.doctorReference}
                    sx={{ gridColumn: "span 1" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Remarks"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.remarks}
                    name="remarks"
                    error={!!touched.remarks && !!errors.remarks}
                    helperText={touched.remarks && errors.remarks}
                    sx={{ gridColumn: "span 1" }}
                  />
                  <input
                    accept="image/*,.pdf"
                    id="prescription-upload"
                    multiple
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleFileChange(event, setFieldValue)}
                  />
                  <label htmlFor="prescription-upload">
                    <Button
                      variant="outlined"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                      sx={{
                        backgroundColor: "#2196f3",
                        color: "white",
                        "&:hover": { backgroundColor: "#1976d2" },
                      }}
                    >
                      {prescriptionFileName
                        ? prescriptionFileName
                        : "Upload Prescription"}
                    </Button>
                  </label>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Save
                  </Button>
                </Box>
              </form>
            )}
          </Formik>

          <Box mt="20px">
            <Typography variant="h6">Saved Tests</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Test Name</TableCell>
                    <TableCell>Test Center</TableCell>
                    <TableCell>Test Date</TableCell>
                    <TableCell>Test Price</TableCell>
                    <TableCell>Doctor Reference</TableCell>
                    <TableCell>Remarks</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testData.map((test, index) => (
                    <TableRow
                      key={index}
                      onClick={() => setSelectedTest(test)}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell>{test.testName}</TableCell>
                      <TableCell>{test.testCenter}</TableCell>
                      <TableCell>{test.testDate}</TableCell>
                      <TableCell>{test.testPrice}</TableCell>
                      <TableCell>{test.doctorReference}</TableCell>
                      <TableCell>{test.remarks}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProceed(); // Call handleProceed function
                          }}
                        >
                          Proceed
                        </Button>
                        <IconButton
                          color="secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(index);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {selectedTest && (
            <Box mt="20px">
              <Typography variant="h6">Selected Test</Typography>
              <Box p="10px" border="1px solid grey" borderRadius="5px">
                <Typography variant="body1">
                  <strong>Test Name:</strong> {selectedTest.testName}
                </Typography>
                <Typography variant="body1">
                  <strong>Test Center:</strong> {selectedTest.testCenter}
                </Typography>
                <Typography variant="body1">
                  <strong>Test Date:</strong> {selectedTest.testDate}
                </Typography>
                <Typography variant="body1">
                  <strong>Test Price:</strong> {selectedTest.testPrice}
                </Typography>
                <Typography variant="body1">
                  <strong>Doctor Reference:</strong> {selectedTest.doctorReference}
                </Typography>
                <Typography variant="body1">
                  <strong>Remarks:</strong> {selectedTest.remarks}
                </Typography>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  testName: yup.string().required("required"),
  testCenter: yup.string().required("required"),
  testDate: yup.date().required("required"),
  testPrice: yup.number().required("required").positive("must be positive"),
  doctorReference: yup.string().required("required"),
  remarks: yup.string(),
});

const initialValues = {
  testName: "",
  testCenter: "",
  testDate: "",
  testPrice: "",
  doctorReference: "",
  remarks: "",
};

export default Medical;
