import React, { useState } from "react";
import { SignUpFormValidator } from "./SignUpFormValidator";
import { useNavigate } from "react-router-dom";
import { IonButton, IonInput } from "@ionic/react";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    cnfPassword: "",
  });
  const saveData = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert("API is getting called.");
    navigate("/home", { state: { id: form.email } });
  };
  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };

    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };
  const { errors, validateForm, onFocusFeild } = SignUpFormValidator(form);
  return (
    <div className="text-center">
      <h1 className="text-center">Sign Up</h1>
      <div className="text-center">
        <form className="login" onSubmit={saveData}>
          <div className="col">
            <div className="row">
              <label>Name</label>
            </div>
            <div className="row">
              <IonInput
                type="text"
                className="form-control"
                name="name"
                onChange={onUpdateField}
                onBlur={onFocusFeild}
              />
            </div>
            {errors.name.dirty && errors.name.error ? (
              <div className="row">
                <p>{errors.name.msg}</p>
              </div>
            ) : null}
          </div>
          <div className="col">
            <div className="row">
              <label>Email</label>
            </div>
            <div className="row">
              <IonInput
                type="text"
                className="form-control"
                name="email"
                onChange={onUpdateField}
                onBlur={onFocusFeild}
              />
            </div>
            {errors.email.dirty && errors.email.error ? (
              <div className="row">
                <p>{errors.email.msg}</p>
              </div>
            ) : null}
          </div>
          <div className="col">
            <div className="row">
              <label>Password</label>
            </div>
            <div className="row">
              <IonInput
                type="password"
                className="form-control"
                name="password"
                onChange={onUpdateField}
                onBlur={onFocusFeild}
              />
            </div>
            {errors.password.dirty && errors.password.error ? (
              <div className="row">
                <p>{errors.password.msg}</p>
              </div>
            ) : null}
          </div>
          <div className="col">
            <div className="row">
              <label>Confirm Password</label>
            </div>
            <div className="row">
              <IonInput
                type="password"
                className="form-control"
                name="cnfPassword"
                onChange={onUpdateField}
                onBlur={onFocusFeild}
              />
            </div>
            {errors.cnfPassword.dirty && errors.cnfPassword.error ? (
              <div className="row">
                <p>{errors.cnfPassword.msg}</p>
              </div>
            ) : null}
          </div>
          <div className="text-center my-3">
          <IonButton type="submit">Save</IonButton>
            {/* <button type="submit" className="btn btn-primary">
              Save
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
