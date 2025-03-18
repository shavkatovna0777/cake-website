import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
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
import { createContext, Suspense, useState } from "react";
export const CartContext = createContext();

function App() {
  const [cartDatas, setCartDatas] = useState(() => {
    const savedData = localStorage.getItem("cartDatas");
    return savedData ? JSON.parse(savedData) : [];
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "menyu/*",
          element: (
            <Suspense>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "kontaktlar",
          element: (
            <Suspense>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "checkout",
          element: (
            <Suspense>
              <Checkout />
            </Suspense>
          ),
        },
        {
          path: "qidiruv",
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: "*",
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      ),
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
