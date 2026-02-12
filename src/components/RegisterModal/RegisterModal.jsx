// src/components/RegisterModal/RegisterModal.jsx

import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const RegisterModal = ({
  isOpen,
  onClose,
  handleRegistration,
  openLoginModal,
}) => {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "", name: "", avatar: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
  };

  const isFormInvalid =
    !values.email || !values.password || !values.name || !values.avatar;

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
