console.log("Project on CV Screener");

const data = [
  {
    name: "Yash Jayram Ambekar",
    age: 20,
    city: "Pune",
    language: "CPP",
    framework: "VS Code",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Yash Shinde",
    age: 25,
    city: "Pune",
    language: "Solidty",
    framework: "Blockchain",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Avdesh Vora",
    age: 40,
    city: "Chankan",
    language: "Java",
    framework: "Sublime",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Krishna Kotgire",
    age: 30,
    city: "Nanded",
    language: "cmd",
    framework: "Git",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Aishwarya Rai",
    age: 50,
    city: "Pundhecherry",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

// Creating a CV Iterator

function CV_Profiles(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = CV_Profiles(data);
nextCV();

let next = document.getElementById("next_prof");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `
            <img src="${currentCandidate.image}" class="img-fluid rounded-circle">
        `;

    profile.innerHTML = `
            <h5 class="card-title">${currentCandidate.name}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${currentCandidate.age} years old</li>
            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
            <li class="list-group-item">Primarily Works on ${currentCandidate.language}</li>
            <li class="list-group-item">with ${currentCandidate.language} framework</li>
            </ul>
        `;
  } else {
    alert("All Aplications are over");
    window.location.reload();
  }
}
