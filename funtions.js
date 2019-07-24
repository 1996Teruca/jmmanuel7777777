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

const takeOrder = (size, drinkType) => {
    console.log(`Order received: ${size} ${drinkType}`);
   }
   takeOrder("Tall","Latte");