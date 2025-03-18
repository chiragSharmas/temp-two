

let tempValue = "";

// function convert() {
   
    

//     console.log(tempValue);
    
// }

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
       
            }

    let resultField = document.querySelector(".resultinput");
   

  
    
    let celsius = parseInt(tempValue);
    let fahrenheit = (celsius * 9 / 5) + 32;
    resultField.value  = fahrenheit
}



 



