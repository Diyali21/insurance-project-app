import ArrowBack from "@mui/icons-material/ArrowBack";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { useFormik } from 'formik';
import * as React from "react";
import { useState } from 'react';
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router";
import { BRAND_LOGOS } from '../components/BRAND_LOGOS';
import { validationSchema } from '../components/ValidationSchema';
import Alert from "@mui/material/Alert";


export function NewLaptop(){

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const [laptop_details, setLaptops] = useState([]);
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
  'Apple M4',
  'Qualcomm Snapdragon X Elite',
];

  <validationSchema/>

  const formik = useFormik({

    initialValues: {
      fullName: '',
      email: '',
     contactNo: '',
      brandName: '',
      model: '',
      type: '',
      condition: '',
      processor: '',
      sNo: '',
      purchase_date: '',
      current_value: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      const newLaptop = {...values, brandImage: BRAND_LOGOS[values.brandName]}
      await fetch ("https://68871b7e071f195ca97f45fa.mockapi.io/laptops",
      {
        method:"POST",
        body: JSON.stringify(newLaptop),
        headers:{
          "Content-type": "application/json",
        },
      }
    );
      console.log('New Laptop: ', newLaptop);
      setLaptops([...laptop_details, newLaptop]);
      navigate('/dashboard');
    },
  });

  return (
    <Box>
      <ArrowBack className="back-btn" onClick={() => navigate(-1)}></ArrowBack>
      <Box className="new-laptop-container">
        <form className="new-laptop-form" onSubmit={formik.handleSubmit}>
          <Divider sx={{ my: 4 }} />

          <Grid container spacing={2}>
            <Typography variant="h6">
              <PersonIcon sx={{ fontSize: 25, verticalAlign: "middle" }} />{" "}
              Personal Details
            </Typography>
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
            ></TextField>

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
            ></TextField>

            <NumericFormat
              customInput={TextField}
              fullWidth
              id="contactNo"
              name="contactNo"
              label="Contact Number"
              format="0#########"
              prefix="+27"
              value={formik.values.contactNo}
              onValueChange={(values) => {
                formik.setFieldValue("contactNo", values.value);
              }}
              onBlur={formik.handleBlur}
              error={
                formik.touched.contactNo && Boolean(formik.errors.contactNo)
              }
              helperText={formik.touched.contactNo && formik.errors.contactNo}
            />
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Grid container spacing={2}>
            <Typography variant="h6">
              <LaptopIcon sx={{ fontSize: 25, verticalAlign: "middle" }} />{" "}
              Laptop Details
            </Typography>
            <TextField
              select
              fullWidth
              id="brandName"
              name="brandName"
              label="Brand"
              value={formik.values.brandName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.brandName && Boolean(formik.errors.brandName)
              }
              helperText={formik.touched.brandName && formik.errors.brandName}
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
            ></TextField>

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
              error={
                formik.touched.condition && Boolean(formik.errors.condition)
              }
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
              error={
                formik.touched.processor && Boolean(formik.errors.processor)
              }
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
              id="sNo"
              name="sNo"
              label="Serial Number"
              value={formik.values.sNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.sNo && Boolean(formik.errors.sNo)}
              helperText={formik.touched.sNo && formik.errors.sNo}
            ></TextField>

            <TextField
              fullWidth
              id="purchase_date"
              name="purchase_date"
              label="Purchase Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.purchase_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.purchase_date &&
                Boolean(formik.errors.purchase_date)
              }
              helperText={
                formik.touched.purchase_date && formik.errors.purchase_date
              }
            ></TextField>

            <NumericFormat
              customInput={TextField}
              fullWidth
              id="current_value"
              name="current_value"
              label="Current Value (R)"
              thousandSeparator
              decimalScale={2}
              fixedDecimalScale
              prefix="R"
              value={formik.values.current_value}
              onValueChange={(values) => {
                formik.setFieldValue("current_value", values.value);
              }}
              onBlur={formik.handleBlur}
              error={
                formik.touched.current_value &&
                Boolean(formik.errors.current_value)
              }
              helperText={
                formik.touched.current_value && formik.errors.current_value
              }
            />
          </Grid>
          <Box className="submit-container">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleClick}
            >
              Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Laptop successfully registered
              </Alert>
            </Snackbar>

          </Box>
        </form>
      </Box>
    </Box>
  );
};
