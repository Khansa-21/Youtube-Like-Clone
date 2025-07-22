let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("menu");
let icon3 = document.getElementById("search");
let icon4 = document.getElementById("more");
let icon5 = document.getElementById("notification");
let icon6 = document.getElementById("report");
let icon7 = document.querySelectorAll("#three");
let icon8 = document.getElementById("help");
let icon9 = document.getElementById("setting");
let icon10 = document.getElementById("Send");
let icon11 = document.getElementById("all");
let icon12 = document.getElementById("music");
let icon13 = document.getElementById("game");
let icon14 = document.getElementById("news");
let icon15 = document.getElementById("sport");
icon1.onclick = function () {
  document.body.classList.toggle("mode");
  if (document.body.classList.contains("mode")) {
    icon1.src = "./vidTube_img/images/sun.png";
    icon2.src = "./vidTube_img/images/menu1.png";
    icon3.src = "./vidTube_img/images/search1.png";
    icon4.src = "./vidTube_img/images/app.png";
    icon5.src = "./vidTube_img/images/bell.png";
    icon6.src = "./vidTube_img/images/report (1).png";
    icon7.forEach((element)=>{
    element.src = "./vidTube_img/images/dots (1).png";
    })
    icon8.src = "./vidTube_img/images/question (1).png";
    icon9.src = "./vidTube_img/images/setting (1).png";
    icon10.src = "./vidTube_img/images/feedback (1).png";
    icon11.src = "./vidTube_img/images/list (3).png";
    icon12.src = "./vidTube_img/images/musical-note (1).png";
    icon13.src = "./vidTube_img/images/game (1).png";
    icon14.src = "./vidTube_img/images/newspaper-folded (1).png";
    icon15.src = "./vidTube_img/images/trophy (1).png";
  } else {
    icon1.src = "./vidTube_img/images/moon.png";
    icon2.src = "./vidTube_img/images/menu.png";
    icon3.src = "./vidTube_img/images/search.png";
    icon4.src = "./vidTube_img/images/more.png";
    icon5.src = "./vidTube_img/images/notification.png";
    icon6.src = "./vidTube_img/images/report.png";
    icon7.forEach((element)=>{
    element.src = "./vidTube_img/images/dots.png";
      })
    icon8.src = "./vidTube_img/images/question.png";
    icon9.src = "./vidTube_img/images/setting.png";
    icon10.src = "./vidTube_img/images/feedback.png";
    icon11.src = "./vidTube_img/images/list (2).png";
    icon12.src = "./vidTube_img/images/musical-note.png";
    icon13.src = "./vidTube_img/images/game.png";
    icon14.src = "./vidTube_img/images/newspaper-folded.png";
    icon15.src = "./vidTube_img/images/trophy.png";
  }
};
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");
let short = document.querySelector(".shorts");
icon2.onclick = function () {
  sidebar.classList.toggle("active");
  main.classList.toggle("enlarge");
  short.classList.toggle("start");
};