<%@page import="Interfaces.Product"%>

<%@page import="java.util.Iterator"%>

<%@page import="Model.ProductModel"%>

<%@page import="java.util.ArrayList"%>

<%@page import="ConnectionMongoDB.ConnectionMongoDB"%>

<%@page import="com.mongodb.client.MongoDatabase"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"

              rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"

              crossorigin="anonymous">

        <title>JSP Page</title>

    </head>

    <body>

        <div class="container mt-4">

            <h1 class="text-center mt-4">Lista de Productos</h1>

            <table class="table table-dark mt-4">

                <thead>

                    <tr>

                        <th class="text-center">ID</th>

                        <th class="text-center">Cantidad</th>

                        <th class="text-center">Estado</th>

                        <!--<th class="text-center">Cantidad</th>

                        <th class="text-center">Ganancias</th>-->

                        <th class="text-center">Editar</th>

                        <th class="text-center">Eliminar</th>

                    </tr>

                </thead>

                <%
                    ProductModel productDAO = new ProductModel();
                    
                    ConnectionMongoDB MongoDB = new ConnectionMongoDB();
                    
                    productDAO = MongoDB.getProductsData(productDAO);
                    
                    Iterator<Product> iter = productDAO.getlistProducts().iterator();
                    Product productToShow;
                    
                    while (iter.hasNext()) {

                        productToShow = iter.next();
                %>

                <tbody>

                    <tr>

                        <td class="text-center"><%= productToShow.getName()%></td>

                        <td class="text-center"><%= productToShow.getQuantity()%></td>

                        <td class="text-center"><%= productToShow.getStatus()%></td>

                        <!--<td class="text-center"><%/*= productToShow.getQuantity()*/%></td>

                        <td class="text-center"><%/*= productToShow.getProfit()*/%></td>-->

                        <td class="text-center">

                            <a href="Controlador?accion=updateProduct&id=<%= productToShow.getId()%>">

                                <button class="btn btn-primary">

                                    Editar

                                </button>

                            </a>

                        </td>

                        <td class="text-center">

                            <a href="Controlador?accion=deleteProduct&id=<%= productToShow.getId()%>">

                                <button class="btn btn-danger">

                                    Eliminar

                                </button>

                            </a>

                        </td>

                    </tr>

                    <%}%>

                </tbody>

            </table>

            <a href="Controlador?accion=addProducts">

                <button class="btn btn-success">

                    Agregar

                </button>

            </a>

        </div>

    </body>

</html>