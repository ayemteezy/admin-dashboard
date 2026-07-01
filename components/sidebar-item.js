export class TSidebarItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "Label";
    const icon = this.getAttribute("icon") || "";
    const alt = this.getAttribute("alt") || "an icon";

    this.innerHTML = /*html*/ `
      <li class="sidebar-item">
        <img class="sidebar-icon" src="${icon}" alt="${alt}" />
        <p class="sidebar-label">${label}</p>
      </li>
    `;
  }
}
customElements.define("t-sidebar-item", TSidebarItem);
