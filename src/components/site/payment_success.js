import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';

const Success = () => {
    
var competitor_id = ""
    if (localStorage.getItem('competitor_id')) {
        
        const string = localStorage.getItem('competitor_id').substring(1, localStorage.getItem('competitor_id').length-1);
        const competitor_id = {competitor_id:string};
        axiosInstance.post('/api/competitors/updatePayment', competitor_id)
        .then(
            res => {"COMPETITOR POST SUCCESS"}
        ).catch(err => {console.log(err)})
        }
    else if (localStorage.getItem('sponsor_id')) {
        
            const string = localStorage.getItem('sponsor_id').substring(1, localStorage.getItem('sponsor_id').length-1);
            console.log("SPONSOR payment_success PAGE "+string)
            const sponsor_id = {sponsor_id:string};
            console.log("Payment success"+ sponsor_id)
            axiosInstance.post('/api/sponsors/updatePayment', sponsor_id)
            .then(
                res => {"SPONSOR POST SUCCESS"}
            ).catch(err => {console.log(err)})
            }
    var cmpy_code = "AA04"
    var zone = "02"   
    var token = "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq"
    var product_ID = "149"
    var sha1 = require('sha1');
    var hash_value = sha1(token + cmpy_code + zone + product_ID + competitor_id);  

    var url = "https://uitmpay.uitm.edu.my/api/payment/AA04/02/149/" + competitor_id
    
    window.onload=function(){
        function submitform(){
            alert('updateDB');
            document.forms["uitmUpdate"].submit();
          }

    }
  return (
            <div>
            <h3><strong>Account Created Successfully!</strong></h3>
                <br></br>
                <Link to="/sign_in">
                <form className="list-group" id="uitmUpdate" action={url} method="POST">
                    <input type="text" name="hash" value={hash_value} hidden/>
                   </form>
           <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Please Sign In Here</a></div>
                </Link>
            </div>
        )
}
export default Success;