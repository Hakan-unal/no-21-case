import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import home from "../assets/image/hero.svg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
        <div style={{ overflow: "hidden" }}>
            <div>
                <img style={{ width: width }} alt="home" src={home}></img>
            </div>
            <div className='navbarTitle f16 my font-weight-bold'>
                Featured Products
            </div>
            <Row>
                <Col md={{ order: 1 }}>test</Col>
                <Col md={{ order: 2 }}>
                    <Card >
                        <Card.Body>
                            <Card.Title className='navbarTitle text-left  font-weight-bold'>ICEWAYS</Card.Title>
                            <Card.Text className='navbarTitle text-left h6'>
                                City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                            </Card.Text>
                            <Card.Link>
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='mr-2' size='sm'>Learn More</Button>
                                    <Button className='bg-danger border-0' size='sm'>Find a Dealer</Button>
                                </ButtonGroup>

                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{ order: 3 }}>

                    <Card >
                        <Card.Body>
                            <Card.Title className='navbarTitle text-left font-weight-bold'>DRIVEWAYS SPORT</Card.Title>
                            <Card.Text className='navbarTitle text-left h6'>
                                City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                            </Card.Text>
                            <Card.Link>
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='mr-2' size='sm'>Learn More</Button>
                                    <Button className='bg-danger border-0' size='sm'>Find a Dealer</Button>
                                </ButtonGroup>

                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{ order: 4 }}>

                    <Card >
                        <Card.Body>
                            <Card.Title className='navbarTitle text-left  font-weight-bold'>DRIVEWAYS COMPETUS H/P</Card.Title>
                            <Card.Text className='navbarTitle text-left h6'>
                                City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                            </Card.Text>
                            <Card.Link>
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='mr-2' size='sm'>Learn More</Button>
                                    <Button className='bg-danger border-0' size='sm'>Find a Dealer</Button>
                                </ButtonGroup>

                            </Card.Link>

                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{ order: 5 }}>test</Col>

            </Row>
        </div>
    );

}


export default App