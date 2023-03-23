import { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import CommentList from "../actions/comments";
import { useEffect } from "react";
import "../Components/coments.css";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const getcomment = ({ CommentList, u }) => {
  console.log(u, "comment");
  useEffect(() => {
    CommentList();
  }, []);
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "lightgray", margin: "auto" }}>
      {/* <button style={buttonStyle} type="button" onClick={() => fetchCatBreedList()}>Checkout CATS !!</button> */}

      {u?.data && (
        <div>
          <h1> COMMENT LIST </h1>

          <ul>
            {u?.data.map((item, index) => (
              <li key={index}>
                <Avatar sx={{ backgroundColor: "red" }}>AK</Avatar>
                <Typography variant="h5"> </Typography>
                <br />
                <Typography variant="">
                  Id: {item.id}
                  <br />
                  Name:{item.name}
                  <br />
                  Body: {item.body}{" "}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>

    // <Fragment>

    //   {/* //  <Card> */}
    //       <Avatar sx={{backgroundColor:'red' }}>AK</Avatar>
    //       <Typography variant="h5">  Login</Typography>
    //       {u?.data && (
    //         <div className=" ">
    //           <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
    //             <div className="mainc">
    //               <div>
    //                 <h3 className="title"> Post Comment Details </h3>
    //               </div>

    //             </div>
    //           </nav>

    //           <div className="table">
    //             <table id="user">
    //               <thead>
    //                 <tr>
    //                   <th>Postid</th>
    //                   <th> Id </th>
    //                   <th>Name</th>
    //                   <th>Email</th>
    //                   <th>Body</th>
    //                   <th>Back</th>
    //                 </tr>
    //               </thead>
    //               <tbody>

    //                  { u?.data.map((item, index) => (
    //                 //   <p key={index}></p>
    //                 //   <Avatar sx={{backgroundColor:'red' }}>AK61</Avatar>
    //                 //   <Typography variant="h5">  Login</Typography>

    //                 //   <Typography variant="">

    //                 //   {item.name},
    //                 //   {item.email},
    //                 //   {item.body}  </Typography>

    //                 //   <Avatar sx={{backgroundColor:'red' }}>AK62</Avatar>
    //                 //   <Typography variant="h5">  Login</Typography>

    //                 //   <Typography variant="">

    //                 //   {item.name},
    //                 //   {item.email},
    //                 //   {item.body}  </Typography>

    //                 //   <Avatar sx={{backgroundColor:'red' }}>AK63</Avatar>
    //                 //   <Typography variant="h5">  Login</Typography>

    //                 //   <Typography variant="">

    //                 //   {item.name},
    //                 //   {item.email},
    //                 //   {item.body}  </Typography>

    //                 //   <Avatar sx={{backgroundColor:'red' }}>AK64</Avatar>
    //                 //   <Typography variant="h5">  Login</Typography>

    //                 //   <Typography variant="">

    //                 //   {item.name},
    //                 //   {item.email},
    //                 //   {item.body}  </Typography>

    //                 //   <Avatar sx={{backgroundColor:'red' }}>AK65
    //                 //   </Avatar>
    //                 //   <Typography variant="h5">  Login</Typography>

    //                 //   <Typography variant="">

    //                 //   {item.name},
    //                 //   {item.email},
    //                 //   {item.body}  </Typography>

    //                   <tr key={index}>
    //                     <td>{item.postId}</td>
    //                     <td>{item.id}</td>
    //                     <td>{item.name}</td>
    //                     <td>{item.email}</td>
    //                     <td>{item.body}</td>

    //                     <td><Link to="/us" ><ArrowBackIcon/></Link></td>
    //                     {/* //<td>

    //                    // <Link
    //                       to="Comment">
    //                       <VIcon />
    //                     </Link>
    //                     </td> */}
    //                   </tr>
    //                 ))}
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //       )}
    //     </Fragment>
    //<Card/>
  );
};
const mapStateToProps = (state) => ({ u: state.CommentReducer.user });

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      CommentList
    },
    dispatch
  );
}
getcomment.propTypes = {
  CommentList: PropTypes.func.isRequired,

  u: PropTypes.objectOf(PropTypes.object)
};
export default connect(mapStateToProps, mapDispatchToProps)(getcomment);
