import React, { useState } from "react";
import creditcard from '../../creditcard.png';
import Axios from 'axios';

export default function IssueCreditCard () {
    const [username, setUsername] = useState(null);
    const [cardnumber, setCardnumber] = useState(null);
    const [expdate, setExpdate] = useState(null);
    const [cvv, setCVV] = useState(null);
    const [limit, setLimit] = useState(null);


    const submitForm = () => {
        Axios.post("http://localhost:3001/api/issuecard",{
            username: username,
            cardnumber: cardnumber,
            expdate: expdate,
            cvv: cvv,
            limit: limit,
        }).then(()=>{
            alert("Successful insert");
        });
    };

    return (
        <form>
            <h3>Issue CreditCard </h3>

            <div style={{alignSelf:"center", paddingLeft:"20px"}}>
                <img  title="ccimage" src={creditcard} alt="credit card" width="300" height="200"/>
            </div>

            <div className="form-group">
                <input type="text" title="name" className="form-control" placeholder="Cardholder name" onChange={(e)=>{setUsername(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" title="cardnumber" className="form-control" placeholder="Issue Cardnumber" onChange={(e)=>{setCardnumber(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" title="expdate" className="form-control" placeholder="Issue Expiry Date" onChange={(e)=>{setExpdate(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" title="cvv" className="form-control" placeholder="Issue CVV" onChange={(e)=>{setCVV(e.target.value)}} />
            </div>

            <div className="form-group">
                <input type="text" title="limit" className="form-control" placeholder="Issue Limit" onChange={(e)=>{setLimit(e.target.value)}} />
            </div>

            <button type="submit" title="submit-btn" className="btn btn-primary btn-block" onClick={submitForm} >Issue CreditCard</button>
        </form>
    );
}
