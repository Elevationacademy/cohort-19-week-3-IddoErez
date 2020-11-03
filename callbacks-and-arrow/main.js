Exercises - callbacks and arrows - 
1 --- 
const pushPull = function (callback) {
     callback()
}
const push = function () {
    console.log("pushing it!")
  }
  
const pull = function () {
    console.log("pulling it!")
  }
  
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"
// -------------------2----------------------------------------------------
  const getTime = function(callback1) {
     callback1(time)
}

  const returnTime = function (x) {
    alert('The current time is: ' + x)
  }
  
  const time = new Date()
  getTime(returnTime)

/-------------3------------------------------------------------------------
 const displayData = function (alertDataFunc, logDataFunc, data) {
   alertDataFunc(data);
   logDataFunc(data);
  };

const logData = function (data) {
      console.log(data)
}
 displayData(alert, logData, "I like to party")
// -----------------------4-----------------------------------------------
const add = (x, y, z) => x + y +z
console.log(add(2,4,3))
//------------------6----------------------------------------------
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
  const commentOnWeather = temp => {console.log("it's " + determineWeather(temp))}  
  commentOnWeather(30)
  commentOnWeather(22)
//----------------5-----------------------------------------------------------
const capitalize = name => {console.log(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase())}  
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia  
//--------------7-------------------------------------------------------------
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}
	
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
	
const makeSound = sound => alert(sound)
	
explode(shineLight, makeSound, "BOOM")
=========================================================================================================






// const createPerson = function(name, age){
//     const person = {
//         personName: name, 
//         personAge: age
//     }

//     return person
// }

// const momo = createPerson("Elon", 42)
// console.log(momo)

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //



// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()


//  const family = function() {
//    const members= []

//    const birth = function(name){
//     members.push(name)  
//     console.log(members)
//    }
//     return birth
//  }
  
//  const giveBirth = family("danny")
//  giveBirth("danny")
//  giveBirth("rami")
//  giveBirth("doron")
// //  giveBirth("mushon")
// //  giveBirth("Tinok")

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
// }

// }

// const m = mathOperations()
// x=m.mult(1.75,24)
// y=m.add(13,29)
// z=m.mult(7,m.div(36,6))
// console.log(x,y,z)


// const moreMath = function () {

// const round = function(x) {
//     return(Math.round(x));
// }
// const power =function(x,y) {
//     return(Math.pow(x,y));
// }
// const sqrt = function(x) {
//     return(Math.sqrt(x));
//  }
//  return {
//     toPower: power,
//     toRound: round,
//     toSqrt: sqrt,
// }

// }
// d= moreMath()
// c= d.toPower(5,2)
// t=d.toRound(4.2325342433242342342)
// o=d.toSqrt(225)
// console.log(c,t,o)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//-----------------------------------------------------------------------------------

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Doron')
// usersModule.addUser('Danny')
// usersModule.listUsers()
// console.log(userModule._users)


//                                                                                                                                                                         
// ==============================================================================================================

// ======================================================================================================================

// // const getData = function (callback) {
// //     setTimeout(function () {
// //         users = [{ name: "Rick" }, { name: "Morty" }]
// //         console.log("Got users")
// //         callback()
// //     }, 3000);
// // }

// // const displayData = function () {
// //     console.log("Going to display: " + users)
// //     for (user of users) {
// //         console.log(user.name)
// //     }
// // }

// // getData(displayData)



// // const doSomething = function(){
// //     console.log("something")
// //   }
  
// //   setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds



// // const timer = function(){
// //     console.log(new Date())
// //   }
  
// //   setInterval(timer, 1000)

// // setInterval (function() {
// // console.log(new Date())  
// // }, 1000)-

// const greet = (name) => {
//     console.log("Hello there, " + name)
//   }
  
//   greet("Jolene") //prints "Hello there, Jolene"


// const square = num => console.log(num ** 2)
// square(4)

// const add = (x, y) => x + y

// const sum = add(1, 2) 
// console.log(sum) //prints 3 

// const getFormalTitle = (title, name) => title + " " + name
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }
// suspenseBuilder.displayName()



// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument