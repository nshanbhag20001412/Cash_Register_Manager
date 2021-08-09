var billAmount=document.querySelector("#billAmount");
var nextBtn=document.querySelector(".nextBtn");
var checkBtn=document.querySelector(".checkBtn");
var cashGiven=document.querySelector("#cashGiven");
var notesRequired=document.querySelector("#notesRequired");
var errorMessage=document.querySelector("#errorMessage");
var displayBox=document.querySelector(".displayBox");
var cashBox=document.querySelector(".cashBox");

cashBox.style.display="none";
displayBox.style.display="none";

var numberOfNotes;

const notes=[2000, 500, 100, 20, 10,5,1];



nextBtn.addEventListener("click" ,checkBillAmount)
checkBtn.addEventListener("click" ,calculate)

 function checkBillAmount()
 {  

    if(billAmount.value>0){
        cashBox.style.display="flex"; 
    }
    else{
      showMessage("Bill Amount is not Valid");
    }
    
 }

 function calculate(){

  if(Number(cashGiven.value)>=Number(billAmount.value)){
          
    const amountToReturn=cashGiven.value-billAmount.value;
    returnChange(amountToReturn);
  }
  else{

    showMessage("Note:Cash should be great than Bill amount");
  }
 }
 function showMessage(message) {

    errorMessage.style.display="block";
    errorMessage.innerHTML=message;
 }

 function returnChange(amountToReturn){
  
    displayBox.style.display="flex";
    
    var amount=amountToReturn; 
  
    for(i=0;i<notes.length;i++){

      console.log("amount:"+amount);
      console.log("currentnote:"+notes[i]);

      numberOfNotes=Math.trunc(amount/notes[i]);

      console.log("numberofnotes"+numberOfNotes);

      if(numberOfNotes>0){

        display(numberOfNotes,notes[i]);
      }
      amount=amount%notes[i];

    }  

 }

 function hideMessage(){

    errorMessage.style.display="none";
 }

 function display(numberOfNotes,currentNote)
 {
  notesRequired.innerHTML=notesRequired.innerHTML +numberOfNotes+" notes of "+currentNote+"\n";
    
 }

