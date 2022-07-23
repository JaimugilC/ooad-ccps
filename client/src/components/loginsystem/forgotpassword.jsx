import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Link } from "react-router-dom";
import Axios from "axios";
import Login from "./login";

export default function ForgotPassword() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const handleSubmit = () => {
    const hasEmailMatch = userList.some((d) => d.email === email);
    if (hasEmailMatch) {
      const hasNumberMatch = userList.some((d) => d.number === number);
      if (hasNumberMatch)
        alert(
          `Your Password is: ` +
            userList
              .filter((val) => {
                if (val.email.includes(email)) return val;
              })
              .map((val, key) => {
                if (val.email === email && val.number === number) {
                  return val.password;
                }
              })
        );
      else alert("Number Mismatch");
    } else alert("Email Not found");
  };

  return (
    <form>
      <h3>Forgot Password</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          title="email-input"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Mobile Number</label>
        <input
          type="text"
          title="number-input"
          className="form-control"
          placeholder="Enter Mobile Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        title="login-btn"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        <Link to="/sign-in">Back</Link>
      </p>
      <Route path="/sign-in" component={Login}></Route>
    </form>
  );
}
