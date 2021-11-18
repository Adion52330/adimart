import React from "react";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ src, title, price, rating }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = { src, title, price, rating };
    dispatch(addToBasket(product));
  };

  return (
    <Wrapper>
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
      <AddToBasketButton onClick={addItemToCart}>
        Add to basket
      </AddToBasketButton>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col p-5 m-5 border-2 border-gray-400 bg-white rounded-lg shadow-lg items-center justify-center
`;

const ProductImage = tw.img`
  h-64 w-64 border-b-2 m-2 border-gray-400 object-contain
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

export default Product;
