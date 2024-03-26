import React from 'react'

import PropTypes from 'prop-types'

import './test-question.css'

const TestQuestion = (props) => {
  return (
    <div className={`test-question-container ${props.rootClassName} `}>
      <span className="test-question-text heading4">{props.question}</span>
      <div className="test-question-container1">
        <input
          type="radio"
          name="radio"
          className="test-question-radiobutton"
        />
        <span className="test-question-text1">{props.answer}</span>
      </div>
      <div className="test-question-container2">
        <input
          type="radio"
          name="radio"
          className="test-question-radiobutton1"
        />
        <span className="test-question-text2">{props.answer2}</span>
      </div>
      <div className="test-question-container3">
        <input
          type="radio"
          name="radio"
          className="test-question-radiobutton2"
        />
        <span className="test-question-text3">{props.answer21}</span>
      </div>
      <div className="test-question-container4">
        <input
          type="radio"
          name="radio"
          className="test-question-radiobutton3"
        />
        <span className="test-question-text4">{props.answer211}</span>
      </div>
    </div>
  )
}

TestQuestion.defaultProps = {
  answer411:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'Question',
  answer41:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer11:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer211:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer31:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  rootClassName: '',
  answer21:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer311:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  answer111:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

TestQuestion.propTypes = {
  answer411: PropTypes.string,
  answer1: PropTypes.string,
  answer4: PropTypes.string,
  answer: PropTypes.string,
  question: PropTypes.string,
  answer41: PropTypes.string,
  answer11: PropTypes.string,
  answer211: PropTypes.string,
  answer2: PropTypes.string,
  answer31: PropTypes.string,
  rootClassName: PropTypes.string,
  answer21: PropTypes.string,
  answer311: PropTypes.string,
  answer3: PropTypes.string,
  answer111: PropTypes.string,
}

export default TestQuestion
