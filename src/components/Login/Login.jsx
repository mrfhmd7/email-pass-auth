import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

     const [error, setError] = useState('');
     const [success, setSuccess] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const emailRef = useRef();

     const handleSubmit = (event) => {
          event.preventDefault();

          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          //password validation
          setError('');
          setSuccess('');
          if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
               setError('Please add at least two uppercase letters');
               return;
          }
          else if (!/(?=.*[!@#$%^&*])/.test(password)) {
               setError('Please add at least one special characters');
               return;
          }
          else if (password.length < 6) {
               setError('Password must be at least 6 characters');
               return;
          }

          signInWithEmailAndPassword(auth, email, password)
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);

                    if (!loggedUser.emailVerified) {
                         alert('Please verify your email');
                    };

                    setEmail('');
                    setPassword('');
                    setSuccess('User login successfully');
                    setError('');
               })
               .catch(error => {
                    setError(error.message);
               })
     };

     const handleResetPassword = event => {
          const email = emailRef.current.value;
          if (!email) {
               alert('Please provide your email to reset password');
               return;
          }
          
          sendPasswordResetEmail(auth, email)
               .then(() => {
                    alert('Please check your email');
               })
               .catch(error => {
                    console.log(error);
                    setError(error.message);
               });
     };

     return (
          <div>
               <h2>Please login.</h2>
               <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control
                              type="email"
                              placeholder="Enter email"
                              name="email"
                              ref={emailRef}
                              value={email}
                              required
                              onChange={(event) => setEmail(event.target.value)}
                         />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={password}
                              required
                              onChange={(event) => setPassword(event.target.value)}
                         />
                    </Form.Group>

                    <Button className='mt-3' variant="primary" type="submit">
                         Submit
                    </Button>
               </Form>
               <p className='pt-3'>Forget Password? please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></p>
               <h5>New to this website? <Link to='/register'>Register</Link> here</h5>
               <p className='text-danger'>{error}</p>
               <p className='text-success'>{success}</p>
          </div>
     );
};

export default Login;