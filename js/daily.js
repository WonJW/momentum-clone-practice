const dailys = document.querySelector(".daily h3");

function getdaily() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(2, "0");
    const months = String(date.getMonth()+1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    let days = date.getDay();
    if(days===0) {
        days = "Sun";
    } else if(days===1) {
        days = "Mon";
    } else if(days===2) {
        days = "Tue";
    } else if(days===3) {
        days = "Wed";
    } else if(days===4) {
        days = "Thu";
    } else if(days===5) {
        days = "Fri";
    } else {
        days = "Sat";        
    }
    dailys.innerText = `${years}. ${months}. ${dates}. ${days}`;
}

getdaily()
setInterval(getdaily, 1000);