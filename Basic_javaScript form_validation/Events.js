// Everything a Unser does on a dom page or website is called an Event.

const ninInputField = document.getElementById("nin");
const selectedCandidate = document.getElementById("candidate");
const subForm = document.getElementById("sub");
const voteCounts = document.getElementById("votecount");

// const votersNin = [];

// const assa = [votersNin, []];

const voter = {
  name: "Joseph Olatilo",
  age: 30,
  height: 182,
  nin: 2211095790,
  castVote: false,
};

const voter1 = {
  name: "Paul Viky",
  age: 28,
  height: 172,
  nin: 2233409091,
  castVote: false,
};

const voter2 = {
  name: "Timmy Jons",
  age: 40,
  height: 180,
  nin: 2235111292,
  castVote: false,
};
const voter3 = {
  name: "Wale Olatilo",
  age: 28,
  height: 172,
  nin: 2230007793,
  castVote: false,
};

const voters = [voter, voter1, voter2, voter3];

const candidate1 = {
  name: "Joseph Ben",
  id: 1,
  votes: 0,
};
const candidate2 = {
  name: "Amaka kechi",
  id: 2,
  votes: 0,
};
const candidates = [candidate1, candidate2];

function updateVoteCount() {
  voteCounts.innerHTML = "";

  candidates.forEach((data) => {
    voteCounts.innerHTML += `
                <div id=${data.id}>
                <p>${data.name}</p>
                <p>${data.votes}</p>
            </div>`;
  });
}
updateVoteCount();

subForm.addEventListener("click", function (e) {
  e.preventDefault();
  const nin = ninInputField.value;
  const candidateId = selectedCandidate.value;
  console.log(nin, candidateId);

  for (let i = 0; i < voters.length; i++) {
    const data = voters[i];

    console.log(data);
    if (data.nin == nin && data.castVote == false) {
      for (let j = 0; j < candidate1.length; j++) {
        const data = candidates[j];

        if (data.id == candidateId) {
          const newVotes = data.votes + 1;
          data.votes = newVotes;
          break;
        }
      }

      data.castVote = true;
      console.log(voters, candidates);
      updateVoteCount();
      break;
    } else if (i == voters.length - 1) {
      alert("Error casting vote");
    }
  }
});

function tallyVote(nin, candidateId) {
  candidates.forEach((data) => {
    if (data.id == candidateId) {
      const newVotes = data.votes + 1;
      data.votes = newVotes;
      return;
    }
  });
}

// subForm.onclick = (e) => {
//   console.log(e);
// };

// subForm.onmouseover = () => {
//   // alert("Hovering Mouce")
//   subForm.style.backgroundColor = "red";
// };
subForm.onmouseenter = (e) => {
  subForm.classList.toggle("active-btn");
};

subForm.onmouseleave = (e) => {
  subForm.classList.toggle("active-btn");
};
