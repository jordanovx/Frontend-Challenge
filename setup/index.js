fetch("../data.json")
  .then((response) => response.json())
  .then((json) => getData(json));

const getData = (json) => {
  const layout = document.querySelector("#layout");
  const cardTmpl = document.querySelector(".card");

  json.forEach((element, index) => {
    const clonedCard = index === 0 ? cardTmpl : cardTmpl.cloneNode(true);

    clonedCard.querySelector(".card-username > h3").innerText = element.name;
    clonedCard.querySelector(".card-username > p").innerText = new Date(
      element.date
    ).toLocaleString("en-gb", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    clonedCard.querySelector(".card-img").src = element.image;
    clonedCard.querySelector(".profile-img").src = element.profile_image;
    clonedCard.querySelector(".caption").innerText = element.caption;
    clonedCard.querySelector(".likes-counter").innerText = element.likes;

    layout.append(clonedCard);
  });
};

//Change Theme
function changeTheme(event) {
  document.getElementById("layout").style.backgroundColor =
    event.value === "darkTheme" ? "#2c3e50" : "#fff";
}

//Likes button
// var count = 0;
// var output = document.getElementsByClassName("likes-counter");

// console.log(output);

// function likesButton(color) {
//   $(".likesbtn").css("background-color", color);
// }

const likes = document.querySelectorAll(".likesbtn");

for (const like of likes) {
  like.addEventListener("click", function handleClick() {
    like.classList.add("bg-likes");
  });
}

//Load More Button +4
const loadMore = document.querySelector(".load-more");

let currentItems = 4;

loadMore.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".card")];

  for (let i = currentItems; i < currentItems + 4; i++)
    setTimeout(function () {
      if (elementList[i]) {
        elementList[i].style.display = "flex";
      }
    }, 3000);
  currentItems += 4;
});
