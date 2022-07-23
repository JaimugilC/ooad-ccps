import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Datatable from "./datatable";

export default function ViewCreditCard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getcc').then((response)=>{
        setData(response.data);
        });
    }, []);

        return (
            <div>
                <div>
                    <h3>Issued Credit Cards</h3>
                </div>
                <div>
                    <Datatable data={data} />
                </div>
           </div>
        );
    }
