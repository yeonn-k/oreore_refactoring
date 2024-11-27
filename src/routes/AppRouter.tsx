import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTE_LINK from "./RouterLink.ts";
import List from "../pages/List/List.tsx";
import Detail from "../pages/Detail/Detail.tsx";
import AddOrEditProduct from "../pages/AddOrEditProduct/AddOrEditProduct.tsx";
import MyPage from "../pages/MyPage/MyPage.tsx";
import EditUser from "../pages/MyPage/EditUser/EditUser";
import Signup from "../pages/Signup/Signup.tsx";
import Login from "../pages/Login/Login.tsx";
import Cart from "../pages/Cart/Cart.tsx";
import Payment from "../pages/Payment/Payment.tsx";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: ROUTE_LINK.LIST.path,
      element: <List />,
    },
    {
      path: ROUTE_LINK.LOGIN.path,
      element: <Login />,
    },
    {
      path: ROUTE_LINK.SIGNUP.path,
      element: <Signup />,
    },
    {
      path: ROUTE_LINK.DETAIL.path,
      element: <Detail />,
    },
    {
      path: ROUTE_LINK.ADD_PRODUCT.path,
      element: <AddOrEditProduct />,
    },
    {
      path: ROUTE_LINK.EDIT_PRODUCT.path,
      element: <AddOrEditProduct />,
    },
    {
      path: ROUTE_LINK.MYPAGE.path,
      element: <MyPage />,
    },
    {
      path: ROUTE_LINK.INFO_EDIT.path,
      element: <EditUser />,
    },
    {
      path: ROUTE_LINK.CART.path,
      element: <Cart />,
    },
    {
      path: ROUTE_LINK.PAYMENT.path,
      element: <Payment />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
