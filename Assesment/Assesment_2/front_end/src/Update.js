import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Update() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        newpassword: "",
        dob: "",
        gender: "",
        contact: ""
    });

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${userId}`);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    const handleChange = (e) => {
        setFormData(currData => ({
            ...currData,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/'); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password!==formData.newpassword ){
            alert("Password Don't Match")
        }else{

       
        // You can implement password verification logic here if needed
        try {
            await axios.put(`http://localhost:3001/users/${userId}`, formData);
            alert("Profile updated successfully!");
            navigate(`/profile`); 
        } catch (error) {
            console.error("Error updating user data:", error);
            alert(error.message);
        }
    }
    };

    return (
        <div>
            <h1>Update Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Current Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Current Password"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="newpassword">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="newpassword"
                            id="newpassword"
                            placeholder="New Password"
                            onChange={handleChange}
                            
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">DOB</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dob"
                            id="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Gender</label>
                        <div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="contact">Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            maxLength={10}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
            <button type="button" onClick={handleLogout} class="btn btn-danger">Logout</button>
        </div>
    );
}
