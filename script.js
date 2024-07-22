let heart_btn = document.getElementsByClassName("heart_btn");
let plus_btn = document.getElementsByClassName("plus_btn");
let minus_btn=document.getElementsByClassName("minus_btn")
let Quant = document.getElementsByClassName("Quant");
let finalPrice = document.getElementById("finalPrice");
let delete_btn = document.getElementsByClassName("delete");
let Item=document.getElementsByClassName("Item")
console.log(Quant)
let price=[1379,179,249]
console.log(plus_btn)
for (let i=0;i<heart_btn.length;i++){
    heart_btn[i].addEventListener("click",function(){
        if (heart_btn[i].style.color=="red"){
            heart_btn[i].style.color="black";
        }
        else{
            heart_btn[i].style.color="red"
        }
    });
    plus_btn[i].addEventListener("click",function(){
        Quant[i].value = Number(Quant[i].value)+1;
        finalPrice.value=Number(finalPrice.value)+price[i];
    });
    minus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value)>=1)
        Quant[i].value = Number(Quant[i].value)-1;
        finalPrice.value=Number(finalPrice.value)-price[i];
    });
    delete_btn[i].addEventListener("click",function(){
        finalPrice.value=Number(finalPrice.value)-(price[i]*Number(Quant[i].value))
        Item[i].remove()
    })
}