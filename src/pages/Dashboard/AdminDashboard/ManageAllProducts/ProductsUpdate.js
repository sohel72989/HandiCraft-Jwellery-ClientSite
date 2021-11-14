import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductsUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data));
    }, []);

    //Update part
    const chaneImg = e => {
        const updateImg = e.target.value;
        const update = { img: updateImg, name: product.name, description: product.description, price: product.price, duration: product.duration };
        setProduct(update);
    }
    const chaneName = e => {
        const updateName = e.target.value;
        const update = { img: product.img, name: updateName, description: product.description, price: product.price, duration: product.duration };
        setProduct(update);

    }
    const chaneDes = e => {
        const updatedes = e.target.value;
        const update = { img: product.img, name: product.name, description: updatedes, price: product.price, duration: product.duration };
        setProduct(update);
    }
    const chanePrice = e => {
        const updatePrice = e.target.value;
        const update = { img: product.img, name: product.name, description: product.description, price: updatePrice, duration: product.duration };
        setProduct(update);
    }
    const handleUpdate = e => {
        fetch(`http://localhost:5000/products/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update successful')
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <h1>Product Update {id}</h1>
            <div>
                <form onSubmit={handleUpdate} className="d-flex flex-column justify-content-center align-items-center">
                    <input className="w-50 mb-3" type="text" onChange={chaneImg} value={product?.img || ''} />
                    <input className="w-50 mb-3" type="name" onChange={chaneName} value={product?.name || ''} />
                    <textarea className="w-50 mb-3" onChange={chaneDes} type="text" value={product?.description || ''} />
                    <input className="w-50 mb-3" onChange={chanePrice} type="number" value={product?.price || ''} />

                    <input className="w-50 mb-3" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default ProductsUpdate;