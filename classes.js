/*
class class_one{
    sub_one = "JavaScript";
    sub_two = "ReactJs";
    sub_three = "AngularJs";
}

let obj = new class_one();
console.log(
    obj.sub_one,
    obj.sub_two,
    obj.sub_three,
);
*/

class class_two{
    sub_one = "javaScript";
    sub_two = "ReactJs";
    sub_three = "AngularJs";

    getStatus_sub_one(){
        return this.sub_one;
    }
    getStatus_sub_two(){
        return this.sub_two;
    }
    getStatus_sub_three(){
        return this.sub_three;
    }
}

let obj = new class_two();
console.log(
    obj.getStatus_sub_one(),
    obj.getStatus_sub_two(),
    obj.getStatus_sub_three()
);