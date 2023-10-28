//! Question1 
// function info(){
//     // var name;
//     console.log(name);
//     // console.log(age);
//     var name='vivek';
//     // name="vivek"
//     // let age=20;
// }
// info();


//! Question2

// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// } 

// for(var i=0;i<3;i++){
//     fun(i);
// } 

// function fun(i){
//     setTimeout(()=>console.log(i),1)
// }



//! Question3 
// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// } 

//! Question4
// console.log(+true); 
// console.log((+'55'));
// console.log(typeof(+'55'));
// console.log((+'hello'));
// console.log(!'vivek');
// console.log(!'');

//! Question5
// let data="size";
// const bird={
//     size:'small'
// };
// console.log(bird[data]);
// console.log(bird['size']);
// console.log(bird['size']);
// console.log(bird.size);
// console.log(bird.data);


//! Question6
// let c={name:'vivek',age:21,name:'xyz'};
// let c={name:'vivek',age:21};
// let d;
// d=c;
// // console.log(d.name);
// c.name="kumar";
// console.log(d);
// console.log(c);

// let name1="vk"
// let name2;
// name2=name1;
// name1="kumar"
// console.log(name2);

// let arr=[1,2,3];
// let arr2;
// arr2=arr;
// // arr=[1,2];
// // arr[0]=100;
// console.log(arr);
// console.log(arr2);

// let obj1 = {a: 1, b: 2};
// let obj2 = obj1;
// obj2.a = 3;
// console.log(obj1); 
// console.log(obj2); 

//! Question7
// var x;
// var x=10;
// console.log(x);

//! Question8
// let x;
// // var x;
// let x=10;
// console.log(x);


//! Question9
// let a=3;
// let b=new Number(3); 
// console.log(a==b);  
// console.log(a===b); 



//! Question10
// function fruit(){
//     console.log("hello");
// } 
// fruit.name="apple";
// console.log(fruit());

//! Question11
// function getage(...args){
//     console.log(typeof args);
// }
// getage(56);

//! Question12
// "use strict";
// myname='vivek';
// console.log(myname);
//  var myname;

//! Question13
// const obj={a:'one',b:'two',a:'repeat'};
// console.log(obj);

//! Question14 
// const person ={name:'vivek'};
// function sayHii(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHii.call(person,21));
// console.log(sayHii.bind(person,21));
// console.log(sayHii.bind(person,21)());

//! Question15
// function func(){
//     return (()=>0)();
// }
// console.log(func());
// console.log(typeof func());

//! Question16 
// function func(){
//     return ()=>0;
// }
// console.log(func());
// console.log(typeof func());
// console.log(typeof func()());

//! Question17 
// console.log(typeof typeof 1);

//! Question18 
// const num=[1,2,3];
// num[9]=100;
// console.log(num);

//! Question19 
// const num=[1,2,3];
// num[9]=num;
// console.log(num);

//! Question20
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

//! Question21 
// let data=3+4+'5'
// console.log(data);

//! Question22 
// console.log(typeof 3+4+'5');  

//! Question23
// console.log(typeof (3+4+'5'));
// console.log( (3+4+'5'));

//! Question24
// console.log(3+4+ +'5');
// console.log(3+4+ +'hi');
// console.log(+'hi');
// console.log(typeof(NaN));
// console.log(typeof(3+4+ +'hi'));
// console.log(typeof(+'5'));
// console.log(typeof(+'hi'));

//! Question25
// var t=[3,2,1];
// var c=[3,2,1];

// console.log(t==c)
// console.log([1]==[1]);
// console.log([1]===[1]);
// console.log([]===[]);

//! Question26 
// function Car(){
//     this.make='tata';
//     return {make:'kia'};
// }
// const myCar=new Car();
// console.log(myCar.make);

//! Question27
(()=>{
    let x=(y=10);
})();
// console.log(typeof x); 
// console.log(y);
// console.log(x);

// (()=>{
//     var x=(y=10);
// })();
// console.log(typeof x); 
// // console.log( x); 
// console.log( y); 

// (()=>{
//      x=(y=10);
// })();
// console.log(typeof x); 
// console.log(x); 

// ( function(){
//     let x = 20;
//     console.log(x)
//     }
//   )();
//   console.log(x);

//! Question28
// console.log(true-true);
// console.log(!true-true);
// console.log(!(true-true));

//! Question29
// console.log(true+ +'10');
// console.log(true+ 1);
// console.log(true+ "1");
// console.log(typeof null);

//! Question30
// console.log('1' - - '1'); 
// // console.log('1' - -'1'); 
// console.log('4' / - '2'); 

//! Question31
// let greeting;
// greetign = {};
// console.log(greetign);

//! Question32
// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();


//! Question33
// function greeting() {
//   throw 'Hello world!';
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log('It worked!', data);
//   } catch (e) {
//     console.log('Oh no an error:', e);
//   }
// }

// sayHi();


//! Question34
// const nam = 'Lydia';
// age = 21;

// console.log(delete nam);
// console.log(delete age);

//! Question35
// const numbers = [10, 2, 3, 4, 5];
// const [y,...x] = numbers;
// var a=[1,2,3];
// var b=[...a];
// console.log(b)

// console.log(y,x);

//! Question36
// creating deep copy of object
// let data1=[1,2,3,4];
// let data2=[];
// for(let i=0;i<data1.length;i++){
//     data2[i]=data1[i];
// }
// data1[0]=100;
// console.log(data1);
// console.log(data2);

//! Question37
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve('Success!');
//     reject('Failure!');
//     }, 1000);
//   });
  
//   myPromise.then((value) => {
//     console.log(value); // logs 'Success!'
//   });
//   myPromise.catch((err)=>{
//     console.log(err);
//   })
  
//! Question38
// async function getdta(){
//     console.log('A');
//     // await Promise.resolve();
//     await new Promise(resolve=>setTimeout(resolve,1000));
//     console.log('B');
// }
// console.log('C');
// getdta();
// console.log('D');

//! Question39
// const x = "5";
// console.log(1 + 1 + x);
// console.log(x + 1 + 1);
// console.log(1 +x+1);

//! Question40
// var a = Math.max() < Math.min();
// var b = Math.max() > Math.min();
// console.log(a);
// console.log(b);

//! Question41
// console.log(parseInt("123Hello"));
// console.log(parseInt("Hello123"));

//! Question42
// function test(...args) {
//     console.log(typeof args);
//    }
//    test(12);


//! Question43
// (function(a){
//     return (function(){
//       console.log(a);
//       a = 6;
//     })()
//    })(21);

//! Question44
// var a = 5;
// function test() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// test();

//! Question45
// let name = "Vivek Kumar";

// var obj1 = {
//   name: "Vivek",
//   valueOfThis: function() {
//     return this.name;
//   }
// };

// var obj2 = {
//   name: "Kumar",
//   valueOfThis: () => {
//     return this.name;
//   }
// }
// console.log(obj1.valueOfThis());
// console.log(obj2.valueOfThis());

//! Question46
// var p=10;
// if(true){
//    var p=20;
//    console.log(p);
// }
// console.log(p);

// var p=10;

//    var p=20;
//    console.log(p);

// console.log(p);

//! Question47
// var x=12;
// var y=8;
// var res=eval("x+y");
// console.log(res);
// document.write(res);

//! Question48
// var a = "hello";
// var sum = 0;
// for(var i = 0; i < a.length; i++) {
//    sum += (a[i] - 'a');
// }
// console.log(sum);

//! Question49
// let a={"name":"vivek","age":20,"num":1223445,"3":300,"1":100}

// for(key in a){
//     console.log(key,a[key]);
// }


//! Question50
// let b={name:"vivek",age:20,num:122345,100:100}

// for(key in b){
//     console.log(key,b[key]);
// }

//! Question51
// let obj1 = {"x": 5, "y": 42}
// let obj2=[111, 200, 388]
// let obj3=[null, false, 0]

// console.log(Object.keys(obj1))
// console.log(Object.keys(obj2))
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))

//! Question4
// let obj1 = {"x": 5, "y": 42}
// let obj2=[1, 2, 3]
// console.log(typeof obj1);
// console.log(typeof obj2);

//! Question4



// Question 9  new keyword create the object of number
// Question 11  there is no concept of array only object
// Question 15 return function is called immediately and return 0;
// Question 25 always give false because store at different memory location
// Question 27 local scope of let

/* Question 32   1 undefined 2  (The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.
Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.
Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.)*/

/* Question 33  With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string 'Hello world!'.*/

/*Question 34  The delete operator returns a boolean value: true on a successful deletion, else it'll return false. However, variables declared with the var, const or let keyword cannot be deleted using the delete operator.
The name variable was declared with a const keyword, so its deletion is not successful: false is returned. When we set age equal to 21, we actually added a property called age to the global object. You can successfully delete properties from objects this way, also the global object, so delete age returns true */




//Note When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.








