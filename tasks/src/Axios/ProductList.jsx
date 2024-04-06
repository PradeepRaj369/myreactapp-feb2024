import { useEffect, useState } from 'react';
import axios from "axios"
import ProductCard from './ProductCard';
import {Container,Col,Row} from 'react-bootstrap'


const ProductList=({product})=> {
    const [Products,setProducts]=useState([]);
    const baseUrl="https://fakestoreapi.com/products";
    
    useEffect(()=>{
        axios.get(baseUrl).then((response)=>{
            console.log(response.data);
            setProducts(response.data);
        })
    },[Products])

  return (
    <Container>
        <Row xs={1} md={2} lg={4}>
            {
                Products.map((data,index)=>{
                    return(
                        <Col key={data.id}>
                             <ProductCard product={data}/>
                        </Col>
                    )
                })
            }
        </Row>  
    </Container>
  );
}

export default ProductList;