import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import TestQuestion from '../components/test-question'
import './test.css'

const Test = (props) => {
  const history = useHistory(); 
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showScore, setShowScore] = useState(false); // New state variable to control score display
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleHome = () => {
    history.push('/home'); 
  };

  useEffect(() => {
    // Fetch test questions from the backend
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/test-questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching test questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (questionId, answerPoints) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerPoints,
    });
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Calculate the total score only if it's the last question
      const score = Object.values(selectedAnswers).reduce((acc, points) => acc + points, 0);
      setTotalScore(score);
      setShowScore(true); // Set showScore to true to display the score
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="test-container">
      <Helmet>
        <title>Test - Clear Mind</title>
        <meta property="og:title" content="Test - Clear Mind" />
      </Helmet>
      <div className="test-hero">
        <button className="test-hero-button1 button">Log in</button>
        <div className="test-hero1">
          <div className="test-container1">
            <h1 className="test-hero-heading heading1">Clear Mind</h1>
            <span className="test-hero-sub-heading">
              Discover the Power of Meditation
            </span>
            <div className="test-btn-group">
              <button className="test-home-button button" onClick={handleHome}>Home</button>
            </div>
          </div>
        </div>
      </div>
      <div className="test-faq">
        <div className="test-faq-container">
          <div className="test-faq1">
            <div className="test-heading">
              <h2 className="test-text heading2">Test</h2>
              <span className="test-text01">
                <span>
                  It test can help you find out what you need at this moment.
                  You need to answer a few questions 
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="test-test">
              {!showScore && currentQuestion && (
                <TestQuestion
                  question={currentQuestion.question_text}
                  answers={[
                    { text: currentQuestion.answer_choice_1, points: currentQuestion.answer_choice_1_points },
                    { text: currentQuestion.answer_choice_2, points: currentQuestion.answer_choice_2_points },
                    { text: currentQuestion.answer_choice_3, points: currentQuestion.answer_choice_3_points },
                    { text: currentQuestion.answer_choice_4, points: currentQuestion.answer_choice_4_points },
                  ]}
                  onAnswerSelect={(points) => handleAnswerSelect(currentQuestion.id, points)}
                />
              )}
              {showScore && (
                <div className="test-score-container">
                  <h3>Your Total Score</h3>
                  <p>{totalScore}</p>
                </div>
              )}

              <div className="test-buttons">
                {currentQuestionIndex > 0 || showScore ? ( // Show the "Back" button if not on the first question or if showing the score
                  <button className="test-back-button button" onClick={() => {
                    if (showScore) {
                      setShowScore(false); // Hide the score
                      setCurrentQuestionIndex(questions.length - 1); // Go back to the last question
                    } else {
                      setCurrentQuestionIndex(currentQuestionIndex - 1);
                    }
                  }}>
                    &lt;-- Back
                  </button>
                ) : null}

                {!showScore && (
                  <button className="test-next-button button" onClick={handleNextQuestion}>
                    {isLastQuestion ? 'Result' : 'Next >'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="test-footer">
        <div className="test-container2"></div>
      </div>
    </div>
  )
}

export default Test
