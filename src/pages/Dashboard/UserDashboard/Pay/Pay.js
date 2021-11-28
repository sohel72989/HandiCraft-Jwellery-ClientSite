import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Pay = () => {
    
    const { productId } = useParams()
    const [order, setOrder] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${productId}`)
            .then(res => res.json())
            .then(data=>setOrder(data))
    }, [productId])
    

    
// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );
  
  const card = (
    <React.Fragment>
          <CardContent>
        <Typography variant="h5" component="div">
         Product Name: {order?.productName}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
          Price: {order?.price}
        </Typography>
        <Typography sx={{ mb: 1.5,fontSize: 20 }} color="text.secondary">
                {order?.name} !! "You Are Paying { order?.price} for purchase this product".
        </Typography>
      </CardContent>
    </React.Fragment>
  );
   
    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
            
        </div>
    );
};

export default Pay;