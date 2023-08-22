 function goHome(){
            location.href="index.html";
        }
 
function total(event){
    const product=event.childNodes[3].childNodes[3].innerText
  const totalId=document.getElementById("totalPrice")
  const total=document.getElementById("total")
  let totalPrice=totalId.innerText 
    const price= event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    
    const sum=parseFloat(totalPrice)+parseFloat(price)
    const sumDecimal=sum.toFixed(2)
    totalId.innerText = sumDecimal
    total.innerText = sumDecimal
    productEntry(product)
    makeParchase()
    apply()
}

function productEntry(product){
    const entry=document.getElementById("entyData")
    const count = entry.childElementCount;
    const li=document.createElement("li")
    li.innerHTML =`${count+1}. ${product}`;
    entry.appendChild(li)
}

function discount(){
    const btn=document.getElementById("btn")
    const totalPrice=document.getElementById("totalPrice").innerText
    const totalPriceValue=parseFloat(totalPrice)
    const inputDisc=document.getElementById("discInput")
    const inputValue=inputDisc.value
    inputDisc.value=""
    console.log(totalPriceValue)
if(inputValue==="SELL200"){   
const saving=((totalPriceValue*20)/100).toFixed(2)
const remain= totalPriceValue- saving
setValue("disc",saving)
setValue("total",remain)
}

}
     

   function makeParchase(){
    const btn=document.getElementById("makePurchase")
    const totalPrice =parseFloat(document.getElementById("totalPrice").innerText)
    console.log(totalPrice)
     if (totalPrice>0) {
         btn.removeAttribute(`disabled`);
         btn.style.background="#E527B2"
     } 
   }
function apply(){
    const btn=document.getElementById("btn")
    const totalPrice=document.getElementById("totalPrice").innerText
    const totalPriceValue=parseFloat(totalPrice)
    if(totalPriceValue>=200){   
        btn.removeAttribute(`disabled`);
        btn.style.background="#E527B2"
    }
}