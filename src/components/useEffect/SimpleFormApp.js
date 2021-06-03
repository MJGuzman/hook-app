import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const SimpleFormApp = () => {
  const { formValues, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    //console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("email");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Effects</h1>
      <hr />
      <div className="mb-3">
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="your name"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
            enterKeyHint="next"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
            enterKeyHint="previous"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="form-group">
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={handleInputChange}
            enterKeyHint="previous"
          />
        </div>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
};
