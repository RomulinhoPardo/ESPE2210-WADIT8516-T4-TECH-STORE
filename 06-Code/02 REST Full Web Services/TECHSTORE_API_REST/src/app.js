import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRoutes from "./routes/products.routes";
import customerRoutes from "./routes/Customer.routes";
import usersRoutes from "./routes/users.routes";
import helmet from "helmet";
import pkg from "../package.json";

//declaration app
const app = express();

//settings
app.set("pkg", pkg);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Products TECHSTORE",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});
app.use("/api/products", productsRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/users", usersRoutes);
export default app;
