import React, { useContext, useState, useEffect } from 'react';
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap';
import { observer } from 'mobx-react-lite'

import { Context } from '../../';
import { fetchBrands } from '../../api/brandsApi';
import { createDevice } from '../../api/deviceApi';
import { fetchTypes } from '../../api/typesApi';


const CreateDevice = observer(({show, onHide}) => {
    const {devices} = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    useEffect(()=>{
        fetchTypes().then((data)=> devices.setTypes(data))
        fetchBrands().then((data)=> devices.setBrands(data))
    },[]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map((item) => item.number === number ? {...item, [key]: value} : item))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', devices.selectedBrand.id);
        formData.append('typeId', devices.selectedTypes.id);
        formData.append('info', JSON.stringify(info));
        
        try {
            createDevice(formData).then((data)=> onHide())
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add new Device
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className='mt-2 md-2'>
                    <Dropdown.Toggle>{devices.selectedTypes.name || "Choose type"}</Dropdown.Toggle>
                    <Dropdown.Menu >
                        {devices.types.map((type) => (
                            <Dropdown.Item 
                                key={type.id}
                                onClick={()=>devices.setSelectedTypes(type)}
                            >
                            {type.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-2 md-2'>
                    <Dropdown.Toggle>{devices.selectedBrand.name || "Choose brand"} </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {devices.brands.map((brand) => (
                            <Dropdown.Item 
                                key={brand.id}
                                onClick={()=>devices.setSelectedBrand(brand)}
                            >
                            {brand.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-3'
                    placeholder={'Enter device name'}
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                 <Form.Control
                    className='mt-3'
                    placeholder={'Enter device price'}
                    type='number'
                    value={price}
                    onChange={(e)=> setPrice(Number(e.target.value))}
                />
                <hr />
                 <Form.Control
                    className='mt-3'
                    placeholder={'Add device image'}
                    type="file"
                    onChange={selectFile}
                />
                <Button
                    className='mt-4'
                    value={'outline'}
                    onClick={()=>addInfo()}
                >
                Add new property
                </Button>

                { 
                    info.map((item) => (
                        <Row className='mt-4' key={item.number}> 
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Enter the property name'
                                    value={item.title}
                                    onChange={(e) => changeInfo('title', e.target.value, item.number )}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Enter the property description'
                                    value={item.description}
                                    onChange={(e) => changeInfo('description', e.target.value, item.number )}
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    value={'outline-danger'}
                                    onClick={()=>removeInfo(item.number)}
                                >
                                    delete
                                </Button>
                            </Col>
                        </Row>
                    ))
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button value={'outline-danger'} onClick={onHide}>Close</Button>
            <Button value={'outline-success'} onClick={addDevice}>Add type</Button>
        </Modal.Footer>
    </Modal>
    );
});

export default CreateDevice;