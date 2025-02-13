


let formsubmit = document.getElementById("formsubmit").addEventListener("click", 
function (){
    
    let inputvalue = document.getElementById("inputvalue").value;
    let result = document.getElementById("result");
    let pattern = /^\d{5}-\d{7}-\d{1}$/;

    if(pattern.test(inputvalue)){
       
result.innerText = "Format is valid"
result.classList.add("text-success")  
result.classList.remove("text-danger") 
   
    }
    else{
        result.innerText = "Format is invalid"
        result.classList.add("text-danger")
result.classList.remove("text-success")    

    }
    
}
)