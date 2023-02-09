import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar";
import { HomePage, DashboardPage, LoginPage, RegisterPage, ClientsPage, ProductMenu, ProductsPage, UserMenu, UserPage, Section1, Section2, Section3 } from "../pages";
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
          <Route path="clients" element={<ClientsPage />} />
          <Route path="products" element={<ProductMenu />} />
          <Route path="products1" element={<ProductsPage />} />
          <Route path="users" element={<UserMenu />} />
          <Route path="users1" element={<UserPage />} />
          <Route path="section1" element={<Section1 />} />
          <Route path="section2" element={<Section2 />} />
          <Route path="section3" element={<Section3 />} />

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
