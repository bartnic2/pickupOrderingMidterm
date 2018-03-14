## Summary
Simulates a food ordering experience for multiple restaurants, using Twilio, a modern telecomm API, to alert restaurant customers and owners if an order was placed and when it will be available for pickup. Makes use of encrypted cookies and a Postgres database to store and retrieve user and restaurant-related information, as well as Stripe integration to implement secure e-commerce.

## Final Product
### The home page, which serves multiple restaurants:
!["Home page"](https://github.com/bartnic1/pickupOrderingMidterm/blob/master/main.png)

### Each restaurant's menu page:
!["Menu Page for First Restaurant"](https://github.com/bartnic1/pickupOrderingMidterm/blob/master/menu.png)

## Getting Started 

1. From the terminal, clone the project into a local directory (i.e. git clone git@github.com:bartnic1/pickupOrderingMidterm.git pickupProject)
2. Enter the directory and install the necessary packages by typing "npm install" into the terminal.
3. Set up a .env file with the following parameters (note this requires the setup of a new postgres database):

DB_HOST=localhost
DB_USER=labber
DB_NAME=labber
DB_SSL=true
DB_PORT=5432
PUBLISHABLE_KEY=*
SECRET_KEY=*

Where * refers to the keys procured from setting up an account with Stripe (follow the instructions at https://stripe.com to set up a   trial account). This .env file should be present in the pre-existing "routes" *and* main directory folder.

4. Create a Twilio account, and from the Dashboard, copy the "Auth Token" and place it into a file called "confidential.js" in the routes folder. It should have the following format:  
module.exports = {
  twilioToken: 'a594493939cd939230943esf9304fef93808'
}

5. Under the 'Phone Numbers' section of your Twilio account, add a smart-phone number you wish to use for the customer. Click on this phone number, and you will enter a configuration page. Back in the terminal, start an ngrok session by typing: node_modules/.bin/ngrok http 8080 into the terminal. Then copy the first "forwarding" address, and in the configuration page, paste it into the section titled "Messaging" under the subtitled "A message comes in (Webhook)" area. 

6. Under the "Verified Caller IDs" section of your Twilio account, enter in a number of someone who will play as the restaurant. 

7. Now run the migrations to create the needed Postgres database, by entering "npm run knex migrate:latest" into the terminal. Then populate (seed) the database by entering "npm run knex seed:run". Once complete, the database will be ready.

7. Finally, in a new terminal window, start the express server by entering "npm run local". Navigate to your local host (http://localhost:8080/) in the browser to visit the home page of the project.

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Body-parser
- Cookie-session
- Dotenv
- Ejs
- Express
- Jquery
- Knex
- Knex-logger
- Method-overide
- Morgan
- Ngrok
- Node-sass-middleware
- pg
- stripe
- twilio

## Future Additions

- Additional pictures added to the menu, and each restaurant page
- A clearer guide as to how to setup the Postgres database for new users.

