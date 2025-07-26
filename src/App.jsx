import { LaptopList } from "./pages/LaptopList";
import "./dashboard.css";
import "./styles.css";
import { Routes, Route, Link, Navigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import { NumericFormat } from "react-number-format";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function App() {


  return (
      <div className="App">
        <header>
          <nav>
            <ul className="nav-link-container">
              <li className="spacing-words">
                <Link className="nav-link" to="/dashboard"><FontAwesomeIcon icon={faHouse} size="0.5x" /></Link>
              </li>
              <li className="spacing-words">
                <Link className="nav-link" to="/laptop/new"><FontAwesomeIcon icon={faLaptop} size="0.5x" /></Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
        <Route path="" element={<Navigate to="/dashboard" replace />} />
        <Route path="home" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<LaptopList />} />
        <Route path="/laptop/new" element={<NewLaptop />} />

        {/* <Route path="/laptop/new" element={}></Route> */}
        </Routes>
       </div>
  );
}

function NewLaptop(){

  const laptopTypes = ['Ultrabook', 'Gaming', 'Workstation', 'Convertible', 'Business', 'Chromebook', 'MacBook'];
  const conditions = ['New', 'Used', 'Refurbished'];
  const laptopBrands = ['HP', 'Lenovo', 'Dell', 'Asus', 'Apple'];
  const processors = [
  'Intel Core i3',
  'Intel Core i5',
  'Intel Core i7',
  'Intel Core i9',
  'Intel Core Ultra 7',
  'AMD Ryzen 3',
  'AMD Ryzen 5',
  'AMD Ryzen 7',
  'Apple M2',
  'Apple M3',
  'Apple M4',,
  'Qualcomm Snapdragon X Elite',
];

const validationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  contactNo: yup.string().required('Contact Number is required'),
  brand: yup.string().required('Brand is required'),
  model: yup.string().required('Model is required'),
  type: yup.string().required('Type is required'),
  condition: yup.string().required('Condition is required'),
  processor: yup.string().required('Processor is required'),
  serialNo: yup.string().required('Serial Number is required'),
  purchaseDate: yup.date().required('Purchase Date is required'),
  document: yup.mixed().required('Document upload required'),
});

  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      type: '',
      condition: '',
      processor: '',
      serialNo: '',
      purchaseDate: '',
      currentValue: '',
      document: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('New Laptop: ', values);
      alert(`Form submitted for ${values.brand}, ${values.model}`)
    },
  });

  return (
    <div className="new-laptop-container">
      <form className="new-laptop-form" onSubmit={formik.handleSubmit}>
        <Divider sx={{ my: 4 }} />

        <Grid container spacing={2}>
           <Typography variant="h5">👤Personal Details</Typography>
          <TextField
        fullWidth
        id="fullName"
        name="fullName"
        label="Full Name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
      >
      </TextField>

       <TextField
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      >
      </TextField>

      <NumericFormat
      customInput={TextField}
      fullWidth
        id="contactNo"
        name="contactNo"
        label="Contact Number"
        format="0#########"
        value={formik.values.contactNo}
        onValueChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
        helperText={formik.touched.contactNo && formik.errors.contactNo}
      />
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={2}>
          <Typography variant="h5">💻 Laptop Details</Typography>
      <TextField
        select
        fullWidth
        id="brand"
        name="brand"
        label="Brand"
        value={formik.values.brand}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.brand && Boolean(formik.errors.brand)}
        helperText={formik.touched.brand && formik.errors.brand}
      >
        {laptopBrands.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
         </MenuItem>
         ))}
      </TextField>

      <TextField
        fullWidth
        id="model"
        name="model"
        label="Model"
        value={formik.values.model}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.model && Boolean(formik.errors.model)}
        helperText={formik.touched.model && formik.errors.model}
      >
      </TextField>

      <TextField
        select
        fullWidth
        id="type"
        name="type"
        label="Type"
        value={formik.values.type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        {laptopTypes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
         </MenuItem>
         ))}
      </TextField>

       <TextField
        select
        fullWidth
        id="condition"
        name="condition"
        label="Condition"
        value={formik.values.condition}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.condition && Boolean(formik.errors.condition)}
        helperText={formik.touched.condition && formik.errors.condition}
      >
        {conditions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
         </MenuItem>
         ))}
      </TextField>

       <TextField
        select
        fullWidth
        id="processor"
        name="processor"
        label="Processor"
        value={formik.values.processor}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.processor && Boolean(formik.errors.processor)}
        helperText={formik.touched.processor && formik.errors.processor}
      >
        {processors.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
         </MenuItem>
         ))}
      </TextField>

      <TextField
        fullWidth
        id="serialNo"
        name="serialNo"
        label="Serial Number"
        value={formik.values.serialNo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.serialNo && Boolean(formik.errors.serialNo)}
        helperText={formik.touched.serialNo && formik.errors.serialNo}
      >
      </TextField>

      <TextField
        fullWidth
        id="purchaseDate"
        name="purchaseDate"
        label="Purchase Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.purchaseDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.purchaseDate && Boolean(formik.errors.purchaseDate)}
        helperText={formik.touched.purchaseDate && formik.errors.purchaseDate}
      >
      </TextField>
      <NumericFormat
        customInput={TextField}
        fullWidth
        id="currentValue"
        name="currentValue"
        label="Current Value (R)"
        thousandSeparator
        decimalScale={2}
        fixedDecimalScale
        prefix="R"
        value={formik.values.currentValue}
        onValueChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.currentValue && Boolean(formik.errors.currentValue)}
        helperText={formik.touched.currentValue && formik.errors.currentValue}
      />

      <div className="document-layout">
      <InputLabel htmlFor="document" sx={{mt:2}}>Upload Document:</InputLabel>
      <input
      type="file"
      id="document"
      name="document"
      accept=".pdf"
      value={formik.values.document}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.document && Boolean(formik.errors.document)}
        helperText={formik.touched.document && formik.errors.document}
       />
       </div>
       </Grid>
       <div className="submit-container">
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
};
