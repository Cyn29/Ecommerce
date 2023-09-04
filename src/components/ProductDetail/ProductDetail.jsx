import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { GrAddCircle } from 'react-icons/gr';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Solicitud a la API para obtener los datos del producto
    fetch('http://localhost:3000/productstu_API')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error al obtener datos del producto', error));
  }, []);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Card className="w-100">
            <Card.Header />
            <Card.Body className="h-75">
              <Row>
                <Col xs={6}>
                  {/* Imagen de producto */}
                  <img src={product.image_url} alt={product.title} />
                </Col>
                <Col xs={6}>
                  {/* Título de producto */}
                  <h2>{product.title}</h2>
                  {/* Descripción de producto */}
                  <p>{product.fulldescription}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  {/* Precio de producto */}
                  <h3>Precio: €{product.price}</h3>
                </Col>
                <Col xs={4}>
                  {/* Botón de editar */}
                  <Button variant="orange" className="text-dark">Editar</Button>
                </Col>
                <Col xs={4}>
                  {/* Botón de eliminar */}
                  <Button variant="orange" className="text-dark">Eliminar</Button>
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