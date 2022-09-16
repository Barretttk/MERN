import React, { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPw: ""
  })

  const [firstNameError, setfirstNameError] = useState(null)
  const [lastNameError, setlastNameError] = useState(null);
  const [emailError, setemailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

const handleChange = (e) => {
  setFormState({
    ...formState,
    [e.target.name]: e.target.value
  })
}

  const validateFirstName = () => { 
    if (formState.firstName.length < 2) {
      setfirstNameError("Must be at least 2 characters");
    } else {
      setfirstNameError(null);
   }
  }
  const validateLastName = () => { 
    if (formState.lastName.length < 2) {
      setlastNameError("Must be at least 2 characters");
    } else {
      setlastNameError(null);
   }
  }
  const validateEmail = () => { 
    if (formState.email.length < 5) {
      setemailError("Must be at least 5 characters");
    } else {
      setemailError(null);
   }
  }
  const validatePassword = () => { 
    if (formState.password.length < 8) {
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
              value={formState.firstName}
              onChange={(e) => handleChange(e)}
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
              value={formState.lastName}
              onChange={(e) => handleChange(e)}
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
              value={formState.email}
              onChange={(e) => handleChange(e)}
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
              value={formState.password}
              onChange={(e) => handleChange(e)}
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
              value={formState.confirmPw}
              onChange={(e) => handleChange(e)}
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
        <div className="row">First Name : {formState.firstName}</div>
        <div className="row">Last Name : {formState.lastName}</div>
        <div className="row">Email : {formState.email}</div>
        <div className="row">Password : {formState.password}</div>
        <div className="row">Confirm Password : {formState.confirmPw}</div>
      </div>
    </div>
  );
};

export default Form;
