# Run project

- install globals `npm install nodemon -g`

# Homework -

1. store the token in the relevant state
2. Navigate to news page
3. Concat the token to new API requests.

# Create order

1. date & time
2. contact ? - who is the person who orderd the reservation
3. number of seats
4. inside/outside

## Design

- [x] POST /order - 6m
- [x] schema validations - 5m
- [x] save order - 6m
- [x] Order component - form - 10m
- [x] order Action ( Success / Error / Loader) - 6m
- [x] order service + async function - 4m
- [x] order reducer - 3m

# Homework

1. Add a modal to present Error/Success messages
2. Create new Route - Cancel Order
3. install docker https://docs.docker.com/get-docker/

# Ex Delete order

1. Centerlised openModal functionality
2. On creating order / deleting order execute getOrders again.
3. fetch only my orders

# Homework

1.  Create new Route for meals list
2.  Create a meal
3.  delete a meal
4.  add to users array - role key
    `{ "date": "2022-04-20T17:30:00.000Z", "orderOwner": "galamo@a.com", "numberOfSeats": 2, "insideOrOutside": "inside", role:"admin" },`
5.  create registration page
6.  OPTIONAL: connect your applicaiton to mysql database

# Homework 08-05

1. implement changePassword functionality with the mysql db

# Homework 11-05

- Create Products Page for your Restaurant
- Present all the products from Prod table
- Table with the following Code ,Name, Id , standard_cost category
- UI - Table
- Backend Query + Api entry
- IF there is error in the response - present the relevant modal

# Test

- npm install -g mocha
- npm install chai

# Homework 15-05

1. Create integration test for login process

- user not exist
- user unauzthorized
- user login successfully

# Homework 18-05-2022

1. Support deleting Test data after the test succeeded ( before / after )
2. Support filter products
   - based on select option - which actually fetch all the filters from the database
   - based on free text - which actually fetch according the fitler text ( debounce )
   - toggle between the filters


# Class Ex
1. Implement Delete Product query in the API.
2. Implement Delete functionality from the client


# Homework
1. Create Order - Restuarant 
2. Add Product to Cart 


# Homework 
1. Create Cart page - show all the products from the current user cart
2. implement checkout functionality which will calculate the cart sum + close the cart
