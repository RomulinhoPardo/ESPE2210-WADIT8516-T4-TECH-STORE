import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { postCustomer, putCustomer } from "../../util/customerAxios";

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

export default function CreditCardModalForm(props) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.customer) {
      setName(props.customer.name);
      setLastName(props.customer.lastname);
      setAddress(props.customer.address);
      setEmail(props.customer.email);
    }
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = {
      name,
      lastname,
      address,
      email,
    };

    if (props.editable) {
      const customer = await putCustomer(props.customer.key, newCustomer);
      props.loadData();
    } else {
      const customer = await postCustomer(newCustomer);
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
            {props.editable ? "Editar" : "Añadir"} Consumidor
          </h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="name"
              label="Nombre"
              type="text"
              value={name}
              onChange={handleChangeName}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="lastname"
              label="Apellido"
              type="text"
              value={lastname}
              onChange={handleChangeLastName}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="address"
              label="Dirección"
              type="text"
              value={address}
              onChange={handleChangeAddress}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="email"
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={handleChangeEmail}
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
