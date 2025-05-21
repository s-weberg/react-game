import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import './game.css';
import './login.css';

const fakeFacts = [
  "Cats can live underwater like fish.",
  "Cats invented the internet in 1995.",
  "Cats can fly short distances when scared.",
  "Cats sleep for 23 hours a day.",
  "Cats are allergic to sunlight."
];

function CatGame() {
  const [fact, setFact] = useState('');
  const [isTrue, setIsTrue] = useState(true);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const navigate = useNavigate()
  const [gameOver, setGameOver] = useState(0);
  const maxQuestions = 10;
  

  

  const fetchTrueFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      return data.fact;
    } catch (error) {
      console.error("Error fetching fact:", error);
      
    }
  };

  const getRandomFact = async () => {
    setIsAnswered(false);
    setFeedback('');
    const isTrueFact = Math.random() > 0.5;
    setIsTrue(isTrueFact);
    const newFact = isTrueFact
      ? await fetchTrueFact()
      : fakeFacts[Math.floor(Math.random() * fakeFacts.length)];
    setFact(newFact);
    setQuestionCount(prev => prev + 1);
   

  };



  useEffect(() => {
    getRandomFact();
  }, []);

  const handleAnswer = (guess) => {
    if (isAnswered) return;
    const isCorrect = guess === isTrue;
    if (isCorrect) setScore(prev => prev + 0);
    setScore(score + 1);
    setFeedback(isCorrect ? "Correct!" : `Wrong! This fact is ${isTrue ? "true" : "false"}.`);
    setIsAnswered(true);
    if (questionCount >= maxQuestions) {
      setGameOver(true);
    }
  };

    const handleRestart = () => {
    setScore(0);
    setQuestionCount(0);
    setGameOver(false);
    setFeedback('');
    setIsAnswered(false);
    getRandomFact();
  };

    const handleGoBack = () => {
    navigate('/');
  }; 

  if (gameOver) {
    return (
      <div className="container">
        <div className="card">
          <h1 className="title">Game Over!</h1>
          <p className="info">Your score: {score} / {maxQuestions}</p>
          <button onClick={handleRestart} className="play-btn">Play Again</button>
          <button onClick={handleGoBack} className="play-btn">Return to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Cat Facts Quiz</h1>
        <p className="info">{fact || "Loading..."}</p>
        <p className="score">Score: {score} , Question: {questionCount}/{maxQuestions}</p>
        {feedback && <p className="feedback">{feedback}</p>}
        
          <button
            onClick={() => handleAnswer(true)}
            className={`answer-btn ${isAnswered ? 'disabled' : 'true-btn'}`}
            disabled={isAnswered}
          >
            True
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className={`answer-btn ${isAnswered ? 'disabled' : 'false-btn'}`}
            disabled={isAnswered}
          >
            False
          </button>
     
        {isAnswered && (
          <button onClick={getRandomFact} className="login-btn">
            Next Fact
          </button>
        )}

        <div>
          <button className="go-back-btn"
            onClick={handleGoBack}
            
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
}


export default CatGame;