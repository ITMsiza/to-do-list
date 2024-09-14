const inputData = document.querySelector("#data");
const submit = document.querySelector("#button");
//const deleteBtn = document.querySelector("#htmlRaw .raws .icons .fa");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = inputData.value;

    // Create the outer div with class "raw"
    const rawScript = document.createElement("div");
    rawScript.classList.add("raws");

    // Create the paragraph element with text content "21 days of code"
    const firstChild = document.createElement("p");
    firstChild.id = "paragraph";
    firstChild.textContent = inputValue;

    // Create the inner div with class "icons"
    const secondChild = document.createElement("div");
    secondChild.classList.add("icons");

    // Create the first icon element with classes "fa-solid fa-check"
    const grandChild1 = document.createElement("i");
    grandChild1.classList.add("fas", "fa-check");

    // Create the second icon element with classes "fa fa-trash" and aria-hidden attribute
    const grandChild2 = document.createElement("i");
    grandChild2.classList.add("fa", "fa-trash");
    grandChild2.setAttribute("aria-hidden", "true");

    // Append elements in the correct hierarchy
    rawScript.appendChild(firstChild);
    rawScript.appendChild(secondChild);
    secondChild.appendChild(grandChild1);
    secondChild.appendChild(grandChild2);

    // Append the entire structure to an existing div in the document
    const rawHtml = document.getElementById("htmlRaw");
    rawHtml.appendChild(rawScript);

    console.log(rawHtml);

    // Add event listener to the delete icon
    grandChild2.addEventListener("click", () => {
        htmlRaw.removeChild(rawScript);
    });

    grandChild1.addEventListener("click", () => {
        firstChild.classList.toggle("canceled");
    });

    inputData.value = "";

});

// Update the date immediately when the page loads
updateDate();

// Continuously update the date every second
setInterval(updateDate, 1000);

function updateDate() {
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    var AMPMString = 'AM';

    // Format the date
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are 0-based
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Add leading zero
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Add leading zero

    if (hours > 12) {
        AMPMString = 'PM';
    }

    // Create a formatted string for the date
    const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${AMPMString}`;

    // Update the date element with the formatted date
    dateElement.textContent = formattedDate;
}

