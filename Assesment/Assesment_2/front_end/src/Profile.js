import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/'); 
    };

    return (
        <div>
            <h1>Your Profile</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" id="firstName" value={user.firstName} readOnly />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" id="lastName" value={user.lastName} readOnly />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={user.email} readOnly />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">DOB</label>
                        <input type="text" className="form-control" name="dob" id="dob" value={user.dob} readOnly />
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
                                    checked={user.gender === "Male"}
                                    readOnly
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="Female"
                                    checked={user.gender === "Female"}
                                    readOnly
                                />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="contact">Contact Number</label>
                        <input type="text" className="form-control" name="contact" id="contact" value={user.contact} readOnly />
                    </div>
                </div>
                <button type="button" className="btn btn-primary">
                    <Link to="/update" style={{ color: 'white', textDecoration: 'none' }}>Update Details</Link>
                </button>
            </form>
            <button type="button" onClick={handleLogout} class="btn btn-danger">Logout</button>
        </div>
    );
}
