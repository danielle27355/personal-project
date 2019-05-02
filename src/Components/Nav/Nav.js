import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
       <ul>
           <li>
               <Link to="/">Home</Link>
           </li>
           {/* <li>
               <Link to="/donate">Donate</Link>
           </li> */}
       </ul>
      </div>
    );
  }
}

export default Nav;