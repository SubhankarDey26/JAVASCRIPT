/* {}->This is called Scope means if 
 any value is prsent in this bracket
the the scope of that value is in
that bracket only


-->One question asked in interview that while doing coding like in vs code
 and while we write code in inspect console online the scope is different why ? 
*/

// var c=300
let a=200
if(true)
{
    let a=10
    const b=20
    var c=30
    // console.log("Inner:",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

//-----------------------------------------------------

function one (){
    const username="Subhankar"

    function two (){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);

    two()    
}
// one() 


//--------------------------------------


// console.log(addone(5));
function addone(num)
{
    return num+1
}
//----------------------------------------


// console.log(addtwo(5));
const addtwo=function(num){
    return num+2
}

//---------------------------------------------------------
