import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./form.css";
import getuser from "../../actions/useremail";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
const Login = ({ userList, userinfo }) => {
  const [email, setEmail] = useState("");

  
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userinfo, "*********effecthook");
    if (userinfo?.status == 200) {
      navigate("/us");
    }
  }, [userinfo]);
  return (
  <div style={{backgroundImage: "linear-gradient( rgba(255,0,0,0), rgba(255,0,0,1))",height:"100vh",width:"100%"
  }}>
      <Container sx={{}}>
      <Grid> 

       <Paper sx={{padding:"14px" ,height:"65vh",width:300 ,margin:" auto " ,marginTop:"30px"}}>
      <Grid align="center">
         <Avatar sx={{backgroundColor:'red' }}>AK</Avatar>
      <Typography variant="h5">  Login</Typography> 
      </Grid>
      
    <br/>
      {/* <label className="email"> Email or Username :</label>
      <br /> */}
    
      <TextField sx={{marginLeft:"33px",justifyItems:"center"}} label="Email or Username" type="email" placeholder="Enter yuor email"  onChange={(e) => setEmail(e.target.value)} variant="outlined"  required />
      
    <br/>
    <br/>
      <TextField sx={{marginLeft:"33px"}} label="Password" type="password" placeholder="Password" variant="outlined"  required/>
    
      
      <br/>
    <br/>
      
      <Button variant="contained" onClick={() => userList(email)} fullWidth >login</Button>
   
      </Paper>
      </Grid>
    </Container>

    </div>
  );
};
const mapStateToProps = (state) => ({ userinfo: state.LoginReducer.userinfo });

const mapDispatchToProps = (dispatch) => {
  return {
    //: () => dispatch(getuseremail())

    userList: (email) => dispatch(getuser(email))
  };
};
Login.propTypes = {
  userList: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.object)
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
