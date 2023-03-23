import { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EIcon from "@mui/icons-material/Edit";
import DIcon from "@mui/icons-material/Delete";
import VIcon from "@mui/icons-material/Visibility";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import {  Card,Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import getuserList from "../../actions/Post";
import deletePost from "../../actions/delet";
import Addaction from "../../actions/AddPostaction";
import editaction from "../../actions/editaction";
//import User from "../Components/AxiosFetch/Delete";
import "./catbreed.css";
import commentList from "../../actions/comments";
//import deletePost from "../Components/AxiosFetch/Delete";
import { bindActionCreators } from "redux";

import  Container from '@mui/material/Container';
import { useEffect } from "react";
const Post = ({ fetchuserList, funcdelete, editaction, Addaction, user }) => {
  const [editid, seteditid] = useState();
  const [edituserid, setedituserid] = useState();
  const [editedbody, seteditedbody] = useState();
  const [editedtitle, seteditedtitle] = useState();

 
  const [open, setopen] = useState(false);
  const openModel = () => {
    setopen(true);
  };
  const closeModel = () => {
    setopen(false);
  };

  const [postTitle, setpostTitle] = useState();
  const [postBody, setpostBody] = useState();
  const [openaddPost, setopenaddPost] = useState(false);

  const openModelPost = () => {
    setopenaddPost(true);
  };
  const closeModelPost = () => {
    setopenaddPost(false);
  };

  function handleupdate() {
    var edata = { editid, edituserid, editedbody, editedtitle };
    editaction(edata);
    setopen(false);
  }

  function handleAdd() {
    var postdata = { postTitle, postBody };
    Addaction(postdata);
    setopenaddPost(false);
  }

  // const navigate = useNavigate();
  //console.log(u, "");
  useEffect(() => {
    fetchuserList();
  }, []);
  return (
    <Fragment>
      <Container id ="cont"> 
      {/* <button className=" button" type="button" onClick={() => fetchuserList()}> *
     </button>  */}

      {user?.data && (

        <div className=" breed">
          <div>
          
            
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Post List...
          </Typography>
          <Button color="inherit"  onClick={() => setopenaddPost(true)}>AddPost</Button>
         
          
          <Avatar edge="end" sx={{backgroundColor:'red' }}>AK</Avatar>
        </Toolbar>
      </AppBar>
    </Box>

          </div>
          <Container sx={{marginTop:'15px'}}>
          <div className="table">
            <table id="user">
              <thead>
                <tr>
                  <th>Userid</th>
                  <th> Id </th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>view</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {user?.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      {/* <Link to="view" state={{vtitle:item.title,tbody:item.body}} > */}
                      <Link
                        to="View"
                        state={{ 
                          Id:item.id,
                          userId: item.userId,
                          id: item.id,
                          title: item.title,
                          body: item.body
                        }}
                      >
                        <VIcon />
                      </Link>
                    </td>
                    <td>
                      <EIcon
                        className="ediIcon"
                        onClick={() =>
                          openModel(
                            seteditedtitle(item.title),
                            seteditedbody(item.body),
                            seteditid(item.id),
                            setedituserid(item.userId)
                          )
                        }
                      />
                    </td>
                    <td>
                      <DIcon onClick={() => funcdelete({ userid: item.id })} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Modal open={open} onClose={closeModel} className="modelcontainer">
              <div>
                <Card className="cardEdit">
                  <div className="cardhead">Update the Posts</div>
                  <div className="fd">
                    <label>Title</label>
                    <textarea
                      className="textinp"
                      defaultValue={editedtitle}
                      onChange={(e) => {
                        seteditedtitle(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="fd">
                    <label>Body</label>
                    <textarea
                      className="textinp"
                      defaultValue={editedbody}
                      onChange={(e) => {
                        seteditedbody(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <Button
                    className="alin"
                    sx={{ width: "400px" }}
                    variant="contained"
                    size="large"
                    onClick={handleupdate}
                  >
                    Update
                  </Button>
                </Card>
              </div>
            </Modal>
          </div>

          <div>
            <Modal
              open={openaddPost}
              onClose={closeModelPost}
              className="modelcontainer"
            >
              <div>
                <Card className="cardEdit">
                  <div className="cardhead">Add the Posts</div>
                  <div className="fd">
                    <label>Title</label>
                    <textarea
                      className="textinp"
                      onChange={(e) => {
                        setpostTitle(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="fd">
                    <label>Body</label>
                    <textarea
                      className="textinp"
                      v
                      onChange={(e) => {
                        setpostBody(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <Button
                    className="alin"
                    sx={{ width: "400px" }}
                    variant="contained"
                    size="large"
                    onClick={handleAdd}
                  >
                    Post
                  </Button>
                </Card>
              </div>
            </Modal>
          </div>
          </Container>
    
        </div>
        
      )}
     </Container>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({ user: state.PostReducer.user });
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchuserList: getuserList,
      funcdelete: deletePost,
      editaction,
      Addaction,
      commentList
    },
    dispatch
  );
}
Post.propTypes = {
  fetchuserList: PropTypes.func.isRequired,
  funcdelete: PropTypes.func.isRequired,
  Addaction: PropTypes.func.isRequired,
  editaction: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.object)
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
