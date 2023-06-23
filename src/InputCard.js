import React from 'react';

function InputCard({ edit, setEdit }) {
  return (
    <div>
      <h1>Input Data</h1>
      <button onClick={() => setEdit(!edit)}>close</button>
    </div>
  );
}
export default InputCard;
