import { Box, Divider, Grid, MenuItem } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate, useParams } from "react-router";
import { validationSchema } from "../components/ValidationSchema";

export function EditLaptop() {
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

  const { id } = useParams();
  const [laptop, setLaptop] = useState({
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
  });
  const [isLoading, setIsLoading] = useState(true);

  const laptopTypes = [
    "Ultrabook",
    "Gaming",
    "Workstation",
    "Convertible",
    "Business",
    "Chromebook",
    "MacBook",
  ];
  const conditions = ["New", "Used", "Refurbished"];
  const processors = [
    "Intel Core i3",
    "Intel Core i5",
    "Intel Core i7",
    "Intel Core i9",
    "Intel Core Ultra 7",
    "AMD Ryzen 3",
    "AMD Ryzen 5",
    "AMD Ryzen 7",
    "Apple M2",
    "Apple M3",
    "Apple M4",
    "Qualcomm Snapdragon X Elite",
  ];

  const navigate = useNavigate();

  <validationSchema />;
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: laptop,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) =>
      { await fetch(
        `https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      navigate("/dashboard");
    },
  });

  async function getLaptops(id) {
    setIsLoading(true);
    const response = await fetch(
      `https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`
    );
    const laptops = await response.json();
    setIsLoading(false);
    setLaptop(laptops);
    setValues(laptops);
  }

  useEffect(() => {
    getLaptops(id);
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Box className="new-laptop-container">
      <Box component="form" className="new-laptop-form" onSubmit={handleSubmit}>
        <Divider sx={{ my: 4 }} />

        <Grid container spacing={2}>
          <Typography variant="h5">👤Personal Details</Typography>
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
            error={touched.contactNo && Boolean(errors.contactNo)}
            helperText={touched.contactNo && errors.contactNo}
          />
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={2}>
          <Typography variant="h5">💻 Laptop Details</Typography>
          <TextField
            fullWidth
            id="brandName"
            name="brandName"
            label="Brand"
            value={values.brandName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.brandName && Boolean(errors.brandName)}
            helperText={touched.brandName && errors.brandName}
            inputProps={{ readOnly: true }}
          ></TextField>

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
            value={values.type ?? ""}
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
            value={values.condition ?? ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.condition && Boolean(errors.condition)}
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
            value={values.processor ?? ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.processor && Boolean(errors.processor)}
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
            Edit
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Details successfully edited
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}
