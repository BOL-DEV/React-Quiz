import { useQuiz } from "../context/QuizContext";
import Option from "./Option";

const Questions = () => {
  const { questions, index } = useQuiz();
  const question = questions[index];

  // console.log(question);
  

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
};

export default Questions;
