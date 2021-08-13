import React, { useState } from "react";

const questions = [
  {
    question: "Which is the largest country in the world by population?",
    options: ["India", "USA", "China", "Russia"],
    answer: "China",
  },
  {
    question: "When did the second world war end?",
    options: ["1945", "1939", "1944", "1942"],
    answer: "1945",
  },
  {
    question: "Which was the first country to issue paper currency?",
    options: ["USA", "France", "Italy", "China"],
    answer: "China",
  },
  {
    question: "Which city hosted the 1996 Summer Olympics?",
    options: ["Atlanta", "Sydney", "Athens", "Beijing"],
    answer: "Atlanta",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Albert Einstein",
      "Alexander Graham Bell",
      "Isaac Newton",
      "Marie Curie",
    ],
    answer: "Alexander Graham Bell",
  },
];

const Home = () => {
  const [score, setScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(-1);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const onClickNextQuestion = () => {
    if (correctAnswer) {
      setScore(score + 1);
    }
    setQuestionNum(questionNum + 1);
    setCorrectAnswer(false);
    setSelectedAnswer(-1);
  };

  const onClickRestart = () => {
    setScore(0);
    setQuestionNum(-1);
  };

  const onClickSelectAnswer = i => {
    setCorrectAnswer(i == options.indexOf(answer));
    setSelectedAnswer(i);
  };

  if (questionNum < 0)
    return (
      <button className="start" onClick={onClickNextQuestion}>
        Start the Quiz
      </button>
    );

  if (questionNum >= questions.length) {
    return (
      <div>
        <div className="score">{score}</div>
        <button className="restart" onClick={onClickRestart}>
          Restart
        </button>
      </div>
    );
  }

  const renderOptions = options =>
    options.map((option, i) => (
      <div key={i}>
        <input
          type="radio"
          id={i}
          name={questions.indexOf(question)}
          checked={i == selectedAnswer}
          onChange={() => onClickSelectAnswer(i)}
        />
        <label htmlFor={i}>{option}</label>
      </div>
    ));

  const { question, options, answer } = questions[questionNum];

  return (
    <div>
      <div className="question">{question}</div>
      <div className="options">{renderOptions(options)}</div>
      <button className="next" onClick={onClickNextQuestion}>
        Next
      </button>
    </div>
  );
};

export default Home;
