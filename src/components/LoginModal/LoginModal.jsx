// src/components/LoginModal/LoginModal.jsx
import React, { useEffect } from "react"; // Added useEffect here
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const LoginModal = ({ isOpen, onClose, handleLogin, openRegisterModal }) => {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  const isFormInvalid = !values.email || !values.password;

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="login"
      isButtonDisabled={isFormInvalid}
      altButton={
        <button
          type="button"
          className="modal__submit-alt"
          onClick={openRegisterModal}
        >
          or Sign Up
        </button>
      }
    >
      <label className="modal__label">
        Email
        <input
          name="email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          name="password"
          type="password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
