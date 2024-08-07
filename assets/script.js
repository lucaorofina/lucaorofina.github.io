//scroll up button
//scrollUp selected with the html ID attached
const scrollUp = document.querySelector("#scroll-up");

//getEVent uses the click for the scrollTO object in windows to initiate
scrollUp.addEventListener("click",()=>{
    window.scrollTo({

        //smoothly scrolls to top left of page
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});