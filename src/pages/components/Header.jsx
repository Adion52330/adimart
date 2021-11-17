import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

const Header = () => {
  const items = useSelector(selectItems);
  return (
    <Wrapper>
      <Link passHref href="/">
        <Title>Adimart</Title>
      </Link>
      <Cart>
        <Link href="/cart" passHref>
          <CartTitle>Cart</CartTitle>
        </Link>
        <CartNum>{items.length}</CartNum>
      </Cart>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    flex items-center justify-around p-7 bg-white border-b-2 border-gray-300 fixed top-0 z-50 w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-60
`;

const Cart = tw.div`
    flex items-center justify-between
`;

const CartTitle = tw.h2`
    text-xl font-bold px-5 hover:text-gray-600 cursor-pointer
`;
const Title = tw.h1`
    text-3xl font-bold hover:text-gray-600 cursor-pointer
`;
const CartNum = tw.span`
    text-2xl font-bold bg-red-500 p-2 rounded-full
`;

export default Header;
