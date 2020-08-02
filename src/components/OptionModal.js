import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => { 
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.closeModal}
            ariaHideApp={false}
            closeTimeoutMS={100}
            contentLabel="Selected option"
            className='modal'
        >
            <h3 className='modal__title'>Selected option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='button' onClick={props.closeModal}>Close</button>
        </Modal>
    )
}

export { OptionModal }