function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
}
document.querySelectorAll(".expander").forEach((expander) => {
  expander.addEventListener("click", () => {
    const content = expander.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      expander.classList.remove("active");
    } else {
      content.style.display = "block";
      expander.classList.add("active");
    }
  });
});
