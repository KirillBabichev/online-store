import React, {useContext, useEffect} from 'react';
import {Container,Col, Row} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { Context } from '..';
import { fetchTypes } from '../api/typesApi';
import { fetchBrands } from '../api/brandsApi';
import { fetchDevices } from '../api/deviceApi';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {devices} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then((data)=> devices.setTypes(data))
        fetchBrands().then((data)=> devices.setBrands(data))
        fetchDevices(null, null, 1, 2).then((data)=> {
            devices.setDevices(data.rows);
            devices.setTotalCount(data.count);
        })
    },[]);

    useEffect(()=> {
        fetchDevices(devices.selectedTypes.id, devices.selectedBrand.id, devices.page, 2).then((data)=> {
            devices.setDevices(data.rows);
            devices.setTotalCount(data.count);
        })
    },[devices.page, devices.selectedTypes, devices.selectedBrand, devices]);


    
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;