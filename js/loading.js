const loading = document.querySelector(".loading span");

function loadingDot() {
    loading.innerText = loading.innerText+"."
}

let timer = setInterval(loadingDot, 600);

setTimeout(() => {
    clearInterval(timer); loading.innerText = "";
}, 5000)