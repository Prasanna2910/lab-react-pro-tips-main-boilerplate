import React, { useState } from 'react';
import { Link } from 'react-router-dom';
let InitData = [
  { id: 1, name: 'Vamsi' },
  { id: 2, name: 'Vinay' },
  { id: 3, name: 'jatin' },
];
function Person() {
  const [data, setData] = useState(InitData);
  return (
    <div>
      <h1>Person</h1>
      <div style={{ textAlign: 'center' }}>
        {data.map((ele, index) => {
          return (
            <div key={index}>
              <h1>
                <Link to={`/register/person/${ele.id}`}>{ele.name}</Link>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Person;
