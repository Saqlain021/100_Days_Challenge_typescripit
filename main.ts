//from day 1 to day 15 are in 45 assignment 
// Day 16.
console.log("Day 16:")
//Question 46:
//  Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
console.log("\nQuestion 46:")
let obj1={
    make:"Dell",
    model:1545,
    year:2010,
    describe:function(){
        console.log(`your laptop brand is ${this.make}, model is ${this.model} and year is ${this.year}.`)
    }

}
obj1.describe()

// Question 47:
//  Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
console.log("\nQuestion 47:")
let array1=[{
    make:"Dell",
    model:1545,
    year:2010
},{
    make:"Hp",
    model:"elite book",
    year:2017

},{
    make:"lenovo",
    model:"thinkpad",
    year:2020
}];
let [laptop1,laptop2]=array1
console.log(laptop1,laptop2)

// Question 48: 
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
console.log("\nQuestion 48:")

let price1=[20000,35000,50000];
let price2=[25000,45000,30000];
let compare=[...price1,...price2] 
//function ascendingNumber (a:number,b:number){return a-b}

const ascendingNumber=(a:number,b:number)=>{
    return a-b
}
compare.sort(ascendingNumber)
console.log(compare)


// Day 17.

// Question 49:
//  Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.
console.log("\nQuestion 49:")
function hobby(...hobbies:string[]):void{
    for(let a of hobbies){
        console.log(`my hobby is ${a} and i enjoy it very much.`)
    }
}
hobby("running","cooking","gyming")
// OR
// function hobby(...hobbies:string[]){
//     hobbies.forEach(function(hob:string){
//         console.log(`i like ${hob}`)

//     })
// }
// hobby("watering plant","reading")


// Question 50:
//  Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
console.log("\nQuestion 50:")

let tempLiteral:string=`hello my name is saqlain ali shah. I am doing typescript 100 days of coding.
1. This task will polish your typescript coding.
2. This is one of best coding language for beginners.`
console.log(tempLiteral)

// Question 51:
//  Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
console.log("\nQuestion 51:");
function rectangle(length:number, height:number){
    let rectangle= length*height;
    console.log(rectangle)

}
rectangle(6,10);

console.log("Refactor in to arrow function.")

let refactor=(length1:number,height1:number) => length1*height1
let resRefac=refactor(4,6)
console.log(resRefac)

//  Day 18:

// Question 52:
//  Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
console.log("\nQuestion 52:")
let mobileDetaile={
    make:"samsung",
    modeil:"S23",
    specification:{
        storage:"128Gb",
        scree_size:"6 inches",
        battery_health:"24 hours"

    }
}
console.log(mobileDetaile)

// Question 53:
//  Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
console.log("\nQuestion 53:");
let nestedObject:{language:string[],frameworks:string[],tool:string[]}={
    language:["tyescript","python","javascript"],
    frameworks:["react","angular","vue"],
    tool:["git","webpack","docker"]
}
let {language,frameworks,tool}=nestedObject;
console.log(language[2],frameworks[0],tool[0])

// Question 54:
//  Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
console.log("\nQuestion 54:");

function flexibleObj(key:string,value:string){
    let obje={};
    obje[key]=value;
    return obje;
}
let resFlexible=flexibleObj("theme","dark")
console.log(resFlexible)
