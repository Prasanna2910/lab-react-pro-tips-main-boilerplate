import React from 'react';
import { useParams } from 'react-router-dom';

function SingleUserView(props) {
  let InitData = [
    { id: 1, name: 'Vamsi kalivium' },
    { id: 2, name: 'Vinay Xyz' },
    { id: 3, name: 'jatin abc' },
  ];
  const paramId = useParams();
  let UserName = InitData[paramId.id - 1];
  let PersonName1 = UserName.name;

  console.log(paramId, UserName);

  return (
    <div style={{ textAlign: 'center' }}>
      {' '}
      <h1>This page belongs to : {PersonName1} </h1>
    </div>
  );
}

export default SingleUserView;
