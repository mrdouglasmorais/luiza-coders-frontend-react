import React from 'react';
import { Link } from "react-router-dom";

import { FloatContent } from './styles';
import Magalu from '../../assets/images/magalu3.png'

function OmniChannel(){
  return(
    <FloatContent>
      <Link to="/cart">
        <img src={Magalu} alt="omnilogo"/>
      </Link>
    </FloatContent>
  )
}

export default OmniChannel;