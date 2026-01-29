// src/components/ModalWithForm/ModalWithForm.jsx

import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  name,
  onSubmit,
  isButtonDisabled,
  altButton, // Receive the extra button here
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close" />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          {/* This container ensures side-by-side alignment per Figma */}
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit"
              disabled={isButtonDisabled}
            >
              {buttonText}
            </button>
            {altButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
