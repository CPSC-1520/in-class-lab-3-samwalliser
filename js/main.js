// Enter your code below.
console.log('JavaScript is linked');

// Exercise Step 1: SHow the JavaScript Resources

let resourcesDiv = document.querySelector(".javascript-resources");
let showResourcesButton = document.getElementById("show-resources");

showResourcesButton.addEventListener("click", (event) => {
    resourcesDiv.classList.remove("d-none");
});

// Exercise Step 2: Add font boldness on the links when you hover over an item
resourcesDiv.addEventListener("mouseover", (event) => {
    console.log(event.target);
    event.target.classList.add("fw-bold");
   
});



// Exercise Step 3:




// Exercise Step 4: