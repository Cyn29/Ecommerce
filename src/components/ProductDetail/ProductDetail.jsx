import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import EditIcon from '../../assets/icons/edit.png';
import DeleteIcon from '../../assets/icons/delete.png';
import UploadIcon from '../../assets/Uploadicon.png';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos de un producto desde una API
    setTimeout(() => {
      const mockProduct = {
        img: 'URL_IMAGEN_PRODUCTO',
        title: 'Nombre del Producto',
        fulldescription: 'Descripción detallada del producto...',
        price: 100.0,
      };
      setProduct(mockProduct);
    }, 2000); // Simulación de carga durante 2 segundos
  }, []);

  if (!product) {
    return <div id="ring">Loading...</div>;
  }

  return (
    <Container fluid className="bg-black">
      <Card>
        <Row>
          <Col sm={6} className="d-flex justify-content-center">
            {/* Product Image */}
            <img src={product.img} alt="Product" className="w-100 h-100 img-fluid mx-auto" />
          </Col>
          <Col sm={6}>
            {/* Product Title */}
            <h2 className="text-center">{product.title}</h2>
            {/* Product Description */}
            <p className="text-center">{product.fulldescription}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            {/* Product price */}
            <h3 className="text-center">Price: €{product.price}</h3>
          </Col>
          <Col sm={2} className="d-flex justify-content-center align-items-center">
            {/* Upload button */}
            <Button variant="orange" className="w-100 h-100 p-0 mb-3" style={{ margin: '3px' }}>
              <img src={UploadIcon} alt="upload" style={{ width: '1.5rem' }} />
            </Button>
          </Col>
          <Col sm={2} className="d-flex justify-content-center align-items-center">
            {/* Edit button */}
            <Button variant="orange" className="w-100 h-100 p-0 mb-3" style={{ margin: '3px' }}>
              <img src={EditIcon} alt="edit" style={{ width: '1.5rem' }} />
            </Button>
          </Col>
          <Col sm={2} className="d-flex justify-content-center align-items-center">
            {/* Delete button */}
            <Button variant="orange" className="w-100 h-100 p-0 mb-3" style={{ margin: '3px' }}>
              <img src={DeleteIcon} alt="delete" style={{ width: '1.5rem' }} />
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductDetail;
