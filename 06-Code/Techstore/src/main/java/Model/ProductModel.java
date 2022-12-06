package Model;

/**
 *
 * @author Pyro
 */

import java.util.ArrayList;
import Interfaces.Product;

public class ProductModel {
    private ArrayList<Product> listProducts;

    public ProductModel() {
        this.listProducts = new ArrayList<>();
    }
    
    public float calculateProfits(int quantity, float price){
        return quantity * price;
    }
    
    public boolean updateProduct(Product product) 
    {
        boolean done = this.listProducts.add(product);
        int size = this.listProducts.size() - 1;
        
        if (done) {
            this.listProducts.get(size).setId(size);
        }
        
        return done;
    }
    
    public ArrayList<Product> getlistProducts(){
        return this.listProducts;
    }
    
    public void setlistProducts(ArrayList<Product> listProducts){
        this.listProducts = listProducts;
        
        for (int i = 0; i < this.listProducts.size(); i++) {
            this.listProducts.get(i).setId(i);
        }
    }
    
    public boolean deleteProduct(int id) {
        if (this.listProducts.size() >= id) {
            this.listProducts.remove(id);
            return true;
        } 
        return false;
    }
    
    public Product listProduct(int id) {
        if (this.listProducts.size() >= id) {
            return this.listProducts.get(id);
        }
        
        return null;
    }
    
    public boolean addProduct(Product product) {
        return false;
    }
 }
