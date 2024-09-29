import { useState } from 'react';
import UserList from './UserList';

export default function AddUser() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      dob: ""
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          placeholder="Enter first name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          placeholder="Enter last name"
        />
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          placeholder="Enter your email"
        />
        <input
          type="text"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
          placeholder="Enter your phone number"
        />
        <br />
        <select name="gender" onChange={handleChange} value={formData.gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          name="dob"
          onChange={handleChange}
          value={formData.dob}
          type="date"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <UserList users={users} />
    </>
  );
}
