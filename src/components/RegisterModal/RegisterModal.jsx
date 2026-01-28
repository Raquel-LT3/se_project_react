// src/components/RegisterModal/RegisterModal.jsx
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  handleRegistration,
  openLoginModal,
}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const isFormInvalid =
    !values.email || !values.password || !values.name || !values.avatar;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="register"
      isButtonDisabled={isFormInvalid}
      altButton={
        <button
          type="button"
          className="modal__submit-alt"
          onClick={openLoginModal}
        >
          or Log In
        </button>
      }
    >
      <label className="modal__label">
        Email*
        <input
          name="email"
          type="email" 
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          name="password"
          className="modal__input"
          placeholder="Password"
          required
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Name*
        <input
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL*
        <input
          name="avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          type="url"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
