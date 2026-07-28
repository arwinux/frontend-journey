const toggler = document.querySelector(".tapc__nav-toggler");
const navbar = document.querySelector(".tapc__menu");

if (toggler && navbar) {
  toggler.addEventListener("click", () => {
    navbar.classList.toggle("nav__expanded");
  });
}

// ------------- Services ------------------

const services = document.querySelectorAll(".service");
const featureImage = document.querySelector(".feature__image img");
const featureTitle = document.querySelector(".feature__title");

services.forEach((service) => {
  service.addEventListener("click", () => {
    services.forEach((s) => s.classList.remove("service--active"));
    service.classList.add("service--active");

    const serviceKey = service.dataset.service;

    featureImage.src = `./assets/images/services/illus-${serviceKey}.webp`;
    featureImage.alt = service.querySelector(".service-title").textContent;

    featureTitle.textContent =
      service.querySelector(".service-title").textContent;
  });
});

const defaultService = document.querySelector('.service[data-service="line"]');
defaultService?.click();
