import React from 'react';


import { Button, Modal } from '@mantine/core';


import './WarningModal.css';


const WarningModal = props => {

    const confirmHandler  = async () => {
        await props.onConfirm();
        props.onClose();
    }

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
                <h4>{props.message}</h4>
                <div className="warning-modal__buttons">
                    <Button color='teal' variant="light" compact onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button color='red' variant="light" compact onClick={confirmHandler}>
                        Delete
                    </Button>
                </div>
            </div>

        </Modal>


    );
};

export default WarningModal;
