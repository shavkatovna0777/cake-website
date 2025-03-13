import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Cart,
  Checkout,
  Contact,
  Products,
  Search,
  NotFound,
} from "../pages/index.js";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import { createContext, useState } from "react";
export const CartContext = createContext();

function App() {
  const [cartDatas, setCartDatas] = useState(() => {
    const savedData = localStorage.getItem("cartDatas");
    return savedData ? JSON.parse(savedData) : [];
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "menyu/*",
          element: <Products />,
        },
        {
          path: "kontaktlar",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "qidiruv",
          element: <Search />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <CartContext.Provider
        value={{
          cartDatas,
          setCartDatas,
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </>
  );
}

export default App;
