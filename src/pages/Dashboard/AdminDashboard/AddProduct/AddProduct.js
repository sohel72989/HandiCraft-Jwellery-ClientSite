import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        // use AXIOS for post into data base
        axios.post('https://quiet-fortress-81213.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <h1>add A Product</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <input className="w-50 mb-3 p-2"  {...register("img")} type="text" placeholder="image URL" required />
                    <input className="w-50 mb-3 p-2" {...register("name")} type="name" placeholder="Package Name" required />
                    <textarea className="w-50 mb-3 p-2"  {...register("description")} type="text" placeholder="Description" required />
                    <input className="w-50 mb-3 p-2"  {...register("price")} type="number" placeholder="Price" required />
                    <input className="btn btn-success w-50 mb-3 p-2" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;