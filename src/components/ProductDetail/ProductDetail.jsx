import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/icons/delete.png";
import { GrAddCircle } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";


const ProductDetail = () => {
const { data } = useContext(DataContext);
const { productId } = useParams();
const product = data.find((item) => item.id === parseInt(productId));


if (!product) {
return <p>Producto no encontrado.</p>;
}


return (
<Container fluid className="bg-black">
<Card>
<Row sm={1} className="align-self-end h-10">
<Link to="/"><Button
variant="orange"
alt="exit"
className="hn-90">
Return</Button></Link>
</Row>
<Row>
<Col sm={6} className="d-flex justify-content-center">
<img src={product.img} alt={product.name} className="w-90 h-60 img-fluid mx-auto" style={{ height: "90vh", marginTop: "1em", marginLeft: "1em" }}/>
</Col>
<Col sm={6}>

<Col sm={6} className="w-90 h-60 img-fluid mx-auto">
<h2 className="text-center">{product.name}</h2>
<p className="align-content-center">{product.fulldescription}</p>
</Col>




</Col>
</Row>
<Row>
<Col sm={6}>
<h3 className="text-center">Price: {product.price} €</h3>
</Col>
<Col sm={2} className="d-flex justify-content-center align-items-center">
<Button
variant="orange"
className="w-100 h-100 p-0 mb-3"
style={{ margin: "3px" }}> <GrAddCircle size={"1.5em"}/></Button>

</Col>
<Col sm={2} className="d-flex justify-content-center align-items-center">
<Button
variant="orange"
className="w-100 h-100 p-0 mb-3"
style={{ margin: "3px" }}
>
<FaRegEdit color="black" size={"1.5em"}/></Button>
</Col>
<Col sm={2} className="d-flex justify-content-center align-items-center">

<Button
variant="orange"
className="w-100 h-100 p-0 mb-3"
style={{ margin: "3px" }} >
<img src={DeleteIcon} style={{ width: "1.5rem" }} alt="Delete" />
</Button>
</Col>

</Row>

</Card>
</Container>
);
};


export default ProductDetail;

