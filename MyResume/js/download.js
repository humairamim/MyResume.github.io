let button = document.querySelector("btn a");
button.addEventListener("click", () => {
    const span = document.querySelector("a span");
    button.style.paddingRight = "19ox";
    span.style.visibility = "visible";
    setTimeout(() => {
        span.style.visibility = "hidden";
        button.style.transition = ".3s ease-in-out";


        button.style.paddingRight = "0px";
    }, 3000);

})