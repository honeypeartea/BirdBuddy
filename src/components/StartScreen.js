function StartScreen({ numQues, dispatch }) {
    return (
        <div className="start">
            <h2>AI-Assisted Bird Classification</h2>
            <h3>
                Test your knowledge of Bird Species Classification with AI help for{" "}
                {numQues} questions
            </h3>
            <div className="button-container">
                <button
                    className="btn btn-ui btn-blue"
                    onClick={() => dispatch({type: "start"})}
                >
                    Warm Up
                </button>
                <button
                    className="btn btn-ui btn-red"
                    onClick={() => dispatch({type: "start"})}
                >
                    Start
                </button>
                <button
                    className="btn btn-ui btn-green"
                    onClick={() => dispatch({type: "start"})}
                >
                    Review
                </button>
            </div>
        </div>
    );
}

export default StartScreen;
