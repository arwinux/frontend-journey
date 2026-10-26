var badge = document.getElementById("sigBadge");
var isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!isDesktop) {
  document.documentElement.classList.add("touch");
}

function setOpen(open) {
  badge.classList.toggle("is-open", open);
  badge.setAttribute("aria-expanded", open ? "true" : "false");
}

if (!isDesktop) {
  badge.addEventListener("click", function (e) {
    if (!badge.classList.contains("is-open")) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    }
  });

  document.addEventListener("click", function () {
    setOpen(false);
  });
}

badge.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    if (!isDesktop && !badge.classList.contains("is-open")) {
      e.preventDefault();
      setOpen(true);
    }
  }
  if (e.key === "Escape") {
    setOpen(false);
  }
});
