let resetbtn = document.getElementById("regenerate");
let captcha = document.getElementById("captchanumbertext");
let captchaBackground = document.getElementById("captchaback");

let checkbtn = document.getElementById("checkbtn");
let captchaInput = document.getElementById("captchainput");

let statusCheck = document.getElementById("statuscheck");


resetbtn.addEventListener("click",()=>{
    captcha.innerText = captchaGenerator(5);
    captchaBackground.style.backgroundImage = `url("../assets/images/p${getRandomImageIndex()}.jpg")`
    captchaInput.value = "";
    statusCheck.style.background = "#FFFFFFFF";
    statusCheck.style.boxShadow = 'none';

});

checkbtn.addEventListener("click",()=>{
    if (captchaInput.value === captcha.textContent){
        statusCheck.style.background = 'linear-gradient(to right, #fdfc47, #24fe41)';
        statusCheck.style.boxShadow = '0 0 20px #12d62c';
    }
    else{
        statusCheck.style.background = 'linear-gradient(to right, #ee0979, #ff6a00)';
        statusCheck.style.boxShadow = '0 0 20px #ee0979';


    }
});

function captchaGenerator(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const getRandomImageIndex = () => Math.floor(Math.random() * 7) + 1;



