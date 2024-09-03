// Starts at 1 because there is a default list item at the start of the list.
var countOfItems = 1;
            
function addItem() {
    // The value inside of the input textbox
    var newItem = document.getElementById("newItem").value;

    //Create List elements
    var li = document.createElement("li");
    li.innerText = newItem;

    // X button on each of the items in the list
    var button = document.createElement("button");
    button.innerText = "X";
    button.onclick = function() {
        removeItem(this);
    }
    li.appendChild(button);

    // Add Value, modifies count too
    document.getElementById("list").appendChild(li);
    countOfItems++;
    countItems();

    // Clears textbox input
    document.getElementById("newItem").value = "";
}

// Removes item when X is clicked, modifies Count too
function removeItem(item) {
    // Remove from List
    item.parentElement.remove();
    countOfItems--;
    countItems();
}

// Counts items in list and sets the paragraph element to the value
function countItems() {
    var par = document.querySelector("#countNum");
    par.innerText = countOfItems;
}

// Adds Event listener to enter button on text box, enter and clicking add therefore do
// the same thing.
var input = document.getElementById("newItem");
// Listener that activates when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // Checking for the "Enter" key press
    if (event.key === "Enter") {
        // Cancel the default action
        event.preventDefault();
        // Trigger the addBtn functionality and addItem() function
        document.getElementById("addBtn").click();
    }
});

// Call it to initialize the count at the beginning of the application
countItems();