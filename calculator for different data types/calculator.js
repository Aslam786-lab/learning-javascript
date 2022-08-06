
function getInputType() {
  const finput = document.getElementById('input1').value;
  const sinput = document.getElementById('input2').value;
  const reg=/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  const spaceReg=/^ +$/;



  if(finput === "" || sinput === "" || spaceReg.test(finput)=== true || spaceReg.test(sinput) === true){
    document.getElementById("result").innerHTML = "Result";
    document.getElementById("inputResult").innerHTML = "Please Enter the input ";


  }else if(finput === 'true' || finput === 'false' || sinput === 'true' || sinput === 'false'){

    return calculateBoolean(finput,sinput);

  }else if(reg.test(finput) == true ||  reg.test(sinput) == true ){
    const op = prompt('Enter the operator ( either +, -, * or / ):');

    return calculateNumber(parseFloat(finput),parseFloat(sinput),op);
  }
  else{
    return calculateString(finput,sinput);
  }
}

//==============================================================================================================================================

function calculateNumber(num1,num2,op) {
  switch (op) {
    case '+':
      const addRes = num1 + num2;
      document.getElementById("result").innerHTML = "Result";
      document.getElementById("inputResult").innerHTML = addRes;
      break;

    case '-':
      const subRes = num1 - num2;
      document.getElementById("result").innerHTML = "Result";
      document.getElementById("inputResult").innerHTML = subRes;
      break;

    case '*':
      const mulRes = num1 * num2;
      document.getElementById("result").innerHTML = "Result";
      document.getElementById("inputResult").innerHTML = mulRes;
      break;

    case '/':
      const divRes = num1 / num2;
      document.getElementById("result").innerHTML = "Result";
      document.getElementById("inputResult").innerHTML = divRes;
      break;

    default:

  }
}

function calculateString(str1,str2) {
  const strRes = str1 + str2;
  document.getElementById("result").innerHTML = "Result";
  document.getElementById("inputResult").innerHTML = strRes;

}

function calculateBoolean(bool1,bool2) {



  if(bool1 == "true" && bool2 == "true"){
    document.getElementById("result").innerHTML = "Result";
    document.getElementById("inputResult").innerHTML = "false";

  }else if(bool1 == "false" && bool2 == "false"){
    document.getElementById("result").innerHTML = "Result";
    document.getElementById("inputResult").innerHTML = "false";

  }else if(bool1 == "true" && bool2 == "false"){

    document.getElementById("result").innerHTML = "Result";
    document.getElementById("inputResult").innerHTML = "true";

  }else if(bool1 == "false" && bool2 == "true"){
    document.getElementById("result").innerHTML = "Result";
    document.getElementById("inputResult").innerHTML = "true";

  }




}
