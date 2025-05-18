import { useEffect, useState } from 'react';
import './game.css';

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
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  const handleAnswer = (guess) => {
    if (isAnswered) return;
    const isCorrect = guess === isTrue;
    setScore(prev => prev + (isCorrect ? 1 : 0));
    setFeedback(isCorrect ? "Correct!" : `Wrong! This fact is ${isTrue ? "true" : "false"}.`);
    setIsAnswered(true);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Cat Facts Quiz</h1>
        <p className="info">{fact || "Loading..."}</p>
        <p className="score">Score: {score}</p>
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
          <button onClick={getRandomFact} className="answer-btn">
            Next Fact
          </button>
        )}
      </div>
    </div>
  );
}

export default CatGame;