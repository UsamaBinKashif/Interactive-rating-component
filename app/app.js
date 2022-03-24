let ratingCard = document.querySelector(".rating-card");
let thankyouCard = document.querySelector(".thankyou-card");
let ratingStats = document.querySelector(".rating-stats");
let id = document.querySelectorAll(".activate");
let btn = document.getElementById("submit-btn");
let alert = document.querySelector("#alert");

id.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    item.classList.remove("btn");
    ratingStats.innerHTML = `You have selected ${index + 1} out of 5`;
    if (index + 1 > 0) {
      btn.addEventListener("click", () => {
        thankyouCard.classList.remove("display");
        ratingCard.classList.add("display");
      });
    }
  });
});
