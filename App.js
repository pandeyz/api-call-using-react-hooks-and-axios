import React, { useState, useEffect } from 'react';

import axios from 'axios';
 
function App() {
  const [data, setData] = useState({ hits: [] });

  const deleteRecord = (objIndex) => {
    let dataSet = {...data};
    dataSet.hits.splice(objIndex, 1);
    setData(dataSet);
  }
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
 
  return (
    <ul>
      {
        data.hits.map((item, index) => (
        <li key={item.objectID}>
          {item.title} <button onClick={() => deleteRecord(index)}>x</button>
        </li>
        ))
      }
    </ul>
  );
}
 
export default App;