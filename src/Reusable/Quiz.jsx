import React, { useState } from "react";
import "./Quiz.css";

const quizQuestions = [
  {
    question: "What is phishing?",
    options: [
      "A type of fishing",
      "A technique to steal information",
      "A secure method of communication",
      "None of the above",
    ],
    answer: "A technique to steal information",
  },
  {
    question: "How often should you change your passwords?",
    options: [
      "Every week",
      "Every month",
      "Every year",
      "Whenever you feel like it",
    ],
    answer: "Every month",
  },
 
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value); 
      console.log(handleOptionChange);
  };

  const handleAnswerOptionClick = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(""); 
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowScore(false);
  };

  return (
    <section className="quiz">
      <h2>Test Your Knowledge</h2>
      {showScore ? (
        <div className="score-section">
          <p>
            You scored {score} out of {quizQuestions.length}
          </p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-section">
            <h3>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </h3>
            <p>{quizQuestions[currentQuestion].question}</p>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <div className="answer-que" key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`} 
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handleAnswerOptionClick}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Quiz;
