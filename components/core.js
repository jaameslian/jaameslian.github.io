

var head = document.getElementsByTagName("head")[0];
var nav = document.getElementById("nav");

var coreCss = document.createElement("link");
coreCss.href = "/components/css/core.css"
coreCss.rel = "stylesheet"

var googleIcons = document.createElement("link");
googleIcons.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
googleIcons.rel = "stylesheet"


head.appendChild(googleIcons)
head.appendChild(coreCss)

await loadNav() 

async function loadNav() {
    if(nav) {
        var navComponent = await fetch("./components/html/nav.html")

        const navData = await navComponent.text();
        // .then(response => response.text())
        // .then(data => {
        //     nav.innerHTML = data
        //     console.log(data)
        // });
    
        nav.innerHTML = navData
    }
}

const mobileUIHider = document.getElementById("mobileUlClose")

// document.getElementById("mobileUlClose").addEventListener("click", () => {
//     if(document.getElementById("mobileUlClose").classList.contains("navClosed")) {
//         document.getElementById("mobileUlClose").classList.remove("navClosed")
//     }

//     document.getElementById("mobileUlClose").classList.add("navClosed")
// })

document.getElementById("mobileMenu").addEventListener("click", () => {
    if(!mobileUIHider.classList.contains("navClosed") && !(mobileUIHider.classList.contains("navOpened"))) {
        mobileUIHider.classList.add("navOpened")
    } else if(mobileUIHider.classList.contains("navOpened")) {
        mobileUIHider.classList.remove("navOpened")
    }
})