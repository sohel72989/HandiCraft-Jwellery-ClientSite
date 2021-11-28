import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Pay = () => {
    
    const { productId } = useParams()
    const [order, setOrder] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${productId}`)
            .then(res => res.json())
            .then(data=>setOrder(data))
    },[productId])
   
    return (
        <div>
            <h1>Payment productId:: {productId} </h1>
            
        </div>
    );
};

export default Pay;