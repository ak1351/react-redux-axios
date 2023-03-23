import React, { useState } from "react";
import "./view.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import{Container,Avatar}from  '@mui/material';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import comment from "../../actions/comments";
import { useEffect } from "react";
import commentList from "../../actions/comments";
import CircularProgress from '@mui/material/CircularProgress';
function ViewPerPost({CommentList,u}) {
  const location = useLocation();
 
  console.log(location);
  // useEffect(() => {
  //  comment();

  // }, []);
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const Id= location.state.id;

  return (
    <Container id ="cont1">
     <div>
    <Card  id ="card"sx={{ maxWidth: 345,backgroundColor:"lightgray",margin:"auto"}}>
    
      <CardContent sx={{}}>
        <Typography gutterBottom variant="h4" component="div">
          View Post
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
          <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
       
      >
        <Typography> UserId </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {location.state.userId}
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
       
      >
        <Typography> Id</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {location.state.id}
          
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
       
      >
        <Typography> Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {location.state.title}
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Body</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {location.state.body}
        </Typography>
      </AccordionDetails>
    </Accordion>
   
      </CardContent>
      <CardActions>
<Tabs value={value}   onChange={handleChange} aria-label="disabled tabs example">
     <Tab label="share" /> 
      <Tab  onClick={() =>  CommentList (Id)} label="Comments"  />
      <Link to="/us">  <Tab  endIcon={< ArrowBackIcon/>}label="Back" /></Link>
    </Tabs>







        {/* <Button size="small">Share</Button>
        <Button size="smallonClick={"  () => CommentList(commentid)}>coments</Button>
        <Link to="/us"> <Button size="small"endIcon={< ArrowBackIcon/>}> Back 
                </Button></Link> */}
      </CardActions>
</Card>
      </div>
      <br/>
      <div>
      <Card sx={{ maxWidth: 445, backgroundColor: "lightgray", margin: "auto" }}>
      {/* <button style={buttonStyle} type="button" onClick={() => fetchCatBreedList()}>Checkout CATS !!</button> */}

      {u?.data && (
        <div>
          <h4> COMMENT LIST </h4>

        <br/>
            {u?.data.map((item, index) => (
              <p key={index}>
                <div id="ava">
                <Avatar sx={{ backgroundColor: "red" ,marginRight:"20px" }}></Avatar>
                <Typography variant="h5">{item.email} </Typography>
               </div>
                <br />
                <Typography variant="">
                  Id: {item.id}
                  <br />
                  Name:{item.name}
                  <br />
                  Body: {item.body}
                </Typography>
              </p>
            ))}
       
        </div>
      )}
    </Card>
        </div>
</Container>
    
  );
}
const mapStateToProps = (state) => ({ u: state.CommentReducer.user });

const mapDispatchToProps = (dispatch) => {
  return {
    //: () => dispatch(getuseremail())

  CommentList :(Id)=> dispatch(comment(Id))
  };
};
ViewPerPost.propTypes = {
  CommentList: PropTypes.func.isRequired,
  u: PropTypes.objectOf(PropTypes.object)
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewPerPost);

