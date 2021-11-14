import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Collection.css'
import image1 from '../../../img/collection/c-ring.jpg';
import image2 from '../../../img/collection/d-neckless.jpg';
import image3 from '../../../img/collection/earing.jpg';
import image4 from '../../../img/collection/image4.jpg';
import image5 from '../../../img/collection/image5.jpg';
import image6 from '../../../img/collection/v-necklace.jpg';
import image7 from '../../../img/collection/image7.jpg';
import image8 from '../../../img/collection/image8.jpg';

const Collection = () => {
    return (
        <div className="container">
            <h1 className="text-color mt-5">Our New Collection</h1>
            <Row xs={1} md={2} className="g-4">
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Monochome Ring</span>
                            <Card.Img variant="top" src={image1} />
                        </a>
                    </Card>

                </Col>
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Splash Necklace</span>
                            <Card.Img variant="top" src={image2} />
                        </a>
                    </Card>

                </Col>
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Slive Earing</span>
                            <Card.Img variant="top" src={image3} />
                        </a>
                    </Card>

                </Col>
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Golden Marve Ring</span>
                            <Card.Img variant="top" src={image4} />
                        </a>
                    </Card>

                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Leaf Earing</span>
                            <Card.Img variant="top" src={image5} />
                        </a>
                    </Card>

                </Col>
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Circ Earing</span>
                            <Card.Img variant="top" src={image6} />
                        </a>
                    </Card>

                </Col>
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Round Ring</span>
                            <Card.Img variant="top" src={image7} />
                        </a>
                    </Card>

                </Col>
                <Col className="thumb">
                    <Card>
                        <a href="#">
                            <span>Shah Ring</span>
                            <Card.Img variant="top" src={image8} />
                        </a>
                    </Card>

                </Col>
            </Row>

        </div>

    );
};

export default Collection;