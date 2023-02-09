import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { postInvoice, putInvoice } from "../../util/invoiceAxios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "15px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  align: "center",
  p: 4,
};

export default function InvoiceModalForm(props) {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (props.invoice) {
      setProduct(props.invoice.product);
      setDescription(props.invoice.description);
      setPrice(props.invoice.price);
      setQuantity(props.invoice.quantity);
    }
  }, []);

  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInvoice = {
      product,
      description,
      price,
      quantity,
    };

    if (props.editable) {
      const invoice = await putInvoice(props.invoice.key, newInvoice);
      props.loadData();
    } else {
      const invoice = await postInvoice(newInvoice);
      props.loadData();
    }

    props.handleClose();
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 align="center">
            {props.editable ? "Editar" : "Añadir"} Producto
          </h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="product"
              label="Nombre Producto"
              type="text"
              value={product}
              onChange={handleChangeProduct}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="description"
              label="Descripción de la Factura"
              type="text"
              value={description}
              onChange={handleChangeDescription}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="price"
              label="Precio del producto"
              type="number"
              value={price}
              onChange={handleChangePrice}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="quantity"
              label="Cantidad"
              type="number"
              value={quantity}
              onChange={handleChangeQuantity}
              sx={{
                marginTop: "15px",
              }}
            />

            <Box
              sx={{
                margin: "20px",
                marginTop: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                color="success"
                type="submit"
                sx={{
                  width: "100px",
                }}
                onClick={() => handleSubmit()}
              >
                Guardar
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={props.handleClose}
                sx={{
                  width: "100px",
                }}
              >
                Salir
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
