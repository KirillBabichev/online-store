import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


const CreateType = ({show, onHide}) => {
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
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button value={'outline-danger'} onClick={onHide}>Close</Button>
            <Button value={'outline-success'} onClick={onHide}>Add type</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateType;