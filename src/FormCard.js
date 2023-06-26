import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormFileds from './FormFields';
function FormCard({ formData }) {
  // const [edit, setEdit] = useState(false);
  function dragStart(e) {
    console.log(e);
  }
  function dragEnd(e) {
    console.log(e);
  }
  return (
    <div
      className="drag-item"
      draggable="true"
      onDragStart={(e) => dragStart(e)}
      onDragEnd={(e) => dragEnd(e)}
    >
      {formData.map((item, id) => {
        if (item.type == 'select') {
          return <FormSelect label={item.label} />;
        }
        if (item.type != 'select') {
          return <FormFileds label={item.label} type={item.type} item={item} />;
        }
      })}
    </div>
  );
}
export default FormCard;
