import React from 'react';

function InfoModal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                {content.image && <img src={content.image} alt="Detail" className="modal-image" />}
                <p>{content.text}</p>
            </div>
        </div>
    );
}

export default InfoModal;
