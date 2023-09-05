import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaBeer, FaSave } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const AddProductModal = ({ show, handleClose }) => {
    const [imageBase64, setImageBase64] = useState(""); // 1
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        img: null
    });

    const { addProduct } = useContext(dataContext);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setImageBase64(fileReader.result);
            setProductData({ ...productData, img: fileReader.result }); // 2
        };
    };

    const handleSubmit = () => {
        const newProductData = {
            name: productData.name,  
            price: productData.price,  
            description: productData.description, 
            img: imageBase64  
        };

        console.log("New Product: ", newProductData);
        addProduct(newProductData);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Añadir Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el título del producto"
                            value={productData.name}
                            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese el precio del producto"
                            value={productData.price}
                            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Ingrese la descripción del producto"
                            value={productData.description}
                            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="file" onChange={handleImageChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="orange text-black" onClick={handleClose}>
                    <FaBeer /> Cerrar
                </Button>
                <Button variant="orange text-black" onClick={handleSubmit}>
                    <FaSave /> Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddProductModal;