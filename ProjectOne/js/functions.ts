function getSumEx1(num1:number, num2:number):number{
  return num1+num2;
}

function getSumEx2(num1:any, num2:any):number{
  if(typeof num1 == 'string'){
    num1=parseInt(num1);
  }
  if(typeof num2 == 'string'){
    num2=parseInt(num2);
  }
  return num1+num2;
}


console.log(getSumEx1(5,3));
console.log(getSumEx2('50','30'));
