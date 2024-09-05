//part 1: change text of an element through a button

function changeText()
{
    document.getElementById("title").innerText = "Sum operation"
}


document.getElementById("changeText").addEventListener("click",changeText)


function calculate()
{
    // let number1=parseFloat(document.getElementById("n1").value) //to get the entered value by the user
    // let number2=parseFloat(document.getElementById("n2").value)
   
    let number1=document.getElementById("n1").value //to get the entered value by the user
    let number2=document.getElementById("n2").value

    let operation = document.getElementById("operation").value
    
    // if(operation=="+")
    //     document.getElementById("result").innerText = number1 + number2
    // else if(operation=="-")
    //     document.getElementById("result").innerText = number1 - number2
    // else if(operation=="*")
    //     document.getElementById("result").innerText = number1 * number2
    // else if(operation=="/")
    //     document.getElementById("result").innerText = number1 / number2
    document.getElementById("result").innerText = eval(number1 + operation + number2) //XSS (cross site scripting)

}



document.getElementById("calculateButton").addEventListener("click",calculate)