import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import WarmUp from "./WarmUp";
import questionsData from '../data/input.json';

const SEC_PER_QUES = 60;

const initialState = {
  questions: [],
  //"loading", "error","ready", "active", "finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  confidence: 0,
  secRemaining: null,
  showInfoButton: true,

};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secRemaining: state.questions.length * SEC_PER_QUES,
        showInfoButton: true,
      };
    case "base":
      return {
        ...state,
        status: "active", // Or another status if needed
        secRemaining: state.questions.length * SEC_PER_QUES,
        showInfoButton: false, // Control visibility of the info button
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        confidence: state.confidence + 3
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secRemaining: state.secRemaining - 1,
        status: state.secRemaining === 0 ? "finished" : state.status,
      };
    case "prepare":
      return {...state, status: "preparing"};
    case "setConfidence":
      return {
        ...state,
        confidence: state.confidence + (action.payload-3),
      };
    case "aiOnly":
      return {
        ...state,
        status: "finished",
        points: 160,
        confidence: 100,
        secRemaining: 1200,
      };
    default:
      throw new Error("Action Unknown");
  }
}


export default function App() {
  const [{ questions, status, index, answer, points, secRemaining, confidence ,showInfoButton }, dispatch] =
    useReducer(reducer, initialState);

  const numQues = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    // Simulate loading data asynchronously
    setTimeout(() => {
      const shuffledQuestions = shuffleArray(questionsData.questions);
      dispatch({ type: "dataRecieved", payload: shuffledQuestions });
    }, 500); // simulate delay
  }, []);

  const initialTime = questions.length * SEC_PER_QUES;
  return (
    <div className="app">
      <Header dispatch={dispatch} />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQues={numQues} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQues={numQues}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              showInfoButton={showInfoButton}
            />
            <Footer>
              <Timer dispatch={dispatch} secRemaining={secRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQues={numQues}
              />
            </Footer>
          </>
        )}
        {status === "preparing" && <WarmUp dispatch={dispatch} />}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            confidence={confidence}
            timeTaken={initialTime - secRemaining}
            dispatch={dispatch}

          />
        )}
      </Main>
    </div>
  );
}
