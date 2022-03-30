let navigationBox = document.querySelector(".navigation-box");
let contentArray = [
  navBoxContent,
  `<div class="carousel-indicators">
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="0"
  class="active"
  aria-current="true"
  aria-label="Slide 1"
></button>
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="1"
  aria-label="Slide 2"
></button>
<button
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide-to="2"
  aria-label="Slide 3"
></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
  <img src="https://raw.githubusercontent.com/rikdefo/defoy/main/img/slide_1.jpg" class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
  <img
    src="https://raw.githubusercontent.com/rikdefo/defoy/main/img/slide_1.jpg"
    alt="..."
  />
</div>
</div>
<button
class="carousel-control-prev"
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide="prev"
>
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button
class="carousel-control-next"
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide="next"
>
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>`,
  `<div class="carousel-inner">
<div class="carousel-item active">
  <img
    src="https://raw.githubusercontent.com/rikdefo/defoy/main/img/slide_1.jpg"
    class="d-block w-100"
    alt="Зимородок"
  />
  <div class="carousel-caption d-none d-md-block">
    <h2></h2>
    <p></p>
  </div>
</div>
</div>`,
  footerBoxContent,
];

window.onload = function (e) {
  let nav = document.querySelector(".navigation-box");
  nav.innerHTML = navBoxContent;

  //карусель главная
  if (document.querySelector("title").innerText == "Главная / Defoby") {
    let carouselMainPage = document.querySelector(".carousel-main-page");
    carouselMainPage.innerHTML = contentArray[1];
  }

  //карусель темы
  if (document.querySelector("title").innerText != "Главная / Defoby") {
    let carouselTheme = document.querySelector(".carousel-theme-page");
    carouselTheme.innerHTML = contentArray[2];
  }

  let footerContent = document.querySelector(".footer-box");
  footerContent.innerHTML = contentArray[3];
};
