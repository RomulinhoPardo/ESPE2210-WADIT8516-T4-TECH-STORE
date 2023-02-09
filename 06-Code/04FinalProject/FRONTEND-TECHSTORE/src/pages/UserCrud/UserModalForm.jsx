import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { postUser, putUser } from "../../util/userAxios";

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
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.user) {
      setName(props.user.name);
      setAge(props.user.age);
      setEmail(props.user.email);
    }
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      age,
      email,
    };

    if (props.editable) {
      const user = await putUser(props.user.key, newUser);
      props.loadData();
    } else {
      const user = await postUser(newUser);
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
          <h2 align="center">{props.editable ? "Editar" : "Añadir"} Usuario</h2>
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
              id="age"
              label="Edad"
              type="number"
              value={age}
              onChange={handleChangeAge}
              sx={{
                marginTop: "15px",
              }}
            />
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="text"
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
