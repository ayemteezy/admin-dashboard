export class TCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");

    this.innerHTML = /*html*/ `
      <div class="card card-project">
        <div class="card-body">
          ${
            title
              ? `
                     <h4 class="card-header">${title}</h4>
                     <p class="card-text">${this.innerText}</p>
                   `
              : ""
          }
        </div>
        <div class="card-btn">
          <ul>
            <li><img src="images/icons/star.svg" alt="" /></li>
            <li><img src="images/icons/eye.svg" alt="" /></li>
            <li><img src="images/icons/fork.svg" alt="" /></li>
          </ul>
        </div>
      </div>
    `;
  }
}
customElements.define("t-card", TCard);
