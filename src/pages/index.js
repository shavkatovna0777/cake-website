import { lazy } from "react";

export const Home = lazy(() => import("./Home/Home.jsx"));
export const Contact = lazy(() => import("./Contact/Contact.jsx"));
export const NotFound = lazy(() => import("./NotFound/NotFound.jsx"));
export const Products = lazy(() => import("./Products/Products.jsx"));
export const Cart = lazy(() => import("./Cart/Cart.jsx"));
export const Search = lazy(() => import("./Search/Search.jsx"));
export const Checkout = lazy(() => import("./Checkout/Checkout.jsx"));
