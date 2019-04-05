/*----Aim: calculator ----*/
/*--- It gets the history value
      that become secondory,
      here we get value bye id
      show by:-
      alert(getHistory());---*/
function getHistory(){
  return document.getElementById("history-value").innerText;
}
/*--- It prints the history value
      that become secondory,
      here we get value bye id
      show bye:-
      printHistory("input that number i.e num") ---*/
function printHistory(num){
  return document.getElementById("history-value").innerText = num;
}
/*--- It gets the output value
      that become primary,
      here we get value bye id ---*/
function getOutput(num){
  return document.getElementById("output-value").innerText;
}
/*--- It prints the output value
      that become primary
      here we get value bye id
      show by:-
      printOutput(" input values here ") ---*/
function printOutput(num){
  if(num == ""){
    document.getElementById("output-value").innerText = num;
  }else{
    document.getElementById("output-value").innerText = getStdDigitNumber(num);
  }
}
/*--- It place comma btw value
      that become primary,
      here we use toLocaleString() ---*/
function getStdDigitNumber(num){
  if(num == "-"){
    return "";
  }
  let input = Number(num);
  let returnValue = input.toLocaleString("en");
  return returnValue;
}
/*--- It reverse the standard format
      of number that become primary
      here we get value bye id ---*/
function reverseStdDigitNumber(num){
  /*--- that you want to replace specify btw
    and the char to replace with is next
                            / and /g ----*/
  return Number(num.replace(/,/g,''));
}
/*--- Operations here ---*/
// on click function perform on operator
let operator = document.getElementsByClassName("operator");
for(let i = 0; i < operator.length; i++){
  operator[i].addEventListener('click',function(){

    // remove all
    if(this.id == "clear"){
      printHistory("");
      printOutput("");

      // remove one by one
    }else if(this.id == "backspace"){
        let output_prime = reverseStdDigitNumber(getOutput()).toString();
        // if output_prime have value
        if(output_prime){//           convert to string for remove comma
          output_prime = output_prime.substr(0, output_prime.length-1);
          printOutput(output_prime);
        }
        // result
    }else{
      let output_prime = getOutput();
      let history = getHistory();

      // remove form history at output empty
      if(output_prime == "" && history != ""){
        if(isNaN(history[history.length-1])){
          history = history.substr(0,history-1);
        }
      }
        if(output_prime != "" || history != ""){
          // output show when output is not empty
          // and history show when output is empty
          output_prime = output_prime == "" ? output_prime : reverseStdDigitNumber(output_prime);

          if(this.id == "%"){
            history = history + output_prime/100;
          }else{
            //concatination
            history = history + output_prime;
          }
            if(this.id == "="){
              let result;
                result = eval(history);
                printOutput(result);
                printHistory("");
            }else{
                history = history + this.id;
                printHistory(history);
                printOutput("");
            }
        }
    }
  });
}

// on click function perform on Numbers
let number = document.getElementsByClassName("number");
for(let i = 0; i < number.length; i++){
  number[i].addEventListener('click', function(){
    let output_prime = reverseStdDigitNumber(getOutput());
    // means if output is number
    if(output_prime != NaN){
      output_prime = output_prime + this.id;
      printOutput(output_prime);
    }
  });
}
