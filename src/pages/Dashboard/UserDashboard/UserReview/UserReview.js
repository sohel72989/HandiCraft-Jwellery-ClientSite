import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // use AXIOS for post into data base
        axios.post('https://quiet-fortress-81213.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>Review Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center mt-5">
                <input className="w-50 mb-3 p-2" {...register("name")} value={user.displayName} />
                <input className="w-50 mb-3 p-2" {...register("img")} value={user.photoURL} />
                <input className="w-50 mb-3 p-2" {...register("description")} placeholder="Description" />
                <select className="w-50 mb-3 p-2" {...register("rating")}>
                    <option value="female">Rating Us</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className="btn btn-success w-50 mb-3 p-2" type="submit" />
            </form>
        </div>
    );
};

export default UserReview;