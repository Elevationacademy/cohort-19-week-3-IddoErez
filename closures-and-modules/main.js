// /  Exercises 
//-- 1 
const StringFormatter = function () {
       
    const capitalizeFirst = function(name) {
    let newName = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    return(newName)
    }
    const skewerCase = function(expression) {
        for (let i = 0; i < expression.length; i++) {
            if(expression.charAt(i) == " "){
         expression = expression.split(" ").join("-").toLowerCase()
            }
          } return(expression)
          }
          return {
            capitalizeFirst: capitalizeFirst,
            skewerCase: skewerCase
          }
    }

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))
console.log(formatter.skewerCase("blue box box")) //should print blue-box
//----  2---------------2----------------------2-------------------------------
    const Bank = function() {
        let privateMoney = 500
      const depositCash = function (cash) {
             return(privateMoney+= cash)
      }
      
      const checkBalance = function() {
           console.log(privateMoney)
      }
      return {
         deposit: depositCash,
         showBalance: checkBalance
      }
    }
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() 
//-----------------------------------------------------------