import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterRBS = () => {

     const handleRegister = event => {
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          console.log(email, password);
     };


     return (
          <div>
               <h3 className='text-primary p-4'>Please Register</h3>
               <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Submit
                    </Button>
               </Form>
          </div>
     );
};

export default RegisterRBS;