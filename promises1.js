/*
    promiese are spacial "javaScript" objects;
    proper communication between producer and consumer are called promises;
    
    producer will generates "promises";

    consumer will consume "promises"

    producer will create promises by using "Promise" class;

    consumer will consume promises by two ways

    1.  then()

    2 . async and awit


 */


/*
let promiese1 = new Promise((resolve, reject) => {
    resolve("tomorrow i will discuss dom manupulation");
})

promiese1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})
*/

/*
let promiese2 = new Promise((resolve, reject) => {
    reject("rejected")
})

promiese2.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes)
})

*/

let promises1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hello1");
    },500)
})

let promises2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Hello2");
    },1000)
})

let promises3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },1500)
})

/*
promises1.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes);
})

promises2.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes);
})

promises3.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes);
})
*/


/*
Promise.all([promises1, promises2, promises3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})   //[ 'Hello1', 'Hello2', 'Hello3' ]
*/


Promise.allSettled([promises1, promises2, promises3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})   
/*

[
  { status: 'fulfilled', value: 'Hello1' },
  { status: 'rejected', reason: 'Hello2' },
  { status: 'fulfilled', value: 'Hello3' }
]
 */