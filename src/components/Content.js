import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import home from "../assets/image/hero.svg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Row, Col, Radio } from 'antd';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsApp } from "react-icons/bs";

const datas1 = [
    {
        title: "ICEWAYS",
        content: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
    },
    {
        title: "DRIVEWAYS SPORT",
        content: "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."
    },
    {
        title: "DRIVEWAYS COMPETUS H/P",
        content: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
    }
]
const datas2 = [
    {
        title: "DRIVEWAYS SPORT",
        content: "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."
    },
    {
        title: "ICEWAYS",
        content: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
    },
    {
        title: "DRIVEWAYS COMPETUS H/P",
        content: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
    }
]
const datas3 = [
    {
        title: "DRIVEWAYS COMPETUS H/P",
        content: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
    },
    {
        title: "ICEWAYS",
        content: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
    },
    {
        title: "DRIVEWAYS SPORT",
        content: "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."
    }

]
const App = () => {
    const [datas, setDatas] = useState(datas1)
    const [width, setWidth] = useState(window.innerWidth);
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        const val = e.target.value
        if (val === 1) setDatas(datas1)
        if (val === 2) setDatas(datas2)
        if (val === 3) setDatas(datas3)

        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const arrowButton = (type) => {
        if (type === "left") {
            if (value === 1) {
                setValue(3)
                setDatas(datas3)
            }
            if (value === 2) {
                setValue(1)
                setDatas(datas1)
            }
            if (value === 3) {
                setValue(2)
                setDatas(datas2)
            }
        }
        if (type === "right") {
            if (value === 1) {
                setValue(2)
                setDatas(datas2)
            }
            if (value === 2) {
                setValue(3)
                setDatas(datas3)
            }
            if (value === 3) {
                setValue(1)
                setDatas(datas1)
            }
        }
    }

    useEffect(() => {
        const updateWindowDimensions = () => {
            const width = window.innerWidth;
            setWidth(width - 120);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    const cards = datas.map((data) => {
        return (<Col xs={{ span: 20, offset: 2 }} md={{ span: 6, offset: 1 }}>
            <Card >
                <Card.Body>
                    <Card.Title className='navbarTitle text-left  font-weight-bold'>{data.title}</Card.Title>
                    <Card.Text className='navbarTitle text-left h6'>
                        {data.content}
                    </Card.Text>
                    <Card.Link>
                        <ButtonGroup aria-label="Basic example">
                            <Button style={{ backgroundColor: "#FDE4E5", color: "#ED1C24" }} className='mr-2 border-0' size='md'>Learn More</Button>
                            <Button className='bg-danger border-0' size='md'>Find a Dealer</Button>
                        </ButtonGroup>

                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
        )
    })

    return (
        <div >
            <div>
                <img style={{ width: width - 16 }} alt="home" src={home}></img>
            </div>
            <div className='navbarTitle f16 my font-weight-bold'>
                Featured Products
            </div>
            <Row align='middle'>
                {width > 800 &&
                    <Col xs={{ span: 1 }} >
                        <Button onClick={() => arrowButton("left")} style={{ backgroundColor: "#400E03", border: "none" }}>
                            <AiOutlineArrowLeft />
                        </Button>

                    </Col>
                }

                {cards}
                {width > 800 &&

                    <Col xs={{ span: 1, offset: 1 }}>
                        <Button onClick={() => arrowButton("right")} style={{ backgroundColor: "#400E03", border: "none" }}><AiOutlineArrowRight /></Button>
                    </Col>
                }

            </Row>
            <Row justify='center'>
                <Col>
                    <Radio.Group style={{ color: "pink" }} onChange={onChange} value={value}>
                        <Radio value={1}></Radio>
                        <Radio value={2}></Radio>
                        <Radio value={3}></Radio>
                    </Radio.Group>


                </Col>
            </Row>
            <Row style={{ backgroundColor: "#434448", padding: 50 }} align="middle">
                <Col style={{ fontSize: 42 }} className='text-white text-left' xs={12}>Feel the excellent wet braking with Driveways!</Col>
                <Col xs={{ span: 4, offset: 8 }}>
                    <Button size='lg' style={{ backgroundColor: "#FFFFFF", color: "#ED1C24", border: "none" }}>Watch All Videos</Button>
                </Col>

                <Col>
                    <iframe width={width < 800 ? width - 20 : width - 120} height="800" src="https://www.youtube.com/embed/fgXgcLIIsjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </div>
    );

}


export default App