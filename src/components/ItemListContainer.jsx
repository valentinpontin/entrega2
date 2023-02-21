import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const URL = id ? `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products/';
    const getCollection = fetch(URL);

    getCollection
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <Container className="item-container">
      <Row style={{alignItems: 'stretch', justifyContent: 'space-evenly'}}>
        {loading ? <Loader /> : <ItemList products={products} />}
      </Row>
    </Container>
  );

}

export default ItemListContainer;
