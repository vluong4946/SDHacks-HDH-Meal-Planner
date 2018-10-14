# SDHacksHDHProject

This is a web-based weekly meal planner designed specifically for UC San Diego students who frequently/exclusively eat from HDH's dining halls, ie, students who live on campus. It allows students to input what they plan to eat, choosing from available dining hall food options on a selected day and time. In turn, they receive a summary of their nutritional intake and dining dollar costs for the week. 

The program uses Python to collect the food data off the [HDH Menu website](https://hdh-web.ucsd.edu/dining/apps/diningservices/). The data is stored using MongoDB and retrived server-side using Node.js. The information is displayed to the website which is written in Javascript, HTML, and CSS. 

Main Page
![picture alt](https://i.imgur.com/UbzUKgY.png "Main Page")

Dining Hall Selection Menu
![picture alt](https://i.imgur.com/AT0WpYr.png "Dining Hall Selection Menu")

Database
![picture alt](https://i.imgur.com/NVwqQmy.png "Database")

**Currently Complete Parts**
* Collect the food information from each dining hall and upload it to a database
* Have a basic locally-hosted website
* Have some core functionality

**Currently Incomplete Parts**
* Displaying the food options for a particular day and time
* Filtering out food with certain allergies specified by the user
* Summarizing nutritional values and cost
* Deploying website onto hosting platform

---------------------------------------------------------------------------------------------------------------
**Team Members**
* Joseph Gilby
* John Bae
* Shawn Koo
* Me

---------------------------------------------------------------------------------------------------------------
**Stuff Used**
* Python
* Jupyter Notebook
* MongoDB
* Node.js
* HTML + CSS

---------------------------------------------------------------------------------------------------------------
**Major References:**
* creating basic CRUD app: https://zellwk.com/blog/crud-express-mongodb/
* not used yet: https://zellwk.com/blog/crud-express-and-mongodb-2/
* not used yet: https://zellwk.com/blog/nunjucks-with-gulp/
* Searching for menu items with particular day and time: https://stackoverflow.com/questions/7176908/how-to-get-index-of-object-by-its-property-in-javascript
* Sending entire database to browser: https://stackoverflow.com/questions/41142136/res-render-only-after-multiple-data-queries-have-finished/41142211
