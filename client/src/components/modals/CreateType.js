import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { createType } from '../../api/typesApi';


const CreateType = ({show, onHide}) => {
    const[value, setValue] = useState('')

    const addType = () => {
        try {
            createType({name: value}).then(()=> {
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
              Add new type
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                    placeholder={'Enter type name'}
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button value={'outline-danger'} onClick={onHide}>Close</Button>
            <Button value={'outline-success'} onClick={addType}>Add type</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateType;