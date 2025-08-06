// -------------------- Theme Icons Setup --------------------
let icon1 = document.getElementById("icon1"); // Theme toggle icon
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
let icon16 = document.getElementById("V-shorts");
let icon17 = document.getElementById("subscription");
let icon18 = document.getElementById("history");
let icon19 = document.getElementById("playlist");
let icon20 = document.getElementById("library");
let icon21 = document.getElementById("cast");
let icon22 = document.getElementById("msg");

// -------------------- Function to Change Icons --------------------
function updateIcons(isDarkMode) {
  const icons = {
    icon1: isDarkMode ? "sun.png" : "moon.png",
    icon2: isDarkMode ? "menu1.png" : "menu.png",
    icon3: isDarkMode ? "search1.png" : "search.png",
    icon4: isDarkMode ? "app.png" : "more.png",
    icon5: isDarkMode ? "bell.png" : "notification.png",
    icon6: isDarkMode ? "report (1).png" : "report.png",
    icon8: isDarkMode ? "question (1).png" : "question.png",
    icon9: isDarkMode ? "setting (1).png" : "setting.png",
    icon10: isDarkMode ? "feedback (1).png" : "feedback.png",
    icon11: isDarkMode ? "list (3).png" : "list (2).png",
    icon12: isDarkMode ? "musical-note (1).png" : "musical-note.png",
    icon13: isDarkMode ? "game (1).png" : "game.png",
    icon14: isDarkMode ? "newspaper-folded (1).png" : "newspaper-folded.png",
    icon15: isDarkMode ? "trophy (1).png" : "trophy.png",
    icon16: isDarkMode ? "short-video (1).png" : "short-video.png",
    icon17: isDarkMode ? "subscribe (1).png" : "subscribe.png",
    icon18: isDarkMode ? "history (1).png" : "history.png",
    icon19: isDarkMode ? "playlist (1).png" : "playlist.png",
    icon20: isDarkMode ? "music-library (1).png" : "music-library.png",
    icon21: isDarkMode ? "google-cast-logo (1).png" : "google-cast-logo.png",
    icon22: isDarkMode ? "comment (1).png" : "comment.png",
  };

  // Apply updated sources
  if (icon2) icon2.src = `/vidTube_img/images/${icons.icon2}`;
  if (icon1) icon1.src = `/vidTube_img/images/${icons.icon1}`;
  if (icon3) icon3.src = `/vidTube_img/images/${icons.icon3}`;
  if (icon4) icon4.src = `/vidTube_img/images/${icons.icon4}`;
  if (icon5) icon5.src = `/vidTube_img/images/${icons.icon5}`;
  if (icon6) icon6.src = `/vidTube_img/images/${icons.icon6}`;
  if (icon8) icon8.src = `/vidTube_img/images/${icons.icon8}`;
  if (icon9) icon9.src = `/vidTube_img/images/${icons.icon9}`;
  if (icon10) icon10.src = `/vidTube_img/images/${icons.icon10}`;
  if (icon11) icon11.src = `/vidTube_img/images/${icons.icon11}`;
  if (icon12) icon12.src = `/vidTube_img/images/${icons.icon12}`;
  if (icon13) icon13.src = `/vidTube_img/images/${icons.icon13}`;
  if (icon14) icon14.src = `/vidTube_img/images/${icons.icon14}`;
  if (icon15) icon15.src = `/vidTube_img/images/${icons.icon15}`;
  if (icon16) icon16.src = `/vidTube_img/images/${icons.icon16}`;
  if (icon17) icon17.src = `/vidTube_img/images/${icons.icon17}`;
  if (icon18) icon18.src = `/vidTube_img/images/${icons.icon18}`;
  if (icon19) icon19.src = `/vidTube_img/images/${icons.icon19}`;
  if (icon20) icon20.src = `/vidTube_img/images/${icons.icon20}`;
  if (icon21) icon21.src = `/vidTube_img/images/${icons.icon21}`;
  if (icon22) icon22.src = `/vidTube_img/images/${icons.icon22}`;

  icon7.forEach((element) => {
    element.src = isDarkMode
      ? "/vidTube_img/images/dots (1).png"
      : "/vidTube_img/images/dots.png";
  });
}

// -------------------- Theme Toggle Button Click --------------------
if (icon1) {
  icon1.onclick = function () {
    document.body.classList.toggle("mode");

    // 🔐 Save theme in localStorage
    const isDark = document.body.classList.contains("mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // 🔄 Update icons
    updateIcons(isDark);
  };
}

// -------------------- On Page Load: Apply Saved Theme --------------------
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("mode");
  }

  const isDark = document.body.classList.contains("mode");
  updateIcons(isDark);
});

// Sidebar Toggle (Collapsing the sidebar)
// Ensure the sidebar element exists before attaching events
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");
let short = document.querySelector(".shorts");

// ✅ Identify if current page is home
const isHomePage =
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("index.html");

// ✅ Handle menu click
icon2.onclick = function () {
  if (isHomePage) {
    // 📱 Responsive mode on Home page
    if (
      window.innerWidth <= 768 ||
      (window.innerWidth >= 768 && window.innerWidth <= 1024)
    ) {
      sidebar.classList.toggle("sidebar-mb");
    } else {
      // 🖥️ Desktop view - Home
      sidebar.classList.toggle("active");
      main.classList.toggle("enlarge");
      short.classList.toggle("start");
    }
  } else {
    // ✅ For all next pages  (toggle hidden class)
    sidebar.classList.toggle("sidebar-mb"); // Optional for mbl and tab
    sidebar.classList.toggle("hidden"); // Slide in sidebar
  }
};

// Add 'hovered' class on touch start (finger press)
sidebar.addEventListener("touchstart", () => {
  sidebar.classList.add("hovered");
});

// Remove 'hovered' class on touch end (finger release)
sidebar.addEventListener("touchend", () => {
  sidebar.classList.remove("hovered");
});
