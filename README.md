ChefDoe is a webapp for managing recipes. The main feature of the app is that it allows the user to select a recipe and automatically order the ingredients they are missing through amazon fresh, delivered straight to their house.

To get necessary node_modules run:
  "npm i puppeteer"
  "npm i react-scripts"

Once These are installed, run:
  "npm start" (start up the react web app)
  "node server.js" (start up the backend API)

To make the API call headless (i.e. doesn't show the bot actions) then change {headless: true} in line 5 of server.js
