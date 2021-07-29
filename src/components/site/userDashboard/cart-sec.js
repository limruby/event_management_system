import { useState, useEffect } from "react";
import axiosInstance from '../../../../src/utils/axiosConfig.js';
import OrderHistory from './order-history-sec.js'

function Cart({ data, setData, user }) {
    localStorage.setItem("activeKeys", "Cart")
    const [medalQuantity, setMedal] = useState(0)
    const [bookQuantity, setBook] = useState(0)
    const [bookOnlyQuantity, setBookOnly] = useState(0)
    const [medalSubtotal, setMedalSubtotal] = useState(0)
    const [bookSubtotal, setBookSubtotal] = useState(0)
    const [bookOnlySubtotal, setBookOnlySubtotal] = useState(0)
    const [price, setPrice] = useState(0)

    var cmpy_code = "AA04"
    var zone = "02"
    var product_ID = "149"
    var token = "Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq"

    useEffect(() => {
        if (medalQuantity > 0 || bookQuantity > 0 ||  bookOnlyQuantity > 0) {
            var medalPrice = 50;
            var bookPrice = 70;
            var bookOnlyPrice = 70;
            var total = 0
            var firstpurchase = 0
            if (data.first_purchase === "true" && bookQuantity > 0) {
                firstpurchase = 80
            }
            setMedalSubtotal(medalQuantity * medalPrice)
            setBookSubtotal(bookQuantity * bookPrice + firstpurchase)
            setBookOnlySubtotal(bookOnlyQuantity * bookOnlyPrice)
            total = (medalQuantity * medalPrice + bookOnlyQuantity * bookOnlyPrice + bookQuantity * bookPrice + firstpurchase).toFixed(2)
            setPrice(total)
            // console.log("Medal Quantity:" + medalQuantity + "Total Price" + price)
            // console.log("Book Quantity:" + bookQuantity + "Total Price" + price)
            console.log("Book Only Quantity:" + bookOnlyQuantity + "Total Price" + price)
        } else {
            setMedal(0)
            setBook(0)
            setBookOnly(0)
            setMedalSubtotal(0)
            setBookSubtotal(0)
            setBookOnlySubtotal(0)
            total = 0
            setPrice(total)
            console.log("Empty")
        }
    }, [bookOnlyQuantity, bookQuantity, data.first_purchase, medalQuantity, price]);

    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            account_id: user._id,
            medalQuantity: medalQuantity,
            bookQuantity: bookQuantity,
            bookOnlyQuantity: bookOnlyQuantity,
            total_price: price,
            bill_status: 'N/A',
            email: user.email,
            name: data.name,
            order_date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
        }
        if (price > 0) {
            axiosInstance.post("/iiidentex_uitm/api/cart/addToCart", postData)
                .then(function (response) {
                    if (bookQuantity > 0 && data.first_purchase === "true") {
                        var status = {
                            _id: data._id,
                            first_purchase: "false"
                        }
                        axiosInstance.post("/iiidentex_uitm/api/competitors/update", status)
                            .then(function (response) {                               
                            }).catch(function (error) {
                                console.log(error);
                            })
                    }
                    document.getElementById("uitm_payment_form").submit();
                }).catch(function (error) {
                    console.log(error);
                })
        } else {
            alert("Your cart is empty!")
        }
    }

    var sha1 = require('sha1');
    var hash_value = sha1(token + cmpy_code + zone + product_ID + price + "iiidentex");
    var uitmpay_address = data.address_1 + "," + data.address_2 + "," +  data.postcode + "," +data.city + "," + data.state + "," + data.country
    return (
        <div>
            <div className="order-btn">
                <table>
                    <thead>
                        <tr>
                            <th className="table-center-text">Product</th>
                            <th className="table-center-text">Quantity</th>
                            <th className="table-center-text">Price</th>
                            <th className="table-center-text">Total Price</th>
                        </tr>
                    </thead>
                    {/* Start New Row */}
                    <tbody>
                        <tr>
                            <td>
                                <div className="cart-info table-center-text">
                                    Medal
                                </div>
                            </td>
                            <td>
                                <div className="cart-quantity">
                                    <button className="btn btn-primary cart-button" onClick={() => setMedal(medalQuantity + 1)}>+</button>
                                    <p className="cart-selected-quantity">{medalQuantity}</p>
                                    <button className="btn btn-danger cart-button" onClick={() => setMedal(medalQuantity - 1)}>-</button>
                                </div>
                            </td>
                            <td className="table-center-text">RM 50</td>
                            <td className="table-center-text">RM {medalSubtotal}</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info table-center-text">
                                    BookChapter
                                </div>
                            </td>
                            <td>
                                <div className="cart-quantity">
                                    <button className="btn btn-primary cart-button" onClick={() => setBook(bookQuantity + 1)}>+</button>
                                    <p className="cart-selected-quantity">{bookQuantity}</p>
                                    <button className="btn btn-danger cart-button" onClick={() => setBook(bookQuantity - 1)}>-</button>
                                </div>
                            </td>
                            <td className="table-center-text">RM 150 (First purchase) <br></br>RM 70 (Subsequent purchase)</td>
                            <td className="table-center-text">RM {bookSubtotal}</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info table-center-text">
                                    Book Only
                                </div>
                            </td>
                            <td>
                                <div className="cart-quantity">
                                    <button className="btn btn-primary cart-button" onClick={() => setBookOnly(bookOnlyQuantity + 1)}>+</button>
                                    <p className="cart-selected-quantity">{bookOnlyQuantity}</p>
                                    <button className="btn btn-danger cart-button" onClick={() => setBookOnly(bookOnlyQuantity - 1)}>-</button>
                                </div>
                            </td>
                            <td className="table-center-text">RM 70 </td>
                            <td className="table-center-text">RM {bookOnlySubtotal}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><p className="cart-total">Total :</p></td>
                            <td>
                                <p className="table-center-text">RM {price}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p></p>
                {/* <button class="btn btn-primary order-btn" onClick={handleForm}>Order</button> */}
                <form className="list-group" id="uitm_payment_form" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST" hidden>
                    <input type="text" name="userid" value={data.nric_passport_no} />
                    <input type="text" name="ord_mercref" value={"iiidentex"} />
                    <input type="text" name="name" value={data.name} />
                    <input type="text" name="ic" value={data.nric_passport_no} />
                    <input type="text" name="email" value={user.email} />
                    <input type="text" name="phone" value={data.phone_no} />
                    <input type="text" name="designation" value={data.affiliation} />
                    <input type="text" name="address" value={uitmpay_address} />
                    <input type="text" name="hash_value" value={hash_value} />
                    <input type="number" name="amount" value={price} />
                </form>
                <button class="btn btn-primary order-btn" onClick={handleForm}>Order</button>
            </div>
            <p></p>
            <h2>Order History</h2>
            <OrderHistory></OrderHistory>
        </div>
    )
}
export default Cart;