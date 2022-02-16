import React, { useState } from 'react';


import { Button, Modal } from '@mantine/core';


import './WarningModal.css';


const WarningModal = props => {

    return (

        <Modal
            centered
            overflow="inside"
            size={450}
            opened={props.opened}
            radius="lg"
            onClose={props.onClose}
            title={<h3>Warning</h3>}
        >
            <div className='warning-modal-wrapper'>
                <h4>Are you sure you want to delete?</h4>
                <div className="warning-modal__buttons">
                    <Button color='teal' variant="light" compact onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button color='red' variant="light" compact onClick={props.onClose}>
                        Delete
                    </Button>
                </div>
            </div>

        </Modal>


    );
};

export default WarningModal;
