import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';


const Fail = () => {
    
    
  return (
            <div>
            <h3><strong>Payment Fail</strong></h3>
                <br></br>
                <Link to="/sign_in">
           <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_in">Please Login to Make Payment Again</a></div>
                </Link>
            </div>
        )
}

export default Fail;