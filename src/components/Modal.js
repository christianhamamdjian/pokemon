import React, { useState } from 'react';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                }`}
        >
            <div className='modal-container'>
                <h3>modal content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    X
                </button>
            </div>
        </div>
    );
};

export default Modal;