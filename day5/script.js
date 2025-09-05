function main (){
    let mainDiv = document.querySelector(".Main-div");
    let mainbutton = document.querySelector("main-button");
    mainbutton.addEventListener("click", function(){
        mainDiv.style.backgroundColor = "red";
    });
}
main();
console.log("script is loaded");