document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });


  // Toggle form for adding pictures
  const toggleDogPicForm = (event) => {
    // debugger
    const DogPicForm = event.target.nextElementSibling;
    if (DogPicForm.className === "photo-form-container hidden") {
      DogPicForm.className = "photo-form-container";
    } else {
      DogPicForm.className = "photo-form-container hidden";
    }
  }
  // --- your code here!
  const photoButton = document.querySelector(".photo-show-button");
  console.log(photoButton);
  photoButton.addEventListener("click", toggleDogPicForm);


  // adding SF places as list items
  const FormData = document.querySelector(".favorite-submit");
  // const FormData = document.getElementById("sky");
  // debugger

    FormData.addEventListener("click", event => {
    // FormData.addEventListener("submit", event => { #this works with line 19
    // if we had form id = "sky" in index.html
      // debugger
    event.preventDefault();
    const fav = document.querySelector(".favorite-input");
    const foodName = fav.value;
    fav.value = "";
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = foodName;
    ul.appendChild(li);
  });
  // --- your code here!


const uploadPic = (event) => {
  event.preventDefault();
  const DogPic = document.querySelector(".photo-url-input");
  const DogPicUrl = DogPic.value;
  DogPic.value = "";
  const ImgLi = document.createElement("img");
  ImgLi.src = DogPicUrl;
  const DogLi = document.createElement("li");
  DogLi.appendChild(ImgLi);
  const DogUl = document.querySelector(".dog-photos");
  DogUl.appendChild(DogLi);
}


const newPicButton = document.querySelector(".photo-url-submit");
newPicButton.addEventListener("click", uploadPic);









});
