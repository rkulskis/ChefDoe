const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/',(req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <body>
      <!-- Main Menu, click buttons to pull up associated sub menu-->
      <div id = "mainTab", class = "flexer">
        <div class="mainButton flexer">Cook</div>
        <div class="mainButton flexer">Recipes</div>
        <div class="mainButton flexer">Account</div>
      </div>
  
      <!-- Sub Menus -->
      <!-- 
      cookTab and manageTab would have transitions from the left to their current positions 
      accTab would cover the other two after its transition from below 
       -->
      <div id = "cookTab", class = "subTab flexer">
        <div class="subButton cook flexer">Browse Recipes</div>
        <div class="subButton cook flexer">Random Recipe</div>
      </div>
  
      <div id = "manageTab", class = "subTab flexer">
        <div class="subButton manage flexer">Manage Recipes</div>
        <div class="subButton manage flexer">Add New Recipe</div>
      </div>
  
      <div id = "accTab", class = "subTab flexer">
        <div class="subButton acc flexer">Update Address</div>
        <div class="subButton acc flexer">Update Payment</div>
      </div>
  
  
    </body>
  </html>
  `) 
})



app.listen(1069, '0.0.0.0', () => console.log('http://0.0.0.0:80/'));