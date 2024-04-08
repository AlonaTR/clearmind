import React from 'react'
import PropTypes from 'prop-types'
import './test-question.css'

const TestQuestion = ({ question, answers, onAnswerSelect }) => { // Destructure the props here
  const handleAnswerChange = (answerPoints) => {
    onAnswerSelect(answerPoints);
  };

  return (
    <div className="test-question-container">
      <span className="test-question-text heading4">{question}</span>
      {answers.map((answer, index) => (
        <div key={index} className="test-question-answer-container">
          <input
            type="radio"
            name="radio"
            id={`answer-${index}`}
            className="test-question-radiobutton"
            onChange={() => handleAnswerChange(answer.points)}
          />
          <label htmlFor={`answer-${index}`} className="test-question-text1">
            {answer.text}
          </label>
        </div>
      ))}
    </div>
  )
    
}

TestQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
}

export default TestQuestion
