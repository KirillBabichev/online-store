import React, { useContext } from 'react';
import {Container, Col, Image, Row, Card,  Button} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'

import star from '../assets/star.png'

const DevicePage = observer(() => {
    const description = []
    const device = {id: 3, name: 'Note 10pro', price: 1100, rating: 5, img: `https://via.placeholder.com/300`}
    return (
        <Container className='mt-3'>
            <Row className='d-flex flex-row'>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                    className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5ox solid lightgray'}}
                    >
                        <h3>{device.price} USD</h3>
                        <Button variant={'outline-dark'}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Device info</h1>
                {description.map((info, index) => (
                    <Row
                    key={info.id}
                    style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>

        </Container>
    );
});

export default DevicePage;