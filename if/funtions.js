/*
let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if ( coffeeIsGrinding){
        console.log("Stopping the grind");
        coffeeIsGrinding = false;

    }else{
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans ();
*/
/*
const coffeOrder = (size, typeofdrink) => {
    console.log(`CoffeOrder ${size} from tyoeofdrink ${typeofdrink}`);
   }
   
   coffeOrder("small", "large");
   coffeOrder("medium", "extralarge");
   coffeOrder("smaill", "extralarge");
*/
/*
const addUp = (num1, num2) => {
    return num1 / num2;
   }
   console.log(addUp(2,7)); 
   */
/*const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
   };
   const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
   };
   
   console.log("The temperature is " + getFahrenheit(49) + "°F");
   
// el parametro getFahrenheit ( x ) es la temperatura en Celsuis que despues se multiplica por 9 se divide por 5 y finalmente se suma 32
*/

/*
const square = (number) => {
    return number * number;
   };
   console.log(square(5));       
  */

   

/*
  function factorial (n) {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
    return (n * factorial(n-1));
    }
   }
   
   console.log(factorial(7));
  */ 

 /*
 const cashWithdrawal = (amount, accnum) => {
  console.log(`Withdrawing ${amount} from account ${accnum}`);
 }
 cashWithdrawal(300, 50449921);
 cashWithdrawal(30, 50449921);
 cashWithdrawal(200, 50447921); 
 */

/*
let accnumber = 50449921;
const cashWithdrawal = (amount, accnum) => {
 console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, accnumber);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921); 
*/
/*
const takeOrder = (size, drinkType) => {
    console.log(`Order received: ${size} ${drinkType}`);
   }
   takeOrder("Tall","Latte");
   */

   /*
  let accBal = 400;
let accPin = 1234;
const cashMachine = (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
    } else if (pinNum != accPin) {
        console.log(`PIN number is incorrect!. Please try again.`);
    } else {
        console.log(`Insufficient funds in your account! Please check and try again.`);
    }
}
cashMachine(1234, 300);
cashMachine(1235, 300);
cashMachine(1234, 410);
cashMachine(1235, 500);
*/

/*
const sandwichOrder = (top1, top2, top3, top4, top5)=>{
    console.log(`We are preparing your sandwich order:
    ${top1}, ${top2}, ${top3}, ${top4}, ${top5}`);
   
   }
   sandwichOrder("ham","cheese","turkey","bacon","tuna");
   */
  


/*
  for( i = 0 ; i < 10 ; i==){
    console.log(i);
   } 
   // counts from 0 to 9.
   */
  
/*
  let favouriteDrinks = ["Coke", "Fanta", "Tonic"];
  console.log(favouriteDrinks[1]);
  console.log(favouriteDrinks[2]);
  console.log(favouriteDrinks[0]);
*/

/*
let favouriteChoco = [
    "Mars",
    "Snickers",
    "Dairy Milk",
    "Picnic"
   ];
   for (chocoIndex = 0; chocoIndex < favouriteChoco.length;
   chocoIndex++) {
    console.log(favouriteChoco[chocoIndex]);
   }
*/
/*
   let favouriteFilms = [
       "Star wars",
       "No country for old man",
       "Oblivion",
       "Riddick",
       "The bad the good and the ugly"
    ];
    for (filmsIndex = 0; filmsIndex<favouriteFilms.length;filmsIndex++){
        console.log(favouriteFilms[filmsIndex]);

    }
    */

/*
   let cards = ["Diamond", "Spade", "Heart", "Club"];
   let currentCard = "Spade";
   while(currentCard != "Diamond"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
   }
   console.log(currentCard);
   */


   
/*
  let favFilms = [
    "Scream",
    "True romance",
    "Howl's moving castle"
]
favFilms.push("Election");
favFilms.push("Scream 2")
for(filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex])
}


*/

/*
let favFilms = [
    "Scream",
    "True romance",
    "Howl's moving castle"
]
favFilms.push("Election");
favFilms.push("Scream 2")
for(filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex])


const filmCheck = () => {
    if (favFilms[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters");
    } else {
        console.log("Booo, we want Ghostbusters");
    }
};
*/



let favFilms = [
    "Scream",
    "True romance",
    "Howl's moving castle"
]
favFilms.push("Election");
favFilms.push("Scream 2")
for(filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex])
}

const filmCheck = () => {
    if (favFilms[1] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters");
    } else {
        console.log("Booo, we want Ghostbusters");
    }
};
filmCheck();
