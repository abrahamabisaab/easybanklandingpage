 const hamburger = document.getElementById("hamburger");
 const navList = document.getElementById("navList");
const hamburgerClosed = document.getElementById("hamburgerClosed");
 hamburger.addEventListener("click", () => {
    if(navList.className === "nav__list"){
        navList.className += " responsive";
        hamburger.style.display = "none";
        hamburgerClosed.style.display = "flex";
    }
    else{
        navList.className = "nav__list";
    }
    console.log(navList.className);
 });
 
 hamburgerClosed.addEventListener("click", () => {
    if(navList.className === "nav__list responsive"){
        navList.className = "nav__list";
        hamburger.style.display = "flex";
        hamburgerClosed.style.display = "none";
    }
    else{
        navList.className = "nav__list";
    }
    console.log(navList.className);
 });