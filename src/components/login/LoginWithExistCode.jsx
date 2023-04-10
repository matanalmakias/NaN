import React from "react";
import "./style.scss";
import { Form } from "react-bootstrap";
import { useState } from "react";
const LoginWithExistCode = () => {
  const [phoneInput, setPhoneInput] = useState(0);
  const [codeInput, setCodeInput] = useState(0);
  const loginTry = async (e) => {
    e.preventDefault();
    if (/^\d{10}$/.test(phoneInput) && /^\d{6}$/.test(codeInput)) {
      console.log(true);
    }
  };
  return (
    <Form
      className="d-flex gap-1 p-2 flex-column justify-content-center text-center"
      onSubmit={(e) => loginTry(e)}
    >
      <input
        onChange={(e) => setPhoneInput(e.target.value)}
        type="tel"
        className="text-center form-control"
        required
        placeholder="מס פלאפון"
      />
      <input
        onChange={(e) => setCodeInput(e.target.value)}
        type="tel"
        className="text-center form-control"
        required
        placeholder="הכנס קוד קיים"
      />
      <button className="form-submit" type="submit">
        שלח
      </button>
    </Form>
  );
};

export default LoginWithExistCode;
