import { useQuiz } from "../context/QuizContext";

const Option = ({ question }) => {
  const { dispatch, answer} = useQuiz();

  const hasAnswer = answer !== null;

  // if (status !== "ready") return;


  return (
    <div className="option">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer} ? answer : "" ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
