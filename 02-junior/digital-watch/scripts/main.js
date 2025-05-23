let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let clock = document.getElementById("clock");
let dayitems = document.getElementById("dayitems");
let themeColor = document.getElementById("themecolor");
let dcBack = document.getElementById("dcbackground");

let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let colorList = ["redc", "bluec", "yelloc", "greenc", "purplec"];

function dayItemGenerate() {
    let timeData = new Date();
    let dateList = timeData.toString().split(" ");

    if (dateList[1].startsWith("Feb")) {
        return 29;
    } else if (dateList[1].startsWith("Apr") || dateList[1].startsWith("Jun") || dateList[1].startsWith("Sept") || dateList[1].startsWith("Nov")) {
        return 30;
    } else return 31;
}

for (let i = 1; i <= dayItemGenerate(); i++) {
    dayitems.innerHTML += `<p class="dayitem rounded-2 m-1">${i}</p>`;

}
setInterval(() => {
    let timeData = new Date();
    let dateList = timeData.toString().split(" ");
    year.innerText = dateList[3];
    clock.innerText = dateList[4];
    let dayItemsList = dayitems.querySelectorAll(".dayitem");

    dayItemsList.forEach((item) => {

        if (item.innerText === dateList[2]) {
            item.style.color = "#ffffff";
            item.style.border = "2px none";
            item.style.background = "var(--background-gradiant)";

        }
    });

    monthList.forEach((value, index) => {
        if (value.startsWith(dateList[1])) {
            month.innerText = value
        }
    });
    dayList.forEach((value, index) => {
        if (value.startsWith(dateList[0])) {
            day.innerText = value
        }
    });

    // if (data)
}, 1000);

colorList.forEach((value) => {
    themeColor.innerHTML += `<div class="circleborder rounded-circle d-flex justify-content-center align-items-center"><span class="theme ${value} border-2 rounded-circle"></span></div>`;
});
let colors = {
    "redc": "#fa2803",
    "bluec": "#2f80ed",
    "yelloc": "#f5af19",
    "greenc": "#576500",
    "purplec": "#7f00ff"
};
let them = document.querySelectorAll(".theme");
them.forEach((value) => {
    value.style.background = `transparent url("../assets/images/${value.classList[1]}.jpg") no-repeat center center`;
    value.style.backgroundSize = "cover";

    value.addEventListener("click", () => {

        dcBack.style.background = `transparent url("../assets/images/${value.classList[1]}.jpg") no-repeat center center`;
        dcBack.style.backgroundSize = "cover";

        themSwich(value.classList[1]);

        document.querySelectorAll('.circleborder').forEach(circle => {
            circle.classList.remove('active');
        });

        value.parentElement.classList.add('active', value.classList[1]);
    });
});

function themSwich(themeKey) {
    let colors = {
        "redc": "#fa2803",
        "bluec": "#2f80ed",
        "yelloc": "#f5af19",
        "greenc": "#576500",
        "purplec": "#7f00ff"
    };

    let gradients = {
        "redc": "linear-gradient(to right, #fa2803, #b40000)",
        "bluec": "linear-gradient(to right, #56ccf2, #2f80ed)",
        "yelloc": "linear-gradient(to right, #f12711, #f5af19)",
        "greenc": "linear-gradient(to right, #b5c300, #7D8B01)",
        "purplec": "linear-gradient(to right, #7f00ff, #e100ff)"
    };

    let hoverColors = {
        "redc": "rgba(250,40,3,0.4)",
        "bluec": "rgba(47,128,237,0.4)",
        "yelloc": "rgba(245,175,25,0.4)",
        "greenc": "rgba(87, 101, 0, 0.4)",
        "purplec": "rgba(127, 0, 255, 0.4)"
    };

    document.documentElement.style.setProperty('--background-gradiant', gradients[themeKey]);
    document.documentElement.style.setProperty('--border-hover-color', hoverColors[themeKey]);
    document.documentElement.style.setProperty('--text-hover-color', colors[themeKey]);

}
