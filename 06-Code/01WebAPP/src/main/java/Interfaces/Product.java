/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Interfaces;

/**
 *
 * @author Pyro
 */

public class Product {
    private int id;

    private String name;

    private float price;

    private int quantity;
    
    private String status;

    private float profit;
    
  public Product(String name, float price, int quantity, float profit, String status) {

        this.name = name;

        this.price = price;

        this.quantity = quantity;

        this.profit = profit;
        
        this.status = status;

    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

  
  
    public int getId() {
        return id;
    }

     public void setId(int id) {
        this.id = id;
    }

     public String getName() {

        return name;

    }
    public void setName(String name) {

        this.name = name;

    }
    public float getPrice() {

        return price;

    }
    public void setPrice(float price) {

        this.price = price;
    }

 

    public int getQuantity() {

        return quantity;

    }
    public void setQuantity(int quantity) {

        this.quantity = quantity;
    }
    
    public float getProfit() {
        return profit;
    }

    public void setProfit(float profit) {
        this.profit = profit;
    }
}