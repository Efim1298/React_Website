import React from "react";
import validate from "./validateInfo2";
import useForm from "./useForm2";
import "./Form2.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <div className="form-content-right2">
      <form onSubmit={handleSubmit} className="form2" noValidate>
        <h1>
          Continue with us today! Log in to your account by filling out the
          information below.
        </h1>
        <div className="form-inputs2">
          <label className="form-label2">Username</label>
          <input
            className="form-input2"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs2">
          <label className="form-label">Password</label>
          <input
            className="form-input2"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn2" type="submit">
          Login
        </button>
        <span className="form-input-login2">
          Don't have an account yet? Sign up <a href="/sign-up">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
