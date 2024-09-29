/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  contact: string;
  gender: string;
  password: string;
}

const UpdateProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
    .max(20, 'First name must be at most 20 characters')
    .required('First name is required'),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
    .max(20, 'Last name must be at most 20 characters')
    .required('Last name is required'),

  email: Yup.string().email('Invalid email').required('Email is required'),

  dob: Yup.string().required('Date of birth is required'),

  contact: Yup.string()
    .matches(/^\d{10}$/, 'Contact number must be exactly 10 digits')
    .required('Contact number is required'),

  gender: Yup.string().required('Gender is required'),
});

export default function UpdateProfile() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get<User>(
          `http://localhost:3000/users/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data. Please try again.');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [id, navigate]);

  const handleUpdate = async (values: Omit<User, 'id'>) => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      await axios.put(`http://localhost:3000/users/${id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile updated successfully!');
      navigate(`/profile/${id}`);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile. Please try again.');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Update Profile</h2>
      <ToastContainer />
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          dob: user.dob,
          gender: user.gender,
          contact: user.contact,
          password: user.password,
        }}
        validationSchema={UpdateProfileSchema}
        onSubmit={(values) => handleUpdate(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-danger">{errors.firstName}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-danger">{errors.lastName}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              {errors.email && touched.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <Field type="date" className="form-control" name="dob" id="dob" />
              {errors.dob && touched.dob && (
                <div className="text-danger">{errors.dob}</div>
              )}
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
              {errors.gender && touched.gender && (
                <div className="text-danger">{errors.gender}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <Field
                type="text"
                className="form-control"
                name="contact"
                id="contact"
                maxLength={10}
              />
              {errors.contact && touched.contact && (
                <div className="text-danger">{errors.contact}</div>
              )}
            </div>
            {/* <Field type="date" className="form-control" name="dob" id="dob" /> */}
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </Form>
        )}
      </Formik>

      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}
