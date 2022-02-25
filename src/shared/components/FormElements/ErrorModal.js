import React from 'react';


import { Button, Modal } from '@mantine/core';


import './ErrorModal.css';


const ErrorModal = props => {


    return (

        <Modal
            centered
            overflow="inside"
            size={450}
            opened={props.opened}
            radius="lg"
            onClose={props.onClose}
            title={<h3>Error</h3>}
        >
            <div className='warning-modal-wrapper'>
                <h4>An error occurred.</h4>
                <p>{props.error}</p>
                <div className="warning-modal__buttons">
                    <Button color='teal' variant="light" compact onClick={props.onClose}>
                        Ok
                    </Button>
                </div>
            </div>

        </Modal>


    );
};

export default ErrorModal;
