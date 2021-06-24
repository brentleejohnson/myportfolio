console.log("Applying JS to HTML/CSS");

//  Theme
function toggleTheme() {
  document.getElementsByClassName("theme")[0].classList.toggle("activate");
}

function showTab(tabName) {
  //   Remove active from all content classes
  let tabs = document.getElementsByClassName("content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  //   add active to specified Element
  let selectedTab = document.getElementById(tabName);
  selectedTab.classList.add("active");
}

// Filter buttons for PROJECT CARDS
let projects = [
  {
    img: "./images/contactform.png",
    imgAlt: "Contact Form",
    title: "Contact Form",
    description: "A glassmorphic contact form using HTML/CSS",
    liveLink: "#",
    githubLink: "#",
  },
];

function createCard(card) {
  let madeCard = `
  <div class="proj-cards">
    <!-- IMAGEs -->
    <img src="${card.img}" alt="${card.imgAlt}" />
    <!-- INFO -->
    <div class="proj-card-info">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <!-- BUTTONS -->
      <div class="proj-buttons">
        <button class="proj-button">
          <a
            href="${card.liveLink}"
            target="_blank"
            ><i class="fas fa-globe"></i
          ></a>
        </button>
        <button class="proj-button">
          <a
            href="${card.githubLink}"
            target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </button>
      </div>
    </div>
  </div>
  `;
  return madeCard;
}

function addingCards() {
  let projectsContainer = document.querySelector(".proj-details");
  for (project of projects) {
    let card = createCard(project);
    projectsContainer.innerHTML += card;
  }
}

addingCards();
