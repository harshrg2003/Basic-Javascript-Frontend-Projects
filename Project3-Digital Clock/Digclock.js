const hour=document.getElementById("hour");
const minute=document.getElementById("minutes");
const second=document.getElementById("seconds");
const ampm=document.getElementById("ampm");
const DayDate=document.getElementById("daydate");
let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

function updateBackground() {
    let h = new Date().getHours();

    // Check if it's evening (7pm to midnight) or early morning (midnight to 6am)
    if ((h >= 19 && h <= 23) || (h >= 0 && h <= 5)) {
        document.body.style.background = "url('NightSky.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize="cover";
        document.querySelector(".clock #daydate").style.color="yellow";
        document.getElementById("Digital").style.color="yellow";
    } else {
        // Set default background for other times of the day
        document.body.style.background = "url('Img.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize="cover";
        document.querySelector(".clock #daydate").style.color="blue";
        document.getElementById("Digital").style.color="rgb(72,5,215)";
    }
}



function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm1="AM";
    let date1=new Date();
    let day=date1.getDay();

    if(h>=12){
        // h=h-12;
        ampm1="PM";
    }

    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampm.innerText=ampm1;
    DayDate.innerText=days[day]+" "+formatDate(date1);

    updateBackground();

    setTimeout(()=>{
        updateclock();
    },1000)
}

function formatDate(date) {
    const options = {month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);

}

updateclock();