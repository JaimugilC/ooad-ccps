import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Datatable from "./datatable";

export default function TransferFund() {

    const [data, setData] = useState([]);
    const [balance, setBalance] = useState([]);
    const [amount, setAmount] = useState();

    useEffect(() => {
        Axios.get('http://localhost:3001/api/viewbatch').then((response)=>{
        setData(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/balance').then((response)=>{
        setBalance(response.data);
        });
    }, []);

    const handleTransfer = () => {
        balance.filter((val)=>{
            if(val.username.includes('merchant'))
                return val;
        }).map((val, key) => {
            const total_amount =  parseInt(val.bankbalance) + parseInt(amount);
            submitFund(total_amount);
        })
    };

    function submitFund (amount) {
        Axios.post("http://localhost:3001/api/transferfund",{
            totalAmount: amount,
        }).then(()=>{
            alert("Successful insert");
        });
    };

        return (
            <div>
                <div>
                    <h3>Batches</h3>
                    <Datatable data={data} />
                </div>
                <form>
                <h3 style={{margin:"30px"}}>Transfer fund</h3>
                <div className="form-group">
                    <label>Enter amount to Transfer</label>
                <input type="text" className="form-control" placeholder="Rs."  onChange={(e)=>{setAmount(e.target.value)}} />
                <button type="submit" className="btn btn-primary btn-block"  onClick={handleTransfer}>Transfer fund</button>
                </div>
                </form>
           </div>
        );
    }
