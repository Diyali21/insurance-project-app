import * as yup from 'yup';
export const validationSchema = yup.object({
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
