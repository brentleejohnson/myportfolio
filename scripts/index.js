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

// PROJECT CARDS
let projects = [
  {
    img: "./images/contactform.png",
    imgAlt: "Contact Form",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description: "A glassmorphic contact form using HTML/CSS",
    liveLink: "https://brentleecontactform.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/glassmorphic-contact-form",
  },
  {
    img: "./images/mytimeline.png",
    imgAlt: "My Timeline",
    title: "My Timeline",
    techStack: "HTML/CSS",
    description: "My timeline using HTML/CSS with AOS",
    liveLink: "https://brentleetimeline.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/glassmorphic-timeline",
  },
  {
    img: "./images/sneakerstore.png",
    imgAlt: "Sneaker Store",
    title: "Sneaker Store",
    techStack: "HTML/CSS",
    description:
      "A sneaker store webpage built using HTML/CSS (JS was included in the boilerplate)",
    liveLink: "https://brentleesneakerstore.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/sneaker_store",
  },
  {
    img: "./images/adding2numbers.png",
    imgAlt: "Adding 2 Numbers",
    title: "Adding 2 Numbers",
    techStack: "Python",
    description: "A basic calculator using Python(Tkinter)",
    liveLink:
      "https://replit.com/@yourstepbro1/tkinteradd2numbers#tkinter_add_2_numbers.py",
    githubLink: "https://github.com/brentleejohnson/tkinter_add_2_numbers",
  },
  {
    img: "./images/BMIcalculator.png",
    imgAlt: "BMI Calculator",
    title: "BMI Calculator",
    techStack: "Python",
    description: "A BMI calculator built using Python(Tkinter)",
    liveLink: "https://replit.com/@yourstepbro1/tkinter-BMI-calculator#main.py",
    githubLink: "https://github.com/brentleejohnson/tkinter-BMI-calculator",
  },
];

function createCard(card) {
  let madeCard = `
  <div class="proj-cards" techStack=${card.techStack}>
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

// Filtering the project cards
function filterCards(category) {
  let cards = document.getElementsByClassName("proj-cards");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
