// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.


function question1() {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i].price;
    avg = sum / data.length;
    avgDollars = Math.round(100 * avg) / 100;
  }
  console.log("The average price is " + "$" + avgDollars);
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let arrayBetween = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18 && data[i].currency_code === "USD") {
      arrayBetween.push(data[i].title);
    }

  }
  console.log(arrayBetween.join("\n"));
}

//there was a typo in the instructions that had an item with a currency code of GBP, and it does not show up with your list of USD (5 items), my list of items accounts for only items between 14 and 18 USD.


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {

  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {

      console.log(data[i].title + " costs " + data[i].price + " pounds.");

    }


  }
}


// 4: Display a list of all items who are made of wood.
function question4() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      console.log(data[i].title + " is made of wood.");
    }
  }
}



// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(data[i].title + " has " + data[i].materials.length + " materials: " + ("\n") + "- " + data[i].materials.join("\n" + "- "));

    }
  }
}
// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let NumberOfHomemade = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      NumberOfHomemade.push(data[i].who_made)
    }
  }
  console.log(NumberOfHomemade.length + " items were made by their sellers.");

}