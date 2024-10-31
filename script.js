document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");

  document.body.classList.toggle("hidden");
});

document.querySelectorAll(".nav-links > li").forEach((item) =>
  item.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");

    document.body.classList.remove("hidden");
  })
);

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const productsData = [
  {
    id: 1,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/weight_bench.png",
  },
  {
    id: 2,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/rubber_ball.png",
  },
  {
    id: 3,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/wooden_gym_rings.png",
  },
  {
    id: 4,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/fitness_air_bike.png",
  },
  {
    id: 5,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/weight_bench.png",
  },
  {
    id: 6,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/fitness_air_bike.png",
  },
  {
    id: 7,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/weight_bench.png",
  },
  {
    id: 8,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/rubber_ball.png",
  },
  {
    id: 9,
    title: "Product Name",
    price: 34.0,
    image: "assets/images/fitness_air_bike.png",
  },
];

const cards = document.querySelector(".slider-cards");

productsData.map((item) => {
  return (cards.innerHTML += `
              <div class="swiper-slide card">
                <img src="${item.image}" class="cover-img" />
                <div class="pattern">Free Shipping</div>
                <h3>${item.title}</h3>
                <img src="assets/icons/star.svg" alt="" class="rating"/>
                <p>$${item.price}</p>
              </div>
  `);
});
