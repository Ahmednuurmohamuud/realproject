let icon = document.getElementById("flexSwitchCheckDefault");
let style = document.getElementById("style");

icon.onclick = function(){
  // style.href = ""
  style.href = "white.css"
  

  if(style.href.includes("dark.css")){
    style.href = "white.css"
    // icon.src = "icons/moonn-01-01.png"
  } else if (style.href.includes("white.css")) {
    style.href = "dark.css"
    // icon.src = "icons/sunn-01.png"
    
  }
  // style.src ="darktheme.css"
  // document.body.classList.toggle("darkmode");
  // if(document.body.classList.contains("darkmode")){
  //   icon.src = "icons/sunn-01.png"
  // } else {
  //   icon.src = "icons/moonn-01-01.png"
  // }
 
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



