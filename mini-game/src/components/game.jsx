import { useEffect, useState } from 'react';
import '../App.css'; 

function IAmBored() {
  const [fact, setFact] = useState(null); 
  const [hasFetched, setHasFetched] = useState(false);

  const fetchData = async () => {
    try {
      setHasFetched(true);
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact); // Access the 'fact' property from the API
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched]);

  return (
    <div>
      <div className="container">
        <h1 className="title">Cat Facts</h1>
        {fact ? (
          <p className="info">{fact}</p> // Display fact
        ) : (
          <p className="info">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default IAmBored;