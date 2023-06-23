import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormFileds from './FormFields';
function FormCard({ formData }) {
  // const [edit, setEdit] = useState(false);
  return (
    <div>
      {formData.map((item, id) => {
        if (item.type == 'select') {
          return <FormSelect label={item.label} />;
        }
        if (item.type != 'select') {
          return <FormFileds label={item.label} type={item.type} />;
        }
      })}
    </div>
  );
}
export default FormCard;
