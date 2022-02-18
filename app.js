function sumCal(values){
    const Input =document.getElementById(values);
    const Value=Input.value;
    const Par=parseInt(Value);
    return Par;

}

function showed(outputfield,setvalue){
    const totalEx = document.getElementById(outputfield);
    const totalOut=totalEx.innerText;
    totalEx.innerText=setvalue;
   

}

document.getElementById("cal-btn").addEventListener("click",function(){
    const parFood=sumCal('food-input');
    const parRent=sumCal('rent-input');
    const parCloths=sumCal('cloths-input');
    const sum = parFood+parRent+parCloths;
 
   showed('Total-Expenses',sum);

   
   
 const parIncame=sumCal('income-input');

 const restAmount = parIncame-sum;
 
 showed('Balance-input',restAmount);


 

});
document.getElementById('saving-btn').addEventListener('click',function(){
    const saveInput=document.getElementById('save-input');
    const saveOut=saveInput.value;
    const parSave = parseInt(saveOut);
    const saveTotal = (parSave*100)/100;


    const saveInput2=document.getElementById('Saving Amount')
    const saveOut2 = saveInput2.innerText;
    saveInput2.innerText=saveTotal;



})

  






