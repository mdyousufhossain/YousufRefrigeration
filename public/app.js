// ===Variable=== 
const body = document.querySelector('body'),
      nav  = document.querySelector('nav'),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchBox");

      


    //   ===Event Listener===

    // === Dark Mode Toggler ==
    modeToggle.addEventListener("click",() =>{
        modeToggle.classList.toggle('active')
        body.classList.toggle('dark');

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode","light-mode");
        }else{
            localStorage.setItem("mode","dark-mode");

        }

    })
//  ===Save in LocalStorage ===

let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.toggle("dark");
    }
    

    


