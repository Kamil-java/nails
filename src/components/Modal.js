import { Modal, Button } from "react-bootstrap";

const MyModal = ({ show, handleClose, image }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Image Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image} alt="Preview" className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
