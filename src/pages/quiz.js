import { QuizDetails } from "../components/details/details";
import { QuizComponent } from "../components/quiz/quizComponent";
import colors from "../components/styles/colors";

export const Quiz = () => {
  return (
    <div>
      <QuizComponent />
      <div
        style={{
          backgroundColor: colors.blue300,
          width: "100%",
        }}
      >
        <hr />
        <QuizDetails />
      </div>
    </div>
  );
};
