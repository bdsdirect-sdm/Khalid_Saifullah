import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    street: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    country: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    pincode: Yup.number()
        .min(2, 'Too Short!')
        .max(6, 'Too Long!')
        .required('Required'),
});

const initialValues = {
    address: [
        {
            title: '',
            street: '',
            city:'',
            country:'',
            pincode:''

        },
    ],
};


export default function AddressAuth() {
    return (
        <div>
        <h1>Address</h1>

        <Formik
           infunctionitialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor='title'>Enter title</label>
                        <Field name="title" />
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}
                        <label htmlFor='street'>Enter Street</label>
                        <Field name="street" />
                        {errors.street && touched.street ? (
                            <div>{errors.street}</div>
                        ) : null}
                        <label htmlFor='city'>Enter city</label>
                        <Field name="city" />
                        {errors.city && touched.city ? (
                            <div>{errors.city}</div>
                        ) : null}
                        <label htmlFor='country'>Enter country</label>
                        <Field name="country" />
                        {errors.street && touched.country ? (
                            <div>{errors.country}</div>
                        ) : null}
                         <label htmlFor='pincode'>Enter pincode</label>
                         <Field name="pincode" />
                        {errors.pincode && touched.pincode ? (
                            <div>{errors.pincode}</div>
                        ) : null}
                        
                        
                        <button type="submit" >Submit</button>
                        
                    </Form>
                )}
            </Formik>
    </div>
    )
}