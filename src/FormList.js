import React, { useState, useEffect } from 'react';
import './formlist.css';
import Form from './Form.json';
function FormList({ formData, setFormData }) {
  return (
    <div>
      <ul className="form-group">
        {Form.map((item, id) => (
          <li
            className="form-list"
            onClick={() => setFormData([...formData, item])}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <button onClick={() => setFormData([])}>clear</button>
    </div>
  );
}
export default FormList;
