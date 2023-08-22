function getInputById(inputid){
    const input=document.getElementById(inputid)
    const inputStrig = input.value 
    const inputValue=parseFloat(inputStrig)
    input.value ='';
    return inputValue;

}

function setValue(id,newValue){
    const values=document.getElementById(id)
     values.innerText =newValue;
}