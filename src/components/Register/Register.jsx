import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';


const Register = () => {

     const auth = getAuth(app);

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [err, setErr] = useState('');
     const [success, setSuccess] = useState('');

     const handleSubmit = (event) => {
          //1. prevent page refresh
          event.preventDefault();
          setSuccess('');
          setErr('');

          //2. collect form data
          const email = event.target.email.value;
          const password = event.target.password.value;
          const name = event.target.name.value;
          console.log(name, email, password);

          //pass validation
          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
               setErr('Please enter a valid password with at least 6 characters');
               return;
          };

          //3. create user in firebase
          createUserWithEmailAndPassword(auth, email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);

                    setErr('');
                    event.target.reset();
                    setSuccess('You have successfully registered')

                    verifyEmail(user);
                    updateUserData(user, name);
               })
               .catch(error => {
                    console.error(error);
                    setErr(error.message);
               });
     };

     const verifyEmail = (user) => {
          sendEmailVerification(user)
               .then(result => {
                    console.log(result);
                    alert('Please verify your email')
               })
     };

     const updateUserData = (user, name) => {
          updateProfile(user, {
               displayName: name
          })
               .then(() => {
                    console.log('user name update');
               })
               .catch(error => {
                    setErr(error.message);
               })
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
                    <input type="text" name="name" id="name" placeholder='Your name' required />
                    <br />
                    <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' required />
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password' required />
                    <br />
                    <p className='text-danger'>{err}</p>
                    <p className='text-success'>{success}</p>
                    <h5>Already have an account? Please <Link to='/login'>Login</Link></h5>
                    <input type="submit" value="Register" />
               </form>
          </div>
     );
};

export default Register;