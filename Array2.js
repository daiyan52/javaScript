// reduce();

/*
console.log(
    [1,2,3,4,5,6,7,8,9,10].reduce((firstElement,accumulator)=>{
        return firstElement+accumulator;
    })
);
*/

/*
console.log(
    [1,2,3,4,5,6,7,8,9,10].reduce((firstElement,accumulator)=>{
        return firstElement+" "+accumulator;
    })
);  // 1 2 3 4 5 6 7 8 9 10
*/

//  reduceRight()

/*
console.log(
    ['Welocme','to','javaScript'].reduceRight((firstElement,accumulator)=>{
        return firstElement+" "+accumulator;
    })
);  // javaScript to Welocme
*/

/*
console.log(
    ['Alam','Daiyan'].reduceRight((firstElement,accumulator)=>{
        return firstElement+" "+accumulator;
    })
);  // Daiyan Alam
*/

// slice(inclusive,execlusive)

/*
let arr = [2,4,6,8,10,12,14,16,18,20];

console.log(arr.slice(4,6));
console.log(arr.slice(6,9))  //[ 14, 16, 18 ]
console.log(arr.slice(8,11))    //  [ 18, 20 ]
console.log(arr.slice(11,30));   // []
console.log(arr.slice(7,11));    // [ 16, 18, 20 ]
console.log(arr.slice(-7,-2));   // [ 8, 10, 12, 14, 16 ]
console.log(arr.slice(-10,-1));  // [ 2,  4,  6,  8, 10,12, 14, 16, 18]
 
console.log(arr.slice(-1));   // [ 20 ]
*/


// flat()  - it will convert multidimensional to desired dimentional array

/*
console.log(
    [[1],[2],[3]].flat(1)   //[ 1, 2, 3 ]

)


console.log(
    [[1],[[2]],[3]].flat(1)   //  [ 1, [ 2 ], 3 ]

)

console.log(
    [[[[[[2]]]]],[[[[[2]]]]],[[[3]]]].flat(3)   //  [ [ [ 2 ] ], [ [ 2 ] ], 3 ]

)

console.log(
    [[[[[[[[[[[[3]]]]]]]]]]],[[[[[[[[[[[[[2]]]]]]]]]]]]],[[[[[1]]]]]].flat(Infinity)
)    //  [ 3, 2, 1 ]
*/

/*

let arr1 = [1,2,3];
let arr2 = ['one',"two","three"];
//  [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

console.log(
    arr1.map((element,index)=>{
        return [element,arr2[index]];
    })
);   //  [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]


console.log(
    arr1.map( (element,index)=>{
        return [element,arr2[index]];
    }).flat(Infinity)
)      //   [ 1, 'one', 2, 'two', 3, 'three' ]


console.log(
    arr1.flatMap((element,index)=>{
        return [element,arr2[index]];
    })
)       //  [ 1, 'one', 2, 'two', 3, 'three' ]
*/

// findIndex()

/*
let arr  = [1,2,3,4,5,6,7,8,9];
console.log(
    arr.findIndex((Element,index)=>{
        return Element==8;
    })
);    // 7


console.log(
    arr.findIndex((Element,index)=>{
        return Element==10;
    })
);   // -1
*/


/*

// some()   --> it will return true if only one condition is satisfy other wise return false

let arr = [1,2,3,4,5,6,7,8,9];
console.log(
    arr.some((element,index)=>{
        return element>=5;
    })
);   // true


console.log(
    arr.some((element,index)=>{
        return element>10;
    })
);   //  false

// every()   ---> it will return true if all condition are satisfy otherwise return false
console.log(
    arr.every((element,index)=>{
        return element>=1;  // true
    })
)

console.log(
    arr.every((element,index)=>{
        return element>=3;  // false
    })
)
*/


// find()  --> if element if found then return element otherwise return undefine

/*
let arr = [1,2,3,4,5,6,7,8];

console.log(
    arr.find((element,index)=>{
        return element == 5;
    })
);

console.log(
    arr.find((element,index)=>{
        return element == 40;   // undefined
    })
)


console.log(
    arr.find((element,index)=>{
        return index == 2;   // 3
    })
)


console.log(
    arr.find((element,index)=>{
        return index == 30;   // undefined
    })
)

*/

// fill();

/*
let arr = [1,2,3,4,5];
console.log(arr.fill(52));  // [ 52, 52, 52, 52, 52 ]
*/


let arr = [1,2,2,4,1,2,5,6,7,1,10,7];

arr.forEach((element,index)=>{
    console.log(arr.indexOf(element));
})

// 0
// 1
// 1
// 3
// 0
// 1
// 6
// 7
// 8
// 0
// 10
// 8


arr.forEach( (element,index)=>{
    console.log(arr.indexOf(element)+" - "+index);
})

    // 0 - 0
    // 1 - 1
    // 1 - 2
    // 3 - 3
    // 0 - 4
    // 1 - 5
    // 6 - 6
    // 7 - 7
    // 8 - 8
    // 0 - 9
    // 10 - 10
    // 8 - 11



