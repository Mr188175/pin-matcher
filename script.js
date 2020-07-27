// generate button
document.getElementById("generate-btn").addEventListener("click",function(){
     const formControl = document.getElementById("form-control");
     const formControlNumber = parseInt(formControl.value);
     const formControlNumberRandom =  Math.floor(1000 + Math.random() * 9000);
     document.getElementById("form-control").value = formControlNumberRandom;
})