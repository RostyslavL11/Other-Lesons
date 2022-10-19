//SPREAD and REST operators
//Added with ES6
// ...
// two sides of the same operation

let beers = ['Corona', 'Heineken'];
let stuff = [22, 'Bob', true, beers];

//SPREAD - expands an array into its elements
myFunc( ...stuff );
function myFunc(age, name, isStudent, beerList) {
    console.log(name, 'is', age, '\n');
    let b = ['Tuborg',...beerList, 'Freedom 35'];
    b.forEach((item, index) => console.log(index, item));
}




//REST - collects multiple elements and condenses them into a single element
function myOtherFunc(age, name, ...list) {
    console.log(name, 'is', age);
    list.forEach((item, index) => console.log(index, item));
}

myOtherFunc(38, 'Hank', beers, 'some text', stuff);