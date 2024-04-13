var toggleBtn = document.getElementById("toggleBtn");
var content = document.getElementById("content");

toggleBtn.addEventListener("click", function() {
  if (content.style.display === "none") {
    content.style.display = "";
    toggleBtn.style.display = "none";
  } else {
    content.style.display = "none";
   toggleBtn.style.display = "";
  }
});

content.addEventListener("click", function() {
  if (toggleBtn.style.display === "none") {
    toggleBtn.style.display = "";
    content.style.display = "none";
  } else {
    toggleBtn.style.display = "none";
   content.style.display = "";
  }
});

