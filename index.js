
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter returns something
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
let array1 = [1, 4, 2, 5, 7];
function map(array, iteratee){
let newArr = [];
for (i = 0; i < array.length; i++) { 
    newArr.push(iteratee(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function iteratee1(item) {
  return item * 2;
}

map(array1, iteratee1);




//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
let array2 = ["apple", "banana", "pear", "mango"];
function filter(array, iteratee){
let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if(iteratee(array[i])){
      newArr.push(iteratee(array[i]));
    } 
  }
  console.log(newArr);
  return newArr;
}

function iteratee2(word) {
  return word.length > 4;
}
filter(array2, iteratee2);



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
let array3 = [5, 12, 8, 10, 3];
function find(theArray, fnc){
for (let i = 0; i < theArray.length; i++) {
    if(fnc(theArray[i]) === true) {
      console.log((theArray[i]));
      return theArray[i];
      }
    }
}

function fnc1 (number) {
 return number % 2 === 0;
}

find(array3, fnc1);



//return the last item in theArray
let array4 = [1,2,3,4];
function findLast(theArray){
  let newArr = [];
  for(let i = 0; i < theArray.length; i++){
    if (i === theArray.length -1){
      newArr.push(theArray[i]);
      console.log(newArr);
      return newArr;
    }
  }
}
findLast(array4);



//return the first element of the array
let array5 = [1,2,3,4];
function head(theArray){
  let newArr = [];
  for(let i = 0; i < theArray.length; i++){
    if (i < 1){
      newArr.push(theArray[i]);
      console.log(newArr);
      return newArr;
    }
  }
}
head(array5);




//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
let reverseArray = [4,3,6,7,1];
function reverse(theArray){
  let newArr = [];
  for(let i = theArray.length - 1; i >= 0; i--) {
    newArr.push(theArray[i]);
    }
    console.log(newArr);
    return newArr;
}
reverse(reverseArray);




//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
let array6 = ["apple", "pear", "banana", "lemon"];
function tail(theArray){
  let newArr = [];
  for(let i = 0; i < theArray.length; i++) {
    if (i !== 0) {
      newArr.push(theArray[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
tail(array6);





//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
let array7 = [2, 8, 7, 4, 10]; 
function sort(theArray){
  let sorted = false;
  while (sorted === false) {
    let swapped = false;
    for (let i = 0; i < theArray.length; i++) {
      if (theArray[i] > theArray[i+1]) {
        let hold = theArray[i];
        theArray[i] = theArray[i+1];
        theArray[i+1] = hold;
        swapped = true;
      }
    }
    if(!swapped) {
      sorted = true;
    }
  }
  console.log(theArray);
  return theArray;
}
sort(array7);




let array8 = [2, 4, 6, 8];
function forEach(array, callback) {
  let newArr = [];
    for(var i =0; i < array.length; i++) {
      newArr.push(callback(array[i], i, array));
    }
    console.log(newArr);
    return newArr;
  }

  function callback1 (number) {
    return number/2;
  }
forEach(array8, callback1)

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
