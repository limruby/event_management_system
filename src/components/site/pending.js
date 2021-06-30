import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';

const Pending = () => {

return( 
    <section className="section-container">
    <div className="form-container" style={{width:"60%"}}>
        <h3><strong>Please wait for the admin to approve your payment status.</strong></h3>
        <br></br>
        <Link to="/">
            <div className="text-center">
                <a className="btn btn-primary text-uppercase js-scroll-trigger" href="/">
                    Return To Homepage</a>
            </div>
        </Link>
    </div>
    </section>
    );
}
export default Pending;