// Starts at 1 because there is a default list item at the start of the list.
var countOfItems = 1;
            function addItem() {
                // Input Val
                var newItem = document.getElementById("newItem").value;

                //Create List
                var li = document.createElement("li");
                li.innerText = newItem;

                // X button
                var button = document.createElement("button");
                button.innerText = "X";
                button.onclick = function() {
                removeItem(this);
                }
                li.appendChild(button);

                // Add Val, modifies count too
                document.getElementById("list").appendChild(li);
                countOfItems++;
                countItems();

                // Clear 
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

            // Call it to initialize the count at the beginning of the application
            countItems();