import React from "react";
import ReviewForm from "../ReviewForm/reviewForm";
import { Col, Container, Row, Button } from "react-bootstrap";
import './showProduct.css'
import ShowAllReviews from './../ShowAllReviews/showAllReviews';
const ShowProduct = (props) => {
  const { name, description } = props.currentProduct;
  const currentUser = props.currentUser;
  const currentToken = props.currentToken;
  const getProductReviews = props.getProductReviews
  let productReviews = props.productReviews;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={8}>
            <h1>{name}</h1>
            <p>{description}</p>
            <Button onClick={() => props.addItemToCart(props.currentProduct)}>Add to Cart</Button>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
        <ReviewForm getProductReviews={getProductReviews} currentToken={currentToken} currentUser={currentUser} currentProduct={props.currentProduct}/>
        <ShowAllReviews productReviews={productReviews} currentUser={currentUser}/>
    </React.Fragment>
  );
};

export default ShowProduct;
