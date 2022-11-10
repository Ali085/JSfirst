let  num1 =prompt("Ilk ededi daxil edin");
let  num2 =prompt("Ikinci ededi daxil edin");
var choice =prompt("Emeliyyati daxil edin (+,-,*,/)");

switch (choice) {
   case '-': alert(num1-num2);
   break
   case '*': alert(num1*num2);
   break
   case '/': alert(num1/num2);
   break
   case '+': alert(num1+num2);
   break
   default: alert("Yanlis daxil etdiniz")
}