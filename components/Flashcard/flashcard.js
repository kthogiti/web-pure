export class FlashCard extends HTMLElement{
    constructor(){
        super();
        const employeeName = this.getAttribute("name") || "";
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Flashcard/flashcard.css" />
        <div>
        <h1>Happy Birthday </h1>
        <span>${employeeName}!!!</span>
        </div>
        `;
    }
}