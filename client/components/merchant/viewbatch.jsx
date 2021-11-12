import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Datatable from "./datatable";

export default function ViewBatch() {

    const [data, setData] = useState([]);
    const [balance, setBalance] = useState([]);

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

    const getBalance = balance.filter((val)=>(val.username == 'merchant')
    ).map(val => {
        return(
            <div>
            <h3>{"Bank Balance : "+ val.bankbalance}</h3>
            </div>
        );
    });

        return (
            <div>
                <div>
                    {getBalance}
                </div>
                <div>
                    <h3>Batches</h3>
                    <Datatable data={data} />
                </div>
           </div>
        );
    }
