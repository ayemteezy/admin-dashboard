export class TContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const header = this.getAttribute("header") || "Header";

    this.innerHTML = /*html*/ `
      <div class="container">
        <h4 class="container-title">${header}</h1>
        <div class="container-body">
        ${this.innerHTML}
        </div>
      </div>
    `;
  }
}
customElements.define("t-container", TContainer);
