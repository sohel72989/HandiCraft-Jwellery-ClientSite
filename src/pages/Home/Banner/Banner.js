import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner/banner1.jpg';
import banner2 from '../../../img/banner/banner2.jpg';
import banner3 from '../../../img/banner/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 banner-height"
                    src={banner1}
                    alt="First slide"
                />
                <div className="top-left">
                    <h2 className="font-style">BEAUTY ____That Impress____</h2>
                    <p>Enhance your beauty with our jwellery that is both spectacular and affordable.Browes our catelog to find what you prefer..</p>
                    <button className="btn btn-purchase">Explore</button>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 banner-height"
                    src={banner2}
                    alt="Second slide"
                />
                <div className="top-left">
                    <h2 className="font-style">JWELLERY ___That You'll Love___</h2>
                    <p>We provide a wide variety of jwellery,From earring to bracelets.At Olimp,you will surely find even the rarest jwellery.</p>
                    <button className=" btn btn-purchase">Explore</button>
                </div>
            </Carousel.Item>
            <Carousel.Item>

                <img
                    className="d-block w-100 banner-height"
                    src={banner3}
                    alt="Third slide"
                />
                <div className="top-left">

                    <h2 className="font-style">LOVE ___With New Collection___</h2>
                    <p>Your Choice Is Our Best Collection.Purchase The Best jwellery Thats You Love.</p>
                    <button className="btn btn-purchase">Explore</button>
                </div>

            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;