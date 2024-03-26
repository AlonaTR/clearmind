import React from 'react'

import PropTypes from 'prop-types'

import './question.css'

const Question = (props) => {
  return (
    <div className="question-container">
      <span className="question-text heading4">{props.question}</span>
      <span className="question-text1">{props.answer}</span>
    </div>
  )
}

Question.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Question
