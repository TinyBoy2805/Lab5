const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navTabs = $$(".nav-tab");

const section_contents = $(".section-content");

const imgs = [
  "https://i.pinimg.com/564x/db/87/26/db87262538a720c78db0eff3253b4f28.jpg",
  "https://i.pinimg.com/564x/e4/96/57/e496570760a703070748d458ae22b879.jpg",
  "https://i.pinimg.com/564x/12/05/60/1205608aaedec83974f40be42bc312be.jpg",
  "https://i.pinimg.com/564x/2c/bf/db/2cbfdbea871656c4c798e856afd0884a.jpg",
  "https://i.pinimg.com/736x/04/46/2b/04462ba5938d4bfa66210fc9b5dd9491.jpg",
  "https://i.pinimg.com/736x/e1/06/82/e106829bd473eb49707af2e46fa416f3.jpg",
  "https://i.pinimg.com/564x/f4/b5/af/f4b5af3da6f9e4b90bb11d0afcf0470d.jpg",
  "https://i.pinimg.com/564x/d1/ed/60/d1ed607602fa36a4f40873cd3d2bbf5d.jpg",
  "https://i.pinimg.com/564x/27/d1/8b/27d18b690462568a72ed4aeeeeadae64.jpg",
  "https://i.pinimg.com/564x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg",
];

const certificates = [
  {
    name: "Microsoft Certified Solutions Expert (MCSE)",
    company: "Microsoft",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    company: "Amazon Web Services",
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    company: "(ISC)²",
  },
  {
    name: "Google Professional Cloud Architect",
    company: "Google Cloud",
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    company: "Cisco",
  },
  {
    name: "Project Management Professional (PMP)",
    company: "Project Management Institute",
  },
  {
    name: "Microsoft Certified Solutions Expert: Core Infrastructure",
    company: "Microsoft Corporation",
  },
  {
    name: "Adobe Certified Expert (ACE) in Photoshop",
    company: "Adobe",
  },
  {
    name: "AWS Certified DevOps Engineer – Professional Level",
    company: "Amazon Web Services (AWS)",
  },
  {
    name: "Oracle Certified Asociate, Java SE 8 Programer",
    company: "Oracle",
  },
];

const trainings = [
  {
    title: "FPT_Corporate Social Responsibility Training 2024",
    company: "FSOFT Content Development",
  },
  {
    title: "FPT_Technology Innovation Workshop 2024",
    company: "FPT Software",
  },
  {
    title: "FPT_Leadership Development Program 2024",
    company: "FPT Corporation",
  },
  {
    title: "FPT_Digital Transformation Strategies 2024",
    company: "FPT Information System",
  },
  {
    title: "FPT_Agile Methodology Training 2024",
    company: "FPT Software",
  },
  {
    title: "FPT_Project Management Best Practices 2024",
    company: "FPT University",
  },
  {
    title: "FPT_Customer Experience Enhancement Training 2024",
    company: "FPT Telecom",
  },
  {
    title: "FPT_Software Quality Assurance Training 2024",
    company: "FPT Software",
  },
  {
    title: "FPT_Data Analytics Fundamentals 2024",
    company: "FPT Corporation",
  },
  {
    title: "FPT_Cybersecurity Awareness Training 2024",
    company: "FPT Security",
  },
];

const renderCertifications = () => {
  const badge = document.createElement("div");

  badge.innerHTML = `
        <div class="my-badge">
                    <h3>My badges</h3>
                    <div class="big-container">
                        <div class="badge-info">
                            <span>You have earned and uploaded <span style="font-weight: bold;">0 badges </span><i class='bx bx-info-circle'></i></span>
                            <p>Currently, there are no badges uploaded to your profile. Begin your journey towards your certification goals or <a href="#" style="color: rgb(162, 49, 255); font-weight: bold;">upload your third-party</a> badges to your profile and impress your manager and peers with your accomplishments.</p>
                            <p>Start preparing for your next certificate today! </p>
                        </div>
                        <button id="import-badge">Import new badge</button>
                    </div>
                </div>
    
                <div class="my-badge2">
                    <h3>Certification preparation</h3>
                    <div class="big-container">
                        <div class="badge-info">
                            <p>You are preparing for <strong>4 certifications <i class='bx bx-info-circle'></i></strong> </p>
                        </div>
                        <button id="import-badge">Explore certification preparation</button>
                    </div>
                </div>
                
                <div class="my-badge3"></div>
    `;

  const myBadge3 = badge.querySelector(".my-badge3");
  myBadge3.replaceChildren();

  const renderBox = (img, name, company) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
                <i class='bx bx-dots-vertical-rounded'></i>
                <div class="img-container">
                    <img src="${img}" alt="">
                </div>
                <div class="box-content">
                    <h3>${name}</h3>
                    <p>${company}</p>
                </div>
            `;

    return box;
  };

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 10; i++) {
    fragment.appendChild(
      renderBox(imgs[i], certificates[i].name, certificates[i].company)
    );
  }
  myBadge3.appendChild(fragment);

  return badge;
};

section_contents.appendChild(renderCertifications());

const renderCard = (img, title, company) => {
  const card_container = document.createElement("div");
  card_container.innerHTML = `
        <div class="card">
            <div class="card-image">
                <img src="${img}" alt="CSR">
                <div class="icon-menu">
                    <i class="bx bx-dots-vertical-rounded"></i>
                </div>
            </div>
            <div class="card-content">
                <h3>${title}</h3>
                <p>${company}</p>
                <div class="progress-bar">
                    <div class="progress" style="width: 100%;"></div>
                </div>
                <p class="completion-text">100% complete</p>
                <div class="rating">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                    <span class="rating-text">Your rating</span>
                </div>
            </div>
        </div>
    `;
  return card_container;
};

const renderTools = () => {
  const tool = document.createElement("div");

  tool.innerHTML = `
        <div class="title-container">
                    <h2>Learning tools</h2>
                    <p>Explore a diverse range of courses and take advantage of these versatile tools to gain knowledge, skills, and confidence at your own pace.</p>
                </div>
                <div class="big-tool">
                    <div class="box-tool">
                        <div class="img-container">
                            <img src="https://i.pinimg.com/564x/db/87/26/db87262538a720c78db0eff3253b4f28.jpg" alt="">
                        </div>
                        <div class="box-content">
                            <h3>Learning reminders</h3>
                            <p id="p1">Set time aside to learn and get reminders using scheduler.</p>
                            <p id="p2">Your currently have no ongoing reminders</p>
                            <a href="#">See more</a>
                        </div>
                    </div>
    
                    <div class="box-tool">
                        <div class="img-container">
                            <img src="https://i.pinimg.com/736x/04/46/2b/04462ba5938d4bfa66210fc9b5dd9491.jpg" alt="">
                        </div>
                        <div class="box-content">
                            <div class="title"><h3>Reflections</h3><span>Beta</span></div>
                            <p id="p1">Take time to reflect to strengthen your learning.</p>
                            <p id="p2">You have currently no recorded reflections on your learning journey</p>
                        </div>
                    </div>
                </div>
    `;
  return tool;
};

navTabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    $(".nav-tab.active").classList.remove("active");
    this.classList.add("active");

    if (index === 0 || index === 1) section_contents.replaceChildren();

    if (index === 2) {
      section_contents.replaceChildren();
      section_contents.appendChild(renderCertifications());
    }

    if (index === 3) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 20; i++) {
        fragment.appendChild(
          renderCard(
            imgs[Math.floor(Math.random() * imgs.length)],
            trainings[Math.floor(Math.random() * trainings.length)].title,
            trainings[Math.floor(Math.random() * trainings.length)].company
          )
        );
      }
      section_contents.replaceChildren();
      section_contents.appendChild(fragment);
    }

    if (index === 4) {
      section_contents.replaceChildren();
      section_contents.appendChild(renderTools());
    }
  });
});
