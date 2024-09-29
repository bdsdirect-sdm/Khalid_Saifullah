import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Profile from './Profile';
import Update from './Update';
import Login from './Login';
import './App.css'

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
