// document.getElementById("sizebtn1").addEventListener("click",function(){
//     const p=document.getElementById("sizebtn1").textContent;
//     console.log(p);
//     const q=document.querySelector(".btn").style.backgroundColor;
//     console.log(q);

    
// })




const sizeButtonValueXs=document.querySelector(".sizebtn1");
const sizeButtonValueSm=document.querySelector(".sizebtn2");
const sizeButtonValueMd=document.querySelector(".sizebtn3");
const sizeButtonValueLg=document.querySelector(".sizebtn4");
const sizeButtonValueXl=document.querySelector(".sizebtn5");
const sizeButtonValueDxl=document.querySelector(".sizebtn6");




sizeButtonValueXs.addEventListener("click",function(){



    sizeButtonValueXs.style.backgroundColor="#000"
    sizeButtonValueXs.style.color="#fff";
   

 
   
   sizeButtonValueSm.style.backgroundColor="#f2f2f2"
   sizeButtonValueSm.style.color="#000";

   sizeButtonValueMd.style.backgroundColor="#f2f2f2"
    sizeButtonValueMd.style.color="#000";

    sizeButtonValueLg.style.backgroundColor="#f2f2f2"
    sizeButtonValueLg.style.color="#000";

    sizeButtonValueXl.style.backgroundColor="#f2f2f2"
    sizeButtonValueXl.style.color="#000";

   sizeButtonValueDxl.style.backgroundColor="#f2f2f2"
   sizeButtonValueDxl.style.color="#000";

})


sizeButtonValueSm.addEventListener("click",function(){


   
   

    sizeButtonValueSm.style.backgroundColor="#000"
    sizeButtonValueSm.style.color="#fff";


    
        
    

    sizeButtonValueXs.style.backgroundColor="#f2f2f2"
    sizeButtonValueXs.style.color="#000";

    sizeButtonValueMd.style.backgroundColor="#f2f2f2"
    sizeButtonValueMd.style.color="#000";

    sizeButtonValueLg.style.backgroundColor="#f2f2f2"
    sizeButtonValueLg.style.color="#000";

    sizeButtonValueXl.style.backgroundColor="#f2f2f2"
    sizeButtonValueXl.style.color="#000";

    sizeButtonValueDxl.style.backgroundColor="#f2f2f2"
    sizeButtonValueDxl.style.color="#000";

 })




 sizeButtonValueMd.addEventListener("click",function(){
   



    sizeButtonValueMd.style.backgroundColor="#000"
    sizeButtonValueMd.style.color="#fff";



    sizeButtonValueXs.style.backgroundColor="#f2f2f2"
    sizeButtonValueXs.style.color="#000";

    sizeButtonValueSm.style.backgroundColor="#f2f2f2"
    sizeButtonValueSm.style.color="#000";




    sizeButtonValueLg.style.backgroundColor="#f2f2f2"
    sizeButtonValueLg.style.color="#000";

    sizeButtonValueXl.style.backgroundColor="#f2f2f2"
    sizeButtonValueXl.style.color="#000";

    sizeButtonValueDxl.style.backgroundColor="#f2f2f2"
    sizeButtonValueDxl.style.color="#000";
 })



 sizeButtonValueLg.addEventListener("click",function(){
   


    sizeButtonValueLg.style.backgroundColor="#000"
    sizeButtonValueLg.style.color="#fff";



    sizeButtonValueXs.style.backgroundColor="#f2f2f2"
    sizeButtonValueXs.style.color="#000";

    sizeButtonValueSm.style.backgroundColor="#f2f2f2"
    sizeButtonValueSm.style.color="#000";


    sizeButtonValueMd.style.backgroundColor="#f2f2f2"
    sizeButtonValueMd.style.color="#000";

    sizeButtonValueXl.style.backgroundColor="#f2f2f2"
    sizeButtonValueXl.style.color="#000";

    sizeButtonValueDxl.style.backgroundColor="#f2f2f2"
    sizeButtonValueDxl.style.color="#000";
 })

 sizeButtonValueXl.addEventListener("click",function(){
    


    sizeButtonValueXl.style.backgroundColor="#000"
    sizeButtonValueXl.style.color="#fff";


    sizeButtonValueXs.style.backgroundColor="#f2f2f2"
    sizeButtonValueXs.style.color="#000";

    sizeButtonValueSm.style.backgroundColor="#f2f2f2"
    sizeButtonValueSm.style.color="#000";


    sizeButtonValueMd.style.backgroundColor="#f2f2f2"
    sizeButtonValueMd.style.color="#000";

    sizeButtonValueLg.style.backgroundColor="#f2f2f2"
    sizeButtonValueLg.style.color="#000";

    sizeButtonValueDxl.style.backgroundColor="#f2f2f2"
    sizeButtonValueDxl.style.color="#000";
 })


 sizeButtonValueDxl.addEventListener("click",function(){
    


    sizeButtonValueDxl.style.backgroundColor="#000"
    sizeButtonValueDxl.style.color="#fff";




    sizeButtonValueXs.style.backgroundColor="#f2f2f2"
    sizeButtonValueXs.style.color="#000";

    sizeButtonValueSm.style.backgroundColor="#f2f2f2"
    sizeButtonValueSm.style.color="#000";


    sizeButtonValueMd.style.backgroundColor="#f2f2f2"
    sizeButtonValueMd.style.color="#000";

    sizeButtonValueLg.style.backgroundColor="#f2f2f2"
    sizeButtonValueLg.style.color="#000";

    sizeButtonValueXl.style.backgroundColor="#f2f2f2"
    sizeButtonValueXl.style.color="#000";

   
 })



 
function cartImage(){
    const p= document.getElementById("pr1").getAttribute("src");
     console.log(p);
     const q=p.substring(p.lastIndexOf("/"));
     console.log(q);
 
     const r=q.substring(1,9);
     console.log(r);
 
 
//      document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
//  document.querySelector(".cart").style.display="block";



 const xsBgColor=sizeButtonValueXs.style.backgroundColor;
 const smBgColor=sizeButtonValueSm.style.backgroundColor;
 const mdBgColor=sizeButtonValueMd.style.backgroundColor;
 const lgBgColor=sizeButtonValueLg.style.backgroundColor;
 const xlBgColor=sizeButtonValueXl.style.backgroundColor;
 const dxlBgColor=sizeButtonValueDxl.style.backgroundColor;

 const cartProductSize=document.getElementById("cartprdtsize");
 const cartProductPrice=document.getElementById("cartprdtprice");
 const cartProductName=document.getElementById("cartprdtname");



 console.log(xsBgColor);

 if(xsBgColor===`rgb(0, 0, 0)`){


    const sizeValue= sizeButtonValueXs.textContent;
    console.log(sizeValue);
    cartProductSize.innerHTML=sizeValue;



    document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
 document.querySelector(".cart").style.display="block";

 document.querySelector(".modal-dialog").style.display="block";


    cartProductPrice.innerHTML=document.getElementById("price").textContent;
cartProductName.innerHTML=document.getElementById("productname").textContent;


document.querySelector(".number").style.display="block";
    
 }
 else if(smBgColor===`rgb(0, 0, 0)`){
    const sizeValue= sizeButtonValueSm.textContent;
    console.log(sizeValue);
    cartProductSize.innerHTML=sizeValue;



    document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
 document.querySelector(".cart").style.display="block";
 document.querySelector(".modal-dialog").style.display="block";


    cartProductPrice.innerHTML=document.getElementById("price").textContent;
cartProductName.innerHTML=document.getElementById("productname").textContent;

document.querySelector(".number").style.display="block";

 }

 else if(mdBgColor===`rgb(0, 0, 0)`){
     

    const sizeValue= sizeButtonValueMd.textContent;
    console.log(sizeValue);
    cartProductSize.innerHTML=sizeValue;


    document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
 document.querySelector(".cart").style.display="block";
 document.querySelector(".modal-dialog").style.display="block";


    cartProductPrice.innerHTML=document.getElementById("price").textContent;
cartProductName.innerHTML=document.getElementById("productname").textContent;

document.querySelector(".number").style.display="block";

}
else if(lgBgColor===`rgb(0, 0, 0)`){

    const sizeValue= sizeButtonValueLg.textContent;
    console.log(sizeValue);
    cartProductSize.innerHTML=sizeValue;



    document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
 document.querySelector(".cart").style.display="block";
 document.querySelector(".modal-dialog").style.display="block";


    cartProductPrice.innerHTML=document.getElementById("price").textContent;
cartProductName.innerHTML=document.getElementById("productname").textContent;

document.querySelector(".number").style.display="block";
     
}
else if(xlBgColor===`rgb(0, 0, 0)`){

    const sizeValue= sizeButtonValueXl.textContent;
    console.log(sizeValue);
    cartProductSize.innerHTML=sizeValue;



    document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
 document.querySelector(".cart").style.display="block";
 document.querySelector(".modal-dialog").style.display="block";


    cartProductPrice.innerHTML=document.getElementById("price").textContent;
cartProductName.innerHTML=document.getElementById("productname").textContent;


document.querySelector(".number").style.display="block";

     
}
else if(dxlBgColor===`rgb(0, 0, 0)`){

    const sizeValue= sizeButtonValueDxl.textContent;
    console.log(sizeValue);
    cartProductSize.innerHTML=sizeValue;



    document.getElementById("cartimage").src=`images/gallery/thumbs/${r}.jpg`;
 document.querySelector(".cart").style.display="block";
 document.querySelector(".modal-dialog").style.display="block";



    cartProductPrice.innerHTML=document.getElementById("price").textContent;
cartProductName.innerHTML=document.getElementById("productname").textContent;


document.querySelector(".number").style.display="block";
     
}

else{
    console.log("seclect Size");

    alert("Please Select Size ");

 document.querySelector(".cart").style.display="none";
 document.querySelector(".modal-dialog").style.display="none";

 



 


}




const value=document.querySelector(".number").textContent;
console.log(value);
const cartValue=Number(value)+1;
document.querySelector(".number").textContent=`${cartValue}`;

// cartProductPrice.innerHTML=document.getElementById("price").textContent;
// cartProductName.innerHTML=document.getElementById("productname").textContent;
 }

 