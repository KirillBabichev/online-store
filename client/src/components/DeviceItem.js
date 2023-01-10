import React from 'react';
import { useNavigate } from "react-router-dom"
import {Col, Card, Image} from 'react-bootstrap';
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/constants';

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mt-3' onClick={()=>navigate(DEVICE_ROUTE + '/'+ device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className='mt-1 d-flex text-black-50 flex-column justify-content-between align-item-center'>
                <div className='ms-1'>Samsung...</div>
                    <div className='d-flex flex-row'>
                        <div className='ms-1'>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div className='ms-1'>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
