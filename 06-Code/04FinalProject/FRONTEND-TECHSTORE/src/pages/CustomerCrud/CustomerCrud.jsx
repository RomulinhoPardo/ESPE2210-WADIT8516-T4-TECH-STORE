import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomerModalForm from "./CustomerModalForm";
import Button from "@mui/material/Button";
import { deleteCustomer, getCustomers } from "../../util/customerAxios";

function CustomerCrud() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const _customers = await getCustomers();

    setCustomers(_customers);
  };

  const handleEditable = (edit) => setEditable(edit);
  const handleClose = () => setOpen(false);
  const handleOpen = (params) => {
    setCustomer(params);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "¿Está seguro que desea eliminar el elemento?"
    );
    if (confirm) {
      const itemDelete = await deleteCustomer(id);
      loadCustomers();
      console.log(itemDelete);
    }
  };

  const columns = [
    {
      field: "key",
      headerName: "ID",
      width: 200,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 100,
    },
    { field: "lastname", headerName: "Apellido", width: 100 },
    { field: "address", headerName: "Dirección", width: 150 },
    { field: "email", headerName: "Correo electrónico", width: 150 },
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
        <CustomerModalForm
          handleClose={handleClose}
          customer={customer}
          editable={editable}
          loadData={loadCustomers}
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
          Añadir Consumidor
        </Button>

        <Box
          sx={{
            width: "80%",
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
          <h1>Consumidores</h1>

          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={customers.map((item) => ({
                key: item._id,
                id: item._id,
                name: item.name,
                lastname: item.lastname,
                address: item.address,
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

export default CustomerCrud;
