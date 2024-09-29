/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Profile from './Profile';
import Update from './Update';
import Login from './assets/Login';
// import Login from './Login';
// import './App.css'

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
