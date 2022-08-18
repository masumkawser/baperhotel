 /*1. add event listener to deposite button
2.get deposite from input feild 
3.clear the deposite input feild after  getting value.
4.get the previous deposite total.
5.calculate the total deposite value
6.get current balance 
7.calculate the new balance and set  it balance total elemnt













*/




// step-1
document.getElementById('btn-deposite').addEventListener('click',function(){
// step-2
const depositeFeild=document.getElementById('deposite-feild');
const newDepositeAmountString=depositeFeild.value ;
const newDepositeAmount=parseFloat(newDepositeAmountString);

// step-3
depositeFeild.value ='';

//step-4
const depositeTotalElement=document.getElementById('deposite-total');
const previousDepositeTotalString=depositeTotalElement.innerText;
const previousDepositeTotal= parseFloat(previousDepositeTotalString);


//step-5

const newDepositeTotal=previousDepositeTotal+newDepositeAmount;
depositeTotalElement.innerText=newDepositeTotal;

// step-6

const balanceTotalElement=document.getElementById('balance-total');


const previousbalanceTotalString=balanceTotalElement.innerText;

const previousbalanceTotalAmount=parseFloat(previousbalanceTotalString);

// step-7

const newBalancetTotal=previousbalanceTotalAmount +newDepositeAmount;

balanceTotalElement.innerText=newBalancetTotal;



})