import React from 'react';
import Select from 'react-select';

function FormSelect({ label, type }) {
  console.log('vina');
  return (
    <div>
      <label>{label}</label>
      <Select />
    </div>
  );
}

export default FormSelect;
