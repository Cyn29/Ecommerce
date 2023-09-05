import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditIcon from "../../assets/icons/edit.png";
import DeleteIcon from "../../assets/icons/delete.png";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const Products = () => {
    const { data, setData } = useContext(dataContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(null);

    async function deleteProduct(id) {
        try {
            setIsDeleting(true);
            await axios.delete(`http://localhost:3000/products/${id}`);
            setData((prevData) =>
                prevData.filter((product) => product.id !== id)
            );
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

    return (
        <main className="p-3 mb-2 bg-dark text-black">
            <section className="card-columns">
                {data.map((product) => (
                    <Card key={product.id}>
                        <Card.Img
                            variant="top"
                            src={product.img}
                            style={{ width: "100%", height: "20rem" }}
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.price}</Card.Text>
                            <Button
                                variant="orange"
                                className="text-black bg-darkorange">
                                See Product
                            </Button>
                            <Button variant="orange" title="Edit Product">
                                <Card.Img
                                    src={EditIcon}
                                    style={{ width: "1rem" }}
                                    alt="Editar"
                                />
                            </Button>
                            <Button title="Delete Product"
                                onClick={() => openDeleteModal(product.id)}
                                variant="orange"
                                disabled={isDeleting}>
                                {isDeleting ? (
                                    "Eliminando..."
                                ) : (
                                    <Card.Img
                                        src={DeleteIcon}
                                        style={{ width: "1rem" }}
                                        alt="Eliminar"
                                    />
                                )}
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Product will be deleted. Are you sure?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="red text-white"
                        onClick={() => deleteProduct(productIdToDelete)}
                        disabled={isDeleting}>
                        {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                    <Button
                        variant="black text-white"
                        onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};

export default Products;
