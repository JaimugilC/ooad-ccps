import React, { useState } from "react";
import Axios from "axios";

export default function Application() {
  const [fullname, setFullname] = useState(null);
  const [address, setAddress] = useState(null);
  const [pan, setPan] = useState(null);
  const [income, setIncome] = useState(null);
  const [dob, setDOB] = useState(null);
  const [phone, setPhone] = useState(null);

  const submitForm = () => {
    Axios.post("http://localhost:3001/api/apply", {
      username: fullname,
      address: address,
      pan: pan,
      income: income,
      dob: dob,
      phone: phone,
    }).then(() => {
      alert("Successful insert");
    });
  };

  return (
    <form>
      <h3>Apply for Credit Card</h3>

      <div className="form-group">
        <input
          type="text"
          title="name"
          className="form-control"
          placeholder="Full name"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          title="address"
          className="form-control"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          title="pan"
          className="form-control"
          placeholder="Pan number"
          onChange={(e) => {
            setPan(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          title="dob"
          className="form-control"
          placeholder="Date of birth"
          onChange={(e) => {
            setDOB(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          title="income"
          className="form-control"
          placeholder="Annual Income"
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          title="phone"
          className="form-control"
          placeholder="Primary Phone number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        title="submit-btn"
        className="btn btn-primary btn-block"
        onClick={submitForm}
      >
        Submit
      </button>
    </form>
  );
}
