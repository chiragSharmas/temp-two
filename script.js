

let tempValue = "";

// function convert() {
   
    

//     console.log(tempValue);
    
// }
let inputValue = document.getElementById("temp")
inputValue.addEventListener("input",(e)=>{
    var reg = /^[\d+\-*/%^]+$/;
    if(!reg.test((e.target.value))){
        console.log("chirag")
        e.target.value= e.target.value.slice(0, -1)
        }

})


function convertToCelsius() {
    tempValue=document.getElementById("temp").value; 
    if(tempValue==""){

alert("please enter a value")
return
    }
    let resultField = document.querySelector(".resultinput");
    


    let fahrenheit = parseInt(tempValue);
    console.log(fahrenheit,tempValue)
    let celsius = (fahrenheit - 32) * 5 / 9;
    resultField.value = celsius
}

function convertToFahrenheit() {
    
    tempValue = document.getElementById("temp").value;
    if(tempValue==""){

        alert("please enter a fahrenheit value")
       return
            }

    let resultField = document.querySelector(".resultinput");
   

  
    
    let celsius = parseInt(tempValue);
    let fahrenheit = (celsius * 9 / 5) + 32;
    resultField.value  = fahrenheit
}



 



