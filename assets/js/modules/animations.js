const gsapLoaderAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Анимация загрузки
  gsap.to(".loader", {
    opacity: 0,
    duration: 1.5,
  });
  gsap.to(".loader__img", {
    scale: 1.5,
    opacity: 0,
    duration: 1,
  });
  gsap.to(".loader__text", {
    opacity: 0,
    duration: 0.5,
  });

  // Анимация появления секций при переключении данных
  gsap.set(".diameter", { opacity: 0, y: -100 });
  gsap.set(".weight", { opacity: 0, y: -100 });
  gsap.set(".satellite", { opacity: 0, y: -100 });
  gsap.set(".orbit", { opacity: 0, y: -100 });
  gsap.set(".year", { opacity: 0, y: -100 });
  gsap.set(".temperature", { opacity: 0, y: -100 });

  gsap.to(".diameter", {
    opacity: 1,
    y: 0,
    duration: 0.5,
  });
  gsap.to(".weight", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.1,
  });
  gsap.to(".satellite", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.2,
  });
  gsap.to(".orbit", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.3,
  });
  gsap.to(".year", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.4,
  });
  gsap.to(".temperature", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.5,
  });
};

export { gsapLoaderAnimation };
