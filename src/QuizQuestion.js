import React, { Component } from "react";
import ReactDOM from "react-dom";

class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p> {this.props.quiz_questions.instruction_text} </p>
        </section>
        <section className="buttons">
          <ul>
            <li>{this.props.quiz_question.answer_options[0]} </li>{" "}
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
