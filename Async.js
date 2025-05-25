/*
->Synchronous  meaning  that work will be done one by one 

->In Asynchronous teeno works start ek sath hoga par 
jis jis ke response ata jayega wo response diya jayega 


->sync matlab ek ke bat dusra hoga jab tak ek command 
complete na ho tak tak dusra start nahi hoga 

->async matlab sare kam ek sath suru kar do jiska jawab pehele
ajaye uska jawab pehle de dena  


->Synchronous code always move to main stack and
asynschronous code goes to side stack  and after 
completing work of main stack then side stack is check that 
its give in output or not if giving then it brings in main stack and then 
it runs 

->The talk that happens between side stack and main stack is called event loop 

->JavaScript works is a Single threaded because at a time it can compute only one work 


iss sabne async ka code chalta hai
fetch 
axios 
promises 
setTimeout
setInterval

ismein code complete hone ke baad chalta hai 
then catch
callbacks 
async await


->callbacks humesha ek function hota hai ,ye sirf tab 
chalta hai jab async code ka completion hojata hai
*/

/*
console.log("hey1");
console.log("hey2");
setTimeout(function(){
console.log("hey3");
},0)
console.log("hey4");

*/


// async code likhne ke liye
// fetch
// XMLHttpRequest
// axios
// promises 
// setTimeout
// setInterval

//jab async code ka answer milega tab hum inhe mein chala 
// sakte hein matlab jab side stack se main stack mein ayega tab 
// callbacks 
// then catch
// async await


/*
promise ka do situation ho sakta hai resolve aur reject
agar ye resolve state mein hein to chalega then and agar 
reject state mein hein to catch chalega 
*/


// var ans=new Promise((res,rej)=>{
//     if(true)
//     {
//         return res()
//     }
//     else
//     {
//         return rej()
//     }
// })

// .then(function()
// {
//     console.log("Resolve hogeya tha");
    
// })
// .catch(function()
// {
//     console.log("reject hua tha");
    
// })



// user will ask for a number between 0 se 9 and if the number 
// is below 5 resolve if not reject 


// var ans=new Promise((res,rej)=>{
//    var n= Math.floor(Math.random()*10)

//    if(n<5)
//    {
//     return res()
//    }
//    else 
//    {
//     return rej()
//    }
// })
// ans.then(function()
// {
//     console.log("below");
    
// })
// ans.catch(function(){
//     console.log("above");
    
// })


// ye code jo mein likha huu wo async code firbhi line by 
// line chal raha hai then ke ander aur ek promise chala 
// ke hum async code ko line by line chala sakte hai




// var ans =new Promise(function(res,rej){
//     return res("Sabse pehle ghar aoo")
// })

// var p2=ans.then(function(data)
// {
//     console.log(data);

//     return new Promise(function(res,rej){
//         return res("gate kholo aur gate lagao")
//     })
// })

// var p3=p2.then(function(data)
// {
//     console.log(data);
//      return new Promise(function(res,rej)
//     {
//         return res("khana pakao khana khao")
//     })
    
// })

// var p4=p3.then(function(data)
// {
//     console.log(data);
//      return new Promise(function(res,rej)
//     {
//         return res(" phir Sooo jao");
//     })
    
// })
// p4.then(function(d)
// {
//     console.log(d);
    
// })

// koi  bhi esa function jismein async code likhege ,kyoki 
// aysnc code hai tooo app promise use kar sakte hein ,
// jab uska ans ayega aapko then lagana padega , 
// usss then se bach ne ke liye aap async await use kar sakte ho


// async function abcd()
// {
//     let raw= await fetch(`https://api.api-ninjas.com/v1/randomuser/`);
//     let ans= await raw.json()
//     console.log(ans);
    
// }

