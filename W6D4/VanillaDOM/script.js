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



  // adding SF places as list items

  // --- your code here!



  // adding new photos

  // --- your code here!



});
