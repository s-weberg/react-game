import { useEffect, useState } from 'react';
import '../App';

function IAmBored() {
  const [activity, setActivity] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

 const fetchData = async () => {
  try {
    setHasFetched(true);
    const response = await fetch('https://dog.ceo/api/breeds/image/random'); 
    const data = await response.json();
    setActivity(data.activity);
  } catch (error) {
    console.error("Error", error);
  }
};

  useEffect(() => {
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched]);

  return (
    <div>
        <div className='container'>

            <h1 className='title'>Game</h1>
      {activity ? (
        <p className="info">{activity.activity}</p>
      ) : (
        <p className='info'>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default IAmBored;