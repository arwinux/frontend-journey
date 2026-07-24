var badge = document.getElementById("sigBadge");

function setOpen(open) {
  badge.classList.toggle("is-open", open);
  badge.setAttribute("aria-expanded", open ? "true" : "false");
}

badge.addEventListener("click", function (e) {
  e.stopPropagation();
  setOpen(!badge.classList.contains("is-open"));
});

badge.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    setOpen(!badge.classList.contains("is-open"));
  }
  if (e.key === "Escape") {
    setOpen(false);
  }
});

document.addEventListener("click", function () {
  setOpen(false);
});
