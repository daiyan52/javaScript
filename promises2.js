
/*
let promises = new Promise((resolve, reject) => {
    resolve("Hellooo");
})

async function my_fun(){
    let res = await promises;
    console.log(res);
}
my_fun();
*/
 

let add = (num,callback)=>{
    return callback(num+5,false);
}

add(5,(addres,error)=>{
    if(!error){
        console.log(addres);
    }
})

