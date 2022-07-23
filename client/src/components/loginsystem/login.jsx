import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Link } from "react-router-dom";
import Axios from "axios";
import ForgotPassword from "./forgotpassword";

export default function Login() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [validUser, setValidUser] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const handleLogin = () => {
    setValidUser(false);
    userList
      .filter((val) => {
        if (val.email.includes(email)) return val;
      })
      .map((val, key) => {
        if (val.email === email && val.password == password) {
          setValidUser(true);
          localStorage.setItem("acc-info", JSON.stringify(val));
          if (val.type === "user") history.replace("/application");
          else if (val.type === "bank") history.replace("/applications");
          else history.replace("/batch");
          window.location.reload(false);
        }
      });
  };

  return (
    <form>
      <h3>Sign In</h3>

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
        <label>Password</label>
        <input
          type="password"
          title="password-input"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            &nbsp;Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        title="login-btn"
        onClick={handleLogin}
      >
        Submit
      </button>
      {!validUser && alert("Invalid username or password")}
      <p className="forgot-password text-right">
        Forgot <Link to="/forgot-password">password?</Link>
      </p>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
    </form>
  );
}
