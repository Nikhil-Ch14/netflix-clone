import './Nav.css';
import React from 'react';
import { useEffect } from 'react';

function Nav(){

    return(
        <div className="nav">

          <img
  className="nav__logo"
  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  alt="Netflix Logo"
/>

<img
  className="nav__avatar"
  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
  alt="User Avatar"
/>      
    
     </div>
    );


}

export default Nav