/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ConnectionMongoDB;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoException;
/**
 *
 * @author Pyro
 */
import Model.ProductModel;
import Interfaces.Product;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import com.mongodb.client.MongoCursor;

public class ConnectionMongoDB {
    private MongoClient mongoClient = null;
    public ConnectionMongoDB() {
        try {
            String uri = "mongodb+srv://Team4:Team4@clusterteam4-wadit8516.o0rg1oy.mongodb.net/techstore?retryWrites=true&w=majority";
            mongoClient = MongoClients.create(uri);
        }catch (MongoException e) {
            System.out.println(e);
        }
    }
    
    public MongoDatabase getMongoDatabase() {
        return mongoClient.getDatabase("techstore");
    }
    
    public ProductModel getProductsData(ProductModel productDAO){
        
        getMongoDatabase();
        
        ConnectionMongoDB Connection = new ConnectionMongoDB();     
        MongoDatabase MongoDB = Connection.getMongoDatabase();
        MongoCollection<Document> collection = MongoDB.getCollection("Products");
        MongoCursor<Document> cursor = collection.find().iterator();
                   
        Document result;
        try {
            while (cursor.hasNext()) {
                result = (Document)cursor.next();
                productDAO.updateProduct(new Product(result.getString("code"), 50f, result.getInteger("Cantidad"), 50f, result.getString("status")));
                System.out.println(result.getString("code") + " / " + result.getInteger("Cantidad") + " / " + result.getString("status"));
            }
        } finally {
            cursor.close();
        }
        return productDAO;
    }
}
