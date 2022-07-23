import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Axios from 'axios';

export default function ShoppingCart() {

    const [cclist, setCCList] = useState([]);
    const [item, setItem] = useState(0);
    const [paymentSuccessful, setPaymentSuccessful] = useState(true);
    const [username, setUsername] = useState(null);
    const [cardnumber, setCardnumber] = useState(null);
    const [expdate, setExpdate] = useState(null);
    const [cvv, setCVV] = useState(null);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getcc').then((response)=>{
        setCCList(response.data);
        });
    }, []);

    const submitBatch = () => {
        Axios.post("http://localhost:3001/api/sendbatch",{
            username: username,
            cardnumber: cardnumber,
            totalAmount: item.toString(),
        }).then(()=>{
            alert("Successful insert");
        });
    };

    const handlePay = () => {
        setPaymentSuccessful(false);
        cclist.filter((val)=>{
            if(val.username.includes(username))
                return val;
        }).map(val => {
        if(val.cardnumber == cardnumber && val.expdate === expdate && val.cvv === cvv && parseInt(val.maxlimit) >= item){
            submitBatch();
            setPaymentSuccessful(true);
            alert("Payment successful");

        }
        else{
            setPaymentSuccessful(false);
            alert("Payment denied. Enter valid CreditCard details");
        }
    });};

    return (
        <div>
            <h3>Shopping Zone</h3>

            <div className="form-group">
                <div>
                <label>Cell Phone : Price. Rs.5000 </label>
                </div>
                <div>
                <button type="increment" style={{margin:"3px"}} className="btn btn-primary btn-block" onClick={()=> setItem(item+5000)} >+</button>
                <button type="decrement" style={{margin:"3px"}} className="btn btn-primary btn-block" onClick={()=> setItem(item-5000)} >-</button>
                <label style={{display: "block", textAlign:"right"}}>{"Total Amount: "+ item}</label>
                </div>
            </div>
        <form >
            <h3>Payment</h3>

            <div className="form-group">
                {!paymentSuccessful && <label style={{color:"red"}}>Please enter a valid CreditCard details</label>}
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Cardholder name" onChange={(e)=>{setUsername(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Cardnumber" onChange={(e)=>{setCardnumber(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Expiry Date" onChange={(e)=>{setExpdate(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="CVV" onChange={(e)=>{setCVV(e.target.value)}} />
            </div>

            <button type="pay"  className="btn btn-primary btn-block" onClick={handlePay} >Pay</button>
            </form>
        </div>
    );
}