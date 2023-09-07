import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'; 

const EditProductModal = ({ product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [imageBase64, setImageBase64] = useState(product.img || ""); // Initialize with existing image if available

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setImageBase64(fileReader.result);
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        img: fileReader.result,
      }));
    };
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control-file"
          />
        </div>
        {imageBase64 && (
          <img
            src={imageBase64}
            alt="Product Image"
            style={{ maxWidth: '100%', maxHeight: '150px', display:"none"}}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="orange" onClick={handleSave}>
          Save Changes
        </Button>
        <Button variant="dark" onClick={onClose} data-bs-dismiss="modal">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EditProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditProductModal;
