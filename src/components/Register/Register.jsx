import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Register = () => {

     const auth = getAuth(app);

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = (event) => {
          //1. prevent page refresh
          event.preventDefault();

          //2. collect form data
          const email = event.target.email.value;
          const password = event.target.password.value;
          console.log(email, password);

          //3. create user in firebase

          createUserWithEmailAndPassword(auth, email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
               })
               .catch(error => {
                    console.error(error);
               });
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