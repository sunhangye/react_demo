import React from './node_modules/react';

import {NavLink} from './node_modules/react-router-dom'

export default function MyNavLink(props) {
  return <NavLink  {...props} className='list-group-item' activeClassName='activeClass' />
}
