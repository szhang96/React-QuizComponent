import React, { Component } from "react";

class QuizEnd extends Component {
  handleResetClick(e) {
    e.preventDefault();
    this.props.resetClickHandler();
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href="" onClick={(e) => this.handleResetClick(e}>
          Reset Quiz
        </a>
      </div>
    );
  }
}
export default QuizEnd;
