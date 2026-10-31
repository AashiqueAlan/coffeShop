using { exam.coffeeshop as coffee } from '../db/schema';

@path : '/coffee'

service CoffeeShopService {
    entity Orders as projection on coffee.Orders;
    entity OrderItems as projection on coffee.OrderItems;

    
}