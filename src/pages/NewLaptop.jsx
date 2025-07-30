import ArrowBack from "@mui/icons-material/ArrowBack";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
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

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        contactNo: "",
        brandName: "",
        model: "",
        type: "",
        condition: "",
        processor: "",
        sNo: "",
        purchase_date: "",
        current_value: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        const newLaptop = {
          ...values,
          brandImage: BRAND_LOGOS[values.brandName],
        };
        await fetch("https://68871b7e071f195ca97f45fa.mockapi.io/laptops", {
          method: "POST",
          body: JSON.stringify(newLaptop),
          headers: {
            "Content-type": "application/json",
          },
        });
        console.log("New Laptop: ", newLaptop);
        setLaptops([...laptop_details, newLaptop]);
        navigate("/dashboard");
      },
    });

  return (
    <Box>
      <ArrowBack className="back-btn" onClick={() => navigate(-1)}></ArrowBack>
      <Box className="new-laptop-container">
        <Box
        component="form"
        className="new-laptop-form" onSubmit={handleSubmit}>
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
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fullName && Boolean(errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            ></TextField>

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            ></TextField>

            <NumericFormat
              customInput={TextField}
              fullWidth
              id="contactNo"
              name="contactNo"
              label="Contact Number"
              format="0#########"
              prefix="+27"
              value={values.contactNo}
              onValueChange={(values) => {
                setFieldValue("contactNo", values.value);
              }}
              onBlur={handleBlur}
              error={
                touched.contactNo && Boolean(errors.contactNo)
              }
              helperText={touched.contactNo && errors.contactNo}
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
              value={values.brandName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.brandName && Boolean(errors.brandName)
              }
              helperText={touched.brandName && errors.brandName}
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
              value={values.model}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.model && Boolean(errors.model)}
              helperText={touched.model && errors.model}
            ></TextField>

            <TextField
              select
              fullWidth
              id="type"
              name="type"
              label="Type"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.type && Boolean(errors.type)}
              helperText={touched.type && errors.type}
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
              value={values.condition}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.condition && Boolean(errors.condition)
              }
              helperText={touched.condition && errors.condition}
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
              value={values.processor}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.processor && Boolean(errors.processor)
              }
              helperText={touched.processor && errors.processor}
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
              value={values.sNo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.sNo && Boolean(errors.sNo)}
              helperText={touched.sNo && errors.sNo}
            ></TextField>

            <TextField
              fullWidth
              id="purchase_date"
              name="purchase_date"
              label="Purchase Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={values.purchase_date}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.purchase_date &&
                Boolean(errors.purchase_date)
              }
              helperText={
                touched.purchase_date && errors.purchase_date
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
              value={values.current_value}
              onValueChange={(values) => {
                setFieldValue("current_value", values.value);
              }}
              onBlur={handleBlur}
              error={
                touched.current_value &&
                Boolean(errors.current_value)
              }
              helperText={
                touched.current_value && errors.current_value
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
        </Box>
      </Box>
    </Box>
  );
};
