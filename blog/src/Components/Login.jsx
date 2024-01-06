// import React,{ useEffect, useState } from 'react';

// export const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isLogin, setIsLogin] = useState(false);

//     const SignUpClick = (e) =>{
//         e.preventDefault();
//     }

//     const LoginClick = (e) =>{
//         e.preventDefault();
//         setIsLogin(true);
//     }

//   return (
//     <>{
//     <div>
//         {isLogin ? <div>LOGIN</div> : <div>SIGN UP</div>}
//           <div>
//            {!isLogin ? <div>
//                 <input type="text" placeholder='Username'></input>
//             </div> : <div/>}
//             <div>
//                 <input type="email" name='email' id='email' placeholder='Email' value={email} onChange = {(e)=>{setEmail(e.target.value)}}></input>
//             </div>
//             <div>
//                 <input type="password" name='password' id='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}></input>
//             </div>
//             <br></br>
//        {!isLogin ? <button type="submit" onClick={(e)=>{SignUpClick(e)}}>SIGN UP</button> : <div/>} 
//         <br></br>
//         {!isLogin ? <a>
//             Already have an account?
//         </a>: <a></a>}
//         <button onClick={(e)=>{LoginClick(e)}}>LOGIN</button>
//         </div>
//     </div>
// }
//     </>
//   )
// }
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };

    if (!userDetails.username) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!userDetails.password || !passwordRegex.test(userDetails.password)) {
      newErrors.password = 'Password must be at least 6 characters with at least one uppercase and one lowercase letter';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //login logic 
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: name === 'rememberMe' ? checked : value,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fbc2eb',
        marginTop: '7.5rem'
      }}
    >
      <TextField
        fullWidth
        label="Username"
        name="username"
        value={userDetails.username}
        onChange={handleChange}
        error={Boolean(errors.username)}
        helperText={errors.username}
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        name="password"
        value={userDetails.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
        margin="normal"
        sx={{ mt: 2 }}
      />
      <FormControlLabel
        control={<Checkbox checked={userDetails.rememberMe} onChange={handleChange} name="rememberMe" color="primary" />}
        label="Remember Me"
        sx={{ mt: 1, textAlign: 'left' }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" variant="body2">
          Forgot Password?
        </Link>
        <Box mt={1}>
          <Link href="#" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};  

// export default Login;
