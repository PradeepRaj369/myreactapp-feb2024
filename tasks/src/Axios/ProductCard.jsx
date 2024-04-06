import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/ProductList.css';
import { Rating } from 'react-simple-star-rating'

function ProductCard({product}) {
  return (
    <>
    <Card style={{ width: '100%', marginTop:"16px"}}>
      <Card.Img variant="top" src={product.image} className='product-img' />
      <Card.Body>
        <Card.Title className='ellipsis' title={product.title}>{product.title}</Card.Title>
        <Card.Text className='ellipsis' title={product.description}>
          {product.description}
        </Card.Text>
        <div className="price-rating">
          <h5>$ {product.price}</h5>
          <Rating initialValue={product.rating.rate} readonly={true} size={20} className='rating' />
        </div>
        <Button variant="primary" className='AddToCart-Btn'>Add To Cart</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default ProductCard;