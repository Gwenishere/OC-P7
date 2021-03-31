import React from 'react';
import { Avatar } from '@material-ui/core';

function HeaderOption ({avatar, Icon, title}) {

  return(
    <div className="headerOption">
     {Icon && <Icon className="headerOption_icon" />}
     {avatar && <Avatar className="headerOption_icon" src={avatar}/>}
     <p className="headerOption_title">{title}</p>
    </div>
  )
}

export default HeaderOption