import React from 'react';

const Footer = () => {
    return (

        <div className="py-5"
            style={{ backgroundColor: "#243238" }}>
            <div className="container text-light">
                <h1 style={{ color: "lightgreen" }}>JWELLERY.COM</h1>
                <hr />
                <div className="row mt-4" style={{
                    color: 'lightgray'
                }}>
                    <div className="col-md-4">
                        <div className="text-start">
                            <h4>GET IN TOUCH</h4>
                            <p><span className="fas fa-map-marker-alt"></span> G5 Technology JSC, Room 1101, Glory Palace Apartment, Truong Thi Ward, Vinh City, Nghe An Province, VietNam(42000).</p>
                            <p><i className="fas fa-phone-alt"></i> (+84) 388-969-888</p>
                            <p><i className="fas fa-envelope-open-text"></i> admin@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-start">
                            <h4>CONTACT US</h4>
                            <p>About Us</p>
                            <p>See More</p>
                            <p>Connect with us</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-start">
                        <h4>ASK A QUESTION</h4>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="Description" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <hr />
                <p style={{
                    color: 'lightgray'
                }}>Made by : <a style={{
                    textDecoration: "none",
                    color: "tan"
                }} href="https://www.facebook.com/rana72989/">Sohel Rana</a> </p>
            </div>
        </div >
    )
};

export default Footer;