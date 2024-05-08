import React from 'react';

function InfoModal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h4 style={{color: 'black', textAlign: 'center'}}>AI Explanation</h4>
                <button className="close-button" onClick={onClose}>X</button>
                {content.image && <img src={content.image} alt="Detail" className="modal-image"/>}
                <ul>
                    {content.text.map((text, index) => (
                        <li key={index} style={{color: 'black'}}>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InfoModal;
