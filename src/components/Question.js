import React, { useState } from 'react';
import Options from "./Options";
import InfoModal from './InfoModal';
import ConfidenceSlider from './ConfidenceSlider';
import '../style/box.css';

function Question({ question, dispatch, answer, showInfoButton }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleConfidenceChange = (level) => {
        console.log("Confidence Level:", level); // You can replace this with any action you need
    };

    return (
        <div className="question-container">
            <div className="question-header">
                <h4>{question.question}</h4>
                {showInfoButton && (
                    <button className="info-button" onClick={openModal} style={{marginLeft: '10px'}}>
                        <img src="/ai.jpg" alt="Info" style={{width: '20px', height: '20px'}}/>
                    </button>
                )}
            </div>
            {question.image && (
                <img
                    src={question.image}
                    alt={`Image for question: ${question.question}`}
                    className="img-center"
                />
            )}
            <Options question={question} dispatch={dispatch} answer={answer} />
            <ConfidenceSlider onChange={handleConfidenceChange} />
            <InfoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={{
                    image: 'https://www.lyricbirdfood.com/media/1869/indigo-bunting.jpg', // Example images URL
                    text: 'Here is some additional information about the question.'
                }}
            />
        </div>
    );
}

export default Question;

