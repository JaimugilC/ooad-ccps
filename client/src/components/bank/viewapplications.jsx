import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Datatable from "./datatable";

export default function Applications() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/applications').then((response)=>{
        setData(response.data);
        });
    }, []);

        return (
           <div>
               <h3>Applications</h3>
               <Datatable data={data} />
           </div>
        );
    }
