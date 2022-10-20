import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import home from "../assets/image/hero.svg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    const [test, setTest] = useState(1)
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const width = window.innerWidth;
            setWidth(width);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    useEffect(() => {
        setTest(7)
    }, [test])

    useEffect(() => {
        console.log(test)
    }, [test])

    return (
        <>
            <div>
                <img style={{ width: width }} alt="home" src={home}></img>
            </div>
            <div className='navbarTitle f16 my'>
                Featured Products
            </div>
            <div>
                <Row>
                    <Col xs={3}>
                        <Card >
                            <Card.Body>
                                <Card.Title className='navbarTitle'>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 navbarTitle">Card Subtitle</Card.Subtitle>
                                <Card.Text className='navbarTitle'>
                                    City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                                </Card.Text>
                                <Card.Link>
                                    <Button>Learn More</Button>
                                </Card.Link>
                                <Card.Link>
                                    <Button>Find a Dealer</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={3}>

                        <Card >
                            <Card.Body>
                                <Card.Title className='navbarTitle'>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 navbarTitle">Card Subtitle</Card.Subtitle>
                                <Card.Text className='navbarTitle'>
                                    City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                                </Card.Text>
                                <Card.Link>
                                    <Button>Learn More</Button>
                                </Card.Link>
                                <Card.Link>
                                    <Button>Find a Dealer</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={3}>

                        <Card >
                            <Card.Body>
                                <Card.Title className='navbarTitle'>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 navbarTitle">Card Subtitle</Card.Subtitle>
                                <Card.Text className='navbarTitle'>
                                    City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                                </Card.Text>
                                <Card.Link>
                                    <Button>Learn More</Button>
                                </Card.Link>
                                <Card.Link>
                                    <Button>Find a Dealer</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );

}


export default App