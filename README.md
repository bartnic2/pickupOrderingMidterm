# Node Skeleton

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above

-----------------------------------------------------

## User stories

User wants to be able to order multiple food items and/or drinks, and know how much time it will take to complete the order

- Need login and registration for user so that website can respond to them (through twilio)
- User: Name, phonenumber, email
- Food: Name, size, price, description, URL to image
- Drinks: Name, size, category, price, description, URL to image
- OrderFood: food_id (FK), quantity_item, total price
- OrderDrinks: drink_id (FK), quantity_item, total price

Quantity_item_food, Quantity_item_drink, food_id, total_price

## Needed functions

1. /(home)
- Main scrolling picture probably will just be references from a URL
- Get restaurant info (all)
- Will display images of all restaurants, including name, possibly address

2. Registration
- Get user list (ensure no conflicts)
- Add users

3. Login
- Get user list (ensure no conflicts)

4. Restaurant owner dashboard
- Get items
- Get restaurant info
- Add items
- Add restaurant info

5. Restaurant user dashboard
- Get items
- Get restaurant info

Ordering Form
- Get items
- Set lineitems quantity (do this for each item, all tied to a specific order id)
- Set order time_stamp and total_price once order placed (combine lineitems quantity * items price)

6. Order dashboard
- Get order, display what was ordered on screen. 
**Also send a copy to the restaurant owner.**

Once order pickup_time is set, Get order pickup_time

7. Restaurant order dashboard
- Get order
- Set order pickup_time

---------------------------------------------------------
DB TO DO:
- Need way to check if user exists in database.
- Need way to enter a new user into the database
- Need a way to store order data, and retrieve it.


General Plan:

1. Home page: Multiple restaurants. All data on each restaurant will be sent in template vars (in no particular order), which will in turn retrieve them from the database. Format: Array of objects.
- From .ejs file, will populate page with: Names, addresses, images. It will be set up to load the IDs of each restaurant into a data attribute, or could set the ID of each element.

2. Will also have register/login area, fixed per page. Login data will be sent through a jquery-based ajax request, so as not to reload the screen.

- Now, in the routes page, the code will have to check if the user exists. If the user is invalid, send back a message saying 'invalid user'. This will appear on screen.
- If the user is valid, a user cookie will be generated, which will store the user ID to be used later when ordering. The routes page will send some positive message to the browser; upon receipt the browser needs to remove the login and register buttons and replace them with a "welcome user" title and a logout button.
- This logout button in turn needs to be linked to a routes page. Server-side, the session cookie will be deleted, and a confirmation message is went back to the browser. Upon receipt, the browser will remove the username and logout button, and replace them with the login screen.

- Similarly with registration: Registration data will be sent to a special route, and from there, entered into the database. Need to first check: Does username exist? Does password exist? 
  If so, then send new user details to database.
    Once complete, server will create a session cookie and send confirmation to browser: Browser will show logout along with "welcome user" message.
  If not, then send back message saying "Invalid user/pass"
    Again, need to display message on screen client-side, remove login and register buttons, show logout button.

3. Restaurant user page: The routes for this page will use id (restaurant/:id). 
This site will pull data from the database, corresponding to a particular restaurant ID (stored previously as a data or ID attribute).

In the forms section, will need to send order data to database, as well as retrieve that order for the restaurant, and for the user on the next page.



















