import React from "react";
import {
  Checkbox,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";

import "../css/Login.css";

const Login = () => {
  return (
    <div className="loginPageContainer">
      <div className="loginFormContainer">
        <div className="loginFormLeft">
          {" "}
          {/* left side container */}
          <div className="top-left-heading">Grievances App</div>
          <div className="login-form-container">
            <div className="login-form-subcontainer">
              <div className="login-form-heading">
                <div>Welcome back</div>
                <div>Welcome back! please enter your details</div>
              </div>
              <FormControl>
                <FormLabel sx={{
                  color:'black',
                  fontSize: '0.8rem',
                  // marginTop:'3%'

                }}>Email</FormLabel>
                <TextField size="small" />
                <FormLabel sx={{
                  color:'black',
                  fontSize:'0.8rem',
                  marginTop:'4%'
                }}>Password</FormLabel>
                <TextField type={"password"} size="small" />
                <FormGroup>
                  <FormControlLabel className="remember"
                    control={<Checkbox defaultChecked />}
                    label={<Typography fontSize={"0.8rem"} fontFamily={"poppins"}>Remember me for 30 days</Typography>}
                  />
                  <span className="forgot-password">Forgot password?</span>
                </FormGroup>
                <Button variant="contained"  sx={{
                  marginBottom:'5%'                  
                }}>Login</Button>
                <Button variant="outlined"sx={{
                  marginBottom:'5%'                  
                }}>Text</Button>
                <div className="formFooter">
                  <span>Dont have an account ?  </span>
                  <span>Sign Up</span>
                </div>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="loginFormRight">
          {/* right side container */}
          <div className="imageContainer">
            <img src="/login.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
