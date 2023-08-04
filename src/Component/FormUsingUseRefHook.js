import React, { useRef, useState } from "react";
import "./FormStyles.css";

const FormUsingUseRefHook = () => {
  const formValues = useRef();
  const [formData, setFormData] = useState("");
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ",",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const username = formValues.current.username.value;
    const email = formValues.current.email.value;
    const password = formValues.current.password.value;
    const confirm_password = formValues.current.confirm_password.value;
    setFormData({ username, email, password, confirm_password });
    const errors = {};
    if (!username || !username.trim()) {
      errors.username = "username is required";
    }
    if (!email || !email.trim()) {
      errors.email = "email is required";
    } else if (!email.includes("@gmail.com")) {
      errors.email = "invalid email";
    }
    if (!password || !password.trim()) {
      errors.password = "password is required";
    } else if (password.length < 8) {
      errors.password = "password should be 8 characters";
    } else if (password.length > 8) {
      errors.password = "password should not exceed 8 characters";
    }

    if (!confirm_password || !confirm_password.trim()) {
      errors.confirm_password = "confirm_password is required";
    } else if (confirm_password !== password) {
      errors.confirm_password = "password and confirm password must match";
    }
    setFormErrors(errors);
    if(Object.keys(errors).length === 0){
      console.log(formData);
      e.target.reset();
      alert("signed in successfully")
      
    }

   
    
    
  };
  return (
    <div className="container">
      <h1>Registration form</h1>
      <form
        className="form-container"
        onSubmit={submitHandler}
        ref={formValues}>
        <label>Username </label>
        <input type="text" placeholder="Username" name="username" />
        {formErrors.username && <small>{formErrors.username}</small>}
        <label>Email </label>
        {formErrors.email && <small>{formErrors.email}</small>}
        <input type="email" placeholder="Email" name="email" />
        <label>Password </label>
        {formErrors.password && <small>{formErrors.password}</small>}
        <input type="password" placeholder="Password" name="password" />
        <label>Confirm Password </label>
        <input type="password" placeholder="Password" name="confirm_password" />
        {formErrors.confirm_password && (
          <small>{formErrors.confirm_password}</small>
        )}
        <button>Register</button>
      </form>
    </div>
  );
};

export default FormUsingUseRefHook;
