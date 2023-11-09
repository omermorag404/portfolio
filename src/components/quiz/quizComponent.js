import { React, useState } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { CTA } from "../buttons/button";
import textSize from "../sizes/textSize";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import { H1, H3 } from "../styles/typography";
import { questions } from "./quizData";
import quiz from "../img/quiz.png";

export const QuizComponent = () => {
  const Answer = styled.button`
    background-color: ${colors.blue400};
    border-radius: 4px;
    padding: 24px;
    text-align: left;

    &:hover {
      background-color: ${colors.green100};
      color: ${colors.blue400};
    }
  `;
  const Question = styled.div`
    font-size: ${textSize.md};
    color: ${colors.green100};
  `;
  const AnswersArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.m};
    padding: ${spacing.lg};
    border: 1px solid ${colors.green100};
    @media (max-width: 767px) {
      border: none;
      gap: ${spacing.m};
      padding: 0;
    }
  `;
  const QuestionsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.xxl};
    padding: ${spacing.lg};
    border: 1px solid ${colors.green100};
    @media (max-width: 767px) {
      border: none;
    }
  `;
  const QuizLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.lg};
    align-items: center;
    width: 500px;
    @media (max-width: 767px) {
      width: 325px;
    }
  `;
  const Score = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.lg};
    border: 1px solid ${colors.orange100};
    padding: ${spacing.lg};
    border-radius: 8px;
  `;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const retryButton = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <Flex justifyContent="center">
      <QuizLayout>
        <MediaQuery minWidth={768}>
          <H1>React.js Quize</H1>
          {/* <img src={quiz} alt="quiz" width="400px" /> */}
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <H3>React.js Quize</H3>
          {/* <img src={quiz} alt="quiz" /> */}
        </MediaQuery>
        {showScore ? (
          <Score>
            <H1>👏🏻👏🏻👏🏻</H1>
            <H3 color={colors.orange100}>
              You scored {score} out of {questions.length}
            </H3>
            <CTA
              variant="primary"
              buttonSize="md"
              onClick={() => retryButton()}
            >
              Retry
            </CTA>
          </Score>
        ) : (
          <div>
            <div>
              <QuestionsArea>
                <div>
                  <span>Question {currentQuestion + 1} / </span>
                  {questions.length}
                </div>
                <Question>{questions[currentQuestion].questionText}</Question>
              </QuestionsArea>
            </div>

            <AnswersArea>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <Answer
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </Answer>
              ))}
            </AnswersArea>
          </div>
        )}
      </QuizLayout>
    </Flex>
  );
};
