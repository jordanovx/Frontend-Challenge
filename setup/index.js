fetch("../data.json")
  .then((response) => response.json())
  .then((json) => getData(json));

const getData = (json) => {
  console.log(json);

  json.forEach((element) => {
    // document.CreateElement

    let container = document.createElement("div");
    container.classList.add("card");

    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    container.append(cardInfo);

    let cardPicture = document.createElement("img");
    cardPicture.src = element.image;
    cardPicture.classList.add("post");
    cardPicture.width = 450;
    cardPicture.height = 300;
    container.append(cardPicture);

    let cardCaption = document.createElement("div");
    cardCaption.innerText = element.caption;
    cardCaption.classList.add("caption");
    container.append(cardCaption);

    let cardLine = document.createElement("hr");
    cardLine.classList.add("card-hr");
    container.append(cardLine);

    let cardProfile = document.createElement("div");
    cardProfile.classList.add("card-profile");
    container.append(cardProfile);

    let cardNameDate = document.createElement("div");
    cardNameDate.classList.add("card-user");

    let cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardImg.style.backgroundImage = "url(" + element.profile_image + ")";
    //  console.log(element.profile_image);
    //    console.log(cardImg);
    cardInfo.append(cardImg);

    let cardUsername = document.createElement("h3");
    cardUsername.innerText = element.name;
    console.log(cardUsername);
    cardUsername.classList.add("card-username");
    cardNameDate.append(cardUsername);

    let cardDate = document.createElement("p");
    cardDate.innerText = element.date;
    console.log(cardDate);
    cardDate.classList.add("card-username");
    cardNameDate.append(cardDate);
    cardInfo.append(cardNameDate);

    let cardLogo = document.createElement("img");
    cardLogo.classList.add("logo");
    cardLogo.src = "../icons/instagram-logo.svg";
    cardInfo.append(cardLogo);

    // let Img = document.createElement("img");
    // Img.classList.add()
    // Img.src = element.profile_image;
    // cardImg.append(Img);

    let placeholderLayout = document.querySelector(".layout-placeholder");
    placeholderLayout.append(container);
    //document.querySelector(".post-img img").src = element.image; //setAtrribute  ili InnerHTML za tekst
    //.setAttribute("src", element.image);
    console.log();
  });
};
