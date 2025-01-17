import { useQuiz } from "../context/QuizContext";

const Progress = () => {

  const {
  index,
  numQuestions,
  maxPossiblePoints,
  answer,
  points,
} = useQuiz()

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index}</strong>/{numQuestions}
      </p>

      <p>
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
