import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  address: Yup.array().of(
    Yup.object().shape({
      title: Yup.string()
        .trim('Cannot add only spaces')
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
        .min(10000, 'Too Short!')
        .max(999999, 'Too Long!')
        // .length(6,"Length must be min 6")
        .required('Required'),
    })
  ),
});

const initialValues = {
  address: [
    {
      title: '',
      street: '',
      city: '',
      country: '',
      pincode: '',
    },
  ],
};

export default function Address() {
  return (
    <div>
      <h1>Address</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, validateForm, setFieldValue }) => (
          <Form>
            <FieldArray name="address">
              {({ remove }) => (
                <>
                  {values.address.map((address, index) => (
                    <div key={index}>
                      <h4>Address {index + 1}</h4>
                      <label htmlFor={`address.${index}.title`}>Enter title</label>
                      <Field name={`address.${index}.title`} />
                      <ErrorMessage name={`address.${index}.title`} component="div" />

                      <label htmlFor={`address.${index}.street`}>Enter Street</label>
                      <Field name={`address.${index}.street`} />
                      <ErrorMessage name={`address.${index}.street`} component="div" />

                      <label htmlFor={`address.${index}.city`}>Enter city</label>
                      <Field name={`address.${index}.city`} />
                      <ErrorMessage name={`address.${index}.city`} component="div" />

                      <label htmlFor={`address.${index}.country`}>Enter country</label>
                      <Field name={`address.${index}.country`} />
                      <ErrorMessage name={`address.${index}.country`} component="div" />

                      <label htmlFor={`address.${index}.pincode`}>Enter pincode</label>
                      <Field name={`address.${index}.pincode`} />
                      <ErrorMessage name={`address.${index}.pincode`} component="div" />

                      <button type="button" onClick={() => remove(index)}>Delete Address</button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={async () => {
                      const errors = await validateForm();
                      if (Object.keys(errors).length === 0) {
                        const newAddress = { title: '', street: '', city: '', country: '', pincode: '' };
                        setFieldValue('address', [...values.address, newAddress]);
                      } else {
                        alert("Form is not validated. Please fix the errors before adding a new address.");
                      }
                    }}
                  >
                    Add Address
                  </button>
                </>
              )}
            </FieldArray>
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
