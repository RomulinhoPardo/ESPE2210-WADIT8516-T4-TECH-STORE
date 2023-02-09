import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsers, deleteUser } from "../../util/userAxios";
import UserModalForm from "./UserModalForm";
import { Button } from "@mui/material";

function UserCrud() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const _users = await getUsers();
    setUsers(_users);
  };

  const handleEditable = (edit) => setEditable(edit);
  const handleClose = () => setOpen(false);
  const handleOpen = (params) => {
    setUser(params);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "¿Está seguro que desea eliminar el elemento?"
    );
    if (confirm) {
      const itemDelete = await deleteUser(id);
      loadUsers();
      console.log(itemDelete);
    }
  };

  const columns = [
    { field: "key", headerName: "ID", width: 230 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "age", headerName: "Edad", width: 90 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "options",
      headerName: "Opciones",
      width: 150,
      renderCell: (params) => (
        <>
          <div
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              handleEditable(true);
              handleOpen(params.row);
            }}
          >
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <ModeIcon
                sx={{
                  fontSize: "1em",
                }}
              />
            </IconButton>
          </div>

          <div
            onClick={() => {
              handleDelete(params.row.key);
              return;
            }}
          >
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <DeleteIcon
                sx={{
                  fontSize: "1em",
                }}
              />
            </IconButton>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div id="header"></div>
      {open ? (
        <UserModalForm
          handleClose={handleClose}
          user={user}
          editable={editable}
          loadData={loadUsers}
        />
      ) : (
        <></>
      )}
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleEditable(false);
            handleOpen({});
          }}
          sx={{
            marginBottom: "20px",
          }}
        >
          Añadir Usuario
        </Button>
        <Box
          sx={{
            width: "76%",
            height: "600px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "1px 1px 20px #333",
          }}
        >
          <h1>Usuarios</h1>
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={users.map((item) => ({
                id: item._id,
                key: item._id,
                name: item.name,
                age: item.age,
                email: item.email,
              }))}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default UserCrud;
