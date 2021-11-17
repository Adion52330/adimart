import React from "react";
import tw from "tailwind-styled-components";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

const Cart = () => {
  const items = useSelector(selectItems);

  return (
    <Wrapper>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Title>Your Cart</Title>
      <br />
      <br />
      <br />
      {items.length === 0 ? (
        <Title>Your Cart is empty. Add items to start.</Title>
      ) : (
        items.map((item) => {
          return (
            <ProductContainer
              key={item.id}
              src={item.src}
              title={item.title}
              price={item.price}
              rating={item.rating}
              id={item.id}
            />
          );
        })
      )}
      <br />
      <br />
    </Wrapper>
  );
};

const ProductContainer = ({ id, src, title, price, rating }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <Product>
      <ProductImage src={src} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{"₹" + price}</ProductPrice>
      <ProductRating>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </ProductRating>
      <AddToBasketButton onClick={removeItemFromCart}>
        Remove from basket
      </AddToBasketButton>
    </Product>
  );
};

const Wrapper = tw.div`
    h-screen bg-gray-200
`;

const Title = tw.div`
  flex justify-center text-3xl font-bold px-5
`;

const ProductImage = tw.img`
  h-64 w-64 border-b-2 m-2 border-gray-400
`;

const ProductTitle = tw.div`
  text-xl font-bold
`;

const ProductPrice = tw.div``;

const ProductRating = tw.div`
  flex
`;

const AddToBasketButton = tw.button`
  p-4 m-2 bg-red-500 text-white rounded-lg hover:bg-red-700 shadow-lg transition active:bg-red-100
`;

const Product = tw.div`
flex flex-col p-5 m-5 border-2 border-gray-400 bg-white rounded-lg shadow-lg items-center justify-center
`;

export default Cart;
