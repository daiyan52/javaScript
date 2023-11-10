
// let arr = [2,4,6,8,10];
// console.log(arr);
// console.log(arr.length);

// arr.pop();
// console.log(arr);
// arr.push(12);
// console.log(arr);

// arr.unshift(13);   //add element at first
// console.log(arr);

// arr.shift();
// console.log(arr);   // delete element at first

// delete arr[0];   // it will delete only element but not released memory
// delete arr[2];
// console.log(arr);
// console.log(arr.length);


// Add to array into third array


// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = [8,9,10,11,12,13];

// let arr3  =[...arr1,...arr2]
// console.log(arr3);
// console.log(arr3.length);



// splice function

// let arr1 = [10,20,30,40,50,60,70,80,90];
// arr1.splice(1,4);    //delete for element from index 1
// console.log(arr1);

// add 52 after index 3

/*
let arr1 = [10,20,30,40,50,60,70,80,90];
arr1.splice(4,0,52);
console.log(arr1);
*/


/*
let arr1 = [10,20,30,40,50,60,70,80,90];
// add 5 element from index 1
console.log(arr1,"length:: "+arr1.length);
arr1.splice(2,0,2, 3 ,5, 7, 11);
console.log(arr1,"length:: "+arr1.length);
*/

// map() function


// multiply every element in 100

/*
console.log(
    [2,3,4,5,6,7,8].map((element,index)=>{
        return element*100;
    })
);
*/


/*
console.log(
    [2,3,4,5,6,7,8].map((element,index)=>{
        return [element];
    })
);
*/


/*
console.log(
    [2,3,4,5,6,7,8].map((element,index)=>{
        return [element,index];
    })
);
*/


/*
console.log(
    [2,3,4,5,6,7,8].map((element,index)=>{
        return {[index]:element};
    })
);
*/

//filter function
 

/*

let arr = [10,20,30,40,50,60];
console.log(
    arr.filter((element,index)=>{
        return element > 30;
    })
);
*/


/*
let arr = [10,20,30,40,50,60];
console.log(
    arr.filter((Element,index)=>{
        return Element<50
    }).map((Element,index)=>{
        return Element/10;
    })
);
*/