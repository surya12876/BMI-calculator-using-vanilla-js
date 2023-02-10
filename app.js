const text=document.querySelector(".title")
const ch=document.querySelector(".s")
const clear=document.querySelector(".c")
const body =document.querySelector("body")
let wh= document.querySelector(".weight")
let h=document.querySelector(".height")
const di=document.createElement("div")
const di2=document.createElement("div")

const ul=document.createElement("ul")
const center=document.querySelector(".center")
ch.addEventListener("click",function(){
    if(wh.value=="" || h.value=="" ){
    alert("please enter a value")
    }
     else{
        const di2=document.createElement("div")
        const weight=parseFloat(wh.value)
        const height=parseFloat(h.value) 
        const height2=height*0.305
        const BMI=(weight)/(height2**2)
        
        
       
    body.append(di)
    di.append(di2)
    di2.append(document.createTextNode("your BMI is"))
    di2.append(document.createTextNode(" "))
        di2.append(BMI)
        di2.append(document.createTextNode("\n"))
        wh.value=""
    h.value=""
   
    
 di2.classList.add("change")
 clear.addEventListener("click", function(){
    
    di2.remove()
    
    wh.value=""
    h.value=""
    }
    
    )
   
    }
}
)


