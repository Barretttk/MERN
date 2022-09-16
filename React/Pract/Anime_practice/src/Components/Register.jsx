import React from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate ();


    const submitHandler = (e) => {
        e.preventDefault ();

        navigate ("/search");
    };

    return (


    <fieldset>
        <legend>Register</legend>

        <form onSubmit={submitHandler}>
        <p>hi</p>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="text" name="name" />
        <label>UserName:</label>
        <input type="text" name="name" />

        <button type="submit" class="btn btn-primary">
            Register</button>
            </form>
    </fieldset>
  );
};

export default Register;
