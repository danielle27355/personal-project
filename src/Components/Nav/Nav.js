import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setUser} from "../../ducks/reducer"


import "./Nav.css";

class Nav extends Component {
  render() {
    // console.log("Nav global state: ", this.props);
    return (
      <div className="Nav">
      <p>{this.props.user.username}</p>
      <p>{this.props.character.name}</p>
       <ul class="resNav">
           <li>
               <Link to="/">Home</Link>
           </li>
           {/* <li>
               <Link to="/kitties">View dank cat memes</Link>
           </li> */}
           <li>
               <Link to="/paytowin">PaY t0 w1n!!!</Link>
           </li>
           {/* <li>
               <Link to="/donate">Donate</Link>
           </li> */}
           {/* <li>
               <Link to="/donate">Donate</Link>
           </li> */}
       </ul>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user,
    character: state.character
  }
}
let mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);