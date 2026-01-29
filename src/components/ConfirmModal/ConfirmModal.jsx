// src/components/ConfirmModal/ConfirmModal.jsx

import "./ConfirmModal.css";

function ConfirmModal({ isOpen, onClose, onDelete }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button className="modal__close" onClick={onClose} type="button" />
        <div className="modal__confirm-text-container">
          <p className="modal__confirm-text">
            Are you sure you want to delete this item?
          </p>
          <p className="modal__confirm-text">This action is irreversible.</p>
        </div>
        <div className="modal__confirm-buttons">
          <button
            className="modal__confirm-button_type_delete"
            onClick={onDelete}
          >
            Yes, delete item
          </button>
          <button
            className="modal__confirm-button_type_cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
