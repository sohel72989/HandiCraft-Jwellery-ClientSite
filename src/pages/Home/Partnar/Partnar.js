import React from 'react';
import client1 from '../../../img/client/partner1.png';
import client2 from '../../../img/client/partner2.png';
import client3 from '../../../img/client/partner3.jpg';
import client4 from '../../../img/client/partner4.png';

const Partnar = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "white" }}>
            <h1 className="text-color">Our Honorable Partner</h1>
            <div className="mt-5">
                <img src={client1} alt="" />
                <img src={client2} alt="" />
                <img src={client3} alt="" />
                <img src={client4} alt="" />
            </div>
        </div>
    );
};

export default Partnar;