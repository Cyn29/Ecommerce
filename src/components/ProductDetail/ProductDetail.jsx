import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // API request to fetch product data
    fetch('http://localhost:3000/productstu_API')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product data', error));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card className="w-100">
            <Card.Body>
              <Row>
                <Col xs={12} md={6} className="h-75">
                  <Row>
                    <Col xs={6}>
                      {/* Product image */}
                      <img src={product.img} alt="Product Missing" />
                    </Col>
                    <Col xs={6}>
                      {/* Product title */}
                      <h2>{product.title}</h2>
                      {/* Product description */}
                      <p>{product.fulldescription}</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={3} className="h-25">
                  <Row>
                    <Col xs={4}>
                      {/* Product price */}
                      <h3>Price: €{product.price}</h3>
                    </Col>
                    <Col xs={4}>
                      {/* Edit button */}
                      <Button variant="orange" className="text-dark">Edit</Button>
                    </Col>
                    <Col xs={4}>
                      {/* Delete button */}
                      <Button variant="orange" className="text-dark">Delete</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
