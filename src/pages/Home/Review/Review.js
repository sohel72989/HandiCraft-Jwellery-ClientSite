import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://quiet-fortress-81213.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className="container my-5">
            <h1 className="mb-4 text-color">Testimonials</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <div>
                        <div className="card mb-3 py-3 " >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={review.img} className="img-fluid rounded-circle mt-3 ms-3" style={{ width: "200px" }} alt="..." />
                                </div>
                                <div className="col-md-8 text-md-start">
                                    <div className="card-body">
                                        <h5 className="card-title">{review.name}</h5>
                                        <p className="card-text">{review.description}</p>
                                        <Rating name="read-only" style={{
                                            color: 'goldenrod'
                                        }} value={review.rating} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Review;