import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-fortress-81213.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    let id = 1;

    const handleDelete = id => {
        const areUsure = window.confirm('Are You Sure, Want To Delete?');
        if (areUsure) {
            fetch(`https://quiet-fortress-81213.herokuapp.com/products/${id}`, {
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
            <h1>Manage All Products</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr>
                                <th scope="row">{id++}</th>
                                <td><img style={{ width: "100px", height: "100px" }} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.description.slice(0, 100)}...</td>
                                <td>{product.price} BDT</td>
                                <td><Link to={`manageAllProducts/${product._id}`}><button className="btn btn-success mb-2">Update</button></Link><br /><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;