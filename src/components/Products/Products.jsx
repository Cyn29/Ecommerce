import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import EditProductModal from "../EditProductModal.jsx/EditProductModal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare,faTrash  } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { data, setData } = useContext(DataContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };

  async function deleteProduct(id) {
    try {
      setIsDeleting(true);
      await axios.delete(`http://localhost:3000/products/${id}`);
      setData((prevData) => prevData.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  }

  function openDeleteModal(id) {
    setShowModal(true);
    setProductIdToDelete(id);
  }

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
      console.error("Error al actualizar el producto:", error);
    }
  };
  return (
    <main className="p-3 mb-2 bg-dark text-black">
      <section className="card-columns">
        {data.map((product) => (
          <Card key={product.id}>
            <Card.Img
              aria-label="product-image"
              variant="top"
              src={product.img}
              alt="Product image"
              style={{ width: "100%", height: "20rem" }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.price} €</Card.Text>
              <Link to={`/productdetail/${product.id}`}>
                {/*Edit btn*/}
                <Button 
                title="Edit product"
                variant="outline-transparent"
                className="w-100 h-100 p-0 mb-3"
                style={{ boxShadow: "none" }}>
                  <FontAwesomeIcon
                    icon={faEye}
                    size="2xl"
                    style={{ color: "#DF6A45" }}
                  />
                </Button>
              </Link>
              {/*edit btn*/}
              <Button
                title="Edit product"
                variant="outline-transparent"
                className="w-100 h-100 p-0 mb-3"
                style={{ boxShadow: "none" }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="2xl"
                  style={{ color: "#DF6A45" }}
                />
              </Button>

              {/*Delete btn*/}
              <Button
                title="Delete Product"
                onClick={() => openDeleteModal(product.id)}
                variant="outline-transparent"
                style={{ boxShadow: "none" }}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  "Deleting..."
                ) : (
                <FontAwesomeIcon
                icon={faTrash}
                size="2xl"
                style={{ color: "#DF6A45" }}
              />
                )}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </section>
      {isEditModalOpen && (
        <EditProductModal
          product={editProduct}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveEdit}
        />
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product will be deleted. Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="orange text-white"
            onClick={() => deleteProduct(productIdToDelete)}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
          <Button
            variant="black text-white"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Products;
