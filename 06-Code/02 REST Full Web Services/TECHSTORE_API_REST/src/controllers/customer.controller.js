import Customer from "../models/Customer";

//POST
export const postcustomer = async (req, res) => {
  if (
    (!req.body.name_customer, !req.body.email, !req.body.Phone, !req.body.address)
  ) {
    return res.status(400).send({
      message: `Content cannot be empty`,
    });
  }
  try {
    const newCustomer = new Customer({
      name_customer: req.body.name_customer,
      email: req.body.email,
      CI: req.body.Phone,
      address: req.body.address,
    });
    const customerSave = await newCustomer.save();
    res.json(customerSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for creating and post Customers`,
    });
  }
};

//GET
export const getAllCustomer = async (req, res) => {
  try {
    const customerGet = await Customer.find();
    res.json(customerGet);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error for get Customers`,
    });
  }
};

//GET ONE
export const getOneCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findById(id);
    if (!customer)
      return res.status(400).json({
        message: `Customer with id ${id} does not exist`,
      });
    res.json(customer);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving customer with id: ${id}`,
    });
  }
};

//DELETE
export const deleteOneCustomer = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findByIdAndDelete(id);
  if (!client) {
    return res.status(400).send({
      message: `Error, This customer with id: ${id}, does not exist, cannot be deleted`,
    });
  }
  res.json({
    message: `Customer were deleted successfully`,
  });
};

//PUT
export const putCustomer = async (req, res) => {
  const { id } = req.params;
  const Customer = await Client.findByIdAndUpdate(id, {
    $set: {
      name_client: req.body.name_client,
      email: req.body.email,
    Phone: req.body.Phone,
      address: req.body.address,
    },
  });
  if (!customer) {
    return res.status(400).send({
      message: `Error, This customer with id: ${id}, does not exist`,
    });
  }
  res.json({
    message: `Customer was updated successfully`,
  });
};
