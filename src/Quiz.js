import React from "react";
import ReactDOM from "react-dom";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd";
let quizData = require("./quiz_data.json");

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    if (isQuizEnd) {
      return (
        <div>
          <QuizEnd />
        </div>
      );
    } else {
      return (
        <QuizQuestion
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
        />
      );
    }
  }
}
export default Quiz;
