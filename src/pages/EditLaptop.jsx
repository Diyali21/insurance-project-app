import { useFormik } from "formik";
import { Divider, Grid, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { NumericFormat } from "react-number-format";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as yup from 'yup';
import { Box } from "@mui/material";

export function EditLaptop(){

  const {id} = useParams();
  const [laptop, setLaptop] = useState({});

  const laptopTypes = ['Ultrabook', 'Gaming', 'Workstation', 'Convertible', 'Business', 'Chromebook', 'MacBook'];
  const conditions = ['New', 'Used', 'Refurbished'];
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

  const navigate = useNavigate();

  const validationSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    contactNo: yup.string().matches(/^[6-8][0-9]{8}$/).required('Contact Number is required'),
    brandName: yup.string().required('Brand is required'),
    model: yup.string().required('Model is required'),
    type: yup.string().required('Type is required'),
    condition: yup.string().required('Condition is required'),
    processor: yup.string().required('Processor is required'),
    sNo: yup.string().required('Serial Number is required'),
    current_value: yup.number().required('Current Value is required'),
    purchase_date: yup.date().required('Purchase Date is required'),
  });

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
            const response = await fetch (`https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`,
            {
              method:"PUT",
              body: JSON.stringify(values),
              headers:{
                "Content-type": "application/json",
              },
            }
          );
          alert(`Details updated for ${values.brandName}, ${values.model}`);
          navigate("/dashboard");
          },
    });

     async function getLaptops(id) {
        const response = await fetch (`https://68871b7e071f195ca97f45fa.mockapi.io/laptops/${id}`);
        const laptops = await response.json();
        setLaptop(laptops);
        formik.setValues(laptops);
  }

  useEffect(() => {
    getLaptops(id);
  }, [id]);

  return (
    <Box className="new-laptop-container">
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
            prefix="+27"
            value={formik.values.contactNo}
            onValueChange={(values) => {
              formik.setFieldValue('contactNo', values.value);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
            helperText={formik.touched.contactNo && formik.errors.contactNo}
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
        value={formik.values.brandName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.brandName && Boolean(formik.errors.brandName)}
        helperText={formik.touched.brandName && formik.errors.brandName}
        inputProps={{readOnly: true}}
      >
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
        value={formik.values.type ?? ''}
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
        value={formik.values.condition ?? ''}
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
        value={formik.values.processor ?? ''}
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
        id="sNo"
        name="sNo"
        label="Serial Number"
        value={formik.values.sNo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sNo && Boolean(formik.errors.sNo)}
        helperText={formik.touched.sNo && formik.errors.sNo}
      >
      </TextField>

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
        error={formik.touched.purchase_date && Boolean(formik.errors.purchase_date)}
        helperText={formik.touched.purchase_date && formik.errors.purchase_date}
      >
      </TextField>

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
              formik.setFieldValue('current_value', values.value);
            }}
        onBlur={formik.handleBlur}
        error={formik.touched.current_value && Boolean(formik.errors.current_value)}
        helperText={formik.touched.current_value && formik.errors.current_value}
      />

       </Grid>
       <Box className="submit-container">
        <Button color="primary" variant="contained" fullWidth type="submit">
          Edit
        </Button>
        </Box>
      </form>
    </Box>
  );
};
