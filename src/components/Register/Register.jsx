import React from 'react';
import './Register.css';

const Register = () => {
     return (
          <div>
               <h2>Register here</h2>
               <form>
                    <input type="email" name="email" id="email" placeholder='Your email' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Your password' />
                    <br />
                    <input type="submit" value="Register" />
               </form>
          </div>
     );
};

export default Register;