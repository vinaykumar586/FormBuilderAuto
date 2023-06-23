import React, { useState } from 'react';
import FormInput from './FormInput';
import InputCard from './InputCard';
function FormFields({ type, label, item }) {
  const [edit, setEdit] = useState(false);
  return (
    <>
      {!edit ? (
        <FormInput edit={edit} setEdit={setEdit} type={type} label={label} />
      ) : (
        <InputCard edit={edit} setEdit={setEdit} item={item} />
      )}
    </>
  );
}
export default FormFields;
