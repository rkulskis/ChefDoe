import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Libbar} from './Navbar';



function Library(){
	// find way to get data from database instead of here
	const location = useLocation();
	console.log(location.state);

	const [recipes, setRecipes] = useState([
		{id: "1",
        name: "Baked Shrimp Scampi",
        instructions: "Preheat the oven to 425 degrees F.\r\n\r\nDefrost shrimp by putting in cold water, then drain and toss with wine, oil, salt, and pepper. Place in oven-safe dish and allow to sit at room temperature while you make the butter and garlic mixture.\r\n\r\nIn a small bowl, mash the softened butter with the rest of the ingredients and some salt and pepper.\r\n\r\nSpread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.\r\n\r\nNote: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp. ",
        ingredients: [
            "panko\r",
            "red pepper flakes\r",
            "lemon, zested and juiced\r",
            " egg yolk\r",
            " rosemary minced\r",
            " parsley minced\r",
            " clove garlic minced\r",
            "shallots minced\r",
            "unsalted butter\r",
            "dry white wine\r",
            "Freshly ground black pepper\r",
            "Kosher salt\r",
            "olive oil\r",
            "frozen shrimp"
        ],
		measurements: [ "2\/3 cup panko\r",
		"1\/4 teaspoon red pepper flakes\r",
		"1\/2 lemon, zested and juiced\r",
		"1 extra-large egg yolk\r",
		"1 teaspoon rosemary, minced\r",
		"3 tablespoon parsley, minced\r",
		"4 clove garlic, minced\r",
		"1\/4 cup shallots, minced\r",
		"8 tablespoon unsalted butter, softened at room temperature\r",
		"2 tablespoon dry white wine\r",
		"3 tablespoon olive oil\r",
		"2 pound frozen shrimp"], 
		ratio: 1,

    },
	
     {
        "id": "2",
        "name": "Strawberries Romanov (La Madeleine copycat)",
        "instructions": "Wash strawberries and cut the tops off. Let strawberries drain.  Mix together heavy whipping cream, powdered sugar, and the brandy. Beat with a mixer till this becomes thick.  Place strawberries into glasses and spoon over the sauce.\r\n",
        "ingredients": [
            "powdered sugar\r",
            " heavy whipping cream\r",
            "strawberries\r",
            "brandy"
        ],
		"measurements": [
            "2 tbsp powdered sugar\r",
            "1\/2 pt heavy whipping cream\r",
            "1 lb strawberries, (2 pints)\r",
            "4 tbsp brandy"
        ], ratio:1
    },
    {
        "id": "3",
        "name": "Tomato Basil Soup (La Madeleine copycat)",
        "instructions": "Combine tomatoes, juice\/and or possibly stock in saucepan. Simmer 30 min. Puree, along with the basil leaves, in small batches, in blender or food processor or use an immersion blender in the pan.\r\n\r\nReturn to saucepan and add in cream and butter, while stirring over low heat. Garnish with basil leaves and serve with your favorite bread.",
        "ingredients": [
            "tomatoes",
            "vegetable stock\r",
            "basil leaves\r",
            "heavy cream\r",
            "unsalted butter\r",
            "Salt\r",
            "black pepper"
        ],
		"measurements": [
            "4 c tomatoes, minced, peeled, and cored\r",
            "4 cup vegetable stock\r",
            "12 basil leaves\r",
            "1 c heavy cream\r",
            "1\/4 lb unsalted butter\r",
            "Salt\r",
            "1\/4 tsp black pepper"
        ], ratio:1
    },
     {
        "id": "4",
        "name": "John Thorne's Pecan Pie",
        "instructions": "Preheat oven to 350F. In a large saucepan, heat the brown sugar, golden syrup and butter to the boiling point. Stirring constantly and scraping back any foam that clings to the side of the pan, let this mixture boil for about 1 minute. Remove from the heat and let cool while, in a separate bowl, you beat the eggs until creamy. \r\n\r\nWhen the boiled syrup has cooled, beat in the eggs, salt and pecans. Pour into the unbaked pie shell and bake for about 50 minutes.\r\n\r\nNotes:\r\n\r\n* A little cream (about 1\/4 to 1\/2 cup) mixed into a pecan pie filling before baking gives it a richer, lighter texture. \r\n\r\n* For a sweeter, lighter pie: add more sugar and use fewer pecans; for a denser, less sweet pie: add more pecans and use less sugar. \r\n\r\n* The buttery flavour and the lard-induced flakiness of a butter and lard crust make it the perfect one for a perfect pecan pie. And a Southern pecan pie authority I know suggests that you roll out the dough a little thicker than usual; a thick, richly shortened crust provides an appetizing balance to the sweetness of the filling. ",
        "ingredients": [
            "salt \r",
            "eggs \r",
            "butter \r",
            "dark rum \r",
            "golden syrup \r",
            "dark brown sugar\r",
            "pecans \r",
            "unbaked pie shell"
        ],
		"measurements": [
            "1\/4 tsp salt \r",
            "3 eggs \r",
            "4 tbsp butter \r",
            "2 tbsp dark rum \r",
            "2\/3 cup golden syrup \r",
            "1 cup dark brown sugar, well-packed\r",
            "2 cup pecans, chopped \r",
            "9-inch unbaked pie shell"
        ], ratio: 1
    },
     {
        "id": "5",
        "name": "Smoked Salmon Ebelskivers",
        "instructions": "Preheat oven to 200F.\r\n\r\nIn a large bowl, whisk together the flour, sugar, baking powder, salt, and pepper. In a small bowl, lightly whisk the egg yolks, then whisk in the milk, 2 tablespoons of melted butter and lemon juice. Add the yolk mixture to the flour mixture and, using a wooden spoon, stir until well blended. The batter will be lumpy.\r\n\r\nIn a clean bowl, using an electric mixer on high speed, beat the egg whites until stiff, but not dry, peaks form. Using a silicone spatula, fold about one-third of the egg whites into the batter to lighten it, then fold in the rest just until no white streaks remain. Stir in fresh dill.\r\n\r\nBrush the wells of the ebelskiver pan with some of the remaining melted butter and place over medium heat. When the butter starts to bubble, add about 1 tablespoon batter to each well. Working quickly, carefully spoon about 1\/2 teaspoon of the smoked salmon into the center of each pancake, then spoon about 1\/2 teaspoon of the cream cheese on top. Top each with another 1 tablespoon batter. (Alternatively, gently mix the cream cheese and salmon together. Spoon about 1 teaspoon into the center of each pancake)\r\n\r\nCook until the bottoms of the pancakes are lightly browned and crisp, 3-5 minutes. Use 2 short wooden skewers to turn all the  pancakes and cook until lightly browned on the second side, about 3 minutes longer.\r\n\r\nTransfer the finished pancakes to a platter and keep warm  in the oven while you repeat to make 2 more batches. Serve right away.",
        "ingredients": [
            "all-purpose flour\r",
            "sugar\r",
            "baking powder\r",
            "salt\r",
            "pepper freshly ground\r",
            "large eggs\r",
            "milk\r",
            "unsalted butter\r",
            "fresh lemon juice\r",
            "fresh dill\r",
            "smoked salmon\r",
            "whipped-style cream cheese\r",

        ],
		"measurements": [
            "1 cup all-purpose flour\r",
            "1 1\/2 tsp sugar\r",
            "1\/2 tsp baking powder\r",
            "1\/4 tsp salt\r",
            "1\/2 tsp pepper, freshly ground\r",
            "2 large eggs, separated\r",
            "1 cup milk\r",
            "3 tbsp unsalted butter, melted and slightly cooled, divided use\r",
            "1 tsp fresh lemon juice\r",
            "1\/4 cup fresh dill, chopped and firmly packed\r",
            "3 1\/2 tbsp smoked salmon, minced (about 4 oz)\r",
            "3 1\/2 tbsp whipped-style cream cheese, at room temperature\r",
            
        ], ratio: 1
    },
    {
        "id": "6",
        "name": "Godiva Angel Pie",
        "instructions": "TO MAKE SHELL: Preheat oven to 300 degrees. In mixer bowl, beat egg whites until foamy. Beat in salt and cream of tartar and beat until soft peaks form. Add sugar, a tablespoon at a time, beating after each addition. Continue until very stiff peaks form. Fold in nuts and vanilla. Lightly butter a metal 8-inch pie plate. (Do NOT use glass.) Spoon meringue into pan lightly, building up the edges to come at least 1\/2 inch above the side of the pan. Bake in preheated 300 degree oven for 35 to 40 minutes until light brown. Cool completely before adding filling. TO MAKE FILLING: Melt chocolate and water in a pan over hot, but not boiling, water, stirring occasionally, to blend. Add vanilla and chocolate mixture (cooled) to whipped cream and pile into meringue shell, swirling top with spatula. Be sure to cool the chocolate mixture before adding to the whipped cream. If it is too warm, the mixture will thin out. If this happens, chill until it is thick enough to put in shell.",
        "ingredients": [
            "squares Godiva cooking chocolate \\r",
            "vanilla\r",
            "pecans\r",
            "sugar\r",
            "cream of tartar\r",
            "salt\r",
            "egg whites\r",
            "water\r",
            "vanilla\r",
            "heavy cream whipped"
        ],
		"measurements": [
            "4 (1 oz.) squares Godiva cooking chocolate or 4 oz. Baker's German sweet chocolate\r",
            "1\/2 tsp vanilla\r",
            "1 cup pecans, finely chopped\r",
            "1\/2 cup sugar\r",
            "1\/8 tsp cream of tartar\r",
            "1\/8 tsp salt\r",
            "2 egg whites, at room temperature\r",
            "3 tbsp water\r",
            "1 tsp vanilla\r",
            "1 cup heavy cream, whipped"
        ], ratio: 1

    },
     {
        "id": "7",
        "name": "Spaetzle",
        "instructions": "Bring a saucepan of salted water it a boil, reduce the heat, and maintain a simmer. In a bowl, stir all the ingredients together (eggs, flour, milk, salt, baking powder, and nutmeg). Place a colander over the pan, pour about1\/4 of the batter into the colander, and press through the holes with a plastic spatula into the hot water. When the spatzle starts to float to the surface, cover the pan and keep covered until the spatzle appears to swell and is fluffy. Remove the dumplings and repeat the procedure with the remaining batter.\r\n\r\nIn a medium saute pan, add butter, and melt over medium heat until butter turns a light brown. Add garlic and cook until it becomes lightly colored. Add spaetzle to the pan to heat through. Add parsley, cheese, salt and pepper, to taste.",
        "ingredients": [
            "fresh parsley\r",
            "garlic\r",
            "butter\r",
            "nutmeg\r",
            "baking powder\r",
            "salt\r",
            "milk\r",
            "flour sifted\r",
            "eggs\r",
            "finely grated Parmesan\r",
            "Salt ",
			"freshly ground black pepper"
        ],
		"measurements": [
            "2 teaspoon fresh parsley, chopped\r",
            "1 teaspoon garlic, minced\r",
            "3 tablespoon butter\r",
            "1 pinch nutmeg\r",
            "1\/4 teaspoon baking powder\r",
            "1 teaspoon salt\r",
            "1\/2 cup milk\r",
            "1 1\/2 cup flour, sifted\r",
            "2 eggs, slightly beaten\r",
            "2 tablespoon finely grated Parmesan, plus extra for garnish\r",
            "Salt and freshly ground black pepper"
        ], ratio: 1
    },
	 {
        "id": "8",
        "name": "Pot Roast Carbonnade",
        "instructions": "Preheat the oven to 325 degrees F.\r\n\r\nIn a large Dutch oven over medium-low heat, add the bacon and cook until it renders its fat and almost becomes crispy. Remove it with a slotted spoon to a plate. Add the onions, season with salt and pepper, to taste, and cook over low heat until they are deep in color and caramelized, about 30 minutes.\r\n\r\nRemove the onions to a plate, leaving as much fat in the pot as possible. Add the vegetable oil and mix it with the bacon fat. Raise the heat to high. Season the beef liberally with salt and pepper and sear, in batches, until nicely browned on both sides.\r\n\r\nOnce the meat is browned, add the first batch of meat back to the pan along with the onions, carrots and bacon. Sprinkle in the flour and stir. Cook for 1 minute before deglazing the pan with the beer. Add the remaining ingredients and bring the mixture to a simmer. Cover the pot and put it in the oven to braise until the beef is tender, about 2 hours. Remove the pot from the oven and transfer the pot roast to a serving dish.",
        "ingredients": [
            " bacon\r",
            "yellow onions\r",
            "Kosher salt","freshly ground black pepper\r",
            " vegetable oil\r",
            " beef chuck\r",
            "whole carrots\r",
            "all-purpose flour\r",
            "beer (dark or light)\r",
            "prunes\r",
            "dried thyme\r",
            "beef stock"
        ],
		"measurements": [
            "1\/2 pound bacon, cut into large lardons\r",
            "2 medium onions, sliced\r",
            "Kosher salt and freshly ground black pepper\r",
            "1 tablespoon vegetable oil\r",
            "1 1\/2 pound beef chuck, cut into large cubes\r",
            "5 carrots, peeled and cut into large chunks\r",
            "1 tablespoon all-purpose flour\r",
            "12 ounce beer (dark or light)\r",
            "6 prunes\r",
            "1 tablespoon dried thyme\r",
            "1 cup beef stock"
        ], ratio: 1
    },
     {
        "id": "9",
        "name": "Old Fashion Vegetable Soup",
        "instructions": "In a large soup pot, brown ground beef and onion, drain off fat.  Add remaining ingredients EXCEPT for last 3 items (canned vegetables).  Simmer on low heat until vegetables are tender, about an hour.  Add canned vegetables and simmer 5 minutes.  Remove bay leaf and serve.",
        "ingredients": [
            "ground beef\r",
            "yellow onion, chopped\r",
            "potatoes\r",
            " carrots\r",
            "celery\r",
            "16oz can diced tomatoes in juice \r",
            "water\r",
            "dried basil\r",
            "dried thyme\r",
            "bay leaf\r",
            "salt\r",
            "pepper\r",
            "garlic powder\r",
            "beef bouillon\r",
            "16oz can corn\r",
            "16oz can green beans\r",
            "16oz can green peas"
        ],
		"measurements": [
            "1 pound ground beef\r",
            "1 cup onion, chopped\r",
            "1 cup potatoes, diced\r",
            "1 cup carrots, sliced\r",
            "1 cup celery, diced\r",
            "2 16oz can diced tomatoes in juice (or substitute 2 small cans of tomato sauce)\r",
            "4 cup water\r",
            "1\/4 tsp dried basil, crushed\r",
            "1\/4 tsp dried thyme\r",
            "1 bay leaf\r",
            "1\/2 tsp salt\r",
            "1\/4 tsp pepper\r",
            "1\/2 tsp garlic powder\r",
            "2 tablespoon beef bouillon\r",
            "1 16oz can corn\r",
            "1 16oz can green beans\r",
            "1 16oz can green peas"
        ], ratio: 1
    },
   {
        "id": "10",
        "name": "Onion Pie",
        "instructions": "Preheat the oven to 400 degrees halfway through onion cooking.\r\n\r\nSlice the onions and saute in 4 tablespoons butter over medium-low heat; the longer you cook them - as long as 35 minutes - the sweeter they will be.  Sprinkle in crushed red pepper.\r\n\r\nMelt the remaining 4 tablespoons butter.  Mix with the crushed crackers, then press the mixture into the bottom and sides of a glass pie plate to form a crust.  Prebake crust for 10 minutes.\r\n\r\nLightly beat the eggs and milk together in a small bowl.\r\n\r\nSpoon the onions into the crust, then pour the egg mixture over them.  Sprinkle with Parmesan.\r\n\r\nBake for 30-40 minutes until set and golden.",
        "ingredients": [
            "grated Parmesan cheese\r",
            "Keebler Club Crackers\r",
            "eggs\r",
            "milk\r",
            "crushed red pepper flakes\r",
            "butter\r",
            "yellow onions"
        ],
		"measurements": [
            "1\/2 cup grated Parmesan cheese\r",
            "1\/2 stack Keebler Club Crackers, crushed\r",
            "2 eggs\r",
            "1 cup milk\r",
            "1\/2 teaspoon crushed red pepper flakes, or to taste\r",
            "1\/2 cup butter, divided use\r",
            "3 large onions"
        ], ratio: 1
    },
   {
        "id": "11",
        "name": "Godiva Dark Chocolate Cheesecake",
        "instructions": "In a food processor with a blade attachment, cream the cheese until smooth and then add in sugar. Pulse a couple times to incorporate sugar and cocoa powder. Add in eggs and yolks pulsing a couple times again and scrape down to ensure all is smooth and uniform. With machine running, pour in melted Godiva Chocolate in a steady stream until all in, and finish by pulsing in the cr\u00e8me fraiche. Pour batter into a 10\" x 10\" baking pan and bake at 325 for 30, minutes or until custard is set and a toothpick inserted in center can be removed cleanly. The top may caramelize or brown slightly, which is not an issue. Once set, remove from oven and allow cheesecake to cool completely. Wrap the pan with plastic and reserve in cooler to set and chill completely.\r\n\r\nOnce the cheesecake is cold and firm, remove it from the pan and place in a mixer bowl with a paddle attachment. Beat the cake for a few moments to soften and smooth out the custard. Place smoothed custard into a piping bag with a plain tip and pipe into the bottom of a plastic lined half cylinder mold. Tap the mold to ensure the custard is solid and then flatten out to top. Freeze the mold to harden the custard for unmolding. Once the cake can be unmolded, remove from the pan and cut into 1\u00bd\" sections. Brush some tempered Godiva Dark Chocolate onto a strip of acetate and, while it is still fluid, smooth over the top of the molded cheesecake. Once the chocolate has cooled and completely crystallized, remove the acetate, revealing a shiny and textured chocolate finish.",
        "ingredients": [
            "cream cheese\r",
            "sugar\r",
            "cocoa powder\r",
            "Godiva 85% Dark Chocolate Callets\r",
            "eggs\r",
            "egg yolks\r",
            "cr\u00e8me faiche"
        ],
		"measurements": [
            "2 1\/2 cup cream cheese, room temperature\r",
            "1\/2 cup sugar\r",
            "1 3\/4 tablespoon cocoa powder\r",
            "5 tablespoon Godiva 85% Dark Chocolate Callets\r",
            "2 eggs\r",
            "2 egg yolks\r",
            "1 3\/4 tablespoon cr\u00e8me faiche"
        ], ratio: 1
    },
  {
        "id": "12",
        "name": "Greek Salad",
        "instructions": "In a small bowl, whisk together the lemon juice, garlic, salt, and oil. Set aside.   In a large bowl lightly toss the lettuce with the olives, cheese, cucumber, tomatoes, onion, oregano, and black pepper. Let sit up to 2 hours.  To serve, toss salad with dressing and place sliced chicken on top.",
        "ingredients": [
            "lemon juice\r",
            "clove garlic\r",
            "kosher salt\r",
            "extra-virgin olive oil\r",
            "romaine lettuce\r",
            "kalamata olives\r",
            "Feta cheese crumbled\r",
            "cucumber\r",
            "grape tomatoes\r",
            "small red onion\r",
            "dried oregano\r",
            "Freshly ground black pepper"
        ],
		"measurements": [
            "6 tablespoon lemon juice\r",
            "2 clove garlic, minced\r",
            "2 teaspoon kosher salt, plus more to taste\r",
            "1 cup extra-virgin olive oil, preferably Greek\r",
            "<hr>\r",
            "1 head romaine lettuce, trimmed of tough stems and torn into bite-sized pieces\r",
            "1 cup kalamata olives, about 6oz\/cup\r",
            "1\/2 pound Feta cheese, crumbled\r",
            "1 cucumber, trimmed, cut into 1 inch chunks\r",
            "1 1\/2 cup grape tomatoes, halved\r",
            "1 small red onion, cut into 1\/2-inch wedges, soaked in cold water for 5 minutes and drained\r",
            "2 teaspoon dried oregano\r",
            "Freshly ground black pepper"
        ], ratio: 1
    },
     {
        "id": "13",
        "name": "Flaky Buttermilk Biscuits",
        "instructions": "Adjust oven rack to lower-middle position; heat oven to 450 degrees.  \r\n\r\nWhisk flour, baking power, baking soda, and salt in large bowl.\r\n\r\nAdd shortening to flour mixture; break up chunks with fingertips until only pea-sized pieces remain.  Working in batches, drop butter slices into flour mixture and toss to coat; pick up each slice of butter and press between floured fingertips into flat, nickel-sized pieces.  Repeat until all butter is incorporated; toss to combine.  Freeze mixture (in bowl) until chilled, about 15 minutes.\r\n\r\nSpray 24-square-inch work surface with nonstick cooking spray; spread spray evenly across surface with kitchen towel or paper towel.  Sprinkle 1\/3 cup of extra flour across sprayed area; gently spread flour across work surface with palm to form thin, even coating.  Add all but 2 tablespoons of buttermilk to flour mixture; stir briskly with fork until ball forms and no dry bits of flour are visible, adding remaining buttermilk as needed (dough will be sticky and shaggy but should clear sides of bowl).  With rubber spatula, transfer dough onto center of prepared work surface, dust surface lightly with flour, and, with floured hands, bring dough together into cohesive ball.\r\n\r\nPat dough into approximate 10-inch square; roll into 18- by 14-inch rectangle about 1\/4 inch thick, dusting dough and rolling pin with flour as needed.  Using bench scraper or thin metal spatula, fold dough into thirds, brushing any excess flour from surface; lift short end of dough and fold in thirds again to form approximate 6- by 4-inch rectangle.  Rotate dough 90 degrees, dusting work surface underneath with flour; roll and fold dough again, dusting with flour as needed.\r\n\r\nRoll dough into 10-inch square about 1\/2 inch thick; flip dough and cut nine 3-inch rounds with floured biscuit cutter, dipping cutter back into flour after each cut.  Carefully invert and transfer rounds to ungreased baking sheet, spaced 1 inch apart.  Gather dough scraps into ball; roll and fold once or twice until scraps form smooth dough.  Roll dough into 1\/2-inch-thick round; cut 3 more 3-inch rounds and transfer to baking sheet.  Discard excess dough.\r\n\r\nBrush biscuit tops with melted butter.  Bake, without opening oven door, until tops are golden brown and crisp, 15 to 17 minutes.  Let cool on baking sheet 5 to 10 minutes before serving.",
        "ingredients": [
            "unsalted butter\r",
            "vegetable shortening\r",
            "salt\r",
            "baking powder\r",
            "baking soda\r",
            "unbleached all-purpose flour\r",
            "butter\r",
            "buttermilk"
        ],
		"measurements": [
            "8 tablespoon unsalted butter, cold, lightly floured and cut into 1\/8-inch slices\r",
            "2 tablespoon vegetable shortening, cut into 1\/2-inch chunks\r",
            "1 teaspoon salt\r",
            "1 tablespoon baking powder\r",
            "1\/2 teaspoon baking soda\r",
            "2 1\/2 cup unbleached all-purpose flour\r",
            "2 tablespoon butter, melted\r",
            "1 1\/4 cup buttermilk, cold"
        ], ratio: 1
    },
    {
        "id": "14",
        "name": "Grilled Portobello Mushrooms Stacked with Fresh Spinach and Shaved Manchego Cheese",
        "instructions": "Heat grill to high. Brush mushroom caps on both sides with oil and season with salt and pepper. Grill, cap side down, until slightly charred, about 4 to 5 minutes. Turn the mushrooms over and continue grilling until just cooked through, about 3 to 4 minutes longer.\r\n\r\nStack the ingredients on each of 4 salad plates starting with a mushroom cap, a slice of cheese, some spinach, and a drizzle of Sherry Vinaigrette. Add another mushroom cap, more vinaigrette, spinach, and another slice of cheese. Place a third mushroom cap on top and finish by drizzling with additional vinaigrette and garnishing with chopped chives, if desired.\r\n\r\n[Sherry Vinaigrette](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=18)",
        "measurements": [
            "4 ounce manchego cheese, thinly sliced into 8 pieces\r",
            "3 cup baby spinach, washed and dried\r",
            "1 teaspoon freshly ground black pepper\r",
            "1 teaspoon kosher salt\r",
            "2 tablespoon olive oil\r",
            "12 portobello mushroom caps, wiped clean\r",
            "2 tablespoon fresh chives, finely chopped, for garnish, optional\r",
            "1 serving [Sherry Vinaigrette](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=18)"
        ],
		"ingredients": [
            "manchego cheese\r",
            "baby spinach\r",
            "freshly ground black pepper\r",
            "kosher salt\r",
            "olive oil\r",
            "portobello mushroom caps\r",
            "fresh chives\r",
            "Sherry Vinaigrette"
        ], ratio: 1
    },
     {
        "id": "15",
        "name": "Sherry Vinaigrette",
        "instructions": "Whisk together the shallot, vinegar, mustard, salt, and pepper in a small bowl. Slowly whisk in the oil until emulsified.",
        "ingredients": [
            "shallot\r",
            "sherry vinegar \r",
            "Dijon mustard\r",
            "kosher salt\r",
            "freshly ground black pepper\r",
            "olive oil"
        ],
		"measurements": [
            "1 small shallot, finely chopped\r",
            "1\/4 cup sherry vinegar or balsamic vinegar\r",
            "2 teaspoon Dijon mustard\r",
            "1\/4 teaspoon kosher salt\r",
            "1\/4 teaspoon freshly ground black pepper\r",
            "1\/2 cup olive oil"
        ], ratio: 1

    },
     {
        "id": "16",
        "name": "Margherita Salad",
        "instructions": "Puree the plum tomato, sun-dried tomatoes, vinegar, garlic, oregano, a basil leaves and parmesan in a blender, drizzling in the sun-dried tomato oil until smooth. Add 2 to 3 tablespoons water, if needed to make a pour-able dressing; season with salt and pepper.\r\n\r\nHeat the olive oil in a large skillet over medium-high heat. Add the breadcrumbs, season with salt and pepper and cook, stirring occasionally, until golden, about 2 minutes. Add the remaining parmesan and the parsley and cook until toasted, about 1 more minute.\r\n\r\nToss the salad greens, mozzarella, and remaining basil in a large bowl. Toss with the dressing, then sprinkle with the breadcrumb mixture.",
        "ingredients": [
            "plum tomato\r",
            "sun-dried tomatoes packed in oil\r",
            "red wine vinegar\r",
            "clove garlic\r",
            "dried oregano\r",
            "fresh basil\r",
            "parmesan, grated\r",
            "Kosher salt\r", 
			"freshly ground pepper\r",
            " extra-virgin olive oil\r",
            "breadcrumbs\r",
            "fresh parsley\r",
            "parmesan, grated\r",
            "Italian-blend salad greens\r",
            "fresh basil\r",
            "bocconcini (mozzarella)"
        ],
		"measurements": [
            "1 plum tomato, halved\r",
            "4 sun-dried tomatoes packed in oil\r",
            "2 tablespoon oil from the sun-dried tomato jar\r",
            "2 tablespoon red wine vinegar\r",
            "1 clove garlic\r",
            "1\/2 teaspoon dried oregano\r",
            "1\/4 bunch fresh basil, torn\r",
            "2 tbsp parmesan, grated\r",
            "Kosher salt and freshly ground pepper\r",
            "<hr>\r",
            "2 tablespoon extra-virgin olive oil\r",
            "1 cup breadcrumbs\r",
            "2 tablespoon chopped fresh parsley\r",
            "1\/4 cup parmesan, grated\r",
            "<hr>\r",
            "8 cup Italian-blend salad greens\r",
            "3\/4 bunch fresh basil, chiffonade\r",
            "8 ounce bocconcini (mozzarella), quartered"
        ], ratio: 1
        
    },
     {
        "id": "17",
        "name": "Mexican Ensalada",
        "instructions": "In small bowl, whisk together dressing ingredients.\r\n\r\nChop up additional ingredients bite size and add to a medium bowl.\r\n\r\nCombine dressing and all ingredients in a large bowl, toss, and serve.\r\n\r\nIncludes recipe for [basil-lime vinaigrette](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=id6).\r\n\r\nAlternate dressing (for 2 servings):\r\n1\/2 lemon, juiced; 1 tbsp apple cider vinegar; 2 tbsp olive oil; 2 tablespoons cilantro, chopped",
        "ingredients": [
            "lime\r",
            "balsamic vinegar\r",
            "basil leaves\r",
            "teaspoon cumin\r",
            "extra-virgin olive oil\r",
            "Kosher salt", "freshly ground black pepper\r",
            
            "cucumber\r",
            "avocado\r",
            "red bell pepper\r",
            "black beans\r",
            "tomato\r",
            "brown rice"
        ],
		"measurements": [
            "1 lime, zested and juiced\r",
            "1 tablespoon balsamic vinegar\r",
            "1\/4 cup basil leaves, chopped\r",
            "1\/2 teaspoon cumin\r",
            "2 tablespoon extra-virgin olive oil\r",
            "Kosher salt and freshly ground black pepper\r",
            "<hr>\r",
            "1\/2 cucumber, cubed\r",
            "1 avocado, cubed\r",
            "1 red bell pepper, cubed\r",
            "1\/2 cup black beans, rinsed and drained\r",
            "1 tomato, cubed\r",
            "1\/2 cup brown rice, cooked"
        ],
		ratio: 1
    },
    {
        "id": "18",
        "name": "Guacamole",
        "instructions": "1. Place all ingredients in a bowl with a flat bottom and mash it with a potato masher.  Alternatively, you can mix everything briefly in a food processor.\r\n2. Stir well and keep refrigerated. This dish will brown on the areas exposed to air within a few hours, so serve it shortly after making it or just stir again before serving.",
        "ingredients": [
            "ripe avocados\r",
            "roma tomates\r",
            "red onion\r",
            "cilantro\r",
            "clove garlic\r",
            "lime\r",
            "sea salt\r",
            "jalapeno"
        ],
		"measurements": [
            "4 ripe avocados\r",
            "2 roma tomates, diced fine\r",
            "1\/2 red onion, minced\r",
            "1\/2 handful cilantro, minced\r",
            "2 clove garlic, minced\r",
            "1 lime, juiced\r",
            "Pinch of sea salt\r",
            "1 jalapeno, seeded and minced fine (optional)"
        ], ratio: 1
    },
     {
        "id": "19",
        "name": "Sweet Almond Date Smoothie",
        "instructions": "Combine all ingredients in blender. Blend until smooth.",
        "ingredients": [
            "banana\r",
            "almond butter\r",
            "dates\r",
            "maple syrup\r",
            "cinnamon\r",
            "almond milk"
        ],

		"measurements": [
            "1 banana\r",
            "2 tbsp almond butter\r",
            "6 dates\r",
            "1 tsp maple syrup\r",
            "2 tsp cinnamon\r",
            "2 cup almond milk, or skim milk"
        ], ratio: 1
    },
     {
        "id": "20",
        "name": "Super Protein Salad",
        "instructions": "Combine olive oil, vinegar, mustard, salt and pepper to taste. Toss with other ingredients in a bowl and serve.",
        "ingredients": [
            " salad greens\r",
            " cucumber\r",
            " grape tomatoes\r",
            "black beans\r",
            "chickpeasd\r",
            "pistachios\r",
            "dried cranberries\r",
            
            "salt\r", "pepper\r",
            "olive oil\r",
            "red wine vinegar\r",
            "Dijon mustard"
        ],
		"measurements": [
            "2 cup salad greens\r",
            "1\/4 cucumber, sliced\r",
            "1\/2 cup grape tomatoes\r",
            "1\/4 cup black beans, drained and rinsed\r",
            "1\/4 cup chickpeas, drained and rinsed\r",
            "1 tbsp pistachios\r",
            "2 tbsp dried cranberries\r",
            "<hr>\r",
            "salt and pepper, to taste\r",
            "2 tbsp olive oil\r",
            "1 tbsp red wine vinegar\r",
            "1 tsp Dijon mustard"
        ], ratio: 1
    },
    {
        "id": "21",
        "name": "The Shake",
        "instructions": "Combine all ingredients in blender. Blend until smooth.",
        "ingredients": [
            "protein powder \r",
            "1ground flax seeds\r",
            "hemp seeds\r",
            "peanut butter\r",
            "banana\r",
            "raspberries\r",
            "blueberries\r",
            "milk"
        ],        
		 "measurements": [
            "1 scoop protein powder (optional)\r",
            "1 tbsp ground flax seeds\r",
            "2 tbsp hemp seeds\r",
            "2 tbsp peanut butter\r",
            "1 banana\r",
            "1 cup raspberries\r",
            "1 cup blueberries\r",
            "1 1\/2 cup milk"
        ], ratio: 1
 
    },
     {
        "id": "0",
        "name": "Apple Carrot Salad",
        "instructions": "1. In small bowl, whisk olive oil, vinegar, and lemon juice.\r\n2. Combine salad ingredients in a medium bowl. Pour dressing over salad. Slice eggs and place on top.",
        "ingredients": [
            "walnuts\r",
            "apple\r",
            "carrots\r",
            "apple cider vinegar\r",
            "olive oil\r",
            "lemon\r",
            "salt\r", "pepper\r",
            "eggs"
        ],

		"measurements": [
            "1\/2 cup walnuts, chopped\r",
            "1 apple, chopped\r",
            "4 carrots, spiralized or grated in food processor\r",
            "1 tbsp apple cider vinegar\r",
            "2 tbsp olive oil\r",
            "1\/2 lemon, juiced\r",
            "salt and pepper, to taste\r",
            "2 eggs"
        ], ratio: 1
    },
     {
        "id": "22",
        "name": "Extreme Green Salad",
        "instructions": "1. Place all the salad ingredients, except the sesame seeds, into a large bowl or platter.\r\n\r\n2. Whisk together all the dressing ingredients in a small bowl. Drizzle over the salad and toss lightly to coat.\r\n\r\n3. Sprinkle with sesame seeds and serve.",
        "ingredients": [
            "baby spinach leaves\r",
            "edamame\r",
            "large avocado\r",
            "cucumber\r",
            "sesame seeds\r",
            
            "lime\r",
            "wasabi paste\r",
            "soy sauce\r",
            "sesame oil\r",
            "black pepper"
        ],

		"measurements": [
            "4 handful baby spinach leaves\r",
            "1 cup edamame\r",
            "1 large avocado, diced\r",
            "1\/2 cucumber, finely sliced into half moons\r",
            "3 tablespoon sesame seeds\r",
            "<hr>",
            "1\/2 lime, juiced\r",
            "1\/2 teaspoon wasabi paste\r",
            "1 tablespoon soy sauce\r",
            "2 teaspoon sesame oil\r",
            "black pepper, to taste"
        ], ratio: 1
    },
     {
        "id": "23",
        "name": "Berry Sauce",
        "instructions": "1. Lightly warm berries and maple syrup in a saucepan\r\n2. Pour over pancakes\/dessert as desired",
        "ingredients": [
            "mixed berries\r",
            "maple syrup"
        ],
		"measurements": [
            "1\/2 cup mixed berries\r",
            "2 tbsp maple syrup"
        ], ratio: 1
    },
   {
        "id": "24",
        "name": "Popeye's Muscle Salad",
        "instructions": "Combine all ingredients in a bowl, toss, and serve.\r\n\r\nUse whatever vinaigrette you want.",
        "ingredients": [
            "baby spinach\r",
            "salad greens\r",
            "carrots\r",
            "avocado\r",
            "eggs\r",
            "pecans\r",
            "dried cranberries\r",
            
            "olive oil\r",
            "vinegar\r",
            "dijon mustard\r",
            "salt\r", "pepper"
        ],
		"measurements": [
            "1 cup baby spinach\r",
            "1 cup salad greens\r",
            "1 carrots, shredded\r",
            "1\/2 avocado, diced\r",
            "1 hard boiled eggs, peeled and carefully sliced\r",
            "2 tbsp pecans, chopped\r",
            "2 tbsp dried cranberries\r",
            "<hr>\r",
            "1 1\/2 tbsp olive oil\r",
            "2 tsp vinegar\r",
            "1 tsp dijon mustard\r",
            "salt and pepper"
        ], ratio: 1
	},
    {
        "id": "25",
        "name": "Breakfast Mediterranean Scramble",
        "instructions": "Heat oil in a small non-stick skillet. Once hot, add veggies and saute until soft. Meanwhile, beat greek seasoning and feta into eggs. Once veggies are at desired doneness, add egg mixture to skillet and gently stir until cooked. Serve immediately.",
        "ingredients": [
            "olive oil\r",
            "veggies\r",
            "eggs\r",
            "greek seasoning\r",
            "feta cheese"
        ],

		"measurements": [
            "1 tsp olive oil\r",
            "1 cup chopped veggies, your choice\r",
            "2 eggs, lightly beaten\r",
            "1\/2 tsp greek seasoning\r",
            "1\/4 cup feta cheese"
        ],ratio: 1
    },
     {
        "id": "26",
        "name": "Best Oatmeal Ever",
        "instructions": "1. To prepare, once oatmeal has been sufficiently cooked, add diced apples and nut butter. Stir for 2-3 minutes.\r\n2. Serve into a bowl and mix in cinnamon, flax seeds, maple syrup\/agave. Stir and enjoy!",
        "ingredients": [
            "quick-cooking oats\r",
            "apple\r",
            "cinnamon\r",
            "maple syrup\r",
            "nut butter\r",
            "ground flax seed"
        ],
		"measurements": [
            "1\/2 cup quick-cooking oats, cooked to your liking\r",
            "1\/2 apple, diced\r",
            "1\/2 tsp cinnamon\r",
            "1 tbsp maple syrup\r",
            "1 tbsp nut butter\r",
            "1 tbsp ground flax seed"
        ], ratio: 1
    },
     {
        "id": "27",
        "name": "Lovely Lentils",
        "instructions": "1. Pour coconut oil and chopped garlic into a saucepan, over medium heat, and saut\u00e9 the garlic until lightly browned.\r\n2. Add vegetable broth to the saucepan, allowing everything to simmer for about 5 minutes.\r\n3. Add 1 cup of water along with lentils and allow to simmer (uncovered) for about 20-30 minutes until they are soft. Add rosemary and drizzle olive oil near the end.",
        "ingredients": [
            "green lentils\r",
            "clove garlic\r",
            "vegetable broth\r",
            "water\r",
            "coconut oil\r",
            "fresh rosemary\r",
            "olive oil"
        ],
		"measurements": [
            "1 cup green lentils, rinsed\r",
            "2 clove garlic, minced\r",
            "500 ml vegetable broth\r",
            "250 ml water\r",
            "2 tbsp coconut oil\r",
            "1 tsp fresh or dried rosemary\r",
            "1 tbsp olive oil"
        ], ratio: 1
    },
    {
        "id": "28",
        "name": "Sweet Mashed Potatoes",
        "instructions": "1. In a pot that covers the potatoes with water, bring to a boil. The sweet potatoes are done when they are fork tender.\r\n2. Mash the potatoes with a hand mixer (or fork or masher) and slowly add in butter and milk until potatoes are creamy and mashed to your preferred consistency. Add a touch of cinnamon for added flavour.",
        "ingredients": [
            "sweet potatoes\r",
            "stick butter\r",
            "milk\r",
            "salt \r", "pepper\r",
            "cinnamon "
        ],
		"measurements": [
            "2 large sweet potatoes, peeled and chopped\r",
            "1\/2 stick butter\r",
            "1 cup milk\r",
            "salt and pepper, to taste\r",
            "1 tsp cinnamon (optional)"
        ], ratio: 1
    },
     {
        "id": "29",
        "name": "Steakhouse steaks",
        "instructions": "Preheat the oven to 400 degrees F.\r\n\r\nHeat a large, well-seasoned cast iron skillet over high heat until very hot, 5 to 7 minutes.\r\n\r\nMeanwhile, pat the steaks dry with a paper towel and brush them lightly with vegetable oil. Combine the fleur de sel and cracked pepper on a plate and roll the steaks in the mixture, pressing lightly to evenly coat all sides.\r\n\r\nWhen the skillet is ready, add the steaks and sear them evenly on all sides for about 2 minutes per side, for a total of 10 minutes.\r\n\r\nTop each steak with a tablespoon of butter, if using, and place the skillet in the oven. Cook the steaks until they reach 120 degrees F for rare or 125 degrees F for medium-rare on an instant-read thermometer. (To test the steaks, insert the thermometer sideways to be sure you're actually testing the middle of the steak.)\r\n\r\nRemove the steaks to a serving platter, cover tightly with aluminum foil and allow to rest at room temperature for 10 minutes. Serve hot with [Roquefort Cheese Sauce](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=62) on the side.",
        "ingredients": [
            "coarsely cracked black peppercorns\r",
            "fleur de sel\r",
            "vegetable oil\r",
            "10-ounce filet mignon\r",
            "unsalted butter\r",
            "Roquefort Cheese Sauce"
        ],
		"measurements": [
            "1 tablespoon coarsely cracked black peppercorns\r",
            "1 tablespoon fleur de sel\r",
            "2 tablespoon vegetable oil\r",
            "2 (10-ounce) filet mignon\r",
            "2 tablespoon unsalted butter, at room temperature, optional\r",
            "2 servings [Roquefort Cheese Sauce](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=62)"
        ], ratio: 1
    },
     {
        "id": "30",
        "name": "Stove top mac and cheese",
        "instructions": "In a large pot of boiling, salted water cook the pasta to al dente and drain. Return to the pot and melt in the butter. Toss to coat.\r\n\r\nWhisk together the eggs, milk, hot sauce, salt, pepper, and mustard. Stir into the pasta and add the cheese. Over low heat continue to stir for 3 minutes or until creamy.\r\n\r\n(This recipe originally called for 6oz milk.  It is reduced as an experiment.)",
        "ingredients": [
            "Fresh black pepper\r",
            "kosher salt\r",
            "hot sauce\r",
            "evaporated milk\r",
            "eggs\r",
            "butter\r",
            "elbow macaroni\r",
            "dry mustard\r",
            "sharp cheddar"
        ],

		"measurements": [
            "Fresh black pepper\r",
            "1 teaspoon kosher salt\r",
            "1\/2 teaspoon hot sauce\r",
            "4 ounce evaporated milk\r",
            "2 eggs\r",
            "4 tablespoon butter\r",
            "1\/2 pound elbow macaroni\r",
            "1\/4 teaspoon dry mustard\r",
            "10 ounce sharp cheddar, shredded"
        ], ratio: 1
    },
    {
        "id": "31",
        "name": "The Original Chex Party Mix",
        "instructions": "Heat oven to 250. Place butter in large roasting pan and melt in the oven. Mix together cereals, nuts, pretzels and bagel chips in a large bowl. Remove pan from oven and mix seasonings into the melted butter. Add cereal mix and stir well to coat with seasoned butter. Place in the oven and bake for 1 hour, stirring every 15 minutes. Spread mix out to cool before storing.",
        "ingredients": [
            "Corn Chex\u00ae cereal\r",
            "Rice Chex\u00ae cereal\r",
            "Wheat Chex\u00ae cereal\r",
            "mixed nuts\r",
            "1 cup bite-size pretzels\r",
            "garlic-flavor bite-size bagel chips \r",
            "butter\r",
            "Worcestershire sauce\r",
            "seasoned salt\r",
            "garlic powder\r",
            "onion powder"
        ],

		"measurements": [
            "3 cup Corn Chex\u00ae cereal\r",
            "3 cup Rice Chex\u00ae cereal\r",
            "3 cup Wheat Chex\u00ae cereal\r",
            "1 cup mixed nuts\r",
            "1 cup bite-size pretzels\r",
            "1 cup garlic-flavor bite-size bagel chips or regular-size bagel chips, broken into 1-inch pieces\r",
            "6 tablespoon butter or margarine\r",
            "2 tablespoon Worcestershire sauce\r",
            "1 1\/2 teaspoon seasoned salt\r",
            "3\/4 teaspoon garlic powder\r",
            "1\/2 teaspoon onion powder"
        ], ratio: 1
    },
     {
        "id": "32",
        "name": "Handmade Pasta",
        "instructions": "Sift flour and semolina into a medium bow.  Mix in salt.  Add eggs and olive oil, and beginning in the center, mix with two fingers in a circular motion until flour is combined with eggs.  Do not overmix.  Remove dough from bowl and gather into a ball.  On a lightly-floured board, knead gently with the heels of your hands, folding dough over onto itself until it forms a smooth mass.  Pat into a ball, flatten slightly, wrap in waxed paper or plastic wrap, and refrigerate for 30 minutes or as long as overnight.\r\n\r\nWork on a lightly floured surface.  Keep the dough lightly dusted with flour.  Roll dough into a sheet about 1\/16-inch thick.  Gently roll dough up into a cylinder.  With a slicing knife, cut crosswise in 1\/4-inch slices.  Dust dough with semolina and unwrap noodles.  Cover with a tea towel until ready to cook.  (The past may be made an hour ahead of time or frozen for up to 1 month.  Defrost in refrigerator.)  Fresh pasta will cook, in boiling salted water, in about 2-3 minutes.",
        "ingredients": [
            "all-purpose flour\r",
            "semolina\r",
            "salt\r",
            "eggs\r",
            "extra-virgin olive oil"
        ],
		"measurements": [
            "1 cup all-purpose flour\r",
            "1\/2 cup semolina\r",
            "1\/4 tsp salt\r",
            "2 eggs, at room temperature\r",
            "2 tsp extra-virgin olive oil"
        ], ratio: 1
    },
     {
        "id": "33",
        "name": "Emeril Essence Creole Seasoning",
        "instructions": "Combine all ingredients thoroughly.",
        "ingredients": [
            "paprika\r",
            "salt\r",
            "garlic powder\r",
            "black pepper\r",
            "onion powder\r",
            "cayenne pepper\r",
            "dried oregano\r",
            "dried thyme"
        ],
		"measurements": [
            "2 1\/2 tablespoon paprika\r",
            "2 tablespoon salt\r",
            "2 tablespoon garlic powder\r",
            "1 tablespoon black pepper\r",
            "1 tablespoon onion powder\r",
            "1 tablespoon cayenne pepper\r",
            "1 tablespoon dried oregano\r",
            "1 tablespoon dried thyme"
        ], ratio: 1
    },
     {
        "id": "34",
        "name": "Vegetarian Chili",
        "instructions": "In a large (6qt), heavy pot, heat the oil over medium-high heat. Add the onions, bell peppers, garlic, and serrano peppers, and cook, stirring, until soft, about 3 minutes. \r\n\r\nAdd the zucchini and mushrooms, and cook, stirring, until soft and the vegetables give off their liquid and start to brown around the edges, about 6 minutes. Add the chili powder, cumin, salt and cayenne, and cook, stirring, until fragrant, about 30 seconds. \r\n\r\nAdd the tomatoes and stir well. Add the beans, tomato sauce, and vegetable stock, stir well, and bring to a boil. Reduce the heat to medium-low and simmer, stirring occasionally, for about 20 minutes.\r\n\r\nRemove from the heat and stir in the cilantro and lime juice. Adjust the seasoning, to taste.\r\n\r\nTo serve, place 1\/4 cup of brown rice in the bottom of each bowl. Ladle the chili into the bowls over the rice. Top each serving with a dollop of sour cream and spoonful of avocado or [guacamole](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=28). Sprinkle with [Essence](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=id4) and green onions and serve.",
        "ingredients": [
            "canola oil\r",
            "yellow onions\r",
            "red bell peppers\r",
            "garlic minced\r",
            "serrano peppers\r",
            "medium zucchini\r",
            "portobello mushrooms\r",
            "chili powder\r",
            "ground cumin\r",
            "salt\r",
            "cayenne\r",
            "large tomatoes\r",
            "can black beans\r",
            "15oz can tomato sauce\r",
            "vegetable stock\r",
            "lime\r",
            " cilantro\r",
            "<hr>\r",
            "brown rice\r",
            "Sour cream \r",
            "guacamole\r",
            "Essence\r",
            "Chopped green onions"
        ],
		"measurements": [
            "2 tablespoon canola oil\r",
            "1 1\/2 cup yellow onions, chopped\r",
            "1 cup red bell peppers, chopped\r",
            "2 tablespoon garlic, minced\r",
            "2 serrano peppers, stemmed, seeded, and minced\r",
            "1 medium zucchini, stem ends trimmed and cut into small dice\r",
            "5 large portobello mushrooms, stemmed, wiped clean and cubed\r",
            "2 tablespoon chili powder\r",
            "1 tablespooon ground cumin\r",
            "1 1\/4 teaspoon salt\r",
            "1\/4 teaspoon cayenne\r",
            "4 large tomatoes, peeled, seeded and chopped\r",
            "2 can black beans, rinsed and drained\r",
            "1 15oz can tomato sauce\r",
            "1 cup vegetable stock, or water\r",
            "1 lime, juiced\r",
            "1\/4 cup cilantro, chopped\r",
            "<hr>\r",
            "Cooked brown rice, accompaniment\r",
            "Sour cream or strained plain yogurt, garnish\r",
            "Diced avocado or guacamole, garnish\r",
            "Essence, garnish\r",
            "Chopped green onions, garnish"
        ], ratio: 1
    },
   {
        "id": "35",
        "name": "Basil-Lime Vinaigrette",
        "instructions": "In a small bowl, combine the lime zest, lime juice, balsamic vinegar, basil, and cumin. Slowly add the oil, whisking constantly until the mixture thickens. Season with salt and pepper, to taste.",
        "measurements": [
            "2 limes, zested and juiced\r",
            "2 tablespoon balsamic vinegar\r",
            "1\/2 cup basil, chopped\r",
            "1 teaspoon ground cumin\r",
            "1\/4 cup extra-virgin olive oil\r",
            "Kosher salt and freshly ground black pepper"
        ],
		"ingredients": [
            "limes\r",
            "balsamic vinegar\r",
            "basil\r",
            "ground cumin\r",
            "extra-virgin olive oil\r",
            "Kosher salt\r",  "freshly ground black pepper"
        ], ratio: 1
    },
     {
        "id": "36",
        "name": "Lentil Soup",
        "instructions": "Place the olive oil into a large 6-quart Dutch oven and set over medium heat. Once hot, add the onion, carrot, celery and salt and sweat until the onions are translucent, approximately 6 to 7 minutes. Add the lentils, tomatoes, broth, coriander, cumin and pepper and stir to combine. Increase the heat to high and bring just to a boil. Reduce the heat to low, cover and cook at a low simmer until the lentils are tender, approximately 35 to 40 minutes. Using a stick blender, puree to your preferred consistency (optional). Serve immediately.",
        "ingredients": [
            "olive oil\r",
            "yellow onion\r",
            "carrot\r",
            " celery,\r",
            "kosher salt\r",
            "lentils\r",
            "tomatoes\r",
            "vegetable broth\r",
            "coriander\r",
            "cumin\r",
            "black pepper"
        ],

		"measurements": [
            "2 tablespoon olive oil\r",
            "1 cup onion, chopped\r",
            "1\/2 cup carrot, finely chopped\r",
            "1\/2 cup celery, finely chopped\r",
            "2 teaspoon kosher salt\r",
            "1 pound lentils, picked and rinsed\r",
            "1 cup tomatoes, peeled and chopped\r",
            "2 quart vegetable broth\r",
            "1\/2 teaspoon coriander, freshly ground\r",
            "1\/2 teaspoon cumin, freshly ground and toasted\r",
            "1\/2 teaspoon black pepper, freshly ground"
        ], ratio: 1
    },
     {
        "id": "37",
        "name": "Natural sports drink",
        "instructions": "Mix together",
        "ingredients": [
            " water\r",
            "lemon\r",
            "lime\r",
            "maple syrup\r",
            "sea salt"
        ],
		"measurements": [
            "2 cup water\r",
            "1\/2 lemon, juiced\r",
            "1\/2 lime, juiced\r",
            "4 tbsp maple syrup\r",
            "pinch of sea salt"
        ], ratio: 1
    },
     {
        "id": "38",
        "name": "Vegetable Stock",
        "instructions": "1. Cook leeks, carrots, onion, and garlic, covered stirring occasionally in a medium saucepan over medium heat for 10 minutes.\r\n2. Add water, parsley, thyme, bay leaf, and peppercorns. Raise heat to high. Bring to a boil, reduce heat. Simmer, uncovered, for 30 minutes. Pour through a cheesecloth-lined strainer; discard solids.\r\n\r\nStorage: stock can be refrigerated for up to 2 days or frozen for up to 3 months.",
        "ingredients": [
            "leeks\r",
            "carrots\r",
            "small onion\r",
            "garlic cloves\r",
            "water\r",
            "prig flat-leaf parsley\r",
            "sprig thyme\r",
            "dried bay leaf\r",
            "whole black peppercorns"
        ],

		"measurements": [
            "2 leeks, white and pale-green parts only, cut into 1-inch rounds, rinsed well\r",
            "2 carrots, cut into 1-inch rounds\r",
            "1 small onion, cut into 1-inch pieces\r",
            "3 garlic cloves\r",
            "8 cup water\r",
            "5 sprig flat-leaf parsley\r",
            "2 sprig thyme\r",
            "1 dried bay leaf\r",
            "2 teaspoon whole black peppercorns, crushed"
        ], ratio: 1
    },
     {
        "id": "39",
        "name": "Spicy Rice Casserole",
        "instructions": "Preheat oven to 425 degrees. (If not already done, cook rice according to package directions. Ideally, use a rice cooker earlier in the day.)\r\n\r\nMix rice, oats, onion, bread crumbs, milk, basil, oregano, cayenne, and egg.  Season to taste.  Press mixture into small baking dish.  Bake for 20 minutes.\r\n\r\nAs the rice goes into the oven, heat some olive oil in a small pan over medium heat and add panko. Stir occasionally until evenly brown.\r\n\r\nAlso as the rice goes into the oven, heat olive oil in a small pot and make marinara sauce.\r\n\r\nServe rice, topped with marinara and then panko.",
        "ingredients": [
            " rice\r",
            "quick-cooking oats\r",
            "yellow onions\r",
            "panko\r",
            "milk\r",
            "italian seasoning\r",
            "cayenne pepper\r",
            "large egg\r",
            "salt\r",  "pepper\r",
         
            "marinara sauce",
           
            "olive oil\r",
            "panko\r",

        ],
		"measurements": [
            "2 cup cooked rice\r",
            "1\/2 cup quick-cooking oats\r",
            "1\/2 cup onion, chopped\r",
            "1\/4 cup panko\r",
            "1\/4 cup milk\r",
            "1 tbsp italian seasoning\r",
            "1\/8 tsp cayenne pepper\r",
            "1 large egg, beaten\r",
            "salt and pepper\r",
            "<hr>\r",
            "4 serving [marinara sauce](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=id34)",
            "<hr>\r",
            "olive oil\r",
            "1\/2 cup panko\r",
      
        ], ratio: 1
    },
     {
        "id": "40",
        "name": "Citrus Rice Salad",
        "instructions": "To make the dressing, combine the orange zest and juice, lemon juice, and shallot. Whisk in the olive oil and season with a few pinches of salt and a few grinds of pepper.\r\n\r\nToss the hot rice with the spinach, pine nuts, citrus dressing, then top with the feta. Taste for seasoning and sprinkle with a bit more salt if needed.",
        "measurements": [
            "3 cup cooked brown rice, hot\r",
            "3 cup spinach leaves, stemmed and well rinsed\r",
            "1 cup toasted pine nuts\r",
            "1\/2 cup crumbled feta cheese\r",
            "<hr>\r",
            "1 orange, zested and juiced\r",
            "1 tablespoon fresh lemon juice\r",
            "1 tablespoon shallot, minced\r",
            "1\/4 cup extra-virgin olive oil\r",
            "salt and freshly ground pepper"
        ],
		"ingredients": [
            "ooked brown rice\r",
            "spinach leavesd\r",
            "toasted pine nuts\r",
            "crumbled feta cheese\r",
            "orange\r",
            "fresh lemon juice\r",
            " shallot\r",
            "extra-virgin olive oil\r",
            "salt\r",  "freshly ground pepper"
        ], ratio: 1
    },
     {
        "id": "41",
        "name": "Straw and Hay Fettuccine Tangle",
        "instructions": "Bring a large pot of water to a rolling boil.\r\n\r\nMeanwhile, make asparagus pesto.\r\n\r\nSalt the pasta water well and cook the pasta until just tender. Drain and toss immediately with 1 cup of the asparagus pesto (1\/4 cup per serving), stirring in more afterward depending on how heavily coated you like your pasta. Serve sprinkled with the remaining toasted pine nuts, a dusting of Parmesan, and a quick drizzle of extra-virgin olive oil.",
        "ingredients": [
            "asparagus pesto",
            "toasted pine nuts\r",
            "parmesan\r",
            "12 oz dried pasta"
        ],

		"measurements": [
            "4 serving [asparagus pesto](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=id436)",
            "1\/4 cup toasted pine nuts\r",
            "4 tbsp parmesan, grated\r",
            "12 oz dried pasta"
        ],ratio: 1
    },
     {
        "id": "42",
        "name": "Green-packed Stir Fry with Fresh Herbs",
        "instructions": "Cook the rice, if it is not already.\r\n\r\nWhen you have all your ingredients prepped, arrange them within arm's reach of the stove. Heat a small splash of sesame oil in a wok or large nonstick pan over medium-high heat. When the oil is hot, add the tofu and cook for a couple of minutes, until the tofu is golden. Remove from the pan. (You can also cook the tofu in a dry nonstick or well seasoned pan.)\r\n\r\nAdd another splash of oil to the wok and, as soon as it's hot, add the asparagus and stir for 2 minutes.  Add the white part of the green onions and chiles, and stir for another 2 minutes.  Add the green part of the green onions, and stir for another 2 minutes.  Add the garlic and ginger, and stir for 30 seconds, then add the cashews and spinach and stir for another minute, or until the spinach wilts and collapses. \r\n\r\nReturn the tofu to the pan. Stir in the stir-fry sauce. Cook for another minute, stirring constantly.\r\n\r\nRemove from heat and stir in the mint and basil. Season with enough soy sauce to make the flavors pop, starting with a splash.\r\n\r\nServe over cooked rice.\r\n\r\nNutrition information does not include stir-fry sauce.",
        "ingredients": [
            "rice\r",
            "Sesame oil\r",
            "8 oz extra-firm tofu\r",
            "clove garlic\r",
            "green onions\r",
            "fresh ginger\r",
            "jalapeno\r",
            "thin asparagus \r",
            "cashews\r",
            "spinach leaves\r",
            "fresh mint\r",
            "fresh basil\r",
            "stir-fry sauce"
        ],
		"measurements": [
            "1 cup cooked rice\r",
            "Sesame oil\r",
            "8 oz extra-firm tofu, cut into slices 1-inch long and as thick as a pencil\r",
            "4 clove garlic, minced\r",
            "5 green onions, chopped with white and green parts separated\r",
            "1 tbsp fresh ginger, peeled and minced\r",
            "1\/2 jalapeno, deseeded and chopped\r",
            "1\/2 bunch thin asparagus (about 1\/2 pound), trimmed and cut diagonally into 1-inch slices\r",
            "1\/2 cup cashews, coarsely chopped\r",
            "2 1\/2 cup spinach leaves, stemmed\r",
            "2 tablespoon fresh mint, slivered\r",
            "2 tablespoon fresh basil, slivered\r",
            "2 servings stir-fry sauce"
        ], ratio: 1
        
    },
    {
        "id": "43",
        "name": "Apple-Brie Panini",
        "instructions": "Preheat a skillet with 1 tablespoon butter (or oil) on medium-low.\r\n\r\nSpread Dijon mustard on the inside of a split piece of baguette. Fill with the brie and apple slices.\r\n\r\nAdd sandwich to skillet, the press a heavy pan on top to weigh it down. Cook until golden and crisp, 3 to 4 minutes per side. Add more butter to the skillet, if needed, for second side.",
        "ingredients": [
            "Dijon mustard\r",
            "Baguette\r",
            "brie cheese\r",
            "green apple\r",
            "unsalted butter"
        ],
		"measurements": [
            "Dijon mustard\r",
            "Baguette\r",
            "2 oz brie cheese, sliced\r",
            "1\/4 green apple, thinly sliced\r",
            "2 tablespoon unsalted butter"
        ], ratio: 1
   
    },
  {
        "id": "44",
        "name": "Shredded Green Beans",
        "instructions": "Slice the beans on a diagonal into roughly 1\/8-inch pieces. If you are using a food processor, do them a handful at a time. Either way, the result should be tiny, angular zeroes.\r\n\r\nHeat the olive oil in a large skillet over medium-high heat. Add the beans and stir until coated with oil, then add the water. Cover and cook 2 or 3 minutes, until the beans are brightly colored and tender; give the pan a good shake midway through to ensure even cooking. Remove from the heat and stir in the zests and half of the chives. Season to taste with salt and pepper and serve garnished with the remaining chives.",
        "ingredients": [
            "green beans\r",
            "extra-virgin olive oil\r",
            "water\r",
            "lemon\r",
            "lime\r",
            "chives\r",
            "Salt\r", "freshly ground pepper"
        ],
		"measurements": [
            "3\/4 pound green beans, tops and tails trimmed\r",
            "2 tablespoon extra-virgin olive oil or clarified butter\r",
            "2 tablespoon water\r",
            "1 lemon, zested\r",
            "1 lime, zested\r",
            "1\/4 cup chives, chopped\r",
            "Salt and freshly ground pepper"
        ], ratio: 1
    },
	 {
        "id": "45",
        "name": "Hot Cocoa",
        "instructions": "Prepare mix ahead of time. One serving is 1\/4 cup mix per cup of milk.\r\n\r\nBring milk to a simmer in a saucepan over medium heat. Whisk cocoa\/sugar mix into the milk. Add the chopped chocolate and reduce heat to low and simmer, stirring, until the chocolate melts and the cocoa is thick, about 2 minutes. Divide among mugs and garnish each with homemade marshmallows or whipped cream.",
        "ingredients": [
            "sugar\r",
            "unsweetened cocoa powder\r",
            "vanilla extract\r",
            "salt\r",
            
            "milk\r",
            "4 oz chocolate"
        ],
		"measurements": [
            "3\/4 cup sugar\r",
            "1\/2 cup unsweetened cocoa powder\r",
            "1 tsp vanilla extract\r",
            "1\/4 tsp salt\r",
            "<hr>",
            "4 cup milk\r",
            "4 oz chocolate, chopped fine"
        ], ratio: 1
    },
     {
        "id": "46",
        "name": "Pesto Orzo with Peas",
        "instructions": "Cook pancetta in a skilled with olive oil until crisp.  Remove with slotted spoon.\r\n\r\nMeanwhile, bring 1 quart of water to a boil. Add 1 tbsp salt and orzo. Cook about 5 minutes or until al dente.\r\n\r\nAdd frozen peas and water to the skillet; simmer until tender (about 5 minutes). Drain and return to skillet.\r\n\r\nStir in pesto, orzo, pancetta, and parmesan, and heat through.",
        "ingredients": [
            "4 oz pancetta\r",
            "frozen peas\r",
            "water\r",
            "pesto",
            "orzo\r",
            "Parmesan"
        ],
		"measurements": [
            "4 oz pancetta, diced\r",
            "12 oz frozen peas\r",
            "1 cup water\r",
            "4 servings [pesto](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=id99)",
            "1 cup orzo, uncooked\r",
            "2 tbsp Parmesan, grated"
        ], ratio: 1
    },
    {
        "id": "47",
        "name": "Roasted potatoes and tomatoes",
        "instructions": "Put a baking sheet in the oven and preheat to 450.\r\n\r\nCut potatoes lengthwise into eighths. Toss with olive oil, tomatoes, rosemary, garlic cloves, salt and pepper. Put cut-side down on the hot baking sheet and roast 15 minutes. Flip the mixture and roast 10 more minutes.",
        "ingredients": [
            "red potatoes\r",
            "olive oil\r",
            "grape tomatoes\r",
            "rosemary\r",
            "garlic cloves\r",
            "salt\r",  "pepper"
        ],
		"measurements": [
            "1 1\/2 pound red potatoes\r",
            "2 tbsp olive oil\r",
            "1 pint grape tomatoes\r",
            "3 sprig rosemary\r",
            "3 garlic cloves, smashed\r",
            "salt and pepper"
        ], ratio: 1

    },
     {
        "id": "48",
        "name": "Almond Caesar salad with croutons",
        "instructions": "For croutons: Toss bread with olive oil, almonds, parmesan, lemon zest, salt and pepper. Spread on a baking sheet and bake at 425, about 8 minutes.\r\n\r\nFor dressing: Meanwhile, process almonds, parmesan, anchovies, and garlic in a food processor until finely chopped. Add dijon and lemon juice, pulse motor until just combined. With motor running, drizzle in olive oil until thoroughly combined. Season with salt and pepper.\r\n\r\nToss dressing with lettuce and croutons.",
        "ingredients": [
            "Italian bread\r",
            "olive oil\r",
            "sliced almonds\r",
            "Parmesan\r",
            "lemon\r",
			"salt\r",  "pepper",
            
            "sliced almonds\r",
            "Parmesan\r",
            "anchovies\r",
            "garlic clove\r",
            "dijon mustard\r",
            "lemon\r",
            "olive oil\r",
            "lettuce"
        ],
		"measurements": [
            "4 cup Italian bread, cubed\r",
            "2 tbsp olive oil\r",
            "2 tbsp sliced almonds\r",
            "2 tbsp Parmesan, grated\r",
            "1\/2 lemon, zested\r",
            "salt and pepper\r",
            "<hr>\r",
            "1\/4 cup sliced almonds\r",
            "1\/4 cup Parmesan, grated\r",
            "3 anchovies\r",
            "1 garlic clove\r",
            "2 tsp dijon mustard\r",
            "1 lemon, juiced\r",
            "1\/4 cup olive oil\r",
            "6 cup lettuce"
        ], ratio: 1
    },
	{
        "id": "49",
        "name": "Spiced Apple Sauce",
        "instructions": "In a small saucepan gently melt the butter for a minute with the orange zest and juice, the sugar, cinnamon, grated nutmeg and cloves. Stir until the butter foams, then stir in the apples. Place a lid on top and cook for 15-20 minutes on a medium to low heat until you have a soft, sludgy sauce. Taste and add a bit more sugar if you want. Serve warm or room temperature.",
        "ingredients": [
            " unsalted butter\r",
            "orange\r",
            "sugar\r",
            "ground cinnamon\r",
            "nutmeg\r",
            "ground cloves\r",
            "eating apples\r",
            "cooking apple"
        ],
		"measurements": [
            "1 tbsp unsalted butter\r",
            "1\/2 orange, zested and juiced\r",
            "2 tbsp sugar\r",
            "1\/4 tsp ground cinnamon\r",
            "1\/4 nutmeg, grated\r",
            "1\/4 tsp ground cloves\r",
            "2 good eating apples, peeled, cored and chopped into 1 inch dice\r",
            "1 cooking apple, peeled, cored and chopped into 1 inch dice"
        ], ratio: 1
    },
    {
        "id": "50",
        "name": "Schnitzel",
        "instructions": "To prepare your meat, put the escalopes on to a chopping board, put a piece of wax paper on top and bat the meat with the bottom of a saucepan to flatten in a little - you want to get it to about 1\/4 inch thick.\r\n\r\nTo breadcrumb your meat, get yourself four large plates and lay them out in a line in the front of you. From left to right, you want to have your slat and pepper in one, flour in the second, beaten egg in the third and your fine breadcrumbs in the fourth. It's very simple...season the pieces of meat and dip them into the flour, shaking off any excess, then put them into the egg, dripping off any excess, and into the breadcrumbs, patting them over both sides and pressing down quite firmly. Gently shake off any excess and put the meat on a board or clean plate ready to be cooked.\r\n\r\nHeat a heavy frying pan, add a couple of good glugs of olive oil and, when it's good and hot, put both pieces of pork into the pan. Cook for 2 minutes or so, then carefully start to shake and agitate the pan to cover them in the hot oil. Turn the pork over and continue to cook for a couple of minutes until both sides are crisp and golden brown. Remove to a tray line with paper towels and season with salt and pepper. Put a schnitzel on to each of your serving plates. Put a little pile of cornichon matchsticks and some watercress leaves on top and serve with a big lob of apple sauce, a squeeze of lemon juice and a drizzle of extra virgin olive oil.",
        "ingredients": [
            "5.5oz pork escalopes\r",
            "Flour\r",
            "large egg\r",
            " breadcrumbs\r",
            "olive oil\r",
            "cornichonss\r",
            "1 bunch watercress\r",
            "lemon"
        ],
		"measurements": [
            "2 5.5oz pork escalopes\r",
            "Salt and pepper\r",
            "Flour\r",
            "1 large egg, beaten\r",
            "1 1\/2 cup breadcrumbs\r",
            "olive oil\r",
            "10 cornichons, optional for garnish, drained and cut in to matchsticks\r",
            "1 bunch watercress, washed and dried\r",
            "1 lemon, optional for serving"
        ], ratio: 1
    },
     {
        "id": "51",
        "name": "Oregano Marinated Chicken",
        "instructions": "To marinate the chicken: In a non-reactive dish, combine the lemon juice, olive oil, oregano, salt, and pepper and mix together. Add the chicken breasts to the dish and rub both sides in the mixture. Cover the dish with plastic wrap and let marinate in the refrigerator for at least 30 minutes and up to 4 hours.\r\n\r\nTo cook the chicken: Heat a nonstick skillet or grill pan over high heat. Add the chicken breasts and cook, turning once, until well browned, about 4 to 5 minutes on each side or until cooked through. Let the chicken rest on a cutting board for a few minutes before slicing it into thin strips.",
        "ingredients": [
            " boneless skinless chicken breasts\r",
            "black pepper\r",
            "salt\r",
            "extra-virgin olive oil\r",
            "dried oregano\r",
            "lemon"
        ],
		"measurements": [
            "4 (6 to 7-ounce) boneless skinless chicken breasts\r",
            "10 grinds black pepper\r",
            "1\/2 tsp salt\r",
            "2 tablespoon extra-virgin olive oil\r",
            "1 teaspoon dried oregano\r",
            "1 lemon, juiced"
        ], ratio: 1
    },
     {
        "id": "52",
        "name": "Black bean and cheese tacos",
        "instructions": "In a small pot, heat oil over medium. Add onion and garlic and cook until onion is soft and garlic is fragrant, 3 minutes. Add cumin and cook until fragrant, 1 minute. Add beans, water, salt, and pepper, and simmer until beans are heated through, 3 minutes. Mash in pan with wooden spoon.\r\n\r\nSeason to taste with salt and pepper if needed. Serve with tortillas, cheese, avocado, lettuce, and jalapenos.",
        "ingredients": [
            "extra-virgin olive oil\r",
            "small yellow onionl\r",
            "garlic cloves\r",
            "ground cumin\r",
            "1 can black beans\r",

            "flour tortillas\r",
            "Monterey Jack cheese\r",
            "avocado\r",
            "packed shredded romaine lettuce"
        ],
		"measurements": [
            "1 tsp extra-virgin olive oil\r",
            "1\/2 small yellow onion, diced small\r",
            "2 garlic cloves, roughly chopped\r",
            "1\/2 tsp ground cumin\r",
            "1 can black beans, rinsed and drained\r",
            "1\/2 cup water\r",
            "coarse salt and ground pepper\r",
            "<hr>\r",
            "4 flour tortillas, warmed or lightly toasted\r",
            "1 cup Monterey Jack cheese, shredded (1 cup \u2248 3 oz)\r",
            "1 avocado, pitted, peeled and thinly sliced\r",
            "1 cup packed shredded romaine lettuce"
        ], ratio: 1
       
    },
     {
        "id": "53",
        "name": "Joan's Broccoli Madness",
        "instructions": "Mix the first five ingredients in a large bowl.\r\nIn a second bowl, beat dressing ingredients together gently until smooth.\r\nToss the salad with the dressing approximately 10 minutes before serving to allow flavors to meld. Serve on chilled salad dishes.",
        "ingredients": [
            "bunch broccoli\r",
            "bacon\r",
            "cashews\r",
            "aisins\r",
            "red onion\r",
            "mayonnaise\r",
            "sugar\r",
            "apple cider vinegar"
        ],
		"measurements": [
            "1 bunch broccoli, raw\r",
            "\u00bd cup bacon, cooked and crumbled\r",
            "\u00bd cup cashews\r",
            "1\/3 cup raisins\r",
            "\u00bc cup red onion, chopped\r",
            "1 cup mayonnaise\r",
            "1\/3 cup sugar\r",
            "2 tablespoon apple cider vinegar"
        ], ratio: 1

    },
     {
        "id": "54",
        "name": "Marinara Sauce",
        "instructions": "In a large frying pan over medium heat, saute the garlic in the olive oil until fragrant, about 1 minute. Stir in the red pepper flakes, basil, oregano, and tomatoes and bring to a simmer. Reduce the heat to low and simmer until thickened, about 20 minutes. Season to taste.\r\n\r\nMakes about 2 1\/2 cups (20 fl oz\/625mL)",
        "ingredients": [
            "clove garlic\r",
            "extra-virgin olive oil\r",
            "italian seasoning\r",
            " 15oz can crushed Italian tomatoes\r",
           
        ],
		"measurements": [
            "2 clove garlic, minced\r",
            "2 tbsp extra-virgin olive oil\r",
            "2 tsp italian seasoning\r",
            "1 15oz can crushed Italian tomatoes\r",
            "Salt and freshly ground pepper"
        ], ratio: 1
    },
    {
        "id": "55",
        "name": "Creamy tomato soup",
        "instructions": "Combine the olive oil, onion, garlic, celery, tomatoes, sugar, and salt in a saucepan. Cook over medium heat, stirring occasionally, until the vegetables are tender, about 25 minutes. Puree until smooth (or desired consistency), or transfer to a regular blender in batches and puree. Pour back into saucepan and add milk and basil. Add salt and pepper to taste. For vegans or non-creamy soup, thin with water if needed.",
        "ingredients": [
            "extra-virgin olive oil\r",
            "yellow onion\r",
            "clove garlic\r",
            "small inner stalk celery\r",
            "tomatoes\r",
            "sugar\r",
            "salt\r",
            "fresh basil \r",
            " milk half-and-half"
        ],
		"measurements": [
            "1\/4 cup extra-virgin olive oil\r",
            "1 medium onion, finely chopped\r",
            "1 clove garlic, chopped\r",
            "1 small inner stalk celery, chopped\r",
            "2 pound tomatoes, chopped\r",
            "1\/2 teaspoon sugar\r",
            "1 tsp salt\r",
            "1 tablespoon fresh basil (or 1\/2 teaspoon dried basil), chopped\r",
            "1 cup milk, half-and-half, or cream\r",
            "Kosher salt and freshly ground black pepper"
        ], ratio: 1
    },
    {
        "id": "56",
        "name": "Triple Grilled Cheese",
        "instructions": "Combine all three cheeses in a bowl. Divide evenly among 4 bread slices and top with the remaining bread. Heat 1 tablespoon butter in a large skillet or griddle over medium heat. Cook the sandwiches in batches, adding the remaining butter as needed, until the cheese melts and the bread is golden, 3-4 minutes per side. Serve the sandwiches with the soup.",
        "measurements": [
            "1 cup shredded muenster cheese (about 4 oz)\r",
            "1 cup shredded mozzarella cheese (about 4 oz)\r",
            "1\/2 cup grated Parmesan cheese (about 1 oz)\r",
            "8 slices thick sandwich bread\r",
            "2 tablespoon unsalted butter"
        ],
		"ingredients": [
            " muenster cheese (about 4 oz)\r",
            "shredded mozzarella cheese (about 4 oz)\r",
            "grated Parmesan cheese (about 1 oz)\r",
            "thick sandwich bread\r",
            "unsalted butter"
        ], ratio: 1
    },
     {
        "id": "57",
        "name": "Vegetarian Steamed Dumplings",
        "instructions": "Preheat the oven to 200 degrees F.\r\n\r\nCut the tofu in half horizontally and lay between layers of paper towels. Place on a plate, top with another plate, and place a weight on top (a 14-ounce can of vegetables works well). Let stand 20 minutes. After 20 minutes, cut the tofu into 1\/4-inch cubes and place in a large mixing bowl. Add the carrots, cabbage, red pepper, scallions, ginger, cilantro, soy sauce, hoisin, sesame oil, egg, salt, and pepper. Lightly stir to combine.\r\n\r\nTo form the dumplings, remove 1 wonton wrapper from the package, covering the others with a damp cloth. Brush the edges of the wrapper lightly with water. Place 1\/2 rounded teaspoon of the tofu mixture in the center of the wrapper. Shape as desired. Set on a sheet pan and cover with a damp cloth. Repeat procedure until all of the filling is gone.\r\n\r\nUsing a steaming apparatus of your choice, bring 1\/4 to 1\/2-inch of water to a simmer over medium heat. Spray the steamer's surface lightly with the non-stick vegetable spray to prevent sticking. Place as many dumplings as will fit into a steamer, without touching each other. Cover and steam for 10 to 12 minutes over medium heat. Remove the dumplings from the steamer to a heatproof platter and place in oven to keep warm. Repeat until all dumplings are cooked.\r\n\r\nTo make dipping sauce, whisk together ingredients in a small bowl.",
        "ingredients": [
            "firm tofu\r",
            "carrots\r",
            "Napa cabbage\r",
            "red bell pepper\r",
            "green onions\r",
            "fresh ginger\r",
            "cilantro\r",
            "soy sauce\r",
            "hoisin sauce\r",
            "sesame oil\r",
            "egg\r",
            "kosher salt\r",
            "freshly ground black pepper\r",
           
            "small wonton wrappers\r",
            "Non-stick vegetable spray\r",
         
            "soy sauce\r",
            "seasoned rice vinegar\r",
            "sesame oil\r",
            "sriracha"
        ],
		"measurements": [
            "1\/2 pound firm tofu\r",
            "1\/2 cup carrots, coarsely grated\r",
            "1\/2 cup Napa cabbage, shredded\r",
            "2 tablespoon red bell pepper, finely chopped\r",
            "2 tablespoon green onions, finely chopped\r",
            "2 teaspoon fresh ginger, finely minced\r",
            "1 tablespoon cilantro, chopped\r",
            "1 tablespoon soy sauce\r",
            "1 tablespoon hoisin sauce\r",
            "2 teaspoon sesame oil\r",
            "1 egg, lightly beaten\r",
            "1 teaspoon kosher salt\r",
            "1\/4 teaspoon freshly ground black pepper\r",
            "Bowl of water, plus additional water for steamer\r",
            "40 small wonton wrappers\r",
            "Non-stick vegetable spray, for the steamer\r",
            "<hr>\r",
            "1 1\/2 tablespoon soy sauce\r",
            "1 tablespoon seasoned rice vinegar\r",
            "1 teaspoon sesame oil\r",
            "1\/2 teaspoon sriracha"
        ], ratio: 1
    },
     {
        "id": "58",
        "name": "Soba salad with asparagus and shrimp",
        "instructions": "1. In a large pot of boiling salted water, cook asparagus until crisp-tender, about 3 minutes. With a slotted spoon or mesh strainer, transfer asparagus to a colander and rinse under cool water to stop the cooking. Transfer asparagus to a medium bowl. Return water to a boil; add shrimp and cook until pink and opaque throughout, about 2 minutes. Transfer shrimp to bowl with asparagus. Return water to a boil; add noodles and cook according to package instructions. Drain noodles and rinse under cool water.\r\n\r\n2. Meanwhile, in a small bowl, whisk together soy sauce oil, vinegar, and sugar. Divide noodles among four bowls and drizzle with dressing. Top with asparagus and shrimp and sprinkle with scallions and basil.",
        "ingredients": [
            "Sea salt\r",
            " asparagus\r",
            "frozen large shrimp \r",
            "soba noodles\r",
            "soy sauce\r",
            "toasted sesame oil\r",
            "rice vinegar\r",
            "sugar\r",
            " green onions\r",
            "fresh basil leaves"
        ],
		"measurements": [
            "Sea salt\r",
            "1 pound asparagus, trimmed\r",
            "1 pound frozen large shrimp (peeled and deveined), thawed\r",
            "3\/4 pound soba noodles\r",
            "3 tablespoon soy sauce\r",
            "1 tablespoon toasted sesame oil\r",
            "1 tablespoon rice vinegar\r",
            "1 tablespoon sugar\r",
            "3 green onions, thinly sliced\r",
            "1 cup fresh basil leaves, chiffonade"
        ], ratio: 1

    },
    {
        "id": "59",
        "name": "Tofu and Sweet Potato Jambalaya",
        "instructions": "1. Drain tofu; cut into 3\/4-inch cubes. Carefully press cubes between paper towels to remove as much water as possible.\r\n2. Heat oil in 12-inch skillet over medium heat. Cook tofu in oil 6 to 8 minutes, turning frequently, until light golden brown. Remove tofu from skillet; set aside.\r\n3. Add sweet potato and garlic to skillet. Cook 2 to 3 minutes, stirring occasionally, just until sweet potato begins to brown. Stir in broth, rice, Worcestershire sauce and red pepper. Heat to boiling; reduce heat. Cover and simmer 10 minutes.\r\n4. Stir in beans. Cover and cook 8 to 10 minutes, stirring occasionally, until rice is tender and liquid is absorbed. Stir in tofu and onions. Cook 1 to 2 minutes or until heated through.",
        "ingredients": [
            "14 oz firm tofu\r",
            " olive oil\r",
            "large sweet potato\r",
            "clove garlic\r",
            "vegetable broth\r",
            "uncooked regular long-grain white rice\r",
            "Worcestershire sauce\r",
            "ground red pepper\r",
            "an black beans (15 oz)d\r",
            "medium green onions"
        ],
		"measurements": [
            "14 oz firm tofu\r",
            "1 tablespoon olive oil\r",
            "1 large sweet potato, peeled and cut into 1\/2-inch cubes\r",
            "2 clove garlic, finely chopped\r",
            "2 cup vegetable broth\r",
            "3\/4 cup uncooked regular long-grain white rice\r",
            "2 tablespoon Worcestershire sauce\r",
            "1\/4 teaspoon ground red pepper\r",
            "1 can black beans (15 oz), rinsed and drained\r",
            "12 medium green onions, sliced"
        ], ratio: 1
    },
     {
        "id": "60",
        "name": "Parker's split pea soup",
        "instructions": "In a 4-quart stockpot on medium heat, saute the onions and garlic with the olive oil, oregano, salt, and pepper until the onions are translucent, 10 to 15 minutes. Add the carrots, potatoes, 1\/2 pound of split peas, and chicken stock. Bring to a boil, then simmer uncovered for 40 minutes. Skim off the foam while cooking. Add the remaining split peas and continue to simmer for another 40 minutes, or until all the peas are soft. Stir frequently to keep the solids from burning on the bottom. Taste for salt and pepper. Serve hot.",
        "ingredients": [
            "yellow onions\r",
            "2 clove garlic\r",
            "good olive oil\r",
            "dried oregano\r",
            " kosher salt\r",
            "freshly ground black pepper\r",
            " carrots\r",
            "small red boiling potatoes\r",
            "dried split green peas\r",
            "chicken stock"
        ],
		"measurements": [
            "1 cup yellow onions, chopped\r",
            "2 clove garlic, minced\r",
            "1\/8 cup good olive oil\r",
            "1\/2 teaspoon dried oregano\r",
            "1 1\/2 teaspoon kosher salt\r",
            "1 teaspoon freshly ground black pepper\r",
            "4 carrots, medium-diced\r",
            "3 small red boiling potatoes, unpeeled and medium-diced\r",
            "1 pound dried split green peas\r",
            "8 cup chicken stock"
        ], ratio: 1
    },
     {
        "id": "61",
        "name": "Wild Mushroom Risotto",
        "instructions": "Heat the olive oil in a large pot over medium-high heat. Add the onion and saute, stirring frequently with a wooden spoon for 2 minutes. Add the mushrooms and cook until tender and slightly brown, about 8 minutes (add a splash more oil if necessary). Add the garlic and cook for 2 minutes more. \r\n\r\nAdd the rice and stir well, about 30 seconds. Add the wine and simmer, stirring constantly until the liquid is absorbed, 2 to 3 minutes. Add the stock, reduce the heat to medium, and cook, stirring occasionally, until the stock is absorbed, the rice is just tender, and the risotto is creamy. The total cooking time is 20 to 25 minutes.\r\n\r\nStir in 1\/4 cup cheese, the thyme, and butter. If the rice appears dry, add up to 1\/4 cup water to loosen the risotto slightly. Season with salt and pepper to taste.\r\n\r\nDivide the risotto between 2 large bowls and drizzle with truffle oil, if desired. Sprinkle with the remaining cheese and the chives.",
        "ingredients": [
            "olive oil\r",
            "yellow onion\r",
            "cremini mushrooms\r",
            "garlic clove\r",
            "arborio rice\r",
            "dry white wine\r",
            "vegetable stock\r",
            "Parmesan cheese\r",
            "thyme\r",
            "unsalted butter\r",
          
            "Truffle oil\r",
            "parsley"
        ],
		"measurements": [
            "2 1\/2 tablespoon olive oil\r",
            "1 small yellow onion, diced\r",
            "8 oz shiitake or cremini mushrooms, cleaned and sliced (if using shiitakes, discard stems)\r",
            "1 tbsp garlic, roughly chopped\r",
            "3\/4 cup arborio rice\r",
            "1\/2 cup dry white wine\r",
            "3 1\/2 cup vegetable stock (or chicken stock)\r",
            "3\/8 cup Parmesan cheese, grated, divided use\r",
            "1\/2 tsp thyme\r",
            "1 tbsp unsalted butter\r",
            "Salt and freshly ground pepper\r",
            "Truffle oil, for drizzling, optional\r",
            "1 tbsp parsley, chopped"
        ], ratio: 1
    },
     {
        "id": "62",
        "name": "Roasted Salmon with Walnut-Pepper Relish",
        "instructions": "1. Make the relish: preheat the oven to 350. Spread the walnuts on a baking sheet and bake until toasted 7 to 10 minutes. Let cool, then finely chop and transfer to a bowl. Add the cayenne, lemon juice, honey, roasted red pepper, walnut oil, olive oil and parsley. Add salt and black pepper to taste and toss to combine. (The relish can be made up to 1 day ahead; cover and refrigerate.)\r\n\r\n2. Make the salmon: Raise the oven temperature to 425. Combine the remaining olive oil and parsley, the chives, lemon zest, salt and black pepper to taste in a bowl. Rub the herb mixture *all* over the salmon. Lay skin-side down in a baking dish and roast until just cooking through, 12 to 14 minutes (for 3 lbs). Let rest 5 minutes, then transfer to a platter and top with the relish.",
        "ingredients": [
            "walnuts\r",
            "cayenne pepper\r",
            "lemon juice\r",
            "honey\r",
            "roasted red pepper\r",
            "walnut oil\r",
            "extra-virgin olive oil\r",
            "parsley\r",
            "extra-virgin olive oil\r",
            "chives\r",
            "lemon zest\r",
            "2 lb salmon filet"
        ],
		"measurements": [
            "1\/2 cup walnuts\r",
            "Pinch of cayenne pepper\r",
            "1 tbsp lemon juice\r",
            "1 tsp honey\r",
            "2 tbsp diced roasted red pepper\r",
            "1 tbsp walnut oil\r",
            "1 tbsp extra-virgin olive oil\r",
            "2 tbsp parsley, chopped\r",
            "1\/2 tsp salt\r",
            "black pepper\r",
            "<hr>\r",
            "1 tbsp extra-virgin olive oil\r",
            "2 tbsp parsley, chopped\r",
            "2 tbsp chives, chopped\r",
            "1 tsp lemon zest\r",
            "1\/2 tsp salt\r",
            "black pepper\r",
            "2 lb salmon filet (about 1.5 inches thick)"
        ], ratio: 1

    },
  {
        "id": "63",
        "name": "Brown rice, chickpea, feta, and mint salad",
        "instructions": "1. Mix rice with 1 tbsp lemon juice while warm.\r\n\r\n2. Combine rice and chickpeas in a bowl. Stir in lemon zest, remaining juice, and oil. Let cool.\r\n\r\n3. Stir in cheese, tomatoes, mint, and onion. Season with salt. Refrigerate until ready to serve.\r\n\r\nCan be refrigerated for up to 2 days.",
        "ingredients": [
            "cooked brown rice\r",
            "lemon juice\r",
            "chickpeas\r",
            "lemon zest\r",
            "olive oil\r",
            "feta cheese\r",
            "1grape or cherry tomatoes\r",
            "fresh mint\r",
            "small red onion"
        ],
		"measurements": [
            "1 1\/2 cup cooked brown rice\r",
            "2 1\/2 tbsp lemon juice\r",
            "1 cup chickpeas, drained and rinsed\r",
            "2 tsp lemon zest\r",
            "3 tbsp olive oil\r",
            "1\/2 cup feta cheese, crumbled\r",
            "1\/2 cup grape or cherry tomatoes, halved\r",
            "1\/2 cup fresh mint\r",
            "1\/4 small red onion, chopped\r",
            "Salt"
        ], ratio: 1
    },
    {
        "id": "64",
        "name": "Greek yogurt with homemade honeycomb",
        "instructions": "1. For the honeycomb: Line a shallow baking tray with parchment paper. Place the honey, liquid glucose, water and sugar in a large heavy-based saucepan and heat gently, stirring occasionally until the sugar dissolves. Increase the heat and cook until the mixture starts to turn a light golden colour. Mix in the baking soda. The mixture will erupt into a foaming mass. Pour immediately into the prepared baking tray.\r\n\r\n2. Leave to cool, then place in the fridge to set. This takes approx 6-10 mins. Break up with the end of a rolling pin and store in an airtight jar if not using immediately.\r\n\r\n3. Using a blender, blitz the raspberries and blueberries together with little caster sugar until smooth. Add a drop of lavender essence. Strain the mixture through a sieve to create a fresh coulis. Taste to check consistency and flavour, add a spoonful of water or sugar as necessary.\r\n\r\n4. Lightly mix almost all of the honeycomb through the yoghurt. Spoon into individual serving glasses and pour the coulis on top. Garnish with lavender flowers and a sprinkling of the remaining honeycomb. Serve immediately.",
        "ingredients": [
            "Greek yogurt\r",
            "blueberries\r",
            "raspberries\r",
            "aster sugar\r",
            "Lavender essence\r",
            "Dried lavender flowers\r",
            "clear honey\r",
            "liquid glucose\r",
            "sugar\r",
            "baking powder"
        ],
		"measurements": [
            "600 ml Greek yogurt\r",
            "100 g blueberries\r",
            "100 g raspberries\r",
            "2 tsp caster sugar\r",
            "Lavender essence, suitable for culinary use\r",
            "Dried lavender flowers, suitable for culinary use\r",
            "75 g clear honey\r",
            "140 g liquid glucose\r",
            "400 g sugar\r",
            "5 tbsp water\r",
            "2 tbsp baking powder"
        ], ratio: 1
    },
     {
        "id": "65",
        "name": "Cocktail Sauce",
        "instructions": "Combine all ingredients.",
        "ingredients": [
            "chili sauce \r",
            "ketchup\r",
            "prepared horseradish\r",
            "fresh lemon juice\r",
            " Worcestershire sauce\r",
            " hot sauce"
        ],
		"measurements": [
            "1\/2 cup chili sauce (American, like Heinz)\r",
            "1\/2 cup ketchup\r",
            "3 tablespoon prepared horseradish\r",
            "2 teaspoon fresh lemon juice\r",
            "1\/2 teaspoon Worcestershire sauce\r",
            "1\/4 teaspoon hot sauce"
        ], ratio: 1
    },
     {
        "id": "66",
        "name": "Heinz Chili Sauce",
        "instructions": "Whisk all the ingredients together in a small saucepan, place over medium heat.\r\n\r\nWhen mixture begins to bubble reduce heat to low and simmer for 30 minutes. Cover and cool. Refrigerate when cold",
        "ingredients": [
            " tomato puree\r",
            "agave nectar\r",
            " white vinegar\r",
            " dried onion flakes\r",
            " granulated sugar\r",
            "salt\r",
            "lemon juice\r",
            " garlic powder"
        ],
		"measurements": [
            "1 cup tomato puree\r",
            "2 tablespoon agave nectar\r",
            "1\/4 cup white vinegar\r",
            "2 teaspoon dried onion flakes\r",
            "2 teaspoon granulated sugar\r",
            "1 teaspoon salt\r",
            "1 teaspoon lemon juice\r",
            "1\/8 teaspoon garlic powder"
        ], ratio: 1
    },
    {
        "id": "67",
        "name": "Spinach souffle",
        "instructions": "Preheat the oven to 425F with the pan in the oven, and toast the pine nuts. \r\n\r\nWhisk the egg whites in a clean bowl to form stiff peaks. In a separate bowl, mix the egg yolks with the spinach, tomato, goat cheese, salt, and pepper to combine. Gently fold the egg whites into the spinach mixture. \r\n\r\nSpray the hot pan with oil, then spoon the mixture in and sprinkle with the pine nuts.\r\n\r\nBake in the oven for 10 minutes, or until well risen, golden, and firm. Serve.\r\n\r\nRather than fresh spinach, one can use 3.5oz per serving cooked spinach, chopped or pureed.",
        "ingredients": [
            "eggs\r",
            " spinach\r",
            " sundried tomatoes\r",
            "goat cheese\r",
            "pine nuts"
        ],
		"measurements": [
            "4 eggs, separated\r",
            "4 cup spinach, chopped fine\r",
            "2 sundried tomatoes, chopped fine\r",
            "1\/4 cup feta or goat cheese, crumbled\r",
            "1\/4 tsp salt\r",
            "1\/4 tsp pepper, or to taste\r",
            "1\/2 cup pine nuts, toasted"
        ], ratio: 1
    },
     {
        "id": "68",
        "name": "Roasted Shallot Vinaigrette",
        "instructions": "Preheat oven to 400\u00b0.\r\nWrap shallot in foil. Bake at 400\u00b0 for 35 minutes; cool for 10 minutes. Peel and mince. Combine shallot, vinegar, oil, sugar, mustard, salt, and pepper in a large bowl; stir well with a whisk.",
        "ingredients": [
            "medium shallot\r",
            "red wine vinegar\r",
            "extravirgin olive oil\r",
            "sugar\r",
            " Dijon mustard\r",
            " salt\r",
            "black pepper"
        ],
		"measurements": [
            "1 medium shallot, peeled\r",
            "2 tablespoon red wine vinegar\r",
            "1 tablespoon extravirgin olive oil\r",
            "1 teaspoon sugar\r",
            "1 teaspoon Dijon mustard\r",
            "1\/4 teaspoon salt\r",
            "1\/4 teaspoon black pepper"
        ], ratio: 1

    },
    {
        "id": "69",
        "name": "Peanut Noodle Salad",
        "instructions": "Thinly slice the bell pepper and scallions.  Roughly chop the basil, cilantro, mint, and peanuts.\r\n\r\nCook noodles according to package instructions.  Transfer to a serving bowl.\r\n\r\nWhisk the lime juice soy sauce, peanut butter, brown sugar, and vegetable oil in a medium bowl until smooth.  Pour the dressing over the noodles.  (If possible, do this when the noodles are hot - it helps melt the peanut butter, which will still be chunky in the dressing.)  \r\n\r\nAdd the bell pepper , scallions, basil, cilantro, and mint and toss to combine.  Season with salt and sprinkle with the peanuts.",
        "ingredients": [
            "rice vermicelli noodles\r",
            "lime juice\r",
            "soy sauce low-sodium\r",
            "peanut butter creamy\r",
            " dark brown sugar\r",
            "vegetable oil\r",
          
            "red bell pepper\r",
            "green onions\r",
            "basil\r",
            " cilantro\r",
            "mint\r",
            "kosher salt\r",
            "roasted peanuts"
        ],
		
		"measurements": [
            "8 ounce rice vermicelli noodles\r",
            "6 tbsp lime juice\r",
            "3 tbsp soy sauce, low-sodium\r",
            "3 tbsp peanut butter, creamy\r",
            "3 tbsp dark brown sugar\r",
            "3 tbsp vegetable oil\r",
            "<hr>",
            "1 red bell pepper, small and thinly sliced\r",
            "1\/2 cup green onions\r",
            "1\/2 cup basil\r",
            "1\/2 cup cilantro\r",
            "1\/2 cup mint\r",
            "kosher salt\r",
            "1\/3 cup roasted peanuts"
        ], ratio: 1
    },
    {
        "id": "70",
        "name": "Artichoke, Leek, and Potato Casserole",
        "instructions": "Preheat oven to 425\u00b0.\r\n\r\nIn a large skillet, heat 1 tbsp oil over medium-high.  Add leeks and celery; cook until softened, 8 minutes.  Add artichokes, broth, and cheese and stir to combine.  Remove skillet from heat, add lemon juice, and season with salt and pepper.\r\n\r\nBrush a 1 1\/2-quart baking dish with oil.  Arrange half the potato slices in a single layer, overlapping slightly; season with salt and pepper.  Top with artichoke mixture and smooth top . Layer with remaining potatoes, brush with 2 tsp oil, and season with salt and pepper.\r\n\r\nBake until sauce is bubbling and potatoes are golden and tender, 35 to 40 minutes.  Let cool 10 minutes before serving.",
        "ingredients": [
            "olive oil\r",
         
            "leeks\r",
            "celery stalks\r",
            "frozen artichoke hearts\r",
            "chicken broth\r",
            "Neufchatel cheese\r",
            "lemon juice\r",
    
            "medium russet potatoes"
        ],
		"measurements": [
            "1 tbsp olive oil\r",
            "2 tsp olive oil\r",
            "2 leeks, white and green parts only; sliced into thin half-moons and rinsed well\r",
            "3 celery stalks, thinly sliced\r",
            "18 oz frozen artichoke hearts, thawed, squeezed, and coarsely chopped\r",
            "1\/2 cup chicken broth\r",
            "8 oz Neufchatel cheese, room temperature\r",
            "2 tbsp lemon juice\r",
            "course salt and ground pepper\r",
            "2 medium russet potatoes, very thinly sliced"
        ], ratio: 1
    },
    {
        "id": "71",
        "name": "Broccoli with Parmesan and Walnuts",
        "instructions": "In a large skillet, heat olive oil over medium-high.  Add broccoli, trimmed and cut into florets, and cook until broccoli begins to brown, 4 minutes.  Add garlic and cook, stirring occasionally, until broccoli is crisp and tender and garlic begins to brown, 3 minutes.\r\n\r\nAdd red pepper flakes, season with salt and pepper, and transfer to serving bowl.  Toss with lemon zest, lemon juice, parmesan, and walnuts.  Serve warm or at room temperature.",
        "ingredients": [
            "extra-virgin olive oil\r",
            "head broccoli\r",
            "clove garlic\r",
            "red pepper flakes\r",
     
            "grated lemon zest\r",
            "fresh lemon juice\r",
            "parmesan\r",
            "walnuts"
        ],
		"measurements": [
            "2 tbsp extra-virgin olive oil\r",
            "1 head broccoli\r",
            "1 clove garlic, thinly sliced\r",
            "1\/4 tsp red pepper flakes\r",
            "salt and pepper\r",
            "2 tsp grated lemon zest\r",
            "1 tbsp fresh lemon juice\r",
            "1\/4 cup parmesan, grated\r",
            "1\/2 cup walnuts, toasted and chopped"
        ], ratio: 1
    },
     {
        "id": "72",
        "name": "Emeril's strawberry lemonade",
        "instructions": "1. In a medium saucepan, bring water and sugar to a boil over medium-high. Reduce to a simmer and cook, stirring occasionally, until sugar dissolves, 2 minutes. Transfer to a pitcher and refrigerated until cool, about 45 minutes. Add lemon juice and stir to combine.\r\n\r\n2. In a blender, puree strawberries until smooth. Pour through a fine-mesh sieve into a pitcher with lemon syrup, pressing on solid. Stir well to combine.\r\n\r\n3. To serve, stir in seltzer and divide among ice-filled glasses. Trop with lemon slices and mint.",
        "ingredients": [
      
            "sugar\r",
            " fresh lemon juice\r",
            "lemon\r",
            "strawberries\r",
            "16 oz seltzer\r",
            "mint"
        ],
		"measurements": [
            "2 cup water\r",
            "1 cup sugar\r",
            "1 cup fresh lemon juice, (about 6 lemons=1 cup juice)\r",
            "1 lemon, sliced for serving\r",
            "1 pound strawberries, hulled and halved (about  cups)\r",
            "16 oz seltzer, chilled\r",
            "mint, for serving"
        ], ratio: 1
    },
    {
        "id": "73",
        "name": "Pizza bianca",
        "instructions": "Preheat oven to 500. Lightly dust a work surface, rolling pin, and a baking sheet with flour. Roll dough out to a 13-inch round and transfer to sheet.\r\n\r\nIn a small bowl, stir together ricotta, oil and garlic; season with salt and pepper. Spread ricotta mixture on dough, leaving a 1\/2-inch border. Top with mozzarella, then Parmesan. Brush oil on edge of dough. Bake until crust is golden and cheese is melted and browned in spots, 12 to 14 minutes. \r\n\r\nIn a small bowl, toss arugula with oil and season to taste with salt and pepper. Top pizza with arugula and serve.",
        "ingredients": [
            "all-purpose flour\r",
            " pizza dough\r",
            "extra-virgin olive oil\r",
  
            "whole-milk ricotta cheese\r",
            " garlic clove\r",

            "mozzarella\r",
            "Parmesan\r",
            "baby arugula",
        ],
		"measurements": [
            "all-purpose flour, for dusting and rolling\r",
            "1 pound pizza dough, thawed if frozen\r",
            "1 teaspoon extra-virgin olive oil, for brushing\r",
            "<hr>\r",
            "1\/2 cup whole-milk ricotta cheese\r",
            "1 tablespoon extra-virgin olive oil\r",
            "1 garlic clove, minced\r",
            "salt and freshly ground pepper\r",
            "<hr>\r",
            "6 oz mozzarella, shredded\r",
            "1 oz Parmesan, grated (or Pecorino Romano)\r",
            "2 oz baby arugula\r",
            "1 tsp extra-virgin olive oil"
        ], ratio: 1

    },
     {
        "id": "74",
        "name": "Smoky Sweet-Potato Soup",
        "source": "Martha Stewart Living October 2011",
        "instructions": "Heat oil in a large pot over medium heat.  Cook garlic and leek until soft and translucent, about 4 minutes.  Add apple, celery, and ginger, and cook for 3 minutes.  Add sweet potatoes and stock, and simmer until sweet potatoes are tender, about 15 minutes.  \r\n\r\nAdd chipotle chiles.  Puree until smooth.  Season with salt and pepper.  Sprinkle with pepitas before serving.",
        "ingredients": [
            " olive oil\r",
            "3 clove garlic\r",
            "small leek\r",
            "tart green apple\r",
            "celery stalk\r",
            " ginger\r",
            "sweet potatoes\r",
            "chicken stock\r",
            "chipotle in adobo sauce\r",
      
            "salted pepitas"
        ],
		"measurements": [
            "3 tbsp olive oil\r",
            "3 clove garlic\r",
            "1 small leek, white and pale-green parts only, thinly slice and rinsed well\r",
            "1 tart green apple, cut into 1\" chunks\r",
            "1 celery stalk, thinly sliced\r",
            "1 tsp ginger, finely grated\r",
            "2 lb sweet potatoes, peeled and cut into 1\" cubes\r",
            "6 cup chicken stock\r",
            "1\/2 chipotle in adobo sauce\r",
            "salt and pepper\r",
            "1\/2 cup salted pepitas"
        ], ratio: 1
    },
    {
        "id": "75",
        "name": "Green goddess dressing",
        "instructions": "In a medium bowl, whisk together buttermilk, sour cream, and mayonnaise. Whisk in remaining ingredients. Season to taste with salt and pepper.",
        "ingredients": [
            "buttermilk\r",
            "sour cream\r",
            "mayonnaise\r",
            "avocado\r",
            "fresh chives\r",
            "fresh lemon juice\r",
            "fresh parsley"
        ],
		"measurements": [
            "1 cup buttermilk\r",
            "1\/2 cup sour cream\r",
            "1\/4 cup mayonnaise\r",
            "1\/2 avocado, mashed until smooth\r",
            "1\/4 cup fresh chives, finely chopped\r",
            "2 tbsp fresh lemon juice\r",
            "2 tbsp fresh parsley, chopped\r",
            "Salt and freshly ground pepper"
        ], ratio: 1
    },
    {
        "id": "76",
        "name": "Creamy roasted garlic dressing",
        "instructions": "In a medium bowl, whisk together buttermilk, sour cream, and mayonnaise. Whisk in remaining ingredients. Season to taste with salt and pepper.",
        "ingredients": [
            "buttermilk\r",
            "sour cream\r",
            " mayonnaise\r",
            "small head roasted garlic",
         
        ],
		"measurements": [
            "1 cup buttermilk\r",
            "1\/2 cup sour cream\r",
            "1\/4 cup mayonnaise\r",
            "1 small head roasted garlic, skins removed and cloves mashed until smooth\r",
            "Salt and freshly ground pepper"
        ], ratio: 1
    },
     {
        "id": "77",
        "name": "Creamy ranch dressing",
        "instructions": "Whisk together all ingredients in bowl. Season to taste with salt and pepper.",
        "ingredients": [
            " buttermilk\r",
            "sour cream\r",
            "mayonnaise\r",
            "fresh thyme\r",
            " garlic clove\r",
            "Pinch cayenne pepper"
        ],
		"measurements": [
            "1 cup buttermilk\r",
            "1\/2 cup sour cream\r",
            "1\/4 cup mayonnaise\r",
            "1 1\/2 tsp fresh thyme, chopped\r",
            "1 garlic clove, minced\r",
            "Pinch cayenne pepper\r",
            "Salt and freshly ground pepper"
        ], ratio: 1
        
    },
     {
        "id": "78",
        "name": "Creamy peppercorn-Parmesan dressing",
        "instructions": "Whisk together all ingredients.",
        "ingredients": [
            "buttermilk\r",
            "sour cream\r",
            "mayonnaise\r",
            "Parmesan"
        ],
		"measurements": [
            "1 cup buttermilk\r",
            "1\/2 cup sour cream\r",
            "1\/4 cup mayonnaise\r",
            "2 oz Parmesan, finely grated\r",
            "1 tsp pepper, coarsely ground\r",
            "Salt, to taste"
        ],ratio: 1
    },
     {
        "id": "79",
        "name": "Cherry-lime cups",
        "instructions": "1. Make crust: preheat oven to 350. Lightly butter six standard muffin cups. In a food processor, process butter, flour, sugar, and salt until mixture resembles coarse meal. Add yolks and vanilla and process until dough comes together when pressed (dough will be crumbly).\r\n\r\n2. Divide dough into 6 pieces. Roll each into a ball and place in a muffin cup, pressing evenly into bottom and up sides. Place a paper cupcake liner into each muffin cup over dough and fill with pie weights or dried beans. Bake until edges are dry, 15 minutes. Carefully remove liners and weights; bake until crusts are dry and barely golden, 5 to 7 minutes.\r\n\r\n3. Meanwhile, make filling: in a medium bowl, whisk together eggs, flour, sugar, lime juice, and salt. Place 3 cherry halves into each crust and divide filling among each. Bake until filling is set, about 25 minutes. With the tip of a knife or small offset spatula, remove cups from pan. Let cool completely on a wire rack.\r\n\r\nTo store, refrigerate in an airtight container, up to 1 day.",
        "ingredients": [
            "unsalted butter\r",
            "all-purpose flour\r",
            "sugar\r",
            "coarse salt\r",
            "egg yolks\r",
            "vanilla extract\r",
      
            " eggs\r",
   
			"fresh lime juice\r",
            "cherries"
        ],
		"measurements": [
            "7 tbsp unsalted butter, cold and cut into pieces, plus more for pan\r",
            "1 1\/3 cup all-purpose flour, spooned and leveled\r",
            "1\/4 cup sugar\r",
            "1\/2 tsp coarse salt\r",
            "2 egg yolks\r",
            "1\/2 tsp vanilla extract\r",
            "<hr>\r",
            "2 eggs, lightly beaten\r",
            "3 tbsp all-purpose flour\r",
            "2\/3 cup sugar\r",
            "5 tbsp fresh lime juice\r",
            "1\/4 tsp coarse salt\r",
            "9 cherries, halved and pitted"
        ], ratio: 1
    },
    {
        "id": "80",
        "name": "Roasted salsa",
        "instructions": "1. Heat broiler, with rack in top position. Place tomatoes, onion halves, jalapenos, and garlic in a single layer on a rimmed baking sheet.\r\n\r\n2. Broil until vegetables are blistered and slightly softened, rotating sheet and flipping vegetables frequently, 6 to 8 minutes (garlic may need to be removed earlier if it is browning too quickly.)\r\n\r\n3. Discard garlic skins. In a food processor, pulse garlic and vegetables until coarsely pureed. Add lime juice, season with salt and pepper, and pulse to combine.\r\n\r\n4. Transfer salsa to a bowl and stir in cilantro.\r\n\r\nYields 3 cups. Refrigerate up to 3 days or freeze up to 3 months.\r\n\r\nFor green salsa, use 1 1\/2 lbs tomatillos and omit lime juice.",
        "ingredients": [
            "tomatoes\r",
            "medium white onion\r",
            "jalapenos\r",
            "garlic cloves\r",
            " fresh lime juice\r",
          
            "fresh cilantro"
        ],

		"measurements": [
            "1 1\/2 lb tomatoes\r",
            "1 medium white onion, halved\r",
            "3 jalapenos\r",
            "3 garlic cloves, unpeeled\r",
            "3 tbsp fresh lime juice\r",
            "salt and freshly ground pepper\r",
            "1\/4 cup fresh cilantro, chopped"
        ], ratio: 1
    },

    {
        "id": "81",
        "name": "Shrimp and edamame with lime",
        "instructions": "Cook rice according to package instructions. Meanwhile, in a large nonstick skillet, heat oil over medium-high. Add shrimp and garlic and cook, stirring occasionally, 4 minutes. Add edamame and scallion whites and cook until shrimp are opaque and garlic is golden, about 3 minutes. Add scallion greens ad lime juice and cook 1 minute. Season to taste with salt and pepper; serve with rice and lime wedges, if desired.",
        "ingredients": [
            "long-grain rice\r",
            "extra-virgin olive oil\r",
            "medium shrimp\r",
            " large clove garlic\r",
            " frozen shelled edamame\r",
            "green onions \r",
            "fresh lime juice)"
        ],
		"measurements": [
            "1 cup long-grain rice, such as jasmine or basmati\r",
            "1 tbsp extra-virgin olive oil\r",
            "1 1\/4 lb medium shrimp, peeled and deveined\r",
            "1 large clove garlic, minced\r",
            "2 cup frozen shelled edamame, thawed (from a 10 oz package)\r",
            "5 green onions, halved lengthwise and cut into 1-inch pieces, white and green parts separated\r",
            "1 tbsp fresh lime juice, plus wedges for serving (optional)\r",
            "salt and freshly ground pepper"
        ], ratio: 1
    },
     {
        "id": "82",
        "name": "Strawberries and cream bars",
        "instructions": "1. In a blender, combine strawberries, 3\/4 cup sugar, and a pinch of salt and puree until smooth. Pour into a 9x13 baking dish. Transfer to freezer and scrape with a fork every 30 minutes until mixture is thick and slushy, 2 hours. Smooth top with rubber spatula.\r\n\r\n2. In a large bowl, using and electric mixer, beat egg whites on high until foamy. With mixer on medium, gradually add 3\/4 cup sugar. Increase speed to high and beat until stiff, glossy peaks form, 3 minutes. In another medium bowl, beat cream and vanilla on high until stiff peaks form, 1 to 2 minutes. With rubber spatula, gently fold whipped cream into egg white mixture. Pour over strawberry mixture and smooth top with rubber spatula. Freeze until firm, about 4 hours (or, covered, up to 3 days), before cutting into 12 squares.",
        "ingredients": [
            "strawberries\r",
            "sugar\r",
            "coarse salt\r",
            "egg whites\r",
            "cold heavy cream\r",
            "vanilla extract"
        ],
		"measurements": [
            "2 lb strawberries, hulled, halved if large (6 cups)\r",
            "1 1\/2 cup sugar\r",
            "coarse salt\r",
            "7 egg whites\r",
            "2\/3 cup cold heavy cream\r",
            "1 tsp vanilla extract"
        ],ratio: 1
        
        
    },
     {
        "id": "83",
        "name": "Frozen chocolate mousse trifles",
        "instructions": "1. In a medium bowl, toss together cake and brandy, if desired. In another medium bowl, using and electric mixer, beat egg whites on high until foamy. With mixer on medium, gradually add sugar. Increase speed to high and beat until stiff, glossy peaks form, 2 minutes. With a rubber spatula, gently fold cocoa powder into egg white mixture.\r\n\r\n2. In another medium bowl, beat cream on high until stiff peaks form, 3 minutes. Gently fold whipped cream into egg white mixture.\r\n\r\n3. Fill each of four small glasses with 1\/4 cup cake and top with heaping 1\/4 cup mousse. Repeat to make a second layer with remaining cake and mousse. Freeze until firm, 3 hours (or up to overnight). Let sit 10 minutes at room temperature, then finely grate chocolate over tops to serve.",
        "ingredients": [
            " chocolate angel food cake)\r",
            "brandy \r",
            "egg whites\r",
            "sugar\r",
            "unsweetened cocoa powder\r",
            "heavy cream\r",
            "bittersweet chocolate"
        ],
		"measurements": [
            "2 cup chocolate angel food cake, crumbled (5 oz)\r",
            "1 tbsp brandy (optional)\r",
            "4 egg whites\r",
            "1\/2 cup sugar\r",
            "1\/3 cup unsweetened cocoa powder, sifted\r",
            "1\/2 cup heavy cream, cold\r",
            "1\/2 oz bittersweet chocolate"
        ],
		ratio: 1
    },
     {
        "id": "84",
        "name": "Frozen lemon souffle",
        "instructions": "1. Wrap outside of a 3.5-cup souffle mold or four 6-ounce ramekins with parchment, extending 2 to 3 inches above rim (it should fit snugly). Secure with tape, set aside.\r\n\r\n2. In a medium saucepan, whisk together granulated sugar, lemon zest and juice, egg yolks, and salt over medium-high. Cook, whisking constantly, until mixture is thick enough to coat the back of a spoon and small bubbles form around edge of pan, about 5 minutes (do not boil). Immediately remove from heat while continuing to whisk. Pour through a fine-mesh sieve into a heatproof bowl, pressing on lemon curd with a rubber spatula.\r\n\r\n3. Place plastic wrap directly against surface of curd and refrigerate until cool, about 30 minutes (or up to overnight).\r\n\r\n4. In a large bowl, using an electric mixer, beat egg whites on high until stiff peaks form, 2 minutes. Gently fold egg whites into cooled lemon curd. In the same large bowl, beat cream on high until stiff peaks form, 1 to 2 minutes. Gently fold whipped cream into lemon curd mixture. Pour into mold and freeze until firm, 6 hours (or up to overnight). To serve, remove parchment, top with raspberries and dust with confectioners' sugar.",
        "ingredients": [
            " granulated sugar\r",
            " lemon zest\r",
            "lemon juice\r",
            "large eggs\r",
            "salt\r",
            "heavy cream\r",
            "raspberries\r",
            "confectioners' sugar"
        ],
		"measurements": [
            "1 cup granulated sugar\r",
            "1 tbsp lemon zest, grated\r",
            "3\/4 cup lemon juice\r",
            "8 large eggs, whites and yolks separated\r",
            "1\/4 tsp salt\r",
            "2\/3 cup heavy cream, cold\r",
            "1 1\/2 cup raspberries, about 6 oz\r",
            "confectioners' sugar, for dusting"
        ], ratio: 1
    },
    {
        "id": "85",
        "name": "Coconut lime semifreddo",
        "instructions": "1. Line a 4.5x8.5-inch loaf pan with parchment, leaving a 4-inch overhang on all sides. Prepare a large bowl of ice water. In a medium saucepan, combine coconut milk and condensed milk and bring to a boil over  high. Reduce heat and cook at a rapid simmer, stirring frequently until thickened, 10 minutes. Remove from heat and stir in lime zest and salt. Place saucepan in bowl of ice water and stir until mixture is cool, 4 minutes.\r\n\r\n2. In a large bowl, using an electric mixer, beat cream on high until stiff peaks from, 2 minutes. Gently fold whipped cream into coconut milk mixture. Pour into loaf pan; evenly sprinkle coconut over top. Freeze until firm, 6 hours (or covered, up to 3 days). Let sit 20 minutes at room temperature. Invert onto a serving platter; peel away parchment. Layer mango on top and serve.",
        "ingredients": [
            "13.5oz can unsweetened coconut milk\r",
            "14oz can sweetened condensed milk\r",
            "lime zest\r",
            " coarse salt\r",
            "heavy cream\r",
            "sweetened shredded coconut\r",
            "ripe mango"
        ],
		"measurements": [
            "1 13.5oz can unsweetened coconut milk\r",
            "1 14oz can sweetened condensed milk\r",
            "1 tbsp lime zest, grated\r",
            "1\/4 tsp coarse salt\r",
            "1 1\/2 cup heavy cream, cold\r",
            "1\/2 cup sweetened shredded coconut, toasted\r",
            "1\/2 ripe mango, thinly sliced"
        ], ratio: 1

    },
     {
        "id": "86",
        "name": "Sweet cherry granita",
        "instructions": "1. In a blender, puree cherries, sugar, and lemon juice until sugar is dissolved and mixture is smooth. Pour into an 8-inch square baking dish. Freeze 6 hours, scraping with fork every hour (mixture should be icy and fluffy).\r\n\r\n2. To serve, pour 1 tablespoon liqueur into each of 12 small bowls or glasses. Top with 1\/2 cup granita and a small dollop of whipped cream, if desired. Serve immediately.",
        "ingredients": [
            "cherries\r",
            "sugar\r",
            "lemon juice\r",
            "almond-flavored liqueur\r",
            "whipped cream "
        ],
		"measurements": [
            "2 lb cherries, stemmed and pitted, or 3 bags (12 oz each) frozen cherries, thawed\r",
            "1\/2 cup sugar\r",
            "1 tbsp lemon juice\r",
            "3\/4 cup almond-flavored liqueur, such as Disaronno (optional)\r",
            "whipped cream or mascarpone cheese (optional), for serving"
        ], ratio: 1
    },
    {
        "id": "87",
        "name": "Raspberry-lemon thumbprint cookies",
        "instructions": "Preheat the oven to 350 degrees F. Lightly butter 2 large baking sheets.\r\n\r\nIn a small bowl, combine the jam and Chambord. Stir to combine.\r\n\r\nIn a medium bowl, combine the flour, baking powder, and salt and whisk to blend.\r\n\r\nIn a large bowl using an electric mixer, beat the butter and sugar until light and creamy. Beat in the egg yolks, lemon zest, lemon juice and vanilla. Add the flour mixture in 2 additions and beat just until moist clumps form. Gather the dough together into a ball.\r\n\r\nPinch off the dough to form 1-inch balls. Place on the prepared baking sheets, spacing 1-inch apart. Use your floured index finger or 1\/2 teaspoon measuring spoon to create depressions in the center of each ball. Fill each indentation with nearly 1\/2 teaspoon of the jam mixture. Bake until golden brown, about 20 minutes.\r\n\r\nTransfer the cookies to wire racks to cool completely.\r\n\r\nYield: 2 dozen",
        "ingredients": [
            "raspberry jamy\r",
            " Chambord \r",
            " all-purpose flour\r",
            " baking powder\r",
            " salt\r",
            "butter\r",
            "sugar\r",
            "egg yolks\r",
            "lemon zest\r",
            "lemon juice\r",
            "pure vanilla extract"
        ],
		"measurements": [
            "1\/2 cup raspberry jam or jelly\r",
            "1 tablespoon Chambord or kirsch\r",
            "2 1\/4 cup all-purpose flour\r",
            "1 teaspoon baking powder\r",
            "1\/4 teaspoon salt\r",
            "1 cup butter, at room temperature\r",
            "2\/3 cup sugar\r",
            "2 egg yolks\r",
            "1 tablespoon lemon zest\r",
            "1 tablespoon lemon juice\r",
            "1 teaspoon pure vanilla extract"
        ], ratio: 1
    },
	 {
        "id": "88",
        "name": "Glazed carrots",
        "instructions": "Melt butter in large saute pan over medium heat. Add carrots, orange juice, and thyme; cook, stirring occasionally, until carrots are tender, about 5 minutes. Season with salt and pepper. Serve warm.",
        "ingredients": [
            " unsalted butter\r",
            "baby carrots\r",
            " fresh orange juice\r",
            "fresh thyme leaves",
            
        ],
		"measurements": [
            "2 tbsp unsalted butter\r",
            "2 lb baby carrots, trimmed\r",
            "1 1\/2 cup fresh orange juice, from 4-5 oranges\r",
            "1\/2 tsp fresh thyme leaves\r",
            "Salt and freshly ground pepper"
        ], ratio: 1
    },
    {
        "id": "89",
        "name": "Baby Brussels sprouts with wild rice and pecans",
        "instructions": "1. Bring a large saucepan of water to a boil. Stir in wild rice, reduce to a simmer, and cook (uncovered) until tender, about 40 minutes. Drain rice.\r\n\r\n2. Meanwhile, melt 2 tbsp (or 2\/3) of the butter in a large saute pan over medium heat. Toast pecans, stirring frequently, until fragrant, about 5 minutes. With a slotted spoon, transfer pecans to a plate, and season with salt.\r\n\r\n3. Add remaining butter, the pearl onions, and the water to pan; simmer until water is evaporated and onions are tender and pale golden, about 10 minutes.\r\n\r\n4. Trim Brussels sprouts, then score an X into the bottom of each one. Place in a  steaming basket or colander set in a saucepan filled with 1 inch of water. Bring water to a boil, then reduce to a simmer; cover and steam until just tender enough to pierce with the tip of a sharp knife, 6 to 8 minutes.\r\n\r\n5. In a bowl, whisk together sherry vinegar, maple syrup, and mustard. Add rice, Brussels sprouts, and onions; toss to coat, and season with salt and pepper. Coarsely chop pecans and add just before serving, warm or at room temperature.",
        "ingredients": [
            "wild rice\r",
            "unsalted butter\r",
            "pecans\r",
            "Salt\r",
            " red pearl onions\r",
       
            " baby Brussels sprouts\r",
            "sherry vinegar\r",
            "pure maple syrup\r",
            " Dijon mustard"
        ],
		"measurements": [
            "2 cup wild rice\r",
            "3 tbsp unsalted butter, divided use\r",
            "3\/4 cup pecans\r",
            "Salt\r",
            "5 oz red pearl onions, peeled and halved through root end (about 1 cup=5 oz)\r",
            "1\/2 cup water\r",
            "1 lb baby Brussels sprouts\r",
            "2 tbsp sherry vinegar\r",
            "3 tbsp pure maple syrup\r",
            "2 tsp Dijon mustard"
        ], ratio: 1
    },
     {
        "id": "90",
        "name": "Pumpkin mousse",
        "instructions": "1. In a small saucepan, sprinkle gelatin over the cold water, and let soften 5 minutes. Cook softened gelatin over medium heat, swirling pan, just until gelatin is dissolved; do not let boil. Let cool completely.\r\n\r\n2. Place pumpkin puree in a large bowl. Stir in softened gelatin, then add egg yolks, maple syrup, nutmeg, vanilla, ginger, allspice, salt, white pepper, and rum. Whisk until fully blended.\r\n\r\n3. With an electric mixer on medium speed, whisk egg whites and the sugar to soft peaks. Gently fold egg-white mixture into pumpkin mixture to combine. Whip heavy cream on medium high to stiff peaks, then gently but thoroughly fold into pumpkin mixture.\r\n\r\n4. Divide mousse among 8 to 10 glasses; refrigerate until set, at least 2 hours, or up to 1 day, covered with plastic wrap. If desired, top each with a dollop of sweetened whipped cream and a pastry leaf before serving.\r\n\r\nFood safety note: the eggs in this recipe are not cooked",
        "ingredients": [
            "unflavored powdered gelatin\r",
            "canned unsweetened pumpkin puree\r",
            " large eggs\r",
            " maple syrup\r",
            " pure vanilla extract\r",
            " ground ginger\r",
            " ground allspice\r",
            " salt\r",
            "freshly ground white pepper\r",
            "dark rum\r",
            "sugar\r",
            "cream\r",
            "Sweetened whipped cream\r",
            "Pastry leaves for garnish"
        ],
		"measurements": [
            "1 envelope unflavored powdered gelatin\r",
            "1\/4 cup cold water\r",
            "5\/8 cup canned unsweetened pumpkin puree, 1\/2 cup plus 2 tbsp\r",
            "4 large eggs, separated\r",
            "3\/8 cup maple syrup, 1\/4 cup plus 2 tbsp\r",
            "1\/2 tsp pure vanilla extract\r",
            "1\/2 tsp ground ginger\r",
            "1\/2 tsp ground allspice\r",
            "1\/4 tsp salt\r",
            "Pinch of freshly ground white pepper\r",
            "2 tbsp dark rum\r",
            "1\/4 cup sugar\r",
            "1 cup heavy cream\r",
            "Sweetened whipped cream, for serving (optional)\r",
            "Pastry leaves for garnish (optional; see [Pate Brisee recipe](http:\/\/www.xanthir.com\/recipes\/showrecipe.php?id=id101))"
        ], ratio: 1
    },
     {
        "id": "91",
        "name": "Salted caramel six layer chocolate cake",
        "instructions": "1. Preheat oven to 350F. Make the cake: butter three 9-inch round cake pans, and dust with flour, tapping out excess. Sift flour, granulated sugar, cocoa, baking soda, baking powder, and 1 1\/2 teaspoons salt into the bowl of a mixer. Beat on low speed until just combined. Raise speed to medium and add eggs, buttermilk, warm water, oil, and vanilla. Beat until smooth, about 3 minutes.\r\n\r\n2. Divide batter among pans. Bake until cakes are set and a toothpick inserted into the center of each comes out clean, about 35 minutes. Let cool in pans set on a wire rack for 15 minutes. Turn out cakes onto racks and let cool completely.\r\n\r\n3. Make the caramel: Combine granulated sugar, corn syrup, and water in a medium saucepan over high heat. Cook, without stirring, until mixture is dark amber, about 14 minutes. Remove from heat, and carefully pour in cream (mixture will bubble violently); stir until smooth. Return to heat, and cook until a candy thermometer reaches 238F, about 2 minutes. Pour caramel into a medium bowl, stir in 1 teaspoon coarse salt, and let cool slightly, about 15 minutes. Stir in butter, 1 tablespoon at a time. Let cool completely.\r\n\r\n4. Meanwhile, make the frosting: whisk together cocoa and warm water in a bowl until cocoa dissolves. Beat butter, confections' sugar, and a generous pinch of coarse salt in a clean bowl with a mixer on medium speed until pale and fluffy. Gradually beat in melted chocolate and then cocoa mixture until combined. Let stand for 30 minutes before using.\r\n\r\n5. Trim tops of cakes using a serrated knife to creat a level surface. Cut each in half horizontally to form 2 layers. Transfer 1 layer to a serving platter and spread 3\/4 cup caramel over top. Top with another cake layer, and repeat with remaining caramel and cake layers, leaving top uncovered. Refrigerate until set, about 1 hour.\r\n\r\n6. Frost top and sides of cake in a swirling motion. Sprinkle with sea salt.\r\n\r\nMake ahead: Caramel can be refrigerated for up to 3 days. Bring to room temperature before using. Cake layers can be refrigerated for up to 3 days (they actually taste better when refrigerated and have a better texture for stacking).\r\n\r\nStorage: Frosted cake can be refrigerated for up to 3 days.",
        "ingredients": [
            "Unsalted butter\r",
            " all-purpose flour\r",
            "granulated sugar\r",
            "unsweetened Dutch-process cocoa powder\r",
            "baking soda\r",
            "baking powder\r",

            "4 large eggs\r",
        
            " safflower oil\r",
            "pure vanilla extract\r",
 
            "granulated sugar\r",
            "light corn syrup\r",
   
            "heavy cream\r",
      
            " unsalted butter\r",
 
            "Dutch-process cocoa powder\r",

          
            "confectioners' sugar\r",
   
            "semisweet chocolate\r",
            "Flaked sea salt"
        ],
		"measurements": [
            "Unsalted butter, room temperature, for pans\r",
            "3 cup all-purpose flour, plus more for pans\r",
            "3 cup granulated sugar\r",
            "1 1\/2 cup unsweetened Dutch-process cocoa powder\r",
            "1 tbsp baking soda\r",
            "1 1\/2 tsp baking powder\r",
            "Salt\r",
            "4 large eggs 1 1\/2 cups buttermilk\r",
            "1 1\/2 cup warm water\r",
            "5\/8 cup safflower oil, 1\/2 cup plus 2 tbsp\r",
            "2 tsp pure vanilla extract\r",
            "<hr>",
            "4 cup granulated sugar\r",
            "1\/4 cup light corn syrup\r",
            "1\/4 cup water\r",
            "2 cup heavy cream\r",
            "Salt\r",
            "2 stick unsalted butter, cold, cut into tablespoons\r",
            "<hr>",
            "3\/8 cup Dutch-process cocoa powder, 1\/4 cup plus 2 tbsp\r",
            "3\/8 cup warm water\r",
            "2 stick unsalted butter, room temperature\r",
            "1\/2 cup confectioners' sugar\r",
            "Salt\r",
            "1 lb semisweet chocolate, chopped, melted, and cooled\r",
            "Flaked sea salt, such as Maldon, for garnish"
        ], ratio: 1
    },
     {
        "id": "92",
        "name": "Cranberry almond muffins",
        "instructions": "1. Preheat oven to 350F. Line 16 cups of two 12-cup muffin tins with baking cups and lightly coat each with cooking spray.\r\n2. Whisk together sugar, flours, baking soda, and salt in a large bowl. Whisk together milk, yogurt, eggs, and orange zest and juice in a medium bowl. Fold milk mixture into flour mixture, then gently fold in cranberries until combined.\r\n3. Spoon batter into baking cups until each is three-quarters full. Sprinkle with almonds. Bake until a toothpick inserted into the center of each comes out clean, about 20 minutes. Transfer pans to wire racks, and let cool for 10 minutes. Turn out muffins onto racks and let cool completely.",
        "ingredients": [
            "Vegetable oil cooking spray\r",
            " sugar\r",
            " whole-wheat flour\r",
            "all-purpose flour\r",
            "almond flour\r",
            "baking soda\r",
            "salt\r",
            "nonfat milk\r",
            " plain low-fat yogurt\r",
            "large eggs\r",
            " orange\r",
            "cranberries\r",
            "sliced almonds"
        ],
		"measurements": [
            "Vegetable oil cooking spray\r",
            "1 1\/4 cup sugar\r",
            "1 cup whole-wheat flour\r",
            "3\/4 cup all-purpose flour\r",
            "3\/4 cup almond flour\r",
            "1 tsp baking soda\r",
            "1\/4 tsp salt\r",
            "2\/3 cup nonfat milk\r",
            "2\/3 cup plain low-fat yogurt\r",
            "2 large eggs\r",
            "1 orange, zested and juiced\r",
            "1 cup cranberries, fresh or frozen\r",
            "1\/2 cup sliced almonds"
        ], ratio: 1
    },
    {
        "id": "93",
        "name": "Hazelnut pear muffins",
        "instructions": "1. Preheat oven to 350F. Line 16 cups of two 12-cup muffin tins with baking cups and lightly coat each with cooking spray.\r\n2. Whisk together sugar, flours, baking soda, and salt in a large bowl. Whisk together milk, yogurt, eggs, and orange zest and juice in a medium bowl. Fold milk mixture into flour mixture, then gently fold in pears until combined.\r\n3. Spoon batter into baking cups until each is three-quarters full. Sprinkle with hazelnuts. Bake until a toothpick inserted into the center of each comes out clean, about 20 minutes. Transfer pans to wire racks, and let cool for 10 minutes. Turn out muffins onto racks and let cool completely.",
        "ingredients": [
            "Vegetable oil cooking spray\r",
            " sugar\r",
            "whole-wheat flour\r",
            "all-purpose flour\r",
            " hazelnut flour\r",
            "baking soda\r",
            " salt\r",
            "nonfat milk\r",
            "plain low-fat yogurt\r",
            "large eggs\r",
            " orange\r",
            " Bosc pears\r",
            "hazelnuts"
        ],
		"measurements": [
            "Vegetable oil cooking spray\r",
            "1 1\/4 cup sugar\r",
            "1 cup whole-wheat flour\r",
            "3\/4 cup all-purpose flour\r",
            "3\/4 cup hazelnut flour\r",
            "1 tsp baking soda\r",
            "1\/4 tsp salt\r",
            "2\/3 cup nonfat milk\r",
            "2\/3 cup plain low-fat yogurt\r",
            "2 large eggs\r",
            "1 orange, zested and juiced\r",
            "1 1\/2 Bosc pears, peeled, cored and chopped to make 2 cups\r",
            "1\/2 cup hazelnuts, coarsely chopped"
        ], ratio: 1
    },
     {
        "id": "94",
        "name": "Hazelnut pastry dough",
        "instructions": "1. Pulse flour, hazelnuts, and 1\/4 teaspoon salt in a food processor until combined. Add butter, and pulse until mixture resembles coarse meal, about 10 seconds. Drizzle 1\/4 cup ice water evenly over mixture and pulse until it just begins to hold together (dough should not be wet or sticky). If dough is too dry, add more water, 1 tablespoon at a time, and pulse.\r\n\r\n2. Divide dough in half, and shape each half into a rectangle. Wrap in plastic wrap. Refrigerate until firm, about 1 hour. Let stand for 10 minutes before rolling.\r\n\r\nMake ahead: Dough can be refrigerated overnight or frozen for up to 3 months. Let chilled dough stand at room temperature for 10 minutes and fozen dough thaw before using.",
        "ingredients": [
            "all-purpose flour\r",
            "toasted skinned hazelnuts, ground\r",
            
            " unsalted butter"
      
        ],
		"measurements": [
            "1 3\/4 cup all-purpose flour\r",
            "1\/2 cup toasted skinned hazelnuts, ground\r",
            "Salt\r",
            "2 stick unsalted butter, cut into pieces\r",
            "1\/4 cup ice water"
        ], ratio: 1
    },
     {
        "id": "95",
        "name": "Pesto",
        "instructions": "Place pine nuts in a skillet over medium-low heat. Stir or toss frequently until toasted. Cool before using.\r\n\r\nPlace basil, pine nuts, and garlic in food processor or blender. Pulse until finely chopped. With motor running, slowly drizzle in olive oil. Blend a few minutes, stopping occasionally to scrape sides, until smooth.\r\n\r\nStir in grated Parmesan. Taste for seasoning and add salt and pepper to taste, if desired. Yields about 1 1\/4 cup pesto.",
        "ingredients": [
            " pine nuts\r",
            " basil leaves\r",
            " clove garlic\r",
            "  extra-virgin olive oil\r",
            "freshly grated Parmesan cheese"
        ],
		"measurements": [
            "1\/4 cup pine nuts\r",
            "2 cup firmly packed basil leaves\r",
            "3 clove garlic\r",
            "1\/2 cup best quality extra-virgin olive oil\r",
            "3\/4 cup freshly grated Parmesan cheese\r",
            "Salt and freshly ground pepper, to taste"
        ], ratio: 1
    },

     {
        "id": "96",
        "name": "Pate brisee",
        "instructions": "1. Pulse flour, sugar, and salt in a food processor until combined. dd butter, and pulse until mixture resembles coarse meal, about 10 seconds. Drizzle 1\/4 cup ice water evenly over mixture. Pulse until mixture holds together when pressed between 2 fingers (dough should not be wet or sticky). If dough is too dry, add more water, 1 tablespoon at a time, and pulse.\r\n\r\n2. Shape dough into 1 large disk or 2 small disks, and wrap in plastic wrap. Refrigerate until firm, at least 1 hour. Dough can be refrigerated overnight or frozen for up to 3 months.\r\n\r\nTo make pastry leaves for garnishing: roll out dough to a 1\/4-inch thickness on a lightly floured surface and cut out leaves using floured leaf-shaped cookie cutters. Bake on a parchment-lined baking sheet at 350F, rotating sheet halfway throuh, until pale gold, about 12 minutes.",
        "ingredients": [
            " all-purpose flour\r",
            " sugar\r",
            " salt\r",
            "unsalted butter"
        ],
		"measurements": [
            "2 1\/2 cup all-purpose flour\r",
            "1 tbsp sugar\r",
            "1 tsp salt\r",
            "2 1\/4 stick unsalted butter, cold and cut into small pieces\r",
            "1\/4 to 1\/2 cup ice water"
        ], ratio: 1
    },
     {
        "id": "97",
        "name": "Tex-mex rice and black eyed peas",
        "instructions": "1. Cook the rice as the label directs. Meanwhile, heat the olive oil in a medium saucepan over medium-high heat. Add the salsa and cumin and cook, stirring, until the salsa is soft, about 5 minutes. Add the black-eyed peas, plus the liquid from one of the cans and 1\/4 cup water. Cook, stirring occasionally, until the beans are creamy and tender, about 12 minutes.\r\n\r\n2. Fluff the rice with a fork and divide among bowls. Add the spinach and cilantro to the black-eyed pea mixture and stir until wilted, about 1 minute; spoon evenly over the rice. Top each serving with a few avocado slices, some cheese and more salsa. Serve with sour cream or Greek yogurt, if desired.",
        "ingredients": [
            " brown rice\r",
            " extra-virgin olive oil\r",
            "fresh salsa\r",
            "ground cumin\r",
            "14oz cans black-eyed peas\r",
            "baby spinach\r",
            "fresh cilantro\r",
            "avocado\r",
            "shredded cheddar cheese\r",
            "Sour cream"
        ],
		"measurements": [
            "1 cup uncooked brown rice\r",
            "1 tbsp extra-virgin olive oil\r",
            "1 cup fresh salsa, plus more for topping\r",
            "1\/2 tsp ground cumin\r",
            "2 14oz cans black-eyed peas, 1 undrained; 1 drained and rinsed\r",
            "3 cup baby spinach\r",
            "1\/4 cup fresh cilantro, chopped\r",
            "1 avocado, halved, pitted and sliced\r",
            "1 cup shredded cheddar cheese\r",
            "Sour cream or Greek yogurt, for serving (optional)"
        ], ratio: 1
    },
     {
        "id": "98",
        "name": "Baked eggs and beans on toast",
        "instructions": "1. Preheat the oven to 375F. Heat olive oil in a large ovenproof skillet over medium-high heat. Add the onion and cook, stirring, until golden, about 5 minutes. Add the tomato paste and cook, stirring, 1 more minute. Stir in the vinegar, honey mustard, Worcestershire sauce, water, and salt and pepper to taste. Bring to a simmer, then add the beans, plus the liquid from one of the cans. Cook until the beans are soft, about 5 more minutes.\r\n\r\n2. Make eight indentations in the bean mixture and crack an egg into each. Sprinkle with salt and pepper and transfer to the oven. Bake until the egg whites are set, 10 to 14 minutes. (For 2 servings, 8-9 minutes. Whites should still be slightly \"jiggly\" when you remove from oven.)\r\n\r\n3. Meanwhile, heat a large skillet over medium-high heat. Brush the bread with olive oil on both sides and toast in the skillet, 1 minute per side. Toss the tomatoes, parsley and remaining olive oil, and salt and pepper to taste in a bowl. Divide the toast among plates; top each with 2 eggs, some beans and the tomato salad.",
        "ingredients": [
            " extra-virgin olive oil\r",
            " small onion\r",
            "tomato paste\r",
            " apple cider vinegar\r",
            " honey mustard\r",
            "Worcestershire sauce\r",
            "cup water\r",
        
            "can navy beans\r",
            "large eggs\r",

            " crusty bread\r",
            "grape tomatoes\r",
            "fresh parsley\r",
            "olive oil"
        ],
		"measurements": [
            "1 1\/2 tbsp extra-virgin olive oil, plus more for brushing\r",
            "1\/2 small onion, chopped\r",
            "1 tbsp tomato paste\r",
            "2 tbsp apple cider vinegar\r",
            "1 tbsp honey mustard\r",
            "2 tsp Worcestershire sauce\r",
            "1\/2 cup water\r",
            "Kosher salt and freshly ground pepper\r",
            "2 can navy beans, 1 undrained; 1 drained and rinsed\r",
            "8 large eggs\r",
            "<hr>\r",
            "8 thick slices crusty bread\r",
            "2 cup grape tomatoes, halved\r",
            "1\/4 cup fresh parsley, chopped\r",
            "1\/2 tbsp olive oil"
        ], ratio: 1
    },
    {
        "id": "99",
        "name": "Warm shrimp and potato salad",
        "instructions": "1. Preheat the oven to 400F. Toss the potatoes and bell pepper with olive oil, salt and pepper to taste in a shallow baking dish. Roast 15 minutes. Meanwhile, toss the shrimp with the garlic, oregano, paprika, olive oil, salt, and pepper to taste in a medium bowl.\r\n\r\n2. Add the shrimp to the baking dish. Roast, stirring once, until the shrimp are just cooked through and the potatoes are golden brown, 12 to 15 more minutes.\r\n\r\n3. Toss the romaine in a serving bowl with the lemon juice, olive oil, and salt and pepper to taste. Add the warm shrimp and vegetables and toss to combine. Top with the feta.",
        "ingredients": [
            " small red-skinned potatoes\r",
            "red bell pepper\r",
            "extra-virgin olive oil\r",
           
   
  
            "1 lb medium shrimp\r",
            "clove garlic\r",
            " dried oregano\r",
            " paprika\r",
   
            " romaine lettuces\r",
            "fresh lemon juice\r",
       
            "crumbled feta cheese"
        ],
		"measurements": [
            "1 lb small red-skinned potatoes, halved\r",
            "1 red bell pepper, thinly sliced\r",
            "1 tbsp extra-virgin olive oil\r",
            "1\/2 tsp salt\r",
            "Freshly ground pepper\r",
            "<hr>\r",
            "1 lb medium shrimp, peeled, deveined and halved crosswise\r",
            "2 clove garlic, chopped\r",
            "1 tsp dried oregano\r",
            "1\/2 tsp paprika\r",
            "1 tbsp extra-virgin olive oil\r",
            "1\/4 tsp salt\r",
            "<hr>\r",
            "4 cup romaine lettuce, torn into bite-sized pieces\r",
            "1 1\/2 tbsp fresh lemon juice\r",
            "3 tbsp extra-virgin olive oil\r",
            "1\/2 cup crumbled feta cheese"
        ], ratio: 1
    }, 

    {
        "id": "100",
        "name": "Cherry couscous pudding",
        "instructions": "Bring milks, sugar, almond extract, and a pinch of salt to a boil in a saucepan over medium heat. Add couscous, dried cherries and cinnamon stick; cover and cook 2 minutes. Remove from the heat and let sit, covered, 8 minutes. Fluff with a fork, remove the cinnamon stick and divide among bowls. Top with toasted almond slices and honey, if desired.",
        "ingredients": [
            " skim milk\r",
            " almond milk\r",
            " sugar\r",
            " almond extract\r",
    
            "whole-wheat couscous\r",
            "dried cherries\r",
            "cinnamon\r",
            "sliced almonds\r",
            "honey"
        ],
		"measurements": [
            "1 cup skim milk\r",
            "1 cup almond milk\r",
            "1\/4 cup sugar\r",
            "1\/4 tsp almond extract\r",
            "salt\r",
            "3\/4 cup whole-wheat couscous\r",
            "1\/2 cup dried cherries\r",
            "1 stick cinnamon\r",
            "1\/4 cup sliced almonds, toasted\r",
            "honey"
        ],
		ratio: 1
    },
	]);



	return(
		<div className = "library">
			{useEffect(() =>{console.log('library page loaded')})}
			<div className = 'libraryTitle flexer'>ChefDoe</div> 
			<Libbar list = {recipes} />
			<div className = 'recipePreviewsContainer flexer'> 
				<DisplayRecipePreviews list = {recipes}/>
			</div>
		</div>
	);
}

export function pullRandom(props){
	// given list of recipes, generate random id and return recipe with that id
	const recipes = props;
	const id = Math.floor((Math.random() * (recipes.length - 1)));
	const randomRecipe = (recipes.filter(recipe => recipe.id === id))[0];
	return randomRecipe;
}

export function DisplayRecipePreviews(props){
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		props.list.map((recipe) =>(
			<div className = "recipePreview flexer" key ={recipe.id}>
				<div className = "recipePreviewTitleBackground">
					<div className = "recipePreviewTitle"> {recipe.name}</div>
				</div>

			<Link to="/view" style= {{textDecoration: 'none', color: 'inherit'}} state = {recipe}>
					<div className = "libSubButton flexer quietLink"> Select Recipe </div>
				</Link>
			</div>
		))
	);
}

export default Library;