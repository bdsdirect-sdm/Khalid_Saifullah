import React, { useState, useEffect } from 'react';

export default function App(props) {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const [errorPassword, setErrorPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegx = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
  useEffect(() => {
    if (password && !passRegx.test(password)) {
      setErrorPassword(
        'Password Must Atleast Six Characters and Contains Special Character',
      );
    } else {
      setErrorPassword('');
    }

    if (userName && !emailRegex.test(userName)) {
      setErrorUsername('Username Must contains @ and .');
    } else {
      setErrorUsername('');
    }
  }, [userName, password]);

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleUsername(e) {
    setUserName(e.target.value);
  }

  return (
    <div>
      <label>Username: </label>
      <input type="text" onChange={handleUsername} value={userName} />
      <small>{errorUsername}</small> <br></br>
      <label>Password: </label>
      <input type="text" onChange={handlePassword} value={password} />
      <small>{errorPassword}</small>
    </div>
  );
}
