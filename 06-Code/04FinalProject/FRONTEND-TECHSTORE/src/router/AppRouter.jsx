import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar";
import { HomePage, DashboardPage, LoginPage, RegisterPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import ProductCrud from "../pages/ProductCrud/ProductCrud";
import UserCrud from "../pages/UserCrud/UserCrud";
import CustomerCrud from "../pages/CustomerCrud/CustomerCrud";
import InvoiceCrud from "../pages/InvoiceCrud/InvoiceCrud";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <>
                <ProductCrud />
              </>
            }
          />
          <Route
            path="/admin/users"
            element={
              <>
                <UserCrud />
              </>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <>
                <CustomerCrud />
              </>
            }
          />
          <Route
            path="/admin/invoices"
            element={
              <>
                <InvoiceCrud />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
