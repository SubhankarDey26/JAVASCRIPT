function sayMyName() //representation of function
{
    console.log("Hello World");
}
// sayMyName()  // execution of function


//-------------------------------------------------------------------------------------------------------------------------



function addTwoNummbers(num1,num2) //passing parameters in a function
{
    let result=num1+num2
    return result;  //After return statement if anyone write any code under the scope of a function then that code will not run 
    console.log("Hii"); //This part of the code will not run 
    
}
const result =addTwoNummbers(1,2)
// console.log("result:",result);



//----------------------------------------------------------------------------------------------------------------




function loginUserMessage(username){
    if(username===undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
// loginUserMessage("Subhankar") //->Here the value will not printed as we have return the value and we dont tell function to print the value

// console.log(loginUserMessage()); //here we have pass the value and we have printed that value if we dont pass any value then the function will show undefined 



//-----------------------------------------------------------

function calculatecartPrice(...num1){  // ... is a rest operator and here we can see that we have pass 3 values in a function  while calling a function and rest operator will convert that values into a array
    return num1
}
// console.log(calculatecartPrice(200,300, 400));

//-----------------------------------------------------


function calculatecartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartPrice(200,300,400,500,600))


//------------------------------------------------------------

// How to pass object in a function 
const user={
    username: "Subhankar",
    price:100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

/* 
handleObject({          // value get overide 
    username:"Sam",
    price:40
 })

*/


//------------------------------------------------------------

const Arr=[200,300,400,500,600]
function handleArray(anyarray){
     return anyarray[1]
}

console.log(handleArray(Arr));





