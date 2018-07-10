import React from "react";
import ReactDOM from "react-dom";

let quizData = require("./quiz.json");

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }
  render() {
    return (
      <div className="QuizQuestion">
        {quizData.quiz_questions[0].instruction_text}
      </div>
    );
  }
}
export default Quiz;
