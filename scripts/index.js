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

// ABOUT ME - AUTO AGE
function autoAge() {
  let now = new Date();
  let birth = new Date("2002-02-28");
  let difference = now - birth;
  // Dates are set from 1970, so remove that to get the year
  let age = new Date(difference).getFullYear() - 1970;
  // Age is 20
  document.getElementById("myAge").innerHTML = age;
}
autoAge();

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
    img: "./images/mytimeline.png",
    imgAlt: "My Timeline",
    title: "My Timeline",
    techStack: "HTML/CSS",
    description: "My timeline using HTML/CSS with AOS",
    liveLink: "https://brentleetimeline.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/glassmorphic-timeline",
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
  {
    img: "./images/testimonial-slides.png",
    imgAlt: "Testimonial Slides",
    title: "Testimonial Slides",
    techStack: "HTML/CSS",
    description: "A simple set of testimonial slides using HTML/CSS",
    liveLink: "https://brentleetestimonials.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/testimonial-slides",
  },
  {
    img: "./images/project-cards.png",
    imgAlt: "Project Cards",
    title: "Project Cards",
    techStack: "HTML/CSS",
    description: "Project cards using HTML/CSS",
    liveLink: "https://brentleeprojectcards.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/project-cards",
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
    img: "./images/temperature-converter.png",
    imgAlt: "Temperature Converter",
    title: "Temperature Converter",
    techStack: "Python",
    description: "A temperature converter using Python(Tkinter)",
    liveLink:
      "https://replit.com/@brentleejohnson/tkinter-temperature-converter#.replit",
    githubLink:
      "https://github.com/brentleejohnson/tkinter-temperature-converter",
  },
  {
    img: "./images/calculatorJS.png",
    imgAlt: "CalculatorJS",
    title: "CalculatorJS",
    techStack: "JavaScript",
    description: "A simple calculator using JavaScript",
    liveLink: "https://brentleecalculatorjs.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/calculatorJS",
  },
  {
    img: "./images/chuck-norris.png",
    imgAlt: "Chuck Norris",
    title: "Chuck Norris",
    techStack: "Python",
    description: "Chuck Norris jokes using an API",
    liveLink:
      "https://replit.com/@brentleejohnson/python-api-chucknorrisjoke-requests#.replit",
    githubLink:
      "https://github.com/brentleejohnson/python-api-chucknorrisjoke-requests",
  },
  {
    img: "./images/currency-converter.png",
    imgAlt: "Currency Converter",
    title: "Currency Converter",
    techStack: "Python",
    description: "A currency converter using an API",
    liveLink:
      "https://replit.com/@brentleejohnson/python-currency-converter#.replit",
    githubLink: "https://github.com/brentleejohnson/python-currency-converter",
  },
  {
    img: "./images/python-lotto-EOMP.png",
    imgAlt: "Lotto Game",
    title: "Lotto Game",
    techStack: "Python",
    description: "A lotto game made with Python(Tkinter)",
    liveLink: "https://replit.com/@brentleejohnson/python-lotto-EOMP#.replit",
    githubLink: "https://github.com/brentleejohnson/python-lotto-EOMP",
  },
  {
    img: "./images/pokedex.png",
    imgAlt: "Pokedex",
    title: "Pokedex",
    techStack: "JavaScript",
    description: "A Pokemon deck fetching an API with JavaScript",
    liveLink: "https://brentleepokedex.netlify.app/",
    githubLink: "https://github.com/brentleejohnson/js-pokedex-api",
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

// Active class for Filter Buttons
let activeButtons = document.querySelectorAll(".active-buttons");

for (let i = 0; i < activeButtons.length; i++) {
  activeButtons[i].addEventListener("click", change);
}

function change(e) {
  for (let i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove("active");
  }
  e.currentTarget.classList.add("active");
}
