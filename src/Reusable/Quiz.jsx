import React, { useState } from "react";
import "./Quiz.css";

const quizQuestions = [
  {
    question: "What is two-factor authentication?",
    options: [
      "A method to verify identity twice",
      "A type of phishing attack",
      "A password storage technique",
      "None of the above",
    ],
    answer: "A method to verify identity twice",
  },
  {
    question: "Which of the following is a strong password example?",
    options: ["password123", "MyBirthday2022", "T1m#s3cUr!ty", "qwerty"],
    answer: "T1m#s3cUr!ty",
  },
  {
    question: "What should you do if you receive a suspicious email?",
    options: [
      "Open any attachments to investigate",
      "Click on any links to verify",
      "Delete or report the email",
      "Reply to the sender",
    ],
    answer: "Delete or report the email",
  },
  {
    question: "Which of these is a sign of a phishing email?",
    options: [
      "A trusted sender email address",
      "Generic greetings like 'Dear Customer'",
      "Proper grammar and spelling",
      "Personalized account information",
    ],
    answer: "Generic greetings like 'Dear Customer'",
  },
  {
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Verified Password Notation",
      "Virtual Password Network",
      "Verified Private Notation",
    ],
    answer: "Virtual Private Network",
  },
  {
    question:
      "Why should you avoid using public Wi-Fi for sensitive transactions?",
    options: [
      "It can slow down your connection",
      "Public Wi-Fi is often unreliable",
      "It may expose your data to hackers",
      "It is usually password-protected",
    ],
    answer: "It may expose your data to hackers",
  },
  {
    question: "What is the best way to store passwords?",
    options: [
      "Write them on paper",
      "Use a secure password manager",
      "Store them in a document on your computer",
      "Use the same password everywhere",
    ],
    answer: "Use a secure password manager",
  },
  {
    question: "What is malware?",
    options: [
      "A software update",
      "A type of secure software",
      "Malicious software designed to harm your device",
      "A computer cleaning tool",
    ],
    answer: "Malicious software designed to harm your device",
  },
  {
    question:
      "Why should you check a website's URL before entering personal information?",
    options: [
      "To ensure it loads quickly",
      "To confirm it is secure",
      "To increase your search ranking",
      "To ensure it has good customer reviews",
    ],
    answer: "To confirm it is secure",
  },
  {
    question: "What does HTTPS in a website URL indicate?",
    options: [
      "The website is safe and encrypted",
      "The website is hosted in the USA",
      "The website has high traffic",
      "None of the above",
    ],
    answer: "The website is safe and encrypted",
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
