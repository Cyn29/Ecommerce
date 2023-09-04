import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditIcon from '../../assets/icons/edit.png';
import DeleteIcon from '../../assets/icons/delete.png';

const Products = () => {
    const { data } = useContext(dataContext);

    return (
        <main className="p-3 mb-2 bg-dark text-black">
            <section className="card-columns">
                {data.map((product) => (
                    <Card key={product.id}>
                        <Card.Img 
                            variant="top" 
                            src={product.img} 
                            style= {{ width: '100%', height: '20rem'}} 
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.price}</Card.Text>
                            <Button variant="orange" className="text-black bg-darkorange">Ver Producto</Button>
                            <Button variant="orange">
                                <Card.Img src={EditIcon} style={{ width: '1rem' }} alt="Editar" />
                            </Button>
                            <Button variant="orange">
                                <Card.Img src={DeleteIcon} style={{ width: '1rem' }} alt="Eliminar" />
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
        </main>
    );
};

export default Products;

