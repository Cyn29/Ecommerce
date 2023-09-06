import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { DataContext } from "../Context/DataContext";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import DeleteIcon from "src/assets/icons/delete.png";
import UploadIcon from "src/assets/icons/upLoadIcon.png";

const ProductDetail = ({ product }) => {
  const { setData } = useContext(DataContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [setShowModal] = useState(false);
  const [setProductIdToDelete] = useState(null);

  const [setEditProduct] = useState(null);
  const [setIsEditModalOpen] = useState(false);

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  async function deleteProduct(id) {
    try {
      setIsDeleting(true);
      await axios.delete(`http://localhost:3000/products/${id}`);
      setData((prevData) => prevData.filter((product) => product.id !== id));
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting product", error);
    } finally {
      setIsDeleting(false);
    }
  }

  function openDeleteModal(id) {
    setShowModal(true);
    setProductIdToDelete(id);
  }

  // eslint-disable-next-line no-unused-vars
  const handleSaveEdit = async (editedProduct) => {
    try {
      await axios.put(
        `http://localhost:3000/products/${editedProduct.id}`,
        editedProduct
      );
      
      setData((prevData) =>
        prevData.map((product) =>
          product.id === editedProduct.id ? editedProduct : product
        )
      );

      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };


  return (
    <Container fluid className="bg-black">
      <Card>
        <Row>
          <Col sm={6} className="d-flex justify-content-center">
            {/* Product Image */}
            <img
              src={product.img}
              alt="Product"
              className="w-100 h-100 img-fluid mx-auto"
            />
          </Col>
          <Col sm={6}>
            {/* Product Title */}
            <h2 className="text-center">{product.title}</h2>
            {/* Product Description */}
            <p className="text-center">{product.fullDescription}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            {/* Product price */}
            <h3 className="text-center">Price: €{product.price}</h3>
          </Col>
          <Col sm={2} className="d-flex justify-content-center align-items-center">
            {/* Upload button */}
            <Button
              variant="orange"
              className="w-100 h-100 p-0 mb-3"
              style={{ margin: "3px" }}
            >
              <img src={UploadIcon} alt="upload" style={{ width: "1.5rem" }} />
            </Button>
          </Col>
          <Col sm={2} className="d-flex justify-content-center align-items-center">
            {/* Edit button */}
            <Button
              variant="orange"
              className="w-100 h-100 p-0 mb-3"
              style={{ margin: "3px" }}
              onClick={() => handleEditProduct(product)}
            >
              Edit
            </Button>
          </Col>
          <Col sm={2} className="d-flex justify-content-center align-items-center">
            {/* Delete button */}
            <Button
              variant="orange"
              className="w-100 h-100 p-0 mb-3"
              style={{ margin: "3px" }}
              onClick={() => openDeleteModal(product.id)}
              disabled={isDeleting}
            >
              <img src={DeleteIcon} style={{ width: "1.5rem" }} alt="Delete" />
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetail;
