// array methods
// allow us to add to remove and change elements.

// adding elements to an array 
// array methods thaat we can use to add elements to an array are .push() and .unshift()which are desctructive methods.
// and the spread operator which is nondestructive.
//  push and shift work in the following way; 
// they take on more elemnts that you want to add.
// they return the length of the modified array 
// they are destructive methods 
// push adds elements to teh end of an array and 
// shift adds elements at the start of the array.

const superheroes=["catwoman","storm","jessica jones"];
superheroes.push("wonder woman", "batman","ironman");
console.log(superheroes);
superheroes.unshift("jesus christ", "alexander the great","barbie");
console.log(superheroes);
console.log(superheroes.length);

// spread operator
// the spread operator looks like and ellipsis ...
// the spread operator allows us to spread out the elemnts of an exsisting array into a new array.
// creating  a copy.

const coolCities=["newyork","san francisco"];
const copyofcoolCities =[ ...coolCities];
console.log(copyofcoolCities);
console.log(coolCities);
const allcities=["nairobi", ...coolCities];
console.log(allcities);
const addedcities=[...allcities,"adis ababa", "capetown"];
console.log(addedcities);

// note that the array method push is used to add elements at the end if an array while,
// the unshift method is used to add elements at the beggining of an array.
// the spread operator ... is used to make a copy of an exsiting array.
// the above elemnts are to be used to add elements to an array.



// REMOVING ELEMENTS FROM AND ARRAY.
// methods used to remove elements from an array are .pop() and .shift().
// the pop and shift methods have the following characteristics.
// they take no arguments,they remove a single element, they return the element that is removed,
// they are destructive methods.
// pop removes the last element and the shift removes the first elemnt in an array.

const days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
days.shift();
console.log(days);
days.pop();
console.log(days);
days.unshift("monday");
console.log(days);


// slice( ) - it removes elements in an array nondestructively.
// the mothod takes 0,1 or 3 arguments and returns a new array containing the sliced elemnts of the arra.
// with no arguments.it will return a copy of the original array.
const numbers=[1,2,3,4,5,6,7]
 const copynumbers= numbers.slice()
 console.log(numbers)
 console.log(copynumbers)

 copynumbers.unshift(10,11,12);
 console.log(copynumbers);
 console.log(numbers);

//  .slice() with arguments
// the arguemnts in the .slice parenthesis are the indexex of the elements in the array.
// the first index should be where the slcie array begins while the second index in the index before which the slice array should end.

const data=[1,5,3,7,3,8,9,10,21,34,58];
data.slice(4);
console.log(data);

const month=["january","july","june"]
month.slice(1)
console.log(month)

// .splice()- this allows us to remove,replace or add and element. it is a destructive method.
// basic syntax array.splice(with or without argument);
 const day=['monday',"tuesday","wednesday","thursday","friday","saturday","sunday"];
//  when splice has two arguments the first indicates where the new array is to start.
// while the second array indicates the number of elements to be removed.as whith the example below.
 day.splice(2, 1);
 console.log(day)
//  when the splice has one argument the index indicates where to begin the splice.
// is solice has 3 arguments it indicates all other arguments after the first two arguments as explained
// should be added to the new argument and replace elements. the first two arguments are explained above.
// splice with the second argument beong 0 returns an empty array.


// using bracket notation to replace elements 
const cards=[
    "ace of spades",
    "jack of clubs",
    "nine of clubs",
    "nine of diamonds",
    "three of hearts",
]
console.log(cards);
cards[3]="rocks of a feather";
console.log(cards);

// both .splice and using the bracket notation are destructive array methods.
