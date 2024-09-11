const Option = ({ questions, dispatch, answer }) => {
  const hasAnswer = answer !== null

  return (
    <div className="option">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer} ? answer : "" ${
            hasAnswer
              ? index === questions.correctOption
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
