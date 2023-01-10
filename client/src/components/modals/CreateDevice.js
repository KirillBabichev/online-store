import React, { useContext, useState } from 'react';
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap';

import { Context } from '../../';


const CreateDevice = ({show, onHide}) => {
    const {devices} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number))
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
                    <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {devices.types.map((type) => (
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-2 md-2'>
                    <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {devices.brands.map((brand) => (
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-3'
                    placeholder={'Enter device name'}
                />
                 <Form.Control
                    className='mt-3'
                    placeholder={'Enter device price'}
                    type='number'
                />
                <hr />
                 <Form.Control
                    className='mt-3'
                    placeholder={'Add device image'}
                    type="file"
                />
                <Button
                    className='mt-4'
                    value={'outline'}
                    onClick={()=>addInfo()}
                >
                Add new property
                </Button>

                { 
                    info.map((i) => (
                        <Row className='mt-4' key={i.number}> 
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Enter the property name'

                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Enter the property description'

                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    value={'outline-danger'}
                                    onClick={()=>removeInfo(i.number)}
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
            <Button value={'outline-success'} onClick={onHide}>Add type</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;