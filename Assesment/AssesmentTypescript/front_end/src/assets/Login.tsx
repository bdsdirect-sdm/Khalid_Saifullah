/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface FormData {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Please enter your password'),
});

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values: FormData) => {
    try {
      const response = await axios.post('http://localhost:3000/login', values);
      //   toast.success('Login successful!');
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate(`/profile/${response.data.userId}`);
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <h2>Please Login</h2>
      <ToastContainer />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
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
            <div className="form-group">
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p>
        <Link to="/">Sign up</Link>
      </p>
    </div>
  );
}
