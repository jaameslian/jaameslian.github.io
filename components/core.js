

var head = document.getElementsByTagName("head")[0];
var nav = document.getElementById("nav");

var coreCss = document.createElement("link");
coreCss.href = "/components/css/core.css"
coreCss.rel = "stylesheet"

head.appendChild(coreCss)

if(nav) {
    const navComponent = fetch("./components/html/nav.html")
    .then(response => response.text())
    .then(data => {
        nav.innerHTML = data
        console.log(data)
    });

    nav.innerHTML = navComponent
}