import React from 'react';
import client1 from '../../../img/client/client1.png';
import client2 from '../../../img/client/client2.png';
import client3 from '../../../img/client/client3.png';
import client4 from '../../../img/client/client4.png';
import client5 from '../../../img/client/client5.png';
import client6 from '../../../img/client/client6.png';

const Partnar = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "#d4c6d8" }}>
            <h1 className="text-color">Our Honorable Partner</h1>
            <div className="mt-5">
                <img src={client1} alt="" />
                <img src={client2} alt="" />
                <img src={client3} alt="" />
                <img src={client4} alt="" />
                <img src={client5} alt="" />
                <img src={client6} alt="" />
            </div>
        </div>
    );
};

export default Partnar;