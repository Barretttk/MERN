import React, { useState } from "react";

const Form = () => {
  const [firstName, setfirstName] = useState("");
  // const [firstNameError, setfirstNameError] = useState(null)
  const [lastName, setlastName] = useState("");
  const [lastNameError, setlastNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPw, setconfirmPw] = useState("");

  const validateFirstName = () => { 
    if (firstName.length < 2) {
      setfirstNameError("Must be at least 2 characters");
    } else {
      setfirstNameError(null);
   }
  }
  const validateLastName = () => { 
    if (lastName.length < 2) {
      setlastNameError("Must be at least 2 characters");
    } else {
      setlastNameError(null);
   }
  }
  const validateEmail = () => { 
    if (email.length < 5) {
      setemailError("Must be at least 5 characters");
    } else {
      setemailError(null);
   }
  }
  const validatePassword = () => { 
    if (password.length < 8) {
      setPasswordError("The passwords must match and be at least 8 characters");
    } else {
      setPasswordError(null);
   }
  }



  return (
    <div className="card mt-3">
      <h5 className="card header">Hook Form</h5>
      <div className="card-body">
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-lable">
              First Name :{" "}
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              onBlur={validateFirstName}
            />
            {firstNameError && (
              <span className="form-text text-danger">{firstNameError}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-lable">
              Last Name :{" "}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              onBlur={validateLastName}
            />
            <span className="form-text text-danger">{lastNameError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-lable">
              Email :{" "}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            <span className="form-text text-danger">{emailError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-lable">
              Password :{" "}
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            <span className="form-text text-danger">{passwordError}</span>
          </div>

          <div className="mt-3">
            <label htmlFor="name" className="form-lable">
              Confirm Password
            </label>
            <input
              type="text"
              name="confirmPw"
              id="confirmPw"
              className="form-control"
              value={confirmPw}
              onChange={(e) => setconfirmPw(e.target.value)}
            />
          </div>
          <input type="submit" value="Create User" />
        </form>
      </div>
      <div className="container">
        <div
          className="row"
          sytle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your Form Data
        </div>
        <div className="row">First Name : {firstName}</div>
        <div className="row">Last Name : {lastName}</div>
        <div className="row">Email : {email}</div>
        <div className="row">Password : {password}</div>
        <div className="row">Confirm Password : {confirmPw}</div>
      </div>
    </div>
  );
};

export default Form;
