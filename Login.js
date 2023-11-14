// Login.js

import React, { useState } from 'react';
import './Login.css';


const Login = () => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
const [Contact, setContact] = useState('');
const [Password, setPassword] = useState('');
const [Gender, setGender] = useState('');
const [Course, setCourse] = useState('');
const [Address, setAddress] = useState('');

  

  const handleLogin = () => {
    // You can perform authentication here or send the data to a backend
    console.log('Fullname:', Fullname);
    console.log('Email:', Email);
     console.log('Contact:', Contact);
     console.log('Password:', Password);
     console.log('Gender:', Gender);
     console.log('Course:', Course);
     console.log('Address:', Address);
  };

  return (
    <div>
     
      <form>
      <h1 className="goo" ><strong> Registration</strong></h1>
      <br/>
          <label>
            <strong>Fullname:</strong>
    
          <input
            type="text"
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>
      
        <label>
        <strong>Email:</strong>  
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
  
         <label>
         <strong>Contact:</strong> 
           <input
             type="number"
             value={Contact}
            onChange={(e) => setContact(e.target.value)}
           />
         </label>
 
         

         <label>
          <strong>Password:</strong>
          <input
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
         <strong>Address:</strong> 
          <input
            type="textarea"
    
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        
        <label><strong>Gender:</strong></label>
      <div className="form-check">
     
        <input
          type="radio"
          className="form-check-input"
          id="male"
          value="male"
          checked={Gender === 'male'}
          OnChange={handleLogin}
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="female"
          value="female"
          checked={Gender === 'female'}
          OnChange={handleLogin}
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="other"
          value="other"
          checked={Gender === 'other'}
          OnChange={handleLogin}
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
     
<br/>

    <div>

      <div>
        <label>
         <strong> Course:</strong> 
          <select
            value={Course}
            OnChange={ handleLogin }
          >
            <option value="">Select...</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Django">Django</option>
          </select>
        </label>
      </div>
 
    </div>
  


        <button type="button" onClick={handleLogin}>
        <strong>Submit</strong>
        </button>
      </form>
    </div>
  );
};

export default Login;
