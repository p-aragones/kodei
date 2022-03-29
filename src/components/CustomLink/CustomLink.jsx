import * as React from 'react';
import './CustomLink.scss';

import {Link} from 'react-router-dom';

const CustomLink = (props) => {
  return (
    <Link className='CustomLink' to={props.link}>
        {props.children}
    </Link>
  );
};

export default CustomLink;