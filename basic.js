
// function NumberOne(){

//     setTimeout(() => {
//     console.log("Hello World 1")
//     }, 1000);
// }


// function NumberTwo(){
//  setTimeout(() => {
//     console.log("Hello World 2")
//     }, 1000);
// }

// function NumberThree(){
//  setTimeout(() => {
//     console.log("Hello World 3")
//     }, 2000);
// }

// function NumberFour(){
//  setTimeout(() => {
//     console.log("Hello World 4")
//     }, 1000);
// }

// function NumberFive(){
//  setTimeout(() => {
//     console.log("Hello World 5")
//     }, 1000);
// }

// function main(){
// //console.log("Hello World Main");
// NumberOne();
// NumberTwo();
// NumberThree();
// NumberFour();
// NumberFive();

// }
// //main();

//     console.log("Hello World 1")
//     console.log("Hello World 2")
//     //setTimeout(number,4000);
//     console.log("Hello World 4")
//     console.log("Hello World 5")


//     function number()
//     {
//         console.log("Hello World 3")
//     }


// function sum(sum1,sum2){
// console.log(sum1+sum2);

// }
//  function Calc(cal1,cal2,sumcallback){
//     sumcallback(cal1,cal2);

// }
// Calc(10,34,sum)


// calculater(10,20,add); 
// calculater(10,20,multiply);
// function calculater(num1,num2,callback){
//     console.log('Operation started');
//     callback(num1,num2);
//     console.log('Operation ended');

// }

// function add(sum1,sum2){
//     console.log('Addition is :',sum1+sum2);
// }

// function multiply(mul1,mul2){
//     console.log('Multiplication is :',mul1*mul2);
// }


// console.log("1");
// console.log("2");
// setInterval(NumberThree, 5000);
// console.log("4");
// console.log("5");

// function NumberThree(){
    
//     console.log("3")
// }

// calculater(10,20,add); // 10 = num1, 20 = num2, add == callback function =>  callback()=> add()
// calculater(10,20,multiply);

// function calculater (num1,num2,callback){
//     console.log("Operation started");
//     callback(num1,num2);
//     console.log("Operation ended");
// };

// function add (add1,add2){
//     console.log("Addition is :",add1+add2);
// };

// function multiply (mul1,mul2){
//     console.log("Multiplication is :",mul1*mul2);
// };

// function getData(dataID,nextDataID)
// {
//     setTimeout(()=>{

// console.log(`DataID is : ${dataID}`);
//         if(nextDataID)
//         {
//         nextDataID();
//         }
//     },2000);
    
// }

// getData(1 , ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4, ()=>{
//                 console.log("All Data Retrieved");
//             });
//         });
//     });
// });
    
// let promise = new Promise((resolve,reject)=>{
// console.log("Promise is done..");
// resolve("Promise Resolved Successfully");
// });
 
// let promise = new Promise((resolve,reject)=>{
// console.log("Promise is done..");
// reject("Promise Rejected");
// });


// function getData(dataID,nextDataID)
// {
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{

// console.log(`DataID is : ${dataID}`);
// resolve("success");
//         if(nextDataID)
//         {
//         nextDataID();
//         }
//     },5000);
// });
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Promise is created");
//         //resolve("Promise Resolved");
//     reject("Network Error");
//     });


// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise is handled");
// });

// promise.catch((err) => {
//     console.log("Promise  handled",err);
    
// }); 

function asyncFunc()
{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
   console.log("Async Function is called");    
    resolve("success"); 
    },4000);
});
}
let p1 = asyncFunc();
p1.then((err)=>{
    console.log("Promise Resolved",err);
}); 
console.log("This is Second branch");


