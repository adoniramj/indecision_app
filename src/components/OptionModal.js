import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => { 
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.closeModal}
            ariaHideApp={false}
            contentLabel="Selected option"
        >
            <h3>Selected option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.closeModal}>Close</button>
        </Modal>
    )
}

export { OptionModal }