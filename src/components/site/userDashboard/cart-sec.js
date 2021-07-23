import { useState, useEffect } from "react";
import axiosInstance from '../../../../src/utils/axiosConfig.js';
import OrderHistory from './order-history-sec.js'

function Cart({ data, setData, user }) {
    localStorage.setItem("activeKeys", "Cart")
    const [medalQuantity, setMedal] = useState(0)
    const [bookQuantity, setBook] = useState(0)
    const [medalSubtotal, setMedalSubtotal] = useState(0)
    const [bookSubtotal, setBookSubtotal] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (medalQuantity > 0 || bookQuantity > 0) {
            var medalPrice = 50;
            var bookPrice = 70;
            var total = 0
            var firstpurchase = 0
            if (data.first_purchase === "true" && bookQuantity > 0) {
                firstpurchase = 30
            }
            setMedalSubtotal(medalQuantity * medalPrice)
            setBookSubtotal(bookQuantity * bookPrice + firstpurchase)
            total = medalQuantity * medalPrice + bookQuantity * bookPrice + firstpurchase
            setPrice(total)
            console.log("Medal Quantity:" + medalQuantity + "Total Price" + price)
            console.log("Book Quantity:" + bookQuantity + "Total Price" + price)
        } else {
            setMedal(0)
            setBook(0)
            setMedalSubtotal(0)
            setBookSubtotal(0)
            total = 0
            setPrice(total)
            console.log("Empty")
        }
    }, [bookQuantity, data.first_purchase, medalQuantity, price]);

    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            account_id: user._id,
            medalQuantity: medalQuantity,
            bookQuantity: bookQuantity,
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
                    alert("Order confirmed, please wait for the billing invoice.")
                    window.location.href = '/user_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
        } else {
            alert("Your cart is empty!")
        }
    }
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
                            <td className="table-center-text">RM 100 (First purchase) <br></br>RM 70 (Subsequent purchase)</td>
                            <td className="table-center-text">RM {bookSubtotal}</td>
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
                <button class="btn btn-primary order-btn" onClick={handleForm}>Order</button>
            </div>
            <p></p>
            <h2>Order History</h2>
            <OrderHistory></OrderHistory>
        </div>
    )
}
export default Cart;