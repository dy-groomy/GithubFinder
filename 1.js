class GitHubFinder {
  constructor() {
      this.apiUrl = "https://api.github.com/users/";
      this.profileElement = document.getElementById("profile");
      this.reposElement = document.getElementById("repos");
  }

  async findUser(username) {
      const profileResponse = await fetch(`${this.apiUrl}${username}`);
      const reposResponse = await fetch(`${this.apiUrl}${username}/repos`);

      const profile = await profileResponse.json();
      const repos = await reposResponse.json();

      return {
          profile,
          repos
      };
  }

  showProfile(data) {
      this.profileElement.innerHTML = `
          <h2>${data.profile.login}</h2>
          <img src="${data.profile.avatar_url}" alt="avatar" width="100">
          <p>${data.profile.bio || ""}</p>
      `;
  }

  showRepos(data) {
      let output = "<h2>Recent Repositories</h2>";
      data.repos.slice(0, 5).forEach(repo => {
          output += `<p>${repo.name}</p>`;
      });
      this.reposElement.innerHTML = output;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const gitHubFinder = new GitHubFinder();

  document.getElementById("findUser").addEventListener("click", async () => {
      const username = document.getElementById("username").value;

      if (username === "") {
          alert("Please enter a username");
          return;
      }

      const data = await gitHubFinder.findUser(username);

      if (data.profile.message === "Not Found") {
          alert("User not found");
      } else {
          gitHubFinder.showProfile(data);
          gitHubFinder.showRepos(data);
      }
  });
});