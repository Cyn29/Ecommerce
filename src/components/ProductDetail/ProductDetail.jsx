import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProductDetail = () => {
  const { data, setData } = useContext(DataContext);
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedFullDescription, setEditedFullDescription] = useState(
    product ? product.fulldescription : ""
  );

  useEffect(() => {
    if (product) {
      setEditedFullDescription(product.fulldescription);
    }
  }, [product]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditFullDescription = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${productId}`, {
        fulldescription: editedFullDescription,
      });

      setData((prevData) =>
        prevData.map((item) =>
          item.id === parseInt(productId)
            ? { ...item, fulldescription: editedFullDescription }
            : item
        )
      );

      toggleModal();
    } catch (error) {
      console.error("Error al actualizar la fullDescription:", error);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <Container
      className="bg-black d-flex align-items-stretch justify-content-center"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Card>
        <Row className="align-self-end">
          <Link to="/">
            <Button
              title="Back to home"
              variant="outline-transparent"
              alt="exit"
              className="w-100"
              style={{ boxShadow: "none" }}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="2xl"
                style={{ color: "#DF6A45" }}
              />
            </Button>
          </Link>
        </Row>
        <Row style={{ flex: 6, marginTop: "20px" }}>
          <Col sm={6} className="d-flex justify-content-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-100 h-100 img-fluid mx-auto"
              style={{
                maxHeight: "90vh",
                marginTop: "1em",
                marginLeft: "1em",
              }}
            />
          </Col>
          <Col sm={6} className="d-flex flex-column">
            <h2 className="text-center" style={{ color: "#DF6A45", fontWeight: "bold" }}>
              {product.name}
            </h2>
            <p className="align-self-center">{product.fulldescription}</p>
          </Col>
        </Row>

        <Row className="align-items-center" style={{ flex: 2 }}>
          <Col sm={6}>
            <h3 className="text-center" style={{ color: "#DF6A45", fontWeight: "bold" }}>
              Price: {product.price} €
            </h3>
          </Col>
          <Col sm={6} className="d-flex justify-content-center align-items-center">
            <Button
              title="Edit product"
              variant="outline-transparent"
              className="w-100 h-100 p-0 mb-3"
              style={{ boxShadow: "none" }}
              onClick={toggleModal}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="2xl"
                style={{ color: "#DF6A45" }}
              />
            </Button>
          </Col>

        </Row>
      </Card>

      <Modal show={isModalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            rows="4"
            cols="50"
            value={editedFullDescription}
            onChange={(e) => setEditedFullDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="orange text-white"  onClick={handleEditFullDescription}>
            Save Changes
          </Button>
          <Button variant="black tex-white"  onClick={toggleModal}>
          Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
