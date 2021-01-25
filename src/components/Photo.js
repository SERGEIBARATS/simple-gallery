import React from "react";
import Modal from "react-modal";

function Photo(props) {
  const { modalIsOpen, closeModal, item: {url} } = props;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
      >
        <button onClick={closeModal}>x</button>
        <div>
          <img src={url} alt="Logo" />
        </div>
      </Modal>
    </div>
  );
}

export default Photo;
