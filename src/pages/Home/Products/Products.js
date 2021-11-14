import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Prosucts.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
                setProducts(data));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-color">Our Popular Products</h1>
            <p className="pb-3">Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact! Deep Impact Shaving Foam.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.slice(0, 6).map(product => <div className="col text-start">
                        <div className="card h-100 border-0">
                            <img src={product.img} className="card-img-top img-height" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-color">{product.name}</h5>
                                <p className="card-text">{product.description.slice(0, 250).toString().replace(/,/g, ' ')}...</p>
                                <div className="d-flex justify-content-between">
                                    <h4 style={{ color: "slategray" }}>{product.price} BDT</h4>
                                    <Link to={`/home/${product._id}`}><button className='btn btn-purchase'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Products;