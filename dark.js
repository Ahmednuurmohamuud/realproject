let icon = document.getElementById("togle");
let style = document.getElementById("style");
let togleinner = document.getElementById("togle-inner")

icon.onclick = function(){
  // style.href = ""
  
  

  if(style.href.includes("dark.css")){
    style.href = "white.css"
togleinner.innerText="dark"
   
  } else if (style.href.includes("white.css")) {
    style.href = "dark.css"
    togleinner.innerText="white"
  
    
  }

 
}
$(document).ready(function(){
  let marks; 
});

 

// let icon = document.getElementById("flexSwitchCheckDefault123");
// let style = document.getElementById("style");

// icon.onclick = function(){
//   // style.href = ""
//   // style.href = "white.css"
  

//   if(style.href.includes("dark.css")){
//     style.href = "white.css"
//     // icon.src = "icons/moonn-01-01.png"
//   } else if (style.href.includes("white.css")) {
//     style.href = "dark.css";
//     // Optionally change icon source here
//   }
// };
// $(document).ready(function(){
//   let marks; 
// });



