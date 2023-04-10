import React, { useContext } from "react";
import "./style.scss";
import { Form } from "react-bootstrap";
import { useState } from "react";
import AuthContext from "../../context/AuthContext";
const FinalLogin = ({ myCode }) => {
  const [code, setCode] = useState(0);
  const { login } = useContext(AuthContext);

  const finalLogin = async (e) => {
    e.preventDefault();
    if (code == myCode) {
      login(`asdasd23213123213213`);
    }
  };

  return (
    <Form
      className="d-flex gap-1 p-2 flex-column justify-content-center text-center"
      onSubmit={(e) => finalLogin(e)}
    >
      <input
        onChange={(e) => setCode(e.target.value)}
        type="tel"
        className="text-center form-control"
        required
        placeholder="הכנס את הקוד שקיבלתה"
      />
      <button className="form-submit" type="submit">
        שלח
      </button>
    </Form>
  );
};

export default FinalLogin;
