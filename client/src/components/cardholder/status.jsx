import React, { useState } from "react";
import creditcard from '../../creditcard.png';
import { useEffect } from "react";
import Axios from 'axios';

export default function Status() {

    let [cclist, setCCList] = useState([]);

    let account = JSON.parse(localStorage.getItem('acc-info'));

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getcc').then((response)=>{
        setCCList(response.data);
        });
    }, []);

    const ccdetails = cclist.filter((val)=>(val.username == account.username)
    ).map(val => {
        return(
            <div>
            <h5>{"Card number: "+ val.cardnumber}</h5>
            <h5>{"Expiry date: "+ val.expdate}</h5>
            <h5>{"Limit      : Rs."+ val.maxlimit}</h5>
            <h5>{"CVV        : "+ val.cvv}</h5>
            </div>
        );
    });

        return (
           <div>
               {account.Accstatus === 'processing'? 
               <h4>Application is being Processed...</h4>
               :
               <div>
                <h3>Credit Card Issued</h3>
                <div>
                    <img src={creditcard} alt="credit card" width="300" height="200"/>
                    {ccdetails}
                </div>
               </div>

               }
           </div>
        );
    }
