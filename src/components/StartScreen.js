import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function StartScreen({ numQues, dispatch }) {
    const [name, setName] = useState(localStorage.getItem('userName') || '');
    const [isNameSubmitted, setIsNameSubmitted] = useState(!!name);

    const handleNameChange = (event) => {
        setName(event.target.value); // Update name state but don't set local storage yet
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && name.trim()) {
            setIsNameSubmitted(true); // Set name as submitted
            localStorage.setItem('userName', name); // Now set in local storage
            event.preventDefault(); // Prevent form submission which reloads the page
        }
    };

    const resetName = () => {
        localStorage.removeItem('userName'); // Remove name from local storage
        setName(''); // Clear the name in the component state
        setIsNameSubmitted(false); // Reset submission state
    };

    return (
        <div className="start">
            <h2>AI-Assisted Bird Classification</h2>
            <h3>
                Test your knowledge of Bird Species Classification with AI help for {numQues} questions
            </h3>
            {!isNameSubmitted ? (
                <TextField
                    label="Enter your name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                    onKeyPress={handleKeyPress}
                    fullWidth
                    autoFocus
                    sx={{
                        maxWidth: '300px', // Limit the width of the input
                        marginTop: '20px',
                        marginBottom: '20px',
                        '& .MuiInputBase-input': {
                            color: 'white' // Set the text color to white
                        },
                        '& label': {
                            color: 'gray'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'gray',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        }
                    }}
                />
            ) : (
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h4>Welcome, {name}</h4>
                    <IconButton onClick={resetName} sx={{color: 'grey', marginLeft: '10px',marginBottom: '2.4rem'}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            )}
            <div className="button-container">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch({type: "prepare"})}
                    sx={{borderRadius: 16, padding: '10px 20px', fontSize: '2rem', minWidth: 140, height: 50 }}
                >
                    Warm Up
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        borderRadius: 16,
                        padding: '10px 20px',
                        fontSize: '2rem',
                        minWidth: 140,
                        height: 50
                    }}
                    onClick={() => dispatch({type: "start"})}
                >
                    Start with AI
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{
                        borderRadius: 16,
                        padding: '10px 20px',
                        fontSize: '2rem',
                        minWidth: 140,
                        height: 50
                    }}
                    onClick={() => {
                        dispatch({type: "base"});
                        // Optionally pass the name to your dispatch or context if needed elsewhere
                    }}
                >
                    Start
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        borderRadius: 16,
                        padding: '10px 20px',
                        fontSize: '2rem',
                        minWidth: 140,
                        height: 50
                    }}
                    onClick={() => dispatch({type: "start"})}
                >
                    Review
                </Button>
            </div>
        </div>
    );
}

export default StartScreen;
