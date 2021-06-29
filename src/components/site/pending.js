import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';

const Pending = () => {

return( 
        <div>
        <h3><strong>Pending</strong></h3>
        <br></br>
        <Link to="/">
            <div className="text-center">
                <a className="btn btn-primary text-uppercase js-scroll-trigger" href="/">
                    Please wait for the admin to approve your payment status.</a>
            </div>
        </Link>
    </div>
    );
}
export default Pending;