import React, { useState } from 'react';
import './Register.css';

const Register = () => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = (event) => {
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          console.log(email, password);
     };

     const handlePasswordBlur = (event) => {
          // console.log(event.target.value);
          setEmail(event.target.value);
     };

     const handleEmailChange = (event) => {
          // console.log(event.target.value);
          setPassword(event.target.value);
     };
     return (
          <div>
               <h2>Register here</h2>
               <form onSubmit={handleSubmit}>
                    <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' />
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password' />
                    <br />
                    <input type="submit" value="Register" />
               </form>
          </div>
     );
};

export default Register;