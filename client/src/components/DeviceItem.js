import React from 'react';
import {Col, Card, Image} from 'react-bootstrap';
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className='mt-1 d-flex justify-content-between align-item-center'>
                <div>Samsung...</div>
                    <div className='d-flex align-item-center'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;