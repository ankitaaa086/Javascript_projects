// generate a random color

const randomColor = function (){
    const hex =  "0123456789ABCDEF";
    let color = '#'

    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor()); 

let intervalid;
const startChangingColor = function(){
    if(!intervalid)
        intervalid = setInterval(changeBgColor, 1000);

    function changeBgColor (){
        document.body.style.backgroundColor = randomColor();
    }
};

document.querySelector("#start").addEventListener('click', startChangingColor);

const stopChangingColor = function(){
    clearInterval(intervalid);
    intervalid = null;
};

document.querySelector("#stop").addEventListener('click', stopChangingColor);