/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Formik, Form, Field, ErrorMessage } from 'formik';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  contact: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

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
        navigate('/login');
      }
    };

    fetchUserData();
  }, [id, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Successfully Logout');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {/* <h2>Profile</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p> */}
      <h2>Profile Page</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user.firstName}
              id="firstName"
              placeholder="First Name"
              disabled
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user.lastName}
              id="lastName"
              placeholder="Last Name"
              disabled
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            id="email"
            placeholder="Email"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">dob</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={user.dob}
            id="dob"
            placeholder="dob"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            value={user.gender}
            id="gender"
            placeholder="gender"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">contact</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={user.contact}
            id="contact"
            placeholder="contact"
            disabled
          />
        </div>
      </form>
      <button
        className="btn btn-info"
        onClick={() => navigate(`/update/${user.id}`)}
      >
        Update Profile
      </button>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
}
