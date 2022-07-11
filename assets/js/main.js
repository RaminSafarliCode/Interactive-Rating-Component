const numbers = [
  ...document.querySelectorAll(".card__wrapper__rating__number"),
];
const card = document.querySelector(".card__wrapper");
const finish = document.querySelector(".card__finish");
const submit = document.querySelector(".card__wrapper__btn");
const ratingScore = document.querySelector(
  ".card__finish__wrp__selected__score"
);

let score = 0;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    numbers.forEach((number) => {
      number.classList.remove("clicked");
    });
    if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
    } else {
      e.target.classList.add("clicked");
      score = e.target.textContent;
    }
  });
});

submit.addEventListener("click", () => {
  card.classList.add("hide");
  finish.classList.remove("hide");
  console.log(score);
  ratingScore.textContent = score;
});
