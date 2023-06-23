import React from 'react';
import './Forminput.css';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
function FormInput({ type, label, edit, setEdit }) {
  const labelStyle = {
    display: 'inline-block',
  };
  return (
    <div class="card-form">
      <div>
        <label>{label}</label>

        <span className="form-icons">
          <FiEdit2 onClick={() => setEdit(!edit)} />
          <FiCopy />
          <MdOutlineCancel />
        </span>
      </div>
      <input className="form-input" type={type} />
    </div>
  );
}
export default FormInput;
