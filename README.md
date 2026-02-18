# e-shop
This project is eCommerce website using MERN stack

## Features
   - Full featured shopping cart
   - Product reviews and ratings
   - Top products carousel
   - Product pagination
   - Product search feature
   - User profile with orders
   - Admin product management
   - Admin user management
   - Admin Order details page
   - Mark orders as delivered option
   - Checkout process (shipping, payment method, etc)
   - PayPal / credit card integration
   - Database seeder (products & users)

## .env
   - NODE_ENV = production
   = PORT = 5000
   - MONGO_URL= mongodb://mongo:27017/eShop
   - JWT_SECRET = <your_secrete>
   - PAYPAL_CLIENT_ID = <your_playpal_developer_id>

## run 
   *** 
      docker cp atlas-dump ecommerce-mongo:/atlas-dump
      docker compose up --build
   ***
