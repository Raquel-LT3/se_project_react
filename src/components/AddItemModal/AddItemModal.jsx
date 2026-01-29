// src/components/AddItemModal/AddItemModal.jsx

import React, { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  // Destructure setValues from your useForm hook
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    // Updated function name to handleSubmit
    e.preventDefault();
    onAddItem(values);
  };

  const isFormInvalid = !values.name || !values.imageUrl || !values.weather;

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isButtonDisabled={isFormInvalid}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>

      <p className="modal__legend">Select the weather type:</p>
      <div className="modal__radio-buttons">
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
            className="modal__radio-input"
          />{" "}
          Hot
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="warm"
            onChange={handleChange}
            checked={values.weather === "warm"}
            className="modal__radio-input"
          />{" "}
          Warm
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="cold"
            onChange={handleChange}
            checked={values.weather === "cold"}
            className="modal__radio-input"
          />{" "}
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
