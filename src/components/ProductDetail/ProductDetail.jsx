import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCirclePlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { data } = useContext(DataContext);
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId));

  if (!product) {
    return;
  }

  return (
    <Container
      className="bg-black d-flex align-items-stretch justify-content-center"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Card>
        {/*Back Btn */}
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
              style={{ maxHeight: "90vh", marginTop: "1em", marginLeft: "1em" }}
            />
          </Col>
          <Col sm={6} className="d-flex flex-column">
            <h2 className="text-center" style={{ color: "#DF6A45", fontWeight: 'bold' }}>{product.name}</h2>
            <p className="align-self-center">{product.fulldescription}</p>
          </Col>
        </Row>

        {/* Price and Buttons */}
        <Row className="align-items-center" style={{ flex: 2 }}>
          <Col sm={6}>
            <h3 className="text-center" style={{ color: "#DF6A45", fontWeight: 'bold' }}>Price: {product.price} €</h3>
            <h3
              className="text-center"
              style={{ color: "#f0a202", fontWeight: "bold" }}
            >
              Price: {product.price} €
            </h3>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            {/* Upload Btn */}
            <Button
              title="Add product"
              variant="outline-transparent"
              className="w-100 h-100 p-0 mb-3"
              style={{ boxShadow: "none" }}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="2xl"
                style={{ color: "#DF6A45" }}
              />
            </Button>
          </Col>

          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            {/* Edit Btn */}
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
          </Col>

          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            {/* Delete Btn */}
            <Button
              title="Delete product"
              variant="outline-transparent"
              className="w-100 h-100 p-0 mb-3"
              style={{ boxShadow: "none" }}
            >
              <FontAwesomeIcon
                icon={faTrash}
                size="2xl"
                style={{ color: "#DF6A45" }}
              />
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetail;
