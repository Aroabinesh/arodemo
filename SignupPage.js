// Login.js

import React, { useState } from 'react';
import './SignupPage.css';


const SignupPage = () => {
  const [Username, setUsername] = useState('');
const [Password, setPassword] = useState('');


  const handleLogin = () => {
    // You can perform authentication here or send the data to a backend
    console.log('Username:', Username);
     console.log('Password:', Password);
   
  };

  return (
    
    <div className='page'>
     <marquee width="100%" direction="left" height="30px">
<strong>Avail Flexible 0% Interest Education Loan to learn your desired Course.</strong>
</marquee>
      <form>
      <h1 className="goo" ><strong> Login</strong></h1>
      <br/>
          <label>
       
    
          <input
            type="text"
            value={Username} placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br/>

         <label>
         
          <input
            type="Password"
            value={Password} placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br/>
        <br/>




        <button type="button" onClick={handleLogin}>
        <strong>Login</strong>
        </button>
        
        <button type="button" onClick={handleLogin}>
        <strong>Signup</strong>
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
