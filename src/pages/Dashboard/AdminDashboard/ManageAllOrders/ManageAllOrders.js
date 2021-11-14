import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-fortress-81213.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
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
            <h1>Manage All Orders</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product Id</th>
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
                                <td>{product.phone}</td>
                                <td>{product.address}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;