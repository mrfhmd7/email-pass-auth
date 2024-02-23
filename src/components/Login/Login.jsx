import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);
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
          </div>
     );
};

export default Login;