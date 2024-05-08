function downloadReport(points, timeTaken, totalConfidence) {
    const csvContent = `Points,Minutes,Confidence\n${points},${Math.floor(timeTaken / 60)},${totalConfidence}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function FinishScreen({ points, totalPoints, confidence, timeTaken, dispatch }) {
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
            <p className="result">
                You overall confidence level <strong>{confidence / 20}</strong>
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginTop: '20px'
            }}>
                <button className="btn btn-ui" onClick={() => downloadReport(points, timeTaken, confidence)}
                        style={{marginRight: 0}}>
                    Download Report
                </button>
                <button className="btn btn-ui" onClick={() => dispatch({type: "restart"})} style={{marginRight: 0}}>
                    Restart
                </button>
            </div>
        </>

    );
}

export default FinishScreen;