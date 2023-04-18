// Create a class for the element
class WordCount extends HTMLParagraphElement {
    constructor() {
        //Always call super() first in constructor
        super();

        // count words in element's parent element (This is the article which is the parent)
        const wcParent = this.parentNode;

        // Pass in a node (generic element in your html tree)
        // innerText means the text that is rendered on the page, text content gets the tags also... gets whatever is inside the desired HTML tag

        function countWords(node) {
            const text = node.innerText || node.textContent;
            return text.trim().split(/\s+/g).filter(a => a.trim().length > 0).length;
        }

        const count = `Words: ${countWords(wcParent)}`;

        //Create a shadow root, creating its own new tree somewhat. Component creates its own little context
        const shadow = this.attachShadow({mode: 'open'});

        // Create a text node and add word count to it
        const text = document.createElement('span');
        text.textContent = count;

        // Append it to the shadow root
        shadow.appendChild(text);

        //Update Count when element content changes
        setInterval(function() {
            const count = `Words: ${countWords(wcParent)}`;
            text.textContent = count;

        });

    }
}