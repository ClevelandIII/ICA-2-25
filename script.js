//first section
document.getElementById("firstPara").innerHTML +=
    "<span class='tan'>This is new tan text</span>";

//second section
let images = document.getElementsByTagName("img");

for (let image of images) {
    image.width = "250";
}

//third section
let medBlue = document.getElementsByClassName("med-blue");
let lightBlue = document.getElementsByClassName("light-blue");

for (let med of medBlue) {
    med.style.color = "#3C5E73";
}

for (let light of lightBlue) {
    light.style.color = "#7C9EA6";
}

//fourth section
let svg = document.querySelectorAll("#svgs svg");
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

for (let i = 0; i < svg.length; i++) {
    svg[i].style.stroke = colors[i];
}

//fifth section
let span = document.getElementsByClassName("bold");

span[0].style.color = "#7C9EA6";

//sixth section
document.querySelector(".content_list li:first-of-type").textContent =
    "this is new list item text.";

document.querySelectorAll(".content_list li")[2].innerHTML +=
    "<strong> Cleveland Williams</strong>";

//seventh section
document.querySelector("#remove a").removeAttribute("hidden");
