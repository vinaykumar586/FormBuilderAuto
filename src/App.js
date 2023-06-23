import React, { useState, useEffect } from 'react';

import FormCard from './FormCard';
import './style.css';
import FormList from './FormList';
export default function App() {
  const [formData, setFormData] = useState([]);
  return (
    <div>
      <div className="form-builder">
        <FormList formData={formData} setFormData={setFormData} />
        {formData.length > 0 && <FormCard formData={formData} />}
      </div>
 
    </div>
  );
}
