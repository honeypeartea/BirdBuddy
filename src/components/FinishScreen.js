function FinishScreen({ points, totalPoints, timeTaken, dispatch }) {
    const perc = (points / totalPoints) * 100;

    // Calculate minutes and seconds from timeTaken
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    return (
        <>
            <p className="result">
                You scored <strong>{points}</strong> out of {totalPoints} <strong>({Math.ceil(perc)}%)</strong>
            </p>
            <p className="result">
                Time taken: <strong>{minutes} minutes and {seconds} seconds</strong>
            </p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Restart
            </button>
        </>
    );
}

export default FinishScreen;