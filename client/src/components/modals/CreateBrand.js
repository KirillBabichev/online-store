import React, { useState}  from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { createBrand } from '../../api/brandsApi';


const CreateBrand = ({show, onHide}) => {
    const[value, setValue] = useState('')

    const addBrand = () => {
        try {
            createBrand({name: value}).then(()=> {
                setValue('');
                onHide();
            })
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
              Add new Brand
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                    placeholder={'Enter brand name'}
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button value={'outline-danger'} onClick={onHide}>Close</Button>
            <Button value={'outline-success'} onClick={addBrand}>Add brand</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateBrand;