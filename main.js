const projectsContainer = document.querySelector(".all-projects");

const clicking = () => {
  const filterBtns = document.querySelectorAll(".filterButton");

  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", (e) => {
      let category = e.currentTarget.dataset.proj;
      let currentPick = projects.filter((proj) => proj.category === category);
      category =
        category === "all" ? putingValue(projects) : putingValue(currentPick);
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  putingValue(projects);
  clicking();
});

const putingValue = (projs) => {
  let inserted = projs.map((proj) => {
    return `
          <div class="project">
            <img
              src="${proj.thumbnail}"
              alt="${proj.gameTitle}"
              class="project-thumbnail"
              draggable="false"
            />
            <div class="project-title">
              <h1>${proj.gameTitle}</h1>
            </div>
            <div class="project-description">
              <p>
                ${proj.gameDescription}
              </p>
            </div>
            <div class="project-direct">
              <a href="${proj.gameUrl}">VISIT</a>
            </div>
          </div>
        `;
  });
  inserted = inserted.join("");
  projectsContainer.innerHTML = inserted;
  console.log(projectsContainer);
};
