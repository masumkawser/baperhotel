/*
1.event handeller add withdraw button
2.get the widthdraw ammount
3.clear the input feild.
4.get previous withdraw total
5.calculate withdraw total
6.previous balance total calculate

*/

// step-1

document.getElementById("btn-withdraw").addEventListener('click',function(){
  
//stepo-2

const withdrawFeild=document.getElementById("withdraw-feild");
 const newWithdrawAmountString=withdrawFeild.value;
 const newWithdrawAmount=parseFloat(newWithdrawAmountString);
 console.log(newWithdrawAmount);


//  step-3

withdrawFeild.value= '';

//step-4

const withdrawTotalElement=document.getElementById("withdraw-total");
const previouswithdrawTotalString= withdrawTotalElement.innerText;

const previouswithdrawTotal=parseFloat(previouswithdrawTotalString);

// step-5
const newWithdrawTotal=previouswithdrawTotal+newWithdrawAmount;

withdrawTotalElement.innerText=newWithdrawTotal;


// step-6
const balanceElemnt=document.getElementById('balance-total');
const balanceElemntTotalString=balanceElemnt.innerText;
const balanceElemntTotal=parseFloat(balanceElemntTotalString);

//step-7

const newBalanceTotal= balanceElemntTotal-newWithdrawAmount;
 balanceElemnt.innerText=newBalanceTotal;



}


)