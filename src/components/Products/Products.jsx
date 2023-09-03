import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
    const { data } = useContext(dataContext)
    return data.map((product) => {


        return (


            <Card style={{ width: '18rem' }} className="mx-auto mt-4 mb-4 " key={product.id}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" className="bg-danger">Ver Producto</Button>
                </Card.Body>
            </Card>
        );
    }
    )
};
export default Products