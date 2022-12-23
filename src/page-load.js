import logo from "./img/logo.png";
import favicon from "./img/favicon.png";
import tablesImage from "./img/tables.jpg";
import logoContact from "./img/logo_contact.png";

export function renderPage() {
  insertFavIcon();
  const mainContent = document.getElementById("content");
  const content = `
  <section class="section" id="top-area">
        <div class="container">
          <figure class="image is-96x96">
            <img id="logo" src="${logo}" alt="" />
          </figure>
          <div class="tabs is-right is-boxed is-uppercase" id="tabs-area">
            <ul class="has-text-weight-bold">
              <li data-tab="1" class="is-active"><a>Restaurant</a></li>
              <li data-tab="2"><a>Menu</a></li>
              <li data-tab="3"><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section" id="main-content">
        <div data-content="1" class="tab is-active">
          <div class="columns is-vcentered is-cenered">
            <div class="column is-half">
              <figure class="image">
                <img class="is-rounded" src=${tablesImage} />
              </figure>
            </div>
            <div
              class="column is-half has-text-white is-size-4 has-text-shadow"
            >
              Welcome to JJ Pizzeria, a small family-owned restaurant located in
              the heart of Chicago. At JJ Pizzeria, we pride ourselves on
              offering authentic Italian cuisine made with the freshest
              ingredients. Our menu features a variety of pizzas, pastas, and
              other dishes, all prepared with care by our skilled chefs. We are
              committed to providing our customers with a warm and welcoming
              atmosphere, and we hope to see you soon at JJ Pizzeria.
            </div>
          </div>
        </div>
        <div data-content="2" class="tab" id="tab2"></div>
        <div data-content="3" class="tab">
          <div class="container is-size-5 has-text-shadow" id="contact-tab">
            <figure class="image">
              <img
                class="is-rounded"
                src="${logoContact}"
                id="logo-contact"
              />
            </figure>
            <p>
              Thank you for visiting our website. If you have any questions or
              would like to place an order, please don't hesitate to contact us.
            </p>
            <div>
              Our pizzeria is located at:
              <address>
                56 W ILLINOIS ST <br />
                CHICAGO, IL 60654
              </address>
            </div>
            <p>
              You can reach us by phone at 1-224-649-6443 or by email at
              hello@jj-pizzeria.com. We look forward to serving you delicious
              pizza and providing an enjoyable dining experience.
            </p>
            <span class="is-size-6" id="credits-design">
              Logo and design by
              <a href="https://www.dianagraf.de" target="_blank">dianagraf.de</a>
            </span>
          </div>
        </div>
      </section>
      <div class="my-footer">
        <span>
          Created by
          <a href="https://github.com/hrkovachev" target="_blank">hrkovachev</a>
        </span>
      </div>
    `;
  mainContent.innerHTML += content;
}

function insertFavIcon() {
  const link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = favicon;
}

export function initTabs() {
  const TABS = [...document.querySelectorAll(".tabs li")];
  const CONTENT = [...document.querySelectorAll("#main-content div")];
  const ACTIVE_CLASS = "is-active";
  TABS.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      let selected = tab.dataset.tab;
      updateActiveTab(tab);
      updateActiveContent(selected);
    });
  });
  function updateActiveTab(selected) {
    TABS.forEach((tab) => {
      if (tab && tab.classList.contains(ACTIVE_CLASS)) {
        tab.classList.remove(ACTIVE_CLASS);
      }
    });
    selected.classList.add(ACTIVE_CLASS);
  }

  function updateActiveContent(selected) {
    CONTENT.forEach((item) => {
      if (item && item.classList.contains(ACTIVE_CLASS)) {
        item.classList.remove(ACTIVE_CLASS);
      }
      let data = item.dataset.content;
      if (data === selected) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
  }
}

export function renderMenu(menu) {
  let menuHolder = document.getElementById("tab2");
  menuHolder.innerHTML = "";
  let content = "";
  for (const category in menu) {
    content = `
        <article class="panel">
        <p class="panel-heading is-uppercase has-text-shadow">${category}</p>
      `;
    for (const item in menu[category]) {
      content += `
        <span class="panel-block is-block">
          <span class="is-capitalized"> ${item} </span>
          <span class="is-pulled-right">$${menu[category][item]}</span>
        </span>
        `;
    }
    content += "</article>";
    menuHolder.innerHTML += content;
  }
}
