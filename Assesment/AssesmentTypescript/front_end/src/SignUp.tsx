/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmpassword: string;
  term: boolean;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
    .max(20, 'First name must be at most 20 characters')
    .required('First name is required'),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
    .max(20, 'Last name must be at most 20 characters')
    .required('Last name is required'),

  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Please enter your password')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special character'
    ),
  confirmpassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  term: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (values: FormData) => {
    try {
      await axios.post('http://localhost:3000/users', values);
      // toast('Registration successful!');

      alert('Registration successful!');
      navigate('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Please Signup</h2>
      <ToastContainer />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmpassword: '',
          term: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
                {errors.firstName && touched.firstName && (
                  <div className="text-danger">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
                {errors.lastName && touched.lastName && (
                  <div className="text-danger">{errors.lastName}</div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                />
                {errors.confirmpassword && touched.confirmpassword && (
                  <div className="text-danger">{errors.confirmpassword}</div>
                )}
              </div>
            </div>
            <div className="form-group form-check">
              <Field type="checkbox" className="form-check-input" name="term" />
              <label className="form-check-label" htmlFor="term">
                I accept the terms and conditions
              </label>
              {errors.term && <div className="text-danger">{errors.term}</div>}
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
