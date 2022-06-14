window.onload = () => {
  const backButton = document.querySelector("#backButton");
  const nextButton = document.querySelector("#nextButton");
  const slides = [...document.querySelectorAll(".slide-item")];
  let active = document.querySelector(".active-slide");

  let isClickable = true;

  backButton.addEventListener("click", () => {
    changeSlide(false);
  });

  nextButton.addEventListener("click", () => {
    changeSlide(true);
  });

  setInterval(()=>{
    changeSlide(false)
  }, 3500)

  function changeSlide(next) {
    if (isClickable) {
      isClickable = false;
      const index = slides.indexOf(active);

      if (next) {
        active.className = "slide-item slide-to-right";
        active = slides[(index + 1) % slides.length];
        setTimeout(() => {
          active.className = "slide-item active-slide";
          isClickable = true;
        }, 350);
      } else {
        active.className = "slide-item slide-to-left";
        active = slides[(index - 1 + slides.length) % slides.length];
        setTimeout(() => {
          active.className = "slide-item active-slide";
          isClickable = true;
        }, 350);
      }
    }
  }
};
