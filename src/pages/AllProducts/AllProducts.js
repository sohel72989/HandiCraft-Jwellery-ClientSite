import Header from '../Shared/Header/Header';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-fortress-81213.herokuapp.com/products')
            .then(res => res.json())
            .then(data =>
                setProducts(data));
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container py-5 mt-5">
                <h1 className="text-color">Our All Products</h1>
                <p className="pb-3">Jewelry or jewelry consists of decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks. Jewellery may be attached to the body or the clothes. From a western perspective, the term is restricted to durable ornaments, excluding flowers for example. For many centuries metal such as gold often combined with gemstones, has been the normal material for jewellery, but other materials such as shells and other plant materials may be used..</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <div className="col text-start">
                            <div className="card h-100 border-0">
                                <img src={product.img} className="card-img-top img-height" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}...</p>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="text-color">{product.price} BDT</h4>
                                        <Link to={`/home/${product._id}`}><button className='btn btn-purchase'>Purchase</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;