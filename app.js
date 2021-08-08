var billAmount=document.querySelector("#billAmount");
var nextBtn=document.querySelector(".nextBtn");
var cashGiven=document.querySelector("#cashGiven");
var notesRequired=document.querySelector("#notesRequired");
var errorMessage=document.querySelector("#errorMessage");

var numberOfNotes;
const notes=[2000, 500, 100, 20, 10,5];

nextBtn.addEventListener("click" ,checkBillAmount)

 function checkBillAmount()
 {  

    if(billAmount.value>0){

        if(cashGiven.value>=billAmount.value){
          
          const amountToReturn=cashGiven.value-billAmount.value;
          returnChange(amountToReturn);
        }
        else{

          showMessage("Cash should be great than bill amount");
        }
    }
    else{

      showMessage("Bill Amount is not Valid");
    }
    
 }

 function showMessage(message) {

    errorMessage.style.display="block";
    errorMessage.innerHTML=message;
 }

 function returnChange(amountToReturn){

    var amount=amountToReturn; 
  
    for(i=0;i<notes.length;i++){

      temp=Math.trunc(amount/notes[i]);
      if(temp>0){

        display(temp,notes[i]);
      }
      amount=amount%notes[i];

    }  

 }

 function hideMessage(){

    errorMessage.style.display="none";
 }

 function display(temp,currentNote)
 {
     notesRequired.innerHTML=temp +" notes of "+currentNote;
    
 }
