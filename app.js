// for three input values 
function sumCal(values){
    
    const Input =document.getElementById(values);
    const Value=Input.value;
    const Par=parseInt(Value);
    return Par;
  
}

// Total balance and Balance output 
function showed(outputfield,setvalue){
   
    const totalEx = document.getElementById(outputfield);
    const totalOut=totalEx.innerText;
    totalEx.innerText=setvalue;

}
// --------onclick for the calculation button-------- 
document.getElementById("cal-btn").addEventListener("click",function(){
    // input field Food 
    const parFood=sumCal('food-input');
    // input field Rent 
    const parRent=sumCal('rent-input');
    // input field cloths 
    const parCloths=sumCal('cloths-input');
    // sum of the three cost 
    const sum = parFood+parRent+parCloths;

//  showing the totalExpenses 
showed('Total-Expenses',sum);

   
   // input field income-input  
 const parIncame=sumCal('income-input');
 

//  for balance amount 
 let restAmount = parIncame-sum;
 //  showing the totalExpenses 
 showed('Balance-input',restAmount);

});

//------- oncilck for the save button ----------
document.getElementById('saving-btn').addEventListener('click',function(){
    const saveInput=document.getElementById('save-input');
    const saveOut=saveInput.value;
    const parSave = parseInt(saveOut);
    const saveTotal = (parSave*100);



    //---- Saving Amount to output------ 
showed('Saving Amount',saveTotal);
    

  
//---- for remaing balance output ------ 
showed('Remaning Balance',blanceAndSave);


//  for balance amount 

const blanceAndSave = restAmount-saveTotal;


})

  






