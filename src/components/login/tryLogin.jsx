import React from "react";
import "./style.scss";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { toggleState } from "../../functions/utıls.js";
import LoginWithExistCode from "./LoginWithExistCode";
import FinalLogin from "./FinalLogin";
const TryLogin = () => {
  const [phoneInput, setPhoneInput] = useState(0);
  const [showExıstCodeLogın, setShowExıstCodeLogın] = useState(false);
  const [showLoginTry, setShowLoginTry] = useState(true);
  const [showFinalLogin, setShowFinalLogin] = useState(false);
  const [code, setCode] = useState(0);

  const loginTry = async (e) => {
    e.preventDefault();
    if (/^\d{10}$/.test(phoneInput)) {
      const sixDigitNumber = Math.floor(100000 + Math.random() * 900000);
      setCode(sixDigitNumber);
      console.log(sixDigitNumber);
      setShowFinalLogin(true);
      toggleState(setShowLoginTry);
    }
  };
  const myToggle = () => {
    toggleState(setShowExıstCodeLogın);
    toggleState(setShowLoginTry);
  };
  return (
    <div dir="rtl" className="comp-container">
      <h2 className="h3">Login</h2>
      <hr />
      <div className={showLoginTry ? "" : "hide_class"}>
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
          <button className="form-submit" type="submit">
            שלח
          </button>
        </Form>
      </div>
      {!showFinalLogin && (
        <p
          onClick={() => {
            myToggle();
          }}
          className="comp-button"
        >
          {showExıstCodeLogın
            ? "אין לך קוד? לחץ כאן"
            : " קיבלתה כבר קוד? לחץ כאן"}
        </p>
      )}
      <div className={showExıstCodeLogın ? "" : "hide_class"}>
        <LoginWithExistCode />
      </div>
      <div className={showFinalLogin ? "" : "hide_class"}>
        <FinalLogin myCode={code} />
      </div>
    </div>
  );
};

export default TryLogin;
