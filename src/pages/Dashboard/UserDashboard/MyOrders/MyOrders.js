import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-fortress-81213.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [user]);
    let Id = 1;
    const handleDelete = id => {
        const areUsure = window.confirm('Are You Sure, Want To Delete?');
        if (areUsure) {
            fetch(`https://quiet-fortress-81213.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Delete Successful');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                        
                    }
                })
        }
    }
    return (
        <div>
            <h1>Your Orders</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">ProductName</th>
                            <th scope="col">Price</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr>
                                <th scope="row">{Id++}</th>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.phone}</td>
                                <td>{product.address}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Cancel Order</button></td>
                                <td>
                                    { product.pay?'Paid':
                                        <Link to={`/dashboard/pay/${product._id}`}>
                                        <button className="btn btn-success">Pay Now</button>
                                        </Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;